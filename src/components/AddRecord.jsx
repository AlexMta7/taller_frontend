import { Link } from 'react-router-dom'
import { Button, Card, Form, ListGroup } from 'react-bootstrap'
import { useState } from 'react'

const AddRecord = ({ onAdd }) => {
  const onSubmit = (e) => {
    e.preventDefault()

    alert('Add a task')

    // onAdd({ text, day, reminder })

    // setText('')
    // setDay('')
    // setReminder(false)
  }
  return (
    <div>
      <Card className='my-3 p-3 rounded py-1'>
        <Card.Body className='pb-1 p-lg-2'>
          <ListGroup variant='flush'>
            <Form className='add-form' onSubmit={onSubmit}>
              <ListGroup.Item className='py-1'>
                <label>Records</label>
                <div className='form-group'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Add Task'
                    // value={text}
                    onChange={(e) => {
                      // setText(e.target.value)
                    }}
                  />
                  <br />
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Add Day & Time'
                    // value={day}
                    onChange={(e) => {
                      // setDay(e.target.value)
                    }}
                  />
                  <br />
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Add Day & Time'
                    // value={day}
                    onChange={(e) => {
                      // setDay(e.target.value)
                    }}
                  />
                </div>
                <br />
                <input
                  type='submit'
                  value='Save Task'
                  className='btn btn-block btn-primary'
                />
              </ListGroup.Item>
            </Form>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AddRecord
