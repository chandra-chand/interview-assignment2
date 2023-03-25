import {RiDeleteBinLine} from 'react-icons/ri'

const Abc = props => {
  const {details, deleteButton} = props
  const {id, text} = details
  const onClickDelete = () => {
    deleteButton(id)
  }
  return (
    <li className="list-container">
      <p className="para">{text}</p>
      <input type="checkbox" className="box" />
      <button className="delete-button" type="button" onClick={onClickDelete}>
        <RiDeleteBinLine size={30} />
      </button>
    </li>
  )
}
export default Abc
