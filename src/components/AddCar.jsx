import Form from 'react-bootstrap/Form'
import { useState } from 'react'
import Button from './Button'
import Modal from 'react-bootstrap/Modal'

const AddCar = ({ handleModal }) => {
  const [brand, setBrand] = useState('')
  const [color, setColor] = useState('')
  const [id_client, setId_client] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')

  //Add Service
  const addCar = async (car) => {
    // let method
    console.log(car)
    // if (service.id == undefined) {
    //   method = 'POST'
    // } else {
    //   method = 'PUT'
    // }
    const res = await fetch('http://localhost:8080/api/cars', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(car),
    })

    const data = await res.json()
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (!brand) {
      alert('Add an Employee')
      return
    }

    addCar({ brand, color, id_client, model, year })

    setBrand('')
    setColor('')
    setId_client('')
    setModel('')
    setYear('')
    // setBrand('')
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
          <Form.Group className='mb-3' controlId='exampleForm.ControlBrand'>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              type='input'
              placeholder='Car Brand'
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value)
              }}
              autoFocus
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlColor'>
            <Form.Label>Color</Form.Label>
            <Form.Control
              type='input'
              placeholder='Car Color'
              value={color}
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlIdClient'>
            <Form.Label>Client ID</Form.Label>
            <Form.Control
              type='input'
              placeholder='Client ID'
              value={id_client}
              onChange={(e) => {
                setId_client(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlModel'>
            <Form.Label>Model</Form.Label>
            <Form.Control
              type='input'
              placeholder='Car Model'
              value={model}
              onChange={(e) => {
                setModel(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlYear'>
            <Form.Label>Year</Form.Label>
            <Form.Control
              type='input'
              placeholder='Car Year'
              value={year}
              onChange={(e) => {
                setYear(e.target.value)
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
          text={'Add Car'}
          icon={'fa-solid fa-floppy-disk'}
        />
      </Modal.Footer>
    </>
  )
}

export default AddCar
