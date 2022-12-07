import { Link } from 'react-router-dom'
import { Button, Card, Form, ListGroup } from 'react-bootstrap'
import { useState } from 'react'

const AddRecord = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Add a task')
      return
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }
  return (
    <div>
      <Card className='my-3 p-3 rounded py-1'>
        <Card.Body className='pb-1 p-lg-2'>
          <ListGroup variant='flush'>
            <Form className='add-form' onSubmit={onSubmit}>
              <ListGroup.Item className='py-1'>
                <div className='form-group'>
                  <label>Task</label>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value)
                    }}
                  />
                </div>
                <div className='form-group'>
                  <label>Day & Time</label>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => {
                      setDay(e.target.value)
                    }}
                  />
                </div>
                <input
                  type='submit'
                  value='Save Task'
                  className='btn btn-block'
                />
              </ListGroup.Item>
              <Button>Add</Button>
            </Form>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AddRecord
