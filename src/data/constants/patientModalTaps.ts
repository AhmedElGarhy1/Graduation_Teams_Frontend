import { FC } from 'react';
import { IPatientTabComponenet } from '../../components/PatientModal';
import Diagnostic from '../../components/PatientModal/Diagnostics';
import Prescription from '../../components/PatientModal/Prescriptions';
// images
import DiagnosticIcon from '../../assets/icons/diagnosis.png';
import medicalHistoryIcon from '../../assets/icons/medical_history.png';
import medicalReports from '../../assets/icons/medical_report.png';
import patientImg from '../../assets/icons/patient.png';
import dignosesNumberIcon from '../../assets/icons/عدد الكشوفات.png';
import Reports from '../../components/PatientModal/Reports';
import VisitsHistory from '../../components/PatientModal/VisitsHistory';

interface IModalTab {
  id: number;
  label: string;
  icon: string;
  component: FC<IPatientTabComponenet>;
}

export const modalTabs: IModalTab[] = [
  {
    id: 0,
    label: 'patientProfile.title',
    icon: patientImg,
    component: Diagnostic,
  },
  {
    id: 1,
    label: 'diagnostics.title',
    icon: DiagnosticIcon,
    component: Diagnostic,
  },
  {
    id: 2,
    label: 'reports.title',
    icon: medicalReports,
    component: Reports,
  },
  {
    id: 3,
    label: 'prescriptions.title',
    icon: dignosesNumberIcon,
    component: Prescription,
  },
  {
    id: 4,
    label: 'medicalHistory.title',
    icon: medicalHistoryIcon,
    component: VisitsHistory,
  },
];
