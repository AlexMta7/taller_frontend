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
import { Container } from 'react-bootstrap'
import AddRecord from './components/AddRecord'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // ============================RECORDS=================================
  const [showAddRecord, setShowAddRecord] = useState(false)
  const [records, setRecords] = useState([])

  useEffect(() => {
    const getRecords = async () => {
      const recordsFromDB = await fetchRecords()
      console.log(recordsFromDB)

      setRecords(recordsFromDB)
    }
    getRecords()
  }, [])

  // Fetch Employees from DB
  const fetchRecords = async () => {
    const data = await (await fetch('http://localhost:8080/api/records')).json()
    return data
  }

  //Add Task
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

  // const [employees, setEmployees] = useState([])

  // useEffect(() => {
  //   const getEmployees = async () => {
  //     const employeesFromDB = await fetchEmployees()
  //     console.log(employeesFromDB)

  //     setEmployees(employeesFromDB)
  //   }
  //   getEmployees()
  // }, [])

  // // Fetch Employees from DB
  // const fetchEmployees = async () => {
  //   const data = await (
  //     await fetch('http://localhost:8080/api/employees')
  //   ).json()
  //   return data
  // }

  return (
    <Router>
      <div className='App'>
        <Navbar
          onAdd={() => setShowAddRecord(!showAddRecord)}
          showAddRecord={showAddRecord}
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
                        showAddRecord={showAddRecord}
                      />
                    ) : (
                      <AddRecord onAdd={addRecord} />
                    )}
                  </>
                }
              />
              <Route path='/employees' element={<EmployeesScreen />} />
            </Routes>
          </Container>
        </main>
      </div>
    </Router>
  )
}

export default App
