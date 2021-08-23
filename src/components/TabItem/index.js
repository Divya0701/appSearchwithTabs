import './index.css'

const TabItem = props => {
  const {item, display, isActive} = props
  const show = () => {
    display(item.tabId)
  }
  const element = isActive === true ? 'active' : null
  console.log(isActive, element)
  return (
    <li className="li">
      <button className={`para ${element}`} type="button" onClick={show}>
        {item.displayText}
      </button>
    </li>
  )
}

export default TabItem
