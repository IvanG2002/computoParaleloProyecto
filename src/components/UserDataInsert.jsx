import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";

function UserDataInsert() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsName = ["N.Base", "N.Neta", "Retenciones"];
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <br />
      <div role="tablist" className="tabs tabs-lifted tabs-lg">
        {[0, 1, 2].map((index) => (
          <a
            key={index}
            role="tab"
            className={`tab ${activeTab === index ? "tab-active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tabsName[index]}
          </a>
        ))}
      </div>
      <br />
      {activeTab === 0 && <Form1 />}
      {activeTab === 1 && <Form2 />}
      {activeTab === 2 && <Form3 />}
    </>
  );
}

export default UserDataInsert;
