import Form from 'react-bootstrap/Form'

const AddService = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlName'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='input' placeholder='Service Name' autoFocus />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlType'>
        <Form.Label>Type</Form.Label>
        <Form.Control type='input' placeholder='Service Type' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlDescription'>
        <Form.Label>Description</Form.Label>
        <Form.Control type='input' placeholder='Service Description' />
      </Form.Group>
    </Form>
  )
}

export default AddService
