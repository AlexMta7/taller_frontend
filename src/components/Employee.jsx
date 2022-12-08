import Button from './Button'

const Employee = ({ employee }) => {
  const deleteEmplo = (e) => {
    e.preventDefault()

    alert('Delete Emplo')
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
          <Button
            text={'Eliminar'}
            color={'warning'}
            onClick={deleteEmplo}
            // icon={'FaTrash'}
          />
        </td>
      </tr>
    </>
  )
}

export default Employee
