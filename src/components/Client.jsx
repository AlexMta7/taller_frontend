import Button from './Button'

const Client = ({ client }) => {
  const deleteClient = (e) => {
    e.preventDefault()

    alert('Delete Client')
  }

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
          <Button
            color={'danger'}
            onClick={deleteClient}
            icon={'fa-solid fa-trash'}
          />
          <Button
            color={'info'}
            onClick={deleteClient}
            icon={'fa-solid fa-pen-to-square'}
          />
        </td>
      </tr>
    </>
  )
}

export default Client
