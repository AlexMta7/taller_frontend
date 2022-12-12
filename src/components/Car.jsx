import ActionButton from './ActionButton'
import Button from './Button'
const Car = ({ car }) => {
  // const deleteCar = (e) => {
  //   e.preventDefault()

  //   alert('Delete Car')
  // }

  //Add Task
  // const modifyRecord = async (record) => {
  //   const res = await fetch('http://localhost:8080/api/records', {
  //     method: 'POST',
  //     headers: { 'Content-type': 'application/json' },
  //     body: JSON.stringify(record),
  //   })

  //   const data = await res.json()

  //   //creates the entire array
  //   // setRecords([...records, record])
  // }

  // Delete a single car from DB
  const deleteCar = async () => {
    if (!window.confirm(`Delete car ${car.id}?`)) {
      return
    }

    await fetch('http://localhost:8080/api/cars/' + car.id, {
      method: 'DELETE',
    })
    // setCar(tasks.filter((task) => task.id !== id))
    console.log(`Car ${car.id} deleted`)
    window.location.href = window.location.href
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
          <h3>
            <ActionButton
              color={'#3498DB'}
              // onClick={}
              icon={'fa-solid fa-pen-to-square'}
            />
            <ActionButton
              color={'#E74C3C'}
              onClick={() => deleteCar(car.id)}
              icon={'fa-solid fa-trash'}
            />
          </h3>
        </td>
      </tr>
    </>
  )
}

export default Car
