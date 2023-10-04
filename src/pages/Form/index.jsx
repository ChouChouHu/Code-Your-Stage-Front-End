import Layout from "../../partials/dashboard/Layout";
import CheckoutForm from "../../partials/dashboard/form/CheckoutForm";
import TailwindForm from "../../partials/dashboard/form/TailwindForm";

export default function Form() {
  return (
    <Layout>
      <div className="flex p-14 items-start justify-center">
        <TailwindForm />
        <CheckoutForm />
      </div>
    </Layout>
  );
}
