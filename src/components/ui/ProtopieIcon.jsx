import React from "react";
import protopieLogo from "../../assets/Images/protopie2.svg";

const ProtopieIcon = ({ className = "w-24 h-auto" }) => {
  return <img src={protopieLogo} alt="ProtoPie Logo" className={className} />;
};

export default ProtopieIcon;