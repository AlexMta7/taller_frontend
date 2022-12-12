import { FaTrash } from 'react-icons/fa'

const Button = ({ text, color, onClick, icon }) => {
  return (
    <button onClick={onClick} className={`btn btn-${color}`}>
      <i className={icon}></i> {text}
    </button>
  )
}

// Button.defaultProps = {
//   color: 'steelBlue',
//   text: '',
//   icon: 'fa-solid fa-triangle-exclamation',
// }

export default Button
