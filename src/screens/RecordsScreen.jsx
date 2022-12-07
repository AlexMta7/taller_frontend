import { Col, Row } from 'react-bootstrap'
import Records from '../components/Records'

const RecordsScreen = ({ records, showAddRecord }) => {
  return (
    <>
      <Records records={records} showAddRecord={showAddRecord} />
    </>
  )
}

export default RecordsScreen
