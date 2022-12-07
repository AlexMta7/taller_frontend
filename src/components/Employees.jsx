import { useState, useEffect } from 'react'
import Employee from './Employee'
import Table from './Table'

const Employees = () => {
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
    <>
      <table className='table table-hover'>
        <thead className='bg-primary text-light'>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>cod</th>
            <th scope='col'>Name </th>
            <th scope='col'>Type</th>
            <th scope='col'>DUI</th>
            <th scope='col'>email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employees, index) => (
            <Employee key={index} data={employees} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Employees
