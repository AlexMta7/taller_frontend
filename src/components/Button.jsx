import { FaTrash } from 'react-icons/fa'

const Button = ({ text, color, onClick, icon }) => {
  return (
    <button onClick={onClick} className={`btn btn-${color}`}>
      {text}
    </button>
  )
}

export default Button
