// Below are all the components used on this page.
// If you need to modify a component, please look for clues to make changes in the respective component file.
import { useState } from "react";
import Layout from "../partials/Layout";
import Sidebar from "../partials/chat/Sidebar";
import MessageWindow from "../partials/chat/MessageWindow";

function Chat() {
  const [activeSessionId, setActiveSessionId] = useState(null);

  return (
    <Layout>
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar
          activeSessionId={activeSessionId}
          setActiveSessionId={setActiveSessionId}
        />
        {activeSessionId && <MessageWindow activeSessionId={activeSessionId} />}
      </div>
    </Layout>
  );
}

export default Chat;
