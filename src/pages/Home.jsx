import SeatingChart from "../partials/SeatingChart";
import Layout from "../partials/Layout";

export default function Home() {
  return (
    <Layout>
      <div
        className="h-[100vh] bg-gradient-to-r from-blue-800 to-blue-400"
        // style={{ background: "linear-gradient(45deg ,#6e7f8d, #f0f3f5)" }}
      >
        <div className="flex justify-center items-start pt-[5vh] gap-10 h-[90vh]">
          <SeatingChart />
        </div>
      </div>
    </Layout>
  );
}
