import CommonListing from "@/components/CommonListing";
import { getAllAdminProducts } from "@/services/product";

export default async function AdminAllProducts() {
  const allAdminProducts = await getAllAdminProducts();

  return (
    <div className="">
      <CommonListing
        data={allAdminProducts && allAdminProducts.data}
      ></CommonListing>
    </div>
  );
}
