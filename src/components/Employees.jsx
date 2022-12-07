import { useState, useEffect } from 'react'
import Employee from './Employee'
import Table from './Table'

const Employees = ({ employees }) => {
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
            <th scope='col'>actions</th>
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
