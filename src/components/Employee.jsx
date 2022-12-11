import ActionButton from './ActionButton'
import Button from './Button'

const Employee = ({ employee }) => {
  const deleteEmployee = async () => {
    if (!window.confirm(`Delete employee ${employee.id}?`)) {
      return
    }

    await fetch('http://localhost:8080/api/employees/' + employee.id, {
      method: 'DELETE',
    })
    // setCar(tasks.filter((task) => task.id !== id))
    console.log(`employee ${employee.id} deleted`)
    window.location.href = window.location.href
  }

  return (
    <>
      <tr>
        <th scope='row'>{employee.id}</th>
        <td>{employee.cod_employ}</td>
        <td>{employee.name + ' ' + employee.lastname}</td>
        <td>{employee.type}</td>
        <td>{employee.dui}</td>
        <td>{employee.email}</td>
        <td>
          <h3>
            <ActionButton
              color={'blue'}
              // onClick={}
              icon={'fa-solid fa-pen-to-square'}
            />
            <ActionButton
              color={'red'}
              onClick={() => deleteEmployee(employee.id)}
              icon={'fa-solid fa-trash'}
            />
          </h3>
        </td>
      </tr>
    </>
  )
}

export default Employee
