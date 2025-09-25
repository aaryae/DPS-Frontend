import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Notification = () => {
  return (
    <div className='cursor-pointer m-auto'>

        <FontAwesomeIcon icon={faBell} size='xl' style={{ color: 'black', margin: 'auto' }}/>
    </div>
  )
}

export default Notification
