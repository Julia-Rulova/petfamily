import { List, ListItem } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white px-4 py-3 flex flex-row justify-between items-start">
      <List>
        <ListItem className="flex flex-row items-center gap-1">
          <Icon
            icon="ic:baseline-email"
            width="18"
            height="18"
            style={{ color: "#fff" }}
          />
          Email
        </ListItem>

        <ListItem className="flex flex-row items-center gap-1">
          <Icon
            icon="ic:baseline-telegram"
            width="18"
            height="18"
            style={{ color: "#fff" }}
          />
          Telegram
        </ListItem>

        <ListItem className="flex flex-row items-center gap-1">
          <Icon
            icon="solar:programming-bold"
            width="18"
            height="18"
            style={{ color: "#fff" }}
          />
          Telegram Channel
        </ListItem>
      </List>

      <span>© 2024. Kirill Development Group</span>
    </footer>
  );
}

export default Footer;
