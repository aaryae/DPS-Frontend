import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = ({value}:{value?:string}) => {
  return (
    <div className='flex flex-col '>
      <FontAwesomeIcon icon={faUser} size='1x' style={{ color: 'black', margin:'auto' }} />
      <div className='text-sm'>
      {value??"Guest"}
      </div>
    </div>
  )
}

export default Profile
