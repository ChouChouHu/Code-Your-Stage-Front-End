/* eslint-disable no-underscore-dangle */
import { Button, Card, Typography, List } from "@material-tailwind/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import useSessions from "../../hooks/chat/useSessions";
import ChatListItem from "./ChatListItem";
import useAddingSession from "../../hooks/chat/useAddingSession";

export default function Sidebar({ activeSessionId, setActiveSessionId }) {
  const data = useSessions();
  const { trigger: addSession } = useAddingSession();
  const handleAddSession = async () => {
    addSession();
    await alert("新增成功");
    // window.location.reload();
  };

  useEffect(() => {
    // default: display the first chat
    if (data && data.length !== 0) setActiveSessionId(data[0]._id);
  }, [data]);

  return (
    <Card className="h-full w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <Button
        onClick={handleAddSession}
        variant="outlined"
        className="text-sm flex items-center justify-center gap-1 mb-2"
      >
        <PlusIcon className="h-5 w-5" />
        New Chat
      </Button>
      <div className="p-4">
        <Typography variant="h5" color="blue-gray">
          History
        </Typography>
      </div>
      <List className="pt-0">
        {data && data.length !== 0
          ? data.map((chat) => (
              <ChatListItem
                title={chat.title}
                id={chat._id}
                activeSessionId={activeSessionId}
                setActiveSessionId={setActiveSessionId}
              />
            ))
          : "沒有任何對話"}
      </List>
    </Card>
  );
}
