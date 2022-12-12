// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useLocation } from 'react-router-dom'
import AddService from './AddService'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
import Button from './Button'
import AddRecord from './AddRecord'
import AddEmployee from './AddEmployee'
import AddCar from './AddCar'
import AddClient from './AddClient'
import EditService from './EditService'

const EditModal = ({ showModal, handleModal, title }) => {
  const location = useLocation()

  // const [showModal, setShowModal] = useState(false)

  // const handleClose = () => setShowModal(false)
  // const handleShow = () => setShowModal(true)

  return (
    <>
      {/* <Button variant='primary' onClick={handleModal}>
        Launch demo modal
      </Button> */}

      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {/* Components contains BODY and FOOTER */}
        {location.pathname === '/' && <AddRecord handleModal={handleModal} />}
        {location.pathname === '/clients' && (
          <AddClient handleModal={handleModal} />
        )}
        {location.pathname === '/cars' && <AddCar handleModal={handleModal} />}
        {location.pathname === '/employees' && (
          <AddEmployee handleModal={handleModal} />
        )}
        {location.pathname === '/services' && (
          <EditService handleModal={handleModal} />
        )}
      </Modal>
    </>
  )
}

//Default properties
EditModal.defaultProps = {
  title: 'Title',
  buttonText: 'Button Action',
}

//Default properties types
EditModal.propTypes = {
  showModal: PropTypes.bool,
  handleModal: PropTypes.func,
  title: PropTypes.string,
  buttonText: PropTypes.string,
}

export default EditModal
