import React, { useState } from "react";
import styles from "../../styles/Main/Main.module.css";
import { Heart } from "lucide-react";
import Image from "next/image";

const Product = ({ products }) => {
  const [likedProducts, setLikedProducts] = useState({});

  const handleLikeClick = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the liked status for the product
    }));
  };
  return (
    <section className={styles.products}>
      {products.map((product) => (
        <div key={product.id} className={styles.productCard}>
          <Image
            src={product.image}
            width={1000}
            height={1000}
            alt={product.title}
            className={styles.productImage}
          />
          <h4 className="text-left">{product.title.substring(0, 25)}</h4>
          <div className={styles.productCardBottom}>
            <p>Sign in or Create an account to see pricing</p>
            <div onClick={() => handleLikeClick(product.id)}>
              <Heart
                fill={likedProducts[product.id] ? "red" : "none"}
                color={likedProducts[product.id] ? "red" : "black"}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Product;
