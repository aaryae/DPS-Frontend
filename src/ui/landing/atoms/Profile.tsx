import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Profile = ({ value }: { value?: string }) => {
  return (
    <div className='flex gap-2'>
      <div className='py-1 px-1.5 m-auto rounded-full  bg-[#000000]'>

      <FontAwesomeIcon icon={faUser} size='1x' style={{ color: 'white', margin: 'auto' }} />
      </div>
      <div className='text-sm m-auto'>{value ?? 'Guest'}</div>
    </div>
  )
}

export default Profile
