import AddModal from '../components/AddModal'
import Services from '../components/Services'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const ServiceScreen = ({ services, showModal, handleModal }) => {
  console.log(showModal)
  console.log(handleModal)

  return (
    <>
      <Services services={services} />
      {/* {showModal && (
        <AddModal showModal={showModal} handleModal={handleModal} />
      )} */}
      {/* <AddModal showModal={showModal} handleModal={handleModal} /> */}
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='name@example.com'
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as='textarea' rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ServiceScreen
