import Parchment from "@components/Parchment/Parchment";
import { Outlet } from "react-router-dom";
const ClassTest = () => {
  return (
    <Parchment>
      <Outlet />
    </Parchment>
  );
};

export default ClassTest;
