import { FC } from "react";
import CustomModal from "../shared/Modal";
import { useQuery } from "react-query";
import teams from "../../services/api/teams";

interface Props {
  closeModal: () => void;
  isOpen: boolean;
  teamId: number;
}

const TeamModal: FC<Props> = ({ closeModal, isOpen, teamId }) => {
  const { isLoading, data } = useQuery(["singleTeam", teamId], () =>
    teams.getOne(teamId)
  );

  return (
    <div>
      <CustomModal
        closeModal={closeModal}
        isOpen={isOpen}
        header="helo"
        icon="">
        {isLoading ? "Loading" : <div>Hello</div>}
      </CustomModal>
    </div>
  );
};

export default TeamModal;
