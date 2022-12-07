import { Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

const Navbar = ({ onAdd, showAddRecord }) => {
  const location = useLocation()

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Navbar
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor01'
            aria-controls='navbarColor01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarColor01'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active'>
                  Records
                  <span className='visually-hidden'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Clients
                </a>
              </li>
              <li className='nav-item'>
                <Link to='/employees' className='nav-link'>
                  Employees
                </Link>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Services
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Dropdown
                </a>
                <div className='dropdown-menu'>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                  <div className='dropdown-divider'></div>
                  <a className='dropdown-item' href='#'>
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
            {location.pathname === '/' && (
              <Button text={!showAddRecord ? 'Add' : 'Close'} onClick={onAdd} />
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
