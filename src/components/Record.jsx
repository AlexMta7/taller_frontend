import { Link } from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'

const Record = ({ record, employee, car, service }) => {
  return (
    <div>
      <Card className='my-3 p-3 rounded py-1'>
        <Card.Body className='pb-1 p-lg-2'>
          <ListGroup variant='flush'>
            <ListGroup.Item className='py-1'>
              <Link to={`/record/${record.id}`}>
                <Card.Text as='h4' style={{ color: 'black' }}>
                  {record.id_employee} {/* Esta mandando a llamar el precio */}
                </Card.Text>
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className='py-1'>
              <Card.Text as='h4' style={{ color: 'black' }}>
                {record.id_car} {/* Esta mandando a llamar el precio */}
              </Card.Text>
            </ListGroup.Item>

            <ListGroup.Item className='py-1'>
              <Card.Text as='h4' style={{ color: 'black' }}>
                {record.id_service} {/* Esta mandando a llamar el precio */}
              </Card.Text>
            </ListGroup.Item>

            <ListGroup.Item className='py-1'>
              <Card.Text as='h5' style={{ color: 'black' }}>
                {record.status}
              </Card.Text>
            </ListGroup.Item>

            <ListGroup.Item className='py-1'>
              <Card.Text as='h5' style={{ color: 'black' }}>
                {record.note} {/* Esta mandando a llamar el precio */}
              </Card.Text>
            </ListGroup.Item>

            <ListGroup.Item className='py-1'>
              <Card.Text as='h5' style={{ color: 'black' }}>
                {record.date}
              </Card.Text>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Record
