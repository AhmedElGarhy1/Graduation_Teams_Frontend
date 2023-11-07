import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactNode } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    width: "100%",
    maxWidth: "600px",
    maxHeight: "90vh",
    overflow: "auto",
    borderRadius: "25px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.25)",
    zIndex: 999,
    // overflow: 'auto',
  },
};

export interface IModalParams {
  children: ReactNode;
  closeModal: () => void;
  isOpen: boolean;
  // icon: string;
  header: string;
}
const CustomModal: FC<IModalParams> = ({
  children,
  isOpen,
  closeModal,
  // icon,
  header,
}) => {
  return (
    <div>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <section>
          <div className="flex flex-no-wrap justify-between items-center mb-5">
            <div className="flex items-center">
              {/* <img className="w-8 h-8" src={icon} alt={header} /> */}
              <h2 className=" mx-2 text-end text-3xl  text-secondary font-black">
                {header}
              </h2>
            </div>
            <div
              onClick={closeModal}
              className="text-3xl px-[7px] pt-[2px] font-black  text-white bg-red-600 hover:bg-red-700 rounded-full transition cursor-pointer">
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
