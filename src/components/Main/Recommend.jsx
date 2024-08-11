import React, { useState } from "react";
import styles from "../../styles/Main/recommend.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const Recommend = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("RECOMMENDED");

  const options = [
    { value: "newest", label: "Newest first" },
    { value: "popular", label: "Popular" },
    { value: "price-high-low", label: "Price: high to low" },
    { value: "price-low-high", label: "Price: low to high" },
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
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recommend;
