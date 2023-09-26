import { useState } from "react";
import CommentBoxTextarea from "./CommentBox";
import useSessionMessages from "../../../hooks/chat/useSessionMessages";
import useSendingSessionMessage from "../../../hooks/chat/useSendingSessionMessage";
import Messages from "./Messages";

export default function Window({ activeSessionId }) {
  const { messages, mutate } = useSessionMessages(activeSessionId);
  const { trigger: sendSessionMessage, messages: newMessagesAfterSending } = useSendingSessionMessage(activeSessionId);
  const [commentText, setCommentText] = useState("");

  const handleClickSending = async () => {
    // mutate({messages: [ ...messages, commentText ]}, {revalidate: false});
    // await sendSessionMessage({ content: commentText });
    // mutate({messages: newMessagesAfterSending});
  };

  return (
    <div className="w-full h-full p-10 pb-6 flex flex-col justify-between">
      <Messages messages={messages} />
      <CommentBoxTextarea
        text={commentText}
        setText={setCommentText}
        onClick={handleClickSending}
      />
    </div>
  );
}
