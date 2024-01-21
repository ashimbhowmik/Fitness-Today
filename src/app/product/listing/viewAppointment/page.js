import UserAppoinmetPart from "@/components/UserAppoinmetPart";
import { getAllAppoinment } from "@/services/userappoinment";

export default async function ViewAppointment() {
  const allAppoinment = await getAllAppoinment();

  return (
    <div className="">
      <UserAppoinmetPart
        data={allAppoinment && allAppoinment.data}
      ></UserAppoinmetPart>
    </div>
  );
}
