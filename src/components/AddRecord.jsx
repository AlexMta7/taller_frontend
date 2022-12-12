import { Link } from 'react-router-dom'
import { Card, Form, ListGroup } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import Button from './Button'

const AddRecord = ({ handleModal }) => {
  //   const [cod_employ, setCode] = useState('')
  const [id_employee, setId_employee] = useState('')
  const [id_car, setId_car] = useState('')
  const [id_service, setId_service] = useState('')
  const [date, setDate] = useState('')
  const [note, setNote] = useState('')
  const [status, setStatus] = useState('')

  //Add Record
  const addRecord = async (record) => {
    // let method
    console.log(record)
    // if (service.id == undefined) {
    //   method = 'POST'
    // } else {
    //   method = 'PUT'
    // }
    const res = await fetch('http://localhost:8080/api/records', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(record),
    })

    const data = await res.json()
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!id_employee) {
      alert('Add a Record')
      return
    }

    addRecord({ id_employee, id_car, id_service, date, note, status })

    setId_employee('')
    setId_car('')
    setId_service('')
    setDate('')
    setNote('')
    setStatus('')
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
          <Form.Group
            className='mb-3'
            controlId='exampleForm.ControlId_employee'
          >
            <Form.Label>Employee ID</Form.Label>
            <Form.Control
              type='input'
              placeholder='Employee ID'
              value={id_employee}
              onChange={(e) => {
                setId_employee(e.target.value)
              }}
              autoFocus
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlId_car'>
            <Form.Label>Car ID</Form.Label>
            <Form.Control
              type='input'
              placeholder='Car ID'
              value={id_car}
              onChange={(e) => {
                setId_car(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group
            className='mb-3'
            controlId='exampleForm.ControlId_service'
          >
            <Form.Label>Service ID</Form.Label>
            <Form.Control
              type='input'
              placeholder='Service ID'
              value={id_service}
              onChange={(e) => {
                setId_service(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlStatus'>
            <Form.Label>Status</Form.Label>
            <Form.Control
              type='input'
              placeholder='Status'
              value={status}
              onChange={(e) => {
                setStatus(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlNote'>
            <Form.Label>Note</Form.Label>
            <Form.Control
              type='input'
              placeholder='Note'
              value={note}
              onChange={(e) => {
                setNote(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlDate'>
            <Form.Label>date</Form.Label>
            <Form.Control
              type='date'
              placeholder='D/MM/AAA'
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
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
          text={'Add Record'}
          icon={'fa-solid fa-floppy-disk'}
        />
      </Modal.Footer>
    </>
  )
}

export default AddRecord
