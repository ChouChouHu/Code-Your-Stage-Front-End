// Below are all the components used on this page.
// If you need to modify a component, please look for clues to make changes in the respective component file.
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import Modal from "../components/Modal";
import Colleges from "../partials/dashboard/Colleges";
import Grade from "../partials/dashboard/Grade";
import ApplicationTime from "../partials/dashboard/ApplicationTime";
import Abilities from "../partials/dashboard/Abilities";

import AbilitiesForm from "../partials/dashboard/AbilitiesForm";
import Layout from "../partials/Layout";

function Dashboard() {
  return (
    <Layout>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        {/* Welcome banner */}
        <WelcomeBanner />
        {/* Dashboard actions */}
        <div className="sm:flex sm:justify-between sm:items-center mb-8">
          {/* Left: Avatars */}
          <DashboardAvatars />
          {/* Right: Actions */}
          <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
            {/* Filter button */}
            <FilterButton />
            {/* Datepicker built with flatpickr */}
            <Datepicker />
            {/* Add view button */}
            <button
              className="btn bg-school hover:bg-orange-500 text-white duration-300"
              onClick={() => alert("Sorry, 現在還沒有任何功能喔")}
            >
              <svg
                className="w-4 h-4 fill-current opacity-50 shrink-0"
                viewBox="0 0 16 16"
              >
                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span className="hidden xs:block ml-2">Add view</span>
            </button>
          </div>
        </div>
        <Modal />
        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          <Grade />
          <ApplicationTime />
          <Colleges />
          <AbilitiesForm />
          <Abilities />
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
