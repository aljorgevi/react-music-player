import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/icon.png';

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav>
      <img src={logo} alt='icon' className='logo' />
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
