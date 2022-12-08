const Service = ({ service }) => {
  return (
    <>
      <tr>
        <th scope='row'>{service.id}</th>
        <td>{service.name}</td>
        <td>{service.type}</td>
        <td>{service.description}</td>
        <td>
          <button>cualquiera</button>
        </td>
      </tr>
    </>
  )
}

export default Service
