import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import styles from "../styles/CustomSelect.module.css";

const CustomSelect = ({ options, label, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value) => {
    let newSelectedValues;
    if (selectedValues.includes(value)) {
      newSelectedValues = selectedValues.filter((item) => item !== value);
    } else {
      newSelectedValues = [...selectedValues, value];
    }
    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues);
  };

  return (
    <div className={styles.selectContainer}>
      <div className={styles.labelContainer} onClick={handleToggle}>
        <div className={styles.label}>
          <label>{label}</label>
          <p>All</p>
        </div>

        <span className={styles.arrow}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>

      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleOptionClick(option.value)}
            >
              <input
                className="mr-2"
                type="checkbox"
                checked={selectedValues.includes(option.value)}
                readOnly
              />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
