import Table from './Table'

const Employees = ({ employees }) => {
  return (
    <>
      <div className='container'>
        {employees.map((employees, index) => (
          <Table key={index} employees={employees} />
        ))}
      </div>
    </>
  )
}

export default Employees
