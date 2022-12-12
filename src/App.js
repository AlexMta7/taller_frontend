import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Button from './components/Button'
import Navbar from './components/Navbar'
import 'bootswatch/dist/lux/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Table from './components/Table'

//Components
import Employees from './components/Employees'
import Records from './components/Records'
//Screens
import RecordScreen from './screens/RecordsScreen'
import EmployeesScreen from './screens/EmployeesScreen'
import { Col, Container } from 'react-bootstrap'
import AddRecord from './components/AddRecord'
import ClientsScreen from './screens/ClientsScreen'
import Employee from './components/Employee'
import ServiceScreen from './screens/ServiceScreen'
import CarsScreen from './screens/CarsScreen'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // ============================MODAL=================================
  const [showModal, setShowModal] = useState(false)

  // const handleClose = () => setShowModal(false)
  // const handleModal = () => setShowModal(!showModal)
  // ============================MODAL=================================

  // ============================RECORDS=================================
  const [showAddRecord, setShowAddRecord] = useState(false)
  const [records, setRecords] = useState([])

  useEffect(() => {
    const getRecords = async () => {
      const recordsFromDB = await fetchRecords()
      console.log('Records')
      console.log(recordsFromDB)

      setRecords(recordsFromDB)
    }
    getRecords()
  }, [])

  // Fetch Records from DB
  const fetchRecords = async () => {
    const data = await (await fetch('http://localhost:8080/api/records')).json()
    return data
  }

  //Add Record
  const addRecord = async (record) => {
    const res = await fetch('http://localhost:8080/api/records', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(record),
    })

    const data = await res.json()

    //creates the entire array
    setRecords([...records, record])
  }

  // ============================RECORDS=================================

  //------------------------------------------------------------------------

  // ============================EMPLOYESS=================================

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const getEmployees = async () => {
      const employeesFromDB = await fetchEmployees()
      console.log('Employees')
      console.log(employeesFromDB)

      setEmployees(employeesFromDB)
    }
    getEmployees()
  }, [])

  // Fetch Employees from DB
  const fetchEmployees = async () => {
    const data = await (
      await fetch('http://localhost:8080/api/employees')
    ).json()
    return data
  }

  //Add Employee
  const addEmployee = async (employee) => {
    const res = await fetch('http://localhost:8080/api/employees', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(employee),
    })

    const data = await res.json()

    //creates the entire array
    // setRecords([...records, record])
  }

  // ============================EMPLOYESS=================================

  //------------------------------------------------------------------------

  // ============================CLIENTS=================================

  const [clients, setClients] = useState([])

  useEffect(() => {
    const getClients = async () => {
      const clientsFromDB = await fetchClients()
      console.log('Clients')
      console.log(clientsFromDB)

      setClients(clientsFromDB)
    }
    getClients()
  }, [])

  // Fetch Employees from DB
  const fetchClients = async () => {
    const data = await (await fetch('http://localhost:8080/api/clients')).json()
    return data
  }

  // ============================CLIENTS=================================

  //------------------------------------------------------------------------

  // ============================SERVICES=================================

  const [services, setServices] = useState([])

  useEffect(() => {
    const getServices = async () => {
      const servicesFromDB = await fetchServices()
      console.log('Services')
      console.log(servicesFromDB)

      setServices(servicesFromDB)
    }
    getServices()
  }, [])

  // Fetch Employees from DB
  const fetchServices = async () => {
    const data = await (
      await fetch('http://localhost:8080/api/services')
    ).json()
    return data
  }

  // ============================SERVICES=================================

  //------------------------------------------------------------------------

  // ============================CARS=================================

  const [cars, setCars] = useState([])

  useEffect(() => {
    const getCars = async () => {
      const carsFromDB = await fetchCars()
      console.log('Cars')
      console.log(carsFromDB)

      setCars(carsFromDB)
    }
    getCars()
  }, [])

  // Fetch Cars from DB
  const fetchCars = async () => {
    const data = await (await fetch('http://localhost:8080/api/cars')).json()
    return data
  }

  // ============================CARS=================================

  return (
    <Router>
      <div className='App'>
        <Navbar
          onAdd={() => setShowAddRecord(!showAddRecord)}
          showAddRecord={showAddRecord}
          showModal={showModal}
          handleModal={() => setShowModal(!showModal)}
        />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route
                path='/'
                element={
                  <>
                    {records.length > 0 ? (
                      <RecordScreen
                        records={records}
                        employees={employees}
                        cars={cars}
                        clients={clients}
                        showAddRecord={showAddRecord}
                      />
                    ) : (
                      <Col sm={12} md={6} lg={4} xl={3}>
                        <AddRecord onAdd={addRecord} />
                      </Col>
                    )}
                  </>
                }
              />
              <Route
                path='/clients'
                element={
                  <ClientsScreen
                    clients={clients}
                    showModal={showModal}
                    handleModal={() => setShowModal(!showModal)}
                  />
                }
              />
              <Route
                path='/cars'
                element={
                  <CarsScreen
                    cars={cars}
                    showModal={showModal}
                    handleModal={() => setShowModal(!showModal)}
                  />
                }
              />
              <Route
                path='/employees'
                element={
                  <EmployeesScreen
                    employees={employees}
                    showModal={showModal}
                    handleModal={() => setShowModal(!showModal)}
                  />
                }
              />
              <Route
                path='/services'
                element={
                  <ServiceScreen
                    services={services}
                    showModal={showModal}
                    handleModal={() => setShowModal(!showModal)}
                  />
                }
              />
              {/* <Route
                path='/employee/:id'
                element={<Employees employees={employees} />}
              /> */}
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  )
}

export default App
