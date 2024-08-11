import React from "react";

const Filter = ({ onChange }) => {
  const sections = [
    { title: "IDEAL FOR", items: ["Men", "Women", "Baby & Kid"] },
    { title: "OCCASION", items: ["Casual", "Formal", "Party"] },
    { title: "WORK", items: ["Office", "Outdoor", "Home"] },
    { title: "FABRIC", items: ["Cotton", "Silk", "Wool"] },
    { title: "SEGMENT", items: ["Premium", "Economy"] },
    { title: "SUITABLE FOR", items: ["Summer", "Winter", "All Seasons"] },
    { title: "RAW MATERIALS", items: ["Cotton", "Polyester", "Nylon"] },
  ];
  return <div>Filter</div>;
};

export default Filter;
