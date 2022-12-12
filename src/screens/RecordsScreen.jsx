import { Col, Row } from 'react-bootstrap'
import AddModal from '../components/AddModal'
import Records from '../components/Records'

const RecordsScreen = ({
  records,
  employees,
  cars,
  clients,
  showModal,
  handleModal,
}) => {
  return (
    <>
      <Records
        records={records}
        employees={employees}
        cars={cars}
        clients={clients}
        // showAddRecord={showAddRecord}
      />
      {showModal && (
        <AddModal
          showModal={showModal}
          handleModal={handleModal}
          title={'Add Record'}
        />
      )}
    </>
  )
}

export default RecordsScreen
