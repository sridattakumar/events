// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistartionStatus} = props

  const renderNoActiveEventView = () => (
    <div className="view-container">
      <p className="para">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const returnYetToRegisterView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        className="view"
        alt="yet to register"
      />
      <p className="para">
        A live performance brings so much to your relationship with dance
      </p>
      <button type="button" className="btn">
        Register here
      </button>
    </div>
  )

  const returnRegisteredView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        className="tick"
        alt="registered"
      />
      <h1 className="para">You have already registered for the event</h1>
    </div>
  )

  const returnRegistrationsClosedView = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        className="view"
        alt="registrations closed"
      />
      <h1 className="head">Registrations Are Closed Now!</h1>
      <p className="para">Stay tuned. We will reopen the registrations soon.</p>
    </div>
  )

  const renderActiveEventRegistrationDetails = () => {
    switch (activeEventRegistartionStatus) {
      case registrationStatus.yetToRegister:
        return returnYetToRegisterView()
      case registrationStatus.registered:
        return returnRegisteredView()
      case registrationStatus.registrationsClosed:
        return returnRegistrationsClosedView()
      default:
        return renderNoActiveEventView()
    }
  }

  return (
    <div className="registration-container">
      {renderActiveEventRegistrationDetails()}
    </div>
  )
}
export default ActiveEventRegistrationDetails
