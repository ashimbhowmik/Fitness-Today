import AdminAppoinment from "@/components/AdminAppoinment";
import Appoinment from "@/components/Appoinment";
import { getAllAppoinment } from "@/services/userappoinment";

export default async function AdminAllAppoinment() {
  const allAppoinment = await getAllAppoinment();

  return (
    <div className="">
      <AdminAppoinment
        data={allAppoinment && allAppoinment.data}
      ></AdminAppoinment>
    </div>
  );
}
