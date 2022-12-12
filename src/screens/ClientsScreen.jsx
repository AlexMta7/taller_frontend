import AddModal from '../components/AddModal'
import Clients from '../components/Clients'

const ClientsScreen = ({ clients, showModal, handleModal }) => {
  return (
    <>
      <Clients clients={clients} />
      {showModal && (
        <AddModal
          showModal={showModal}
          handleModal={handleModal}
          title={'Add Client'}
        />
      )}
    </>
  )
}

export default ClientsScreen
