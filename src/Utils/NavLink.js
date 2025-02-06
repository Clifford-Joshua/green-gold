import { FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";

export const Links = [
  { name: "home", icon: <FaHome />, link: "/" },
  { name: "academics", icon: <FaBook />, link: "/course" },
  { name: "about us", icon: <FaUsers />, link: "about-us" },
  { name: "dashboard", icon: <GiGraduateCap />, link: "dashBoard" },
];
