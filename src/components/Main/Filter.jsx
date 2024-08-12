import React from "react";
import styles from "../../styles/Main/Filter.module.css";
import CustomSelect from "../CustomSelect";

const Filter = ({ filters, onChange }) => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.custom}>
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </div>
      {filters.map((filter, index) => (
        <div key={index} className={styles.filter}>
          <CustomSelect
            label={filter.label}
            options={filter.options}
            onChange={(value) => onChange(filter.name, value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Filter;
