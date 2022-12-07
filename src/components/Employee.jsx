import Button from './Button'

const Employee = ({ data }) => {
  const deleteEmplo = (e) => {
    e.preventDefault()

    alert('Delete Emplo')
  }

  return (
    <>
      <tr>
        <th scope='row'>{data.id}</th>
        <td>{data.cod_employ}</td>
        <td>{data.name + ' ' + data.lastname}</td>
        <td>{data.type}</td>
        <td>{data.dui}</td>
        <td>{data.email}</td>
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
