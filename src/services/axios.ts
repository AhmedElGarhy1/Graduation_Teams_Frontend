import axios from "axios";
import { toast } from "react-toastify";
import { getTokenValue } from "../utils";

// const BASE_URL = "http://localhost:3000";
const BASE_URL = "http://graduationteams.qatarcentral.cloudapp.azure.com:3000";

const customAxios = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
customAxios.interceptors.request.use(
  (config) => {
    const token = getTokenValue();
    config.headers.Authorization = "Bearer " + token;
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);
// Add a request interceptor
customAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    const rawMessage = error?.response?.data?.message;
    let message = "";
    if (typeof rawMessage === typeof []) {
      message = rawMessage[0];
    } else {
      message = rawMessage;
      console.log(rawMessage);
    }

    toast.error(message);

    return Promise.reject(error);
  }
);

export default customAxios;

// (async () => {
//   await customAxios
//     .post('login', {
//       email: 'admin@admin.com',
//       password: '123456',
//     })
//     .then((data) => {
//       const token = data.data.data.access_token;
//       localStorage.setItem('token', JSON.stringify(token));
//       // const dispatch = useDispatch();
//       // dispatch(setUser(data));
//     });
// })();
