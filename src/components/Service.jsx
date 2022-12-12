import ActionButton from './ActionButton'
import Button from './Button'

const Service = ({ service, showModal, handleModal }) => {
  const deleteService = async () => {
    if (!window.confirm(`Delete service ${service.id}?`)) {
      return
    }

    await fetch('http://localhost:8080/api/services/' + service.id, {
      method: 'DELETE',
    })
    // setCar(tasks.filter((task) => task.id !== id))
    console.log(`service ${service.id} deleted`)
    window.location.href = window.location.href
  }

  return (
    <>
      <tr>
        <th scope='row'>{service.id}</th>
        <td>{service.name}</td>
        <td>{service.type}</td>
        <td>{service.description}</td>
        <td>
          <h3>
            <ActionButton
              //Color azul
              color={'#3498DB'}
              onClick={handleModal}
              icon={'fa-solid fa-pen-to-square'}
            />
            <ActionButton
              //Color rojo
              color={'#E74C3C'}
              onClick={() => deleteService(service.id)}
              icon={'fa-solid fa-trash'}
            />
          </h3>
        </td>
      </tr>
    </>
  )
}

export default Service
