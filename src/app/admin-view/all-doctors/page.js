import Appoinment from "@/components/Appoinment";
import { getAllDoctors } from "@/services/doctors";

export default async function AdminALlDoctorsShow() {
  const allAdminDoctors = await getAllDoctors();

  return (
    <div className="">
      <Appoinment data={allAdminDoctors && allAdminDoctors.data}></Appoinment>
    </div>
  );
}
