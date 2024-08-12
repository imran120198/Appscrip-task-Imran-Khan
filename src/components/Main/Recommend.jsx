import React, { useState } from "react";
import styles from "../../styles/Main/Recommend.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const Recommend = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const options = [
    { value: "newest", label: "NEWEST FIRST" },
    { value: "popular", label: "POPULAR" },
    { value: "price-high-low", label: "PRICE: HIGH TO LOW" },
    { value: "price-low-high", label: "PRICE: LOW TO HIGH" },
  ];

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={handleToggle}>
        <span>{selectedOption}</span>
        <span className={styles.arrow}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      {isOpen && (
        <div className={styles.dropdownOptions}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.dropdownOption}
              onClick={() => handleOptionClick(option)}
            >
              {option.label.toUpperCase()}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommend;
