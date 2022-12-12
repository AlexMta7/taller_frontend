import { Nav, Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'

const Navbar = ({ onAdd, showAddRecord, showModal, handleModal }) => {
  const location = useLocation()

  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary sticky-top'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            Tallercito
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
                <Link to='/' className='nav-link '>
                  Records
                  <span className='visually-hidden'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/clients' className='nav-link'>
                  Clients
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/cars' className='nav-link'>
                  Cars
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/employees' className='nav-link'>
                  Employees
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/services' className='nav-link'>
                  Services
                </Link>
              </li>
            </ul>
            {location.pathname === '/' && (
              <Button
                text={!showModal ? 'Add' : 'Close'}
                onClick={handleModal}
                color={!showModal ? 'success' : 'danger'}
              />
            )}
            {location.pathname === '/services' && (
              <Button
                text={!showModal ? 'Add' : 'Close'}
                onClick={handleModal}
                color={!showModal ? 'success' : 'danger'}
                icon={
                  !showModal ? 'fa-solid fa-plus' : 'fa-solid fa-circle-xmark'
                }
              />
            )}

            {location.pathname === '/employees' && (
              <Button
                text={!showModal ? 'Add' : 'Close'}
                onClick={handleModal}
                color={!showModal ? 'success' : 'danger'}
                icon={
                  !showModal ? 'fa-solid fa-plus' : 'fa-solid fa-circle-xmark'
                }
              />
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
