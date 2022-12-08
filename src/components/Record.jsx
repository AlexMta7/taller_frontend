import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroup } from 'react-bootstrap'

const Record = ({ record }) => {
  const [employee, setEmployee] = useState([])
  const [car, setCar] = useState([])
  const [service, setService] = useState([])
  // console.log(employee[0].name)
  // console.log(employee)

  useEffect(() => {
    const getData = async () => {
      //Employee
      const employeeFromDB = await fetchEmployee()
      console.log('Employee')
      console.log(employeeFromDB)
      setEmployee(employeeFromDB)
      //Car
      const carFromDB = await fetchCar()
      console.log('Car')
      console.log(carFromDB)
      setCar(carFromDB)
      //Service
      const serviceFromDB = await fetchService()
      console.log('Service')
      console.log(serviceFromDB)
      setService(serviceFromDB)
    }
    getData()
  }, [])
  // Fetch Employees from DB
  const fetchEmployee = async () => {
    const data = await (
      await fetch('http://localhost:8080/api/employees/' + record.id_employee)
    ).json()
    return data
  }
  // Fetch Employees from DB
  const fetchCar = async () => {
    const data = await (
      await fetch('http://localhost:8080/api/cars/' + record.id_car)
    ).json()
    return data
  }
  // Fetch Employees from DB
  const fetchService = async () => {
    const data = await (
      await fetch('http://localhost:8080/api/services/' + record.id_service)
    ).json()
    return data
  }
  return (
    <div>
      <Card className='my-3 p-3 rounded py-1'>
        <Card.Body className='pb-1 p-lg-2'>
          <ListGroup variant='flush'>
            <ListGroup.Item className='py-1'>
              <Link to={`/employee/${employee.id}`}>
                <Card.Text as='h4' style={{ color: 'black' }}>
                  {record.id_employee + 'Empleado: ' + employee.name}
                  {/* Esta mandando a llamar el precio */}
                </Card.Text>
              </Link>
            </ListGroup.Item>

            <ListGroup.Item className='py-1'>
              <Card.Text as='h4' style={{ color: 'black' }}>
                {record.id_car + 'Car: ' + car.brand + ' - ' + car.model}{' '}
                {/* Esta mandando a llamar el precio */}
              </Card.Text>
            </ListGroup.Item>

            <ListGroup.Item className='py-1'>
              <Card.Text as='h4' style={{ color: 'black' }}>
                {record.id_service + 'Service: ' + service.name}{' '}
                {/* Esta mandando a llamar el precio */}
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
