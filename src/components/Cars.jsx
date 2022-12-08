import Car from './Car'

const Cars = ({ cars }) => {
  return (
    <>
      <table className='table table-hover'>
        <thead className='bg-primary text-light'>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>Brand</th>
            <th scope='col'>Color </th>
            <th scope='col'>Id_Client</th>
            <th scope='col'>Model</th>
            <th scope='col'>Year</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <Car key={index} car={car} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Cars
