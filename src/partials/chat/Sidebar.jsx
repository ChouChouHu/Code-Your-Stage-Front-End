import {
  Button,
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix
} from "@material-tailwind/react";
import {
  PlusIcon,
  ArchiveBoxXMarkIcon,
  PencilIcon
} from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import useSessions from "../../hooks/chat/useSessions";

export default function Sidebar() {
  const data = useSessions();
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <Button
        onClick={() => alert("plus")}
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
        {data &&
          data.map((chat) => (
            <ListItem className="group relative" ripple={false}>
              <ListItemPrefix>
                <ChatBubbleBottomCenterIcon className="h-5 w-5 mr-2" />
              </ListItemPrefix>
              {chat.title}
              <ListItemSuffix className="flex gap-2 opacity-0 group-hover:opacity-100">
                <PencilIcon onClick={() => alert("edit")} className="h-5 w-5" />
                <ArchiveBoxXMarkIcon
                  onClick={() => alert("del")}
                  className="h-5 w-5"
                />
              </ListItemSuffix>
            </ListItem>
          ))}
      </List>
    </Card>
  );
}
