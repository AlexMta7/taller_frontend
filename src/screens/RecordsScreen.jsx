import { Col, Row } from 'react-bootstrap'
import Records from '../components/Records'

const RecordsScreen = ({
  records,
  employees,
  cars,
  clients,
  showAddRecord,
}) => {
  return (
    <>
      <Records
        records={records}
        employees={employees}
        cars={cars}
        clients={clients}
        showAddRecord={showAddRecord}
      />
    </>
  )
}

export default RecordsScreen
