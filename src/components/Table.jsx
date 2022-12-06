const Table = ({ data }) => {
  console.log(data)

  return (
    <div className='container'>
      <table className='table table-hover'>
        <thead className='bg-primary text-light'>
          <tr>
            <th scope='col'>id</th>
            <th scope='col'>cod</th>
            <th scope='col'>Name </th>
            <th scope='col'>Type</th>
            <th scope='col'>DUI</th>
            <th scope='col'>email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>{data.id}</th>
            <td>{data.cod_employ}</td>
            <td>{data.name + ' ' + data.lastname}</td>
            <td>{data.type}</td>
            <td>{data.dui}</td>
            <td>{data.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
