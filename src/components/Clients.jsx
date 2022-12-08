import Client from './Client'

const Clients = ({ clients }) => {
  return (
    <>
      <table className='table table-hover'>
        <thead className='bg-primary text-light'>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Name </th>
            <th scope='col'>Address</th>
            <th scope='col'>DUI</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((clients, index) => (
            <Client key={index} client={clients} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Clients
