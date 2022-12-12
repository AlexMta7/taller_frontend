import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from './Button'
import Modal from 'react-bootstrap/Modal'

const AddClient = ({ handleModal }) => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [address, setAddress] = useState('')
  const [dui, setDui] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  //Add Service
  const addClient = async (client) => {
    // let method
    console.log(client)
    // if (service.id == undefined) {
    //   method = 'POST'
    // } else {
    //   method = 'PUT'
    // }
    const res = await fetch('http://localhost:8080/api/clients', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(client),
    })

    const data = await res.json()
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Add an Employee')
      return
    }

    addClient({ name, lastname, address, dui, email, phone })

    setName('')
    setLastname('')
    setAddress('')
    setDui('')
    setEmail('')
    setPhone('')
    window.location.href = window.location.href
  }

  return (
    <>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          {/* <Form.Group className='mb-3' controlId='exampleForm.ControlID'>
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type='hidden'
                  placeholder='Service Name'
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
              </Form.Group> */}
          <Form.Group className='mb-3' controlId='exampleForm.ControlName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='input'
              placeholder='Employee Name'
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              autoFocus
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlLastname'>
            <Form.Label>lastname</Form.Label>
            <Form.Control
              type='input'
              placeholder='Employee Lastname'
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlAddress'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='input'
              placeholder='Client Address'
              value={address}
              onChange={(e) => {
                setAddress(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlDui'>
            <Form.Label>Dui</Form.Label>
            <Form.Control
              type='input'
              placeholder='Client Dui'
              value={dui}
              onChange={(e) => {
                setDui(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='example@mail.com'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlPhone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type='input'
              placeholder='Client Phone'
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
              }}
            />
          </Form.Group>
          {/* <Form.Group className='mb-3' controlId='exampleForm.ControlCode'>
                <Form.Label>ID</Form.Label>
                <Form.Control
                  type='input'
                  placeholder='Employee Code'
                  value={name + '.' + lastname}
                  onChange={(e) => {
                    setCode(e.target.value)
                  }}
                />
              </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant='secondary' onClick={handleModal}>
                   Close
                 </Button> */}
        <Button
          color={'info'}
          onClick={(handleModal, onSubmit)}
          text={'Add Client'}
          icon={'fa-solid fa-floppy-disk'}
        />
      </Modal.Footer>
    </>
  )
}

export default AddClient
