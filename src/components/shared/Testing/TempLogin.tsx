import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import customAxios from '../../../services/axios';
import { setUser } from '../../../store/slices/AuthSlice';

const TempLogin = () => {
  const dispatch = useDispatch();
  const makeFetch = async (role: 1 | 2 | 3) => {
    const user = {
      email: '',
      password: '',
    };

    if (role === 1) {
      user.email = 'alaa@gmail.com';
      user.password = '123456';
    } else if (role === 2) {
      user.email = 'dina@gmail.com';
      user.password = '123456';
    } else if (role === 3) {
      user.email = 'Superadmin@gmail.com';
      user.password = 'admin123';
    }

    await customAxios
      .post(
        'login',
        // {
        // email: 'loaa@gmail.com',
        // password: '123456789',
        //
        // email: 'superadmin@gmail.com',
        // password: '123456789',
        //
        // email: 'admin@admin.com',
        // password: '123456',
        //
        // email: 'testpr1@gmail.com',
        // password: '123456789',
        //
        // email: 'Superadmin@gmail.com',
        // password: 'admin123',
        //
        // email: 'dina@gmail.com',
        // password: '123456',
        //
        // email: 'alaa@gmail.com',
        // password: '123456',
        //
        // }
        user
      )
      .then((allData) => {
        const data = allData.data.data;
        const token = data.access_token;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(setUser(data.user));
      });
    // await customAxios.get('/users/show').then((allData) => {
    //   const data = allData.data.data;
    //   // const token = data.access_token;
    //   // localStorage.setItem('token', JSON.stringify(token));
    //   dispatch(setUser(data.user));
    // });
  };
  useEffect(() => {
    makeFetch(3);
  }, []);
  return (
    <div className="flex">
      {/* <Button onClick={() => makeFetch(3)}>Admin</Button>
      <Button onClick={() => makeFetch(2)}>Accountant</Button>
      <Button onClick={() => makeFetch(1)}>Receptionist</Button> */}
      logining in
    </div>
  );
};

export default memo(TempLogin);
