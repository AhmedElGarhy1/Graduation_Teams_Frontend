import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactNode } from 'react';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../../store/slices/LangSlice';

type TSizes = 'lg' | 'md' | 'sm';

const customStyles = (size: TSizes) => ({
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    width: size === 'lg' ? '90%' : size === 'md' ? '60%' : '45%',
    maxHeight: '90vh',
    overflow: 'auto',
    borderRadius: '25px',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,.25)',
    zIndex: 999,
    // overflow: 'auto',
  },
});

export interface IModalParams {
  children: ReactNode;
  closeModal: () => void;
  isOpen: boolean;
  icon: string;
  header: string;
  size?: TSizes;
}
const CustomModal: FC<IModalParams> = ({
  children,
  isOpen,
  closeModal,
  icon,
  header,
  size = 'lg',
}) => {
  const language = useSelector(selectLanguage);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles(size)}
      >
        <section dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <div className="flex flex-no-wrap justify-between items-center mb-5">
            <div className="flex items-center">
              <img className="w-14 h-14" src={icon} alt={header} />
              <h2 className=" mx-2 text-[44px]  text-secondary font-black">
                {header}
              </h2>
            </div>
            <div
              onClick={closeModal}
              className="text-3xl px-[7px] pt-[2px] font-black  text-white bg-warning hover:bg-warning-hover rounded-full transition cursor-pointer"
            >
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          {children}
        </section>
      </Modal>
    </div>
  );
};

export default CustomModal;
