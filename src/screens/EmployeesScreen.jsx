import React from 'react'
import AddModal from '../components/AddModal'
import Button from '../components/Button'
import Employees from '../components/Employees'

const EmployeesScreen = ({ employees, showModal, handleModal }) => {
  return (
    <>
      {/* Agregar que cuando vaya a la ruta
          /employes/:id que mande a llamar nuevamente a la tabla pero solo al registro que se da clic
          que en records muestre el nombre y que al dar clic del empleado o carro o lo que putas sea que ahí también se vaya 
          a la tabla pero que solo muestre ese id */}
      <Employees employees={employees} />
      {showModal && (
        <AddModal
          showModal={showModal}
          handleModal={handleModal}
          title={'Add Employee'}
        />
      )}
    </>
  )
}

export default EmployeesScreen
