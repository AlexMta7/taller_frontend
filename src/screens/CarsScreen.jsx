import AddModal from '../components/AddModal'
import Cars from '../components/Cars'

const CarsScreen = ({ cars, showModal, handleModal }) => {
  return (
    <>
      <Cars cars={cars} />
      {showModal && (
        <AddModal
          showModal={showModal}
          handleModal={handleModal}
          title={'Add Car'}
        />
      )}
    </>
  )
}

export default CarsScreen
