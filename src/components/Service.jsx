import Button from './Button'

const Service = ({ service }) => {
  const deleteService = (e) => {
    e.preventDefault()

    alert('Delete Service')
  }

  return (
    <>
      <tr>
        <th scope='row'>{service.id}</th>
        <td>{service.name}</td>
        <td>{service.type}</td>
        <td>{service.description}</td>
        <td>
          <Button
            color={'info'}
            onClick={deleteService}
            icon={'fa-solid fa-pen-to-square'}
          />
          <Button
            color={'danger'}
            onClick={deleteService}
            icon={'fa-solid fa-trash'}
          />
        </td>
      </tr>
    </>
  )
}

export default Service
