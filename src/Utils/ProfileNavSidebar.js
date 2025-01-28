import { AiFillHome } from "react-icons/ai";

import { TiDocumentText } from "react-icons/ti";
import { HiMiniSquares2X2 } from "react-icons/hi2";

export const SidebarLink = [
  { name: "home", icon: <AiFillHome />, link: "/" },

  { name: "dashboard", icon: <HiMiniSquares2X2 />, link: "/dashboard" },

  { name: "contact us", icon: <TiDocumentText />, link: "/contact-us" },
];
