import { FC } from 'react';
import { Route } from 'react-router-dom';

export const ForbeddenRoute: FC = () => {
  return <Route element={<>Forbidden Resourse</>} />;
};
