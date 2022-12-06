const Table = ({ data }) => {
  console.log(data.name)

  return (
    <div className='container'>
      <table className='table table-hover'>
        <thead className='bg-primary text-light'>
          <tr>
            <th scope='col'>{data}</th>
            <th scope='col'>Column </th>
            <th scope='col'>Column heading</th>
            <th scope='col'>Column heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>{data.name}</th>
            <td>Column content</td>
            <td>Column content</td>
            <td>Column content</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
