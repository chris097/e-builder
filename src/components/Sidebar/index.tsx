import Logo from '../../public/svgs/Logo';
import {IoCloseOutline} from 'react-icons/io5'
import { useNavContext } from '../../context/navContext';
import { navLinks } from '../../utils/navLinks';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const { toggleCloseNav } = useNavContext();
    
    const handleCloseNav = () => toggleCloseNav();

  return (
      <div className='bg-white border border-l flex-col items-center px-6 h-screen w-2/5 fixed top-0 left-0'>
          <div className='h-20 border-b w-full flex justify-between items-center'>
              <Logo />
              <span className='cursor-pointer' onClick={handleCloseNav}><IoCloseOutline size={28} color="#393E4D" /></span>
          </div>
          {navLinks.map((navLink) => (
             <Link to={navLink.to} className='text-sm font-light hover:text-red-500 cursor-pointer flex items-center space-x-2'>
                <div>{navLink.icon}</div>
                <div>{navLink.name}</div>
            </Link>
            ))}
      </div>
  )
}

export default Sidebar;