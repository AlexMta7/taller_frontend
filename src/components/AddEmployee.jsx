import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from './Button'
import Modal from 'react-bootstrap/Modal'

const AddEmployee = ({ handleModal }) => {
  //   const [cod_employ, setCode] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [type, setType] = useState('')
  const [dui, setDui] = useState('')
  const [email, setEmail] = useState('')

  //Add Service
  const addEmployee = async (employee) => {
    // let method
    console.log(employee.cod_employ)
    // if (service.id == undefined) {
    //   method = 'POST'
    // } else {
    //   method = 'PUT'
    // }
    const res = await fetch('http://localhost:8080/api/employees', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(employee),
    })

    const data = await res.json()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let cod_employ = name + '.' + lastname

    if (!name) {
      alert('Add an Employee')
      return
    }

    addEmployee({ cod_employ, name, lastname, type, dui, email })

    setName('')
    setLastname('')
    setType('')
    setDui('')
    setEmail('')
    // setCode('')
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
          <Form.Group className='mb-3' controlId='exampleForm.ControlType'>
            <Form.Label>Type</Form.Label>
            <Form.Control
              type='input'
              placeholder='Employee Type'
              value={type}
              onChange={(e) => {
                setType(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlDui'>
            <Form.Label>Dui</Form.Label>
            <Form.Control
              type='input'
              placeholder='Employee Dui'
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
          text={'Add Employee'}
          icon={'fa-solid fa-floppy-disk'}
        />
      </Modal.Footer>
    </>
  )
}

export default AddEmployee
