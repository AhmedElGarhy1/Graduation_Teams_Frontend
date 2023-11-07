import { useState } from "react";
import CustomModal from "../shared/Modal";
import useCustomMutation from "../../hooks/useCustomMutation";
import teams from "../../services/api/teams";
import TeamForm from "./TeamForm";
import { TTeam } from "../../utils/validation/team";

const AddTeam = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { mutate, isLoading } = useCustomMutation(
    ["teams"],
    teams.create,
    closeModal
  );

  const onSendRequest = (data: TTeam) => {
    mutate(data);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="w-fit ml-auto my-3">
      <button
        onClick={openModal}
        className="inline-flex items-center px-3 py-[6px] text-xl mx-4 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
        Create Team
      </button>
      <CustomModal closeModal={closeModal} header={"hola"} isOpen={isOpen}>
        <TeamForm isLoading={isLoading} sendRequest={onSendRequest} />
      </CustomModal>
    </div>
  );
};

export default AddTeam;
