import React from "react";
import ReactDOM from "react-dom";
interface PortalProps {
  components: React.ReactNode;
  root?: "outer";
}

const Portal = ({ components, root = "outer" }: PortalProps) => {
  return (
    <>{ReactDOM.createPortal(components, document.getElementById(root)!)}</>
  );
};

export default Portal;
