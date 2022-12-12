import ActionButton from './ActionButton'
import Button from './Button'

const Client = ({ client }) => {
  // const deleteClient = (e) => {
  //   e.preventDefault()

  //   alert('Delete Client')
  // }

  // Delete a single client from DB
  const deleteClient = async () => {
    if (!window.confirm(`Delete client ${client.id}?`)) {
      return
    }

    await fetch('http://localhost:8080/api/clients/' + client.id, {
      method: 'DELETE',
    })
    // setCar(tasks.filter((task) => task.id !== id))
    console.log(`Client ${client.id} deleted`)
    window.location.href = window.location.href
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
          <h3>
            <ActionButton
              color={'#3498DB'}
              // onClick={}
              icon={'fa-solid fa-pen-to-square'}
            />
            <ActionButton
              color={'#E74C3C'}
              onClick={() => deleteClient(client.id)}
              icon={'fa-solid fa-trash'}
            />
          </h3>
        </td>
      </tr>
    </>
  )
}

export default Client
