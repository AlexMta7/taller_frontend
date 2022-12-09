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
    if (!window.confirm('Delete car?')) {
      return
    }

    await fetch('http://localhost:8080/api/cars/' + car.id, {
      method: 'DELETE',
    })
    // setCar(tasks.filter((task) => task.id !== id))
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
          {/* <Button
            color={'info'}
            // onClick={}
            icon={'fa-solid fa-pen-to-square'}
          /> */}
          <h3>
            <i
              style={{ color: 'blue' }}
              className='fa-solid fa-pen-to-square'
            ></i>
            <i
              style={{ color: 'red' }}
              onClick={() => deleteCar(car.id)}
              className='fa-solid fa-trash'
            ></i>
          </h3>
          {/* <Button
            color={'danger'}
            onClick={deleteCar(car.id)}
            icon={'fa-solid fa-trash'}
          /> */}
        </td>
      </tr>
    </>
  )
}

export default Car
