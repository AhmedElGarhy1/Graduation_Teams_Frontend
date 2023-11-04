import { FC } from "react";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { queryClient, store } from "./config";
import router from "./router";

const App: FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-2xl mx-auto shadow-lg bg-white min-h-screen ">
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <RouterProvider router={router} />
            <ToastContainer />
            <div id="alert-root"></div>
            <ReactQueryDevtools />
          </Provider>
        </QueryClientProvider>
      </div>
    </div>
  );
};
export default App;
