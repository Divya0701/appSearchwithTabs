import './index.css'

const AppItem = props => {
  const {item} = props
  return (
    <li className="lid">
      <img src={item.imageUrl} alt="img" className="image" />
      <p>{item.appName}</p>
    </li>
  )
}

export default AppItem
