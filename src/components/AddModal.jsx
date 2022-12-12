// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useLocation } from 'react-router-dom'
import AddService from './AddService'
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image'
import Button from './Button'

const AddModal = ({ showModal, handleModal, title }) => {
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
        <Modal.Body>
          {/* Components */}
          {location.pathname === '/services' && <AddService />}
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant='secondary' onClick={handleModal}>
            Close
          </Button> */}
          <Button
            color={'primary'}
            onClick={handleModal}
            text={title}
            icon={'fa-solid fa-floppy-disk'}
          />
        </Modal.Footer>
      </Modal>
    </>
  )
}

//Default properties
AddModal.defaultProps = {
  title: 'Title',
  buttonText: 'Button Action',
}

//Default properties types
AddModal.propTypes = {
  showModal: PropTypes.bool,
  handleModal: PropTypes.func,
  title: PropTypes.string,
  buttonText: PropTypes.string,
}

export default AddModal
