import { useEffect, useRef, useState } from "react";
import CommentBoxTextarea from "./CommentBox";
import useSessionMessages from "../../hooks/chat/useSessionMessages";
import useSendingSessionMessage from "../../hooks/chat/useSendingSessionMessage";

function MessageWindow({ activeSessionId }) {
  // get messages
  const { messages: fetchedMessages } = useSessionMessages(activeSessionId);
  const [displayedMessages, setDisplayedMessages] = useState(fetchedMessages || []);

  useEffect(() => {
    if (fetchedMessages) setDisplayedMessages(fetchedMessages);
  }, [fetchedMessages]);

  // send message and update
  const { trigger: sendSessionMessage, messages: newMessagesAfterSending } = useSendingSessionMessage(activeSessionId);
  const [commentText, setCommentText] = useState("");

  const handleClickSending = async () => {
    setDisplayedMessages((prev) => [...prev, commentText]);
    await sendSessionMessage({ content: commentText });
    // async await for loading state of comment box
  };

  useEffect(() => {
    if (newMessagesAfterSending) setDisplayedMessages(newMessagesAfterSending)
  }, [newMessagesAfterSending])

  // scroll to bottom when receiving new messages
  const messageWindowRef = useRef(null);
  useEffect(() => {
    messageWindowRef.current.scrollTo(0, messageWindowRef.current.scrollHeight);
  }, [displayedMessages]);

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
