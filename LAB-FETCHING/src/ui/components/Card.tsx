import React, { useEffect, useState } from "react";

interface Product {
  title: string;
  description: string;
  price: string;
}

export const Card: React.FC = () => {
  const [product, setProduct] = useState<Product>({ title: "", description: "", price: "" });

  useEffect(() => {
    fetch(`https://dummyjson.com/products/2`)
      .then((res) => res.json())
      .then((data: Product) => {
        setProduct(data);
      });
  }, []);

  return (
    <div className="card-container">
      <p>{product.title}</p>
      <p>Descripcion: {product.description}</p>
      <p>USD$: {product.price}</p>
    </div>
  );
};


