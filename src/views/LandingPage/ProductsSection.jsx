import "./productsSection.scss";
import { useState } from "react";
import ProductCard from "./ProductCard";

import PROD1 from "../../assets/images/product3.png";
import PROD2 from "../../assets/images/product2.png";
import PROD3 from "../../assets/images/product1.png";
import PROD4 from "../../assets/images/product5.png";

const products = [
  {
    index: 1,
    title: "GRANULES ABS",
    name: "PLASTIQUE ABS",
    image: PROD1,
    description: ` Le plastique ABS (acrylonitrile-butadiène-styrène) est un
    thermoplastique polyvalent utilisé dans l'automobile,
    l'électroménager, les jouets, etc. Sa résistance aux chocs, à la
    chaleur et aux produits chimiques en fait un matériau précieux. Facile
    à transformer, il est essentiel dans la fabrication de pièces
    résistantes et complexes.`,
    percentage1: 75,
    percentage2: 60,
    percentage3: 85,
    percentage4: 95,
    categorie: "ABS",
  },
  {
    index: 2,
    title: "GRANULES PET",
    name: "PLASTIQUE PET",
    image: PROD2,
    description: ` Le plastique PET (acrylonitrile-butadiène-styrène) est un
    thermoplastique polyvalent utilisé dans l'automobile,
    l'électroménager, les jouets, etc. Sa résistance aux chocs, à la
    chaleur et aux produits chimiques en fait un matériau précieux. Facile
    à transformer, il est essentiel dans la fabrication de pièces
    résistantes et complexes.`,
    percentage1: 75,
    percentage2: 60,
    percentage3: 85,
    percentage4: 95,
    categorie: "PET",
  },
  {
    index: 3,
    title: "GRANULES PP",
    name: "PLASTIQUE PP",
    image: PROD3,
    description: ` Le plastique PP (acrylonitrile-butadiène-styrène) est un
    thermoplastique polyvalent utilisé dans l'automobile,
    l'électroménager, les jouets, etc. Sa résistance aux chocs, à la
    chaleur et aux produits chimiques en fait un matériau précieux. Facile
    à transformer, il est essentiel dans la fabrication de pièces
    résistantes et complexes.`,
    percentage1: 75,
    percentage2: 60,
    percentage3: 85,
    percentage4: 95,
    categorie: "PP",
  },
  {
    index: 4,
    title: "GRANULES HDPE",
    name: "PLASTIQUE HDPE",
    image: PROD4,
    description: ` Le plastique HDPE (acrylonitrile-butadiène-styrène) est un
    thermoplastique polyvalent utilisé dans l'automobile,
    l'électroménager, les jouets, etc. Sa résistance aux chocs, à la
    chaleur et aux produits chimiques en fait un matériau précieux. Facile
    à transformer, il est essentiel dans la fabrication de pièces
    résistantes et complexes.`,
    percentage1: 75,
    percentage2: 60,
    percentage3: 85,
    percentage4: 95,
    categorie: "HDPE",
  },
];

const ProductsSection = () => {
  const [openCardIndex, setOpenCardIndex] = useState(0);

  const toggleCard = (index) => {
    setOpenCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="products-page-home">
      <div className="slider">
        {products.map((prod, index) => (
          <div
            className={`card bg-card-${index} ${
              openCardIndex === index ? "open-card" : ""
            }`}
            key={prod.index}
          >
            <div
              className={`prod-card-details-wrapper ${
                openCardIndex === index ? "open-card-details" : ""
              }`}
            >
              <ProductCard
                title={prod.title}
                name={prod.name}
                image={prod.image}
                description={prod.description}
                percentage1={prod.percentage1}
                percentage2={prod.percentage2}
                percentage3={prod.percentage3}
                percentage4={prod.percentage4}
                categorie={prod.categorie}
                index={prod.index}
                key={prod.index}
              />
            </div>
            <img
              src={prod.image}
              alt=""
              className={`overlay1 ${openCardIndex === index ? "hide" : ""}`}
            />
            <div
              className={`overlay2 ${openCardIndex === index ? "hide" : ""}`}
            ></div>

            <div
              className={`mini-card-title mini-card-title-${prod.index} ${openCardIndex === index ? "hide" : ""}`}
            
            >
             {prod.title}
            </div>

            <div
              className={`card-btn ${openCardIndex === index ? "hide" : ""}`}
              onClick={() => toggleCard(index)}
            >
              <img src={prod.image} alt="" />
            </div>
            <div
              className={`btn-overlay ${openCardIndex === index ? "hide" : ""}`}
              onClick={() => toggleCard(index)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
