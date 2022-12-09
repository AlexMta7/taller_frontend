import Button from './Button'

const Car = ({ car }) => {
  const deleteCar = (e) => {
    e.preventDefault()

    alert('Delete Car')
  }

  return (
    <>
      <tr>
        <th scope='row'>{car.id}</th>
        <td>{car.brand}</td>
        <td>{car.color}</td>
        <td>{car.id_client}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>
          <Button
            color={'info'}
            onClick={deleteCar}
            icon={'fa-solid fa-pen-to-square'}
          />
          <Button
            color={'danger'}
            onClick={deleteCar}
            icon={'fa-solid fa-trash'}
          />
        </td>
      </tr>
    </>
  )
}

export default Car
