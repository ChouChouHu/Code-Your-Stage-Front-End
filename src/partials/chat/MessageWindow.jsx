import { useEffect, useRef, useState } from "react";
import CommentBoxTextarea from "./CommentBox";
import useSessionMessages from "../../hooks/chat/useSessionMessages";
import useSendingSessionMessage from "../../hooks/chat/useSendingSessionMessage";

function MessageWindow({ activeSessionId }) {
  const { messages: fetchedMessages, mutate } = useSessionMessages(activeSessionId);
  const [displayedMessages, setMessages] = useState(fetchedMessages || []);
  const messageWindowRef = useRef(null);

  useEffect(() => {
    if (fetchedMessages) setMessages(fetchedMessages);
  }, [fetchedMessages]);

  useEffect(() => {
    messageWindowRef.current.scrollTo(0, messageWindowRef.current.scrollHeight);
  }, [displayedMessages]);

  const { trigger: sendSession, isMutating: isMessageSending } = useSendingSessionMessage(activeSessionId);
  const [commentText, setCommentText] = useState("");

  const handleClickSending = async () => {
    setMessages((prev) => [...prev, commentText]);
    sendSession({ content: commentText });
  };

  useEffect(() => {
    if (!isMessageSending) mutate();
  }, [isMessageSending])

  const isOdd = (index) => index % 2 === 0;

  return (
    <div className="w-full h-full p-10 pb-6 flex flex-col justify-between">
      <div
        ref={messageWindowRef}
        className="flex flex-col w-full p-4 py-6 h-[64%] border-solid rounded-xl overflow-scroll scrollbar-hide"
      >
        {displayedMessages.map((message, index) => (
          <div
            className={`flex ${isOdd(index) ? "justify-end" : "justify-start"}`}
            key={message}
          >
            <div
              className={`px-4 py-2 my-1 rounded-3xl max-w-[80%] ${
                isOdd(index) ? "bg-orange-300 text-white" : "bg-white"
              }`}
            >
              {message}
            </div>
          </div>
        ))}
      </div>
      <CommentBoxTextarea
        text={commentText}
        setText={setCommentText}
        onClick={handleClickSending}
      />
    </div>
  );
}

export default MessageWindow;
