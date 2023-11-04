import { FC } from 'react';
import AddSupplier from '../../components/Settings/Suppliers/AddSupplier';
import SupplierTable from '../../components/Settings/Suppliers/SuppliersTable';

const SuppliersSettings: FC = () => {
  return (
    <>
      <AddSupplier />
      <SupplierTable />
    </>
  );
};

export default SuppliersSettings;
