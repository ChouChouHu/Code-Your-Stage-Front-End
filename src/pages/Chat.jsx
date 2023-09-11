// Below are all the components used on this page.
// If you need to modify a component, please look for clues to make changes in the respective component file.
import { useRef, useState } from "react";
import Layout from "../partials/Layout";
import CommentBoxTextarea from "../partials/chat/CommentBox";
import Sidebar from "../partials/chat/Sidebar";

function Chat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const messageWindowRef = useRef(null);
  const handleClickSending = async () => {
    await setMessages((prev) => [...prev, text]);
    messageWindowRef.current.scrollTo(0, messageWindowRef.current.scrollHeight);
  };
  return (
    <Layout>
      <div className="flex">
        <Sidebar />
        <div className="w-full h-[100vh] p-10 py-16 flex flex-col justify-between">
          <div
            ref={messageWindowRef}
            className="flex flex-col w-full p-4 py-6 h-[64%] border-solid rounded-xl overflow-scroll scrollbar-hide"
          >
            {messages.map((message, index) => (
              <div
                className={`flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="px-4 py-2 my-1 bg-white rounded-3xl">
                  {message}
                </div>
              </div>
            ))}
          </div>
          <CommentBoxTextarea
            text={text}
            setText={setText}
            onClick={handleClickSending}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Chat;
