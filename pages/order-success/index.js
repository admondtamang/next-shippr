import { Button } from "../../components";
import Layout from "../../components/Layout";
import OutlineButton from "../../components/OutlineButton";
export default function OrderSuccess() {
  return (
    <Layout>
      <div className="text-center py-40 gap-2">
        <h1 className="text-3xl font-bold">Order Placed Successfully!</h1>
        <div>
          Order ID : <b>897</b>
        </div>
        <p>
          Your order has been confirmed. We will contact you shortly.. Happy
          Shopping
        </p>
        <Button variant={"icon-button"} title="Back to Shoppig" />
      </div>
    </Layout>
  );
}
