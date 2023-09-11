import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix
} from "@material-tailwind/react";
import { InboxIcon } from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h4" color="blue-gray">
          History
        </Typography>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 mr-2" />
          </ListItemPrefix>
          2023/09/22
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 mr-2" />
          </ListItemPrefix>
          2023/09/21
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 mr-2" />
          </ListItemPrefix>
          2023/09/19
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 mr-2" />
          </ListItemPrefix>
          2023/09/10
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5 mr-2" />
          </ListItemPrefix>
          2023/09/02
        </ListItem>
      </List>
    </Card>
  );
}
