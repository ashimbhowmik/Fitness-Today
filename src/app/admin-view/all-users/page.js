import RegisterUsers from "@/components/RegisterUsers/RegisterUsers";
import { allRegisterUsers } from "@/services/allregusers";

export default async function Allusers() {
  const getAllRegUsers = await allRegisterUsers();

  return (
    <div className="flex flex-col">
      <RegisterUsers
        data={getAllRegUsers && getAllRegUsers?.data}
      ></RegisterUsers>
    </div>
  );
}
