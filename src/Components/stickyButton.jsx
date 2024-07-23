import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const StickyButton = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-200 ease-in-out"
        onClick={goToHome}
      >
        <FontAwesomeIcon icon={faHome} size="lg" />
      </button>
    </div>
  );
};

export default StickyButton;