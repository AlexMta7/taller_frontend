import AddModal from '../components/AddModal'
import Services from '../components/Services'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import EditModal from '../components/EditModal'

const ServiceScreen = ({ services, showModal, handleModal }) => {
  console.log(showModal)
  console.log(handleModal)

  return (
    <>
      <Services
        services={services}
        showModal={showModal}
        handleModal={handleModal}
      />
      {showModal && (
        <AddModal
          showModal={showModal}
          handleModal={handleModal}
          title={'Add Service'}
        />
      )}
    </>
  )
}

export default ServiceScreen
