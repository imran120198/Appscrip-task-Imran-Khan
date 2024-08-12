import React from "react";
import styles from "../../styles/Main/Main.module.css";
import { Heart } from "lucide-react";
import Image from "next/image";

const Product = ({ products }) => {
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
            <p className="text-[12px]">
              Sign in or Create an account to see pricing
            </p>
            <div>
              <Heart />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Product;
