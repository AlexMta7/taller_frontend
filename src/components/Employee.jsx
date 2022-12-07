const Employee = ({ data }) => {
  return (
    <>
      <tr>
        <th scope='row'>{data.id}</th>
        <td>{data.cod_employ}</td>
        <td>{data.name + ' ' + data.lastname}</td>
        <td>{data.type}</td>
        <td>{data.dui}</td>
        <td>{data.email}</td>
      </tr>
    </>
  )
}

export default Employee
