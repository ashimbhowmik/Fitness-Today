import ClientViewProduct from "@/components/ClientViewProduct";
import CommonListing from "@/components/CommonListing";
import Footer from "@/components/Footer/Footer";
import { getAllAdminProducts } from "@/services/product";

export default async function AllProducts() {
  const getAllProducts = await getAllAdminProducts();

  return (
    <div>
      <ClientViewProduct data={getAllProducts && getAllProducts.data} />
      <Footer></Footer>
    </div>
  );
}
