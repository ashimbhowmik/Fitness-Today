import AppoinmentPart from "@/components/AppoinmentPart/AppoinmentPart";
import { doctorById } from "@/services/doctors";

export default async function DoctorsDetails({ params }) {
  const doctorsDetailsData = await doctorById(params.doctors);

  console.log(doctorsDetailsData);

  return (
    <AppoinmentPart item={doctorsDetailsData && doctorsDetailsData.data} />
  );
}
