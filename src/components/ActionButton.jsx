import React from 'react'

const ActionButton = ({ color, onClick, icon }) => {
  return (
    <>
      <i style={{ color: color }} onClick={onClick} className={icon}></i>
    </>
  )
}
// ActionButton.defaultProps = {}

export default ActionButton
