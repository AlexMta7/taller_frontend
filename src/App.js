import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Button from './components/Button'
import Navbar from './components/Navbar'
import 'bootswatch/dist/lux/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Table from './components/Table'
import Employees from './components/Employees'
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  // const [showAddTask, setShowAddTask] = useState(false)
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const getEmployees = async () => {
      const employeesFromDB = await fetchEmployees()
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

  return (
    <div className='App'>
      <Navbar />
      {employees.map((employees, index) => (
        <Table key={index} data={employees} />
      ))}
      <Employees employees={employees} />
      {/* <Button /> */}
    </div>
  )
}

export default App
