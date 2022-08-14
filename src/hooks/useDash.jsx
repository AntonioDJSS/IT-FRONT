import { useContext } from "react";
import DashContext from "../context/DashProvider";

const useDash = () => {
  return useContext(DashContext);
};

export default useDash;
