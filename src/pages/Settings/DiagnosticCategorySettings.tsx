import { FC } from 'react';
import AddDiagnosticCategory from '../../components/Settings/DiagnosticCategories/AddDiagnositcCategory';
import DiagnosticCategoriesTable from '../../components/Settings/DiagnosticCategories/DiagnosticCategoriesTable';

const DiagnosticCategorySettings: FC = () => {
  return (
    <div>
      <AddDiagnosticCategory />
      <DiagnosticCategoriesTable />
    </div>
  );
};

export default DiagnosticCategorySettings;
