import { Button } from "../../components";
import Layout from "../../components/Layout";
import OutlineButton from "../../components/OutlineButton";
import { useRouter } from "next/router";
import LottieFile from "../../components/LottieFile";

export default function OrderSuccess() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <Layout>
      <div className="flex-center flex-col py-40 gap-4">
        <LottieFile />
        <h1 className="text-3xl font-bold">Order Placed Successfully!</h1>
        <div>
          Order ID : <b>{pid}</b>
        </div>
        <p>
          Your order has been confirmed. We will contact you shortly.. Happy
          Shopping
        </p>
        <Button
          title="Continue shopping"
          variant="icon-button"
          boxIcon="shopping-bag"
        />
      </div>
    </Layout>
  );
}
