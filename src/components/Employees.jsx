import Table from './Table'

const Employees = ({ employees }) => {
  return (
    <>
      <div className='container'>
        <Table key={employees} data={employees} />
      </div>
    </>
  )
}

export default Employees
