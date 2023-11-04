import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faGear}
        className="text-3xl text-[#545454] hover:text-[#0069CC]"
      />
    </div>
  );
}

export default Menu