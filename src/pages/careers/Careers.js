import React from "react";

export default function Careers() {
  return <div className="careers"></div>;
}

//loader function
const careersLoader = async () => {};
const res = await fetch(`http://localhost:5000`);

return res.json();
