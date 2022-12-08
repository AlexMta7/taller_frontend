const Client = ({ client }) => {
  return (
    <>
      <tr>
        <th scope='row'>{client.id}</th>
        <td>{client.name + ' ' + client.lastname}</td>
        <td>{client.address}</td>
        <td>{client.dui}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
          {/* <Button
            text={'Eliminar'}
            color={'warning'}
            // onClick={deleteEmplo}
            // icon={'FaTrash'}
          /> */}
        </td>
      </tr>
    </>
  )
}

export default Client
