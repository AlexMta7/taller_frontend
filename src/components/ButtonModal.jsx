const ButtonModal = ({ text, color, icon, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-${color}`}>
      <i className={icon}></i>
      {''}
      {text}
    </button>
  )
}

export default ButtonModal
