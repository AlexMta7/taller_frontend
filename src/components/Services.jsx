import Service from './Service'
const Services = ({ services, showModal, handleModal }) => {
  return (
    <>
      <table className='table table-hover'>
        <thead className='bg-primary text-light'>
          <tr>
            <th scope='col' width='20'>
              id
            </th>
            <th scope='col' width='20'>
              Name
            </th>
            <th scope='col' width='20'>
              Type
            </th>
            <th scope='col' width='20'>
              Description
            </th>
            <th scope='col' width='20'>
              <div>Actions</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {services.map((services, index) => (
            <Service
              key={index}
              service={services}
              showModal={showModal}
              handleModal={handleModal}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Services
