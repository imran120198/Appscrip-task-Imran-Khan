"use client";

import React, { useEffect, useState } from "react";
import styles from "../../styles/Main/Main.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Recommend from "./Recommend";
import Product from "./Product";
import axios from "axios";
import Filter from "./Filter";
import filters from "../../Filter.json";

const Main = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(products);

  const handleFilterChange = (filterName, filterValue) => {
    setSelectedFilters(prev => ({ ...prev, [filterName]: filterValue }));
  };

  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.intro}>
          <h3>DISCOVER OUR PRODUCTS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.itemContainer2}>
          <button onClick={toggleFilters} className={styles.toggleButton}>
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
          <span onClick={toggleFilters}>
            {showFilters ? <ChevronLeft /> : <ChevronRight />}
          </span>
        </div>
        <div className={styles.verticalLine}></div>
        <div>
          <Recommend />
        </div>
      </div>
      <div className={styles.contentWrapper}>
        {showFilters && (
          <div className={`${styles.content} ${styles.filterWrapperMobile}`}>
            <aside>
              <Filter filters={filters} onChange={handleFilterChange} />
            </aside>
          </div>
        )}
        <Product products={products} />
      </div>
    </>
  );
};

export default Main;
