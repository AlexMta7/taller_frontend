import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from './Button'
import Modal from 'react-bootstrap/Modal'

const AddService = ({ handleModal }) => {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')

  //Add Service
  const addService = async (service) => {
    // let method
    // console.log(service.id)
    // if (service.id == undefined) {
    //   method = 'POST'
    // } else {
    //   method = 'PUT'
    // }
    const res = await fetch('http://localhost:8080/api/services', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(service),
    })

    const data = await res.json()

    //creates the entire array
    // setRecords([...records, record])
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Add a task')
      return
    }

    addService({ name, type, description })

    setName('')
    setType('')
    setDescription('')
    // window.location.href = window.location.href
  }
  return (
    <>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className='mb-3' controlId='exampleForm.ControlID'>
            {/* <Form.Label>ID</Form.Label> */}
            <Form.Control
              type='hidden'
              placeholder='Service Name'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              autoFocus
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='input'
              placeholder='Service Name'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              autoFocus
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlType'>
            <Form.Label>Type</Form.Label>
            <Form.Control
              type='input'
              placeholder='Service Type'
              value={type}
              onChange={(e) => {
                setType(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group
            className='mb-3'
            controlId='exampleForm.ControlDescription'
          >
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='input'
              placeholder='Service Description'
              value={description}
              onChange={(e) => {
                setDescription(e.target.value)
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant='secondary' onClick={handleModal}>
               Close
             </Button> */}
        <Button
          color={'info'}
          onClick={(handleModal, onSubmit)}
          text={'Add Service'}
          icon={'fa-solid fa-floppy-disk'}
        />
      </Modal.Footer>
    </>
  )
}

export default AddService
