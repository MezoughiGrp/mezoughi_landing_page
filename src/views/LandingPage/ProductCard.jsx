import React from "react";
import "./productCard.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Flex, Progress } from "antd";

import Prod1 from "../../assets/images/test1.png";
import Prod2 from "../../assets/images/test2.png";
import Prod3 from "../../assets/images/test3.png";
import Prod4 from "../../assets/images/test4.png";

const ProductCard = ({
  title,
  name,
  image,
  description,
  percentage1,
  percentage2,
  percentage3,
  percentage4,
  categorie,
  index,
}) => {
  return (
    <div className="product-card-wrapper">
      <div className="prod-card-left">
        <div className="left-top">
          <div className="prod-img-wrapper">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="left-center"></div>
        <div className={`left-bottom left-bottom-${index}`}>{title}</div>
      </div>
      <div className="prod-card-right">
        <div className="title">
          <div className={`text text-${index}`}>{name}</div>
        </div>
        <div className="category">
          <div className="label">Catégorie : </div>
          <div className={`value text-${index}`}>{categorie}</div>
        </div>
        <div className="descriprion">
        {description}
        </div>
        <div className="prod-features">
          <div className="left">
            <div className="prod-feature">
              <div className="icon">
                <Progress
                  type="circle"
                  percent={percentage1}
                  format={(percent) => `${percent}`}
                  strokeWidth={12}
                  strokeColor="#FC6D26"
                />
              </div>
              <div className="text">Résistance aux chocs</div>
            </div>

            <div className="prod-feature">
              <div className="icon">
                <Progress
                  type="circle"
                  percent={percentage2}
                  format={(percent) => `${percent}`}
                  strokeWidth={12}
                  strokeColor="#ACD377"
                />
              </div>
              <div className="text">Résistance à la chaleur</div>
            </div>
          </div>

          <div className="right">
            <div className="prod-feature">
              <div className="icon">
                <Progress
                  type="circle"
                  percent={percentage3}
                  format={(percent) => `${percent}`}
                  strokeWidth={12}
                  strokeColor="#1890ff"
                />
              </div>
              <div className="text">Résistance chimique</div>
            </div>

            <div className="prod-feature">
              <div className="icon">
                <Progress
                  type="circle"
                  percent={percentage4}
                  format={(percent) => `${percent}`}
                  strokeWidth={12}
                  strokeColor="#7E00BC"
                />
              </div>
              <div className="text">Facilité de façonnage</div>
            </div>
          </div>
        </div>

        <div className="swiper-sub-products-cards">
          <Swiper spaceBetween={10} slidesPerView={4} className="custom-swiper">
            <SwiperSlide className="sub-prod-card">
              <div className="product-card">
                <div className="top">
                  <img src={Prod1} alt="" />
                </div>
                <div className="bottom">
                  <div className="title"></div>
                  <div className="price"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="sub-prod-card">
              <div className="product-card">
                <div className="top">
                  <img src={Prod4} alt="" />
                </div>
                <div className="bottom">
                  <div className="title"></div>
                  <div className="price"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="sub-prod-card">
              <div className="product-card">
                <div className="top">
                  <img src={Prod2} alt="" />
                </div>
                <div className="bottom">
                  <div className="title"></div>
                  <div className="price"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="sub-prod-card">
              <div className="product-card">
                <div className="top">
                  <img src={Prod3} alt="" />
                </div>
                <div className="bottom">
                  <div className="title"></div>
                  <div className="price"></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="sub-prod-card">
              <div className="product-card">
                <div className="top">
                  <img src={Prod1} alt="" />
                </div>
                <div className="bottom">
                  <div className="title"></div>
                  <div className="price"></div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
