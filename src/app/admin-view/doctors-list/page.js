import DoctorsList from "@/components/DoctorsList/DoctorsList";

import { getAllDoctors } from "@/services/doctors";

export default async function Allusers() {
  const allDoctorsList = await getAllDoctors();

  return (
    <div className="flex flex-col h-screen">
      <DoctorsList data={allDoctorsList && allDoctorsList?.data}></DoctorsList>
    </div>
  );
}
