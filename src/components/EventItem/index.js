// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const activeImageClass = isActive ? 'img active' : 'img'
  const checkRegistration = () => setActiveEventId(id)

  return (
    <li className="each-list">
      <button className="btn" type="button">
        <img
          src={imageUrl}
          alt="event"
          onClick={checkRegistration}
          className={activeImageClass}
        />
      </button>
      <p className="head">{name}</p>
      <p className="para">{location}</p>
    </li>
  )
}
export default EventItem
