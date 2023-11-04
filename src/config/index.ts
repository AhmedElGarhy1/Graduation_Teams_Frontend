import ReactModal from "react-modal";
import { QueryClient } from "react-query";
import { store } from "../store";
import "../styles";

ReactModal.setAppElement("#root");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export { i18n, queryClient, store };
