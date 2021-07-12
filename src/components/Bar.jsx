import React from "react";

function Bar({ data, dark }) {
  const { icon, name, level } = data;
  const bar_width = `${level}%`;
  return (
    <div className={dark ? "bar_dark" : "bar"}>
      <div className="bar_wrapper d-flex" style={{ width: bar_width }}>
        <span className="bar_name">
          <img src={icon} alt="icon" className="bar_icon" />
          {name}
        </span>
        <level className="level">{level}%</level>
      </div>
    </div>
  );
}

export default Bar;
