import AllOrdersUser from "@/components/AllOrdersUser/AllOrdersUser";
import { getAllAddress } from "@/services/address";
import { allRegisterUsers } from "@/services/allregusers";
import { getAllOrder } from "@/services/cart";
import { getAllAdminProducts } from "@/services/product";

export default async function AllOrder() {
  const allOrdersData = await getAllOrder();
  const allUserOrder = await allRegisterUsers();
  const userAddProduct = await getAllAdminProducts();
  const allAddress = await getAllAddress();

  return (
    <div className="p-10">
      <AllOrdersUser
        data={allOrdersData && allOrdersData.data}
        users={allUserOrder && allUserOrder.data}
        products={userAddProduct && userAddProduct.data}
        address={allAddress && allAddress.data}
      ></AllOrdersUser>
    </div>
  );
}
