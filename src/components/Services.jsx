import Service from './Service'
const Services = ({ services }) => {
  return (
    <>
      <table className='table table-hover'>
        <thead className='bg-primary text-light'>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>Name </th>
            <th scope='col'>Type</th>
            <th scope='col'>Description</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((services, index) => (
            <Service key={index} service={services} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Services
