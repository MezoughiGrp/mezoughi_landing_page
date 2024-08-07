import React from "react";
import "./leadersSection.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import PROFILEICON from "../../assets/icons/profileIcon3.png";
import EmailIcon from "../../assets/icons/emailIcon.png";
import PhoneIcon from "../../assets/icons/phoneIcon.png";

import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TbBrandThreads } from "react-icons/tb";

const LeadersSection = () => {
  return (
    <div className="leaders-section-container">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="leader-card-wrapper">
            <div className="leader-card-left"></div>
            <div className="leader-card-right">
              <div className="left-leader-card">
                <div className="top-leader-card">
                  <img src={PROFILEICON} alt="" className="profile-icon" />
                  <div className="title">MR. HAMDI MEZOUGHI</div>
                </div>
                <div className="center-leader-card">
                  Fondateur du groupe Mezoughi, est un pionnier en recyclage et
                  durabilité. Son engagement pour l'environnement l'a conduit à
                  transformer les déchets en ressources précieuses. Sous son
                  leadership, le Groupe Mezoughi révolutionne le recyclage avec
                  des solutions innovantes. Son dévouement a façonné le succès
                  de l'entreprise et son impact sur le développement durable est
                  mondial.
                </div>
                <div className="bottom-leader-card">
                  <div className="email">
                    <img src={EmailIcon} alt="" className="email-icon" />
                    <div className="text-email">hamdi.mezoughi@mzg.tn</div>
                  </div>
                  <div className="phone">
                    <img src={PhoneIcon} alt="" className="phone-icon" />
                    <div className="text-phone">+216 71 452 256</div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="social-icon-1">
                  <div className="social-icon-2">
                    <TiSocialLinkedin />
                  </div>
                </div>
                <div className="social-icon-1">
                  <div className="social-icon-2">
                    <TiSocialFacebook />
                  </div>
                </div>
                <div className="social-icon-1">
                  <div className="social-icon-2">
                    <TbBrandThreads />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="leader-card-wrapper">
            <div className="leader-card-left"></div>
            <div className="leader-card-right">
              <div className="left-leader-card">
                <div className="top-leader-card">
                  <img src={PROFILEICON} alt="" className="profile-icon" />
                  <div className="title">
                    LE DIRECTEUR COMMERCIAL INTERNATIONAL
                  </div>
                </div>
                <div className="center-leader-card">
                  Le Directeur Commercial du groupe Mezoughi est un moteur de
                  notre entreprise axée sur le recyclage. Il dirige nos
                  stratégies de vente et de croissance, jouant un rôle crucial
                  dans notre mission environnementale mondiale. Grâce à son
                  talent pour saisir de nouvelles opportunités, forger des
                  partenariats stratégiques et guider son équipe, il est un
                  pilier de notre réussite. 
                </div>
                <div className="bottom-leader-card">
                  <div className="email">
                    <img src={EmailIcon} alt="" className="email-icon" />
                    <div className="text-email">sales.marketing@mzg.tn</div>
                  </div>
                  <div className="phone">
                    <img src={PhoneIcon} alt="" className="phone-icon" />
                    <div className="text-phone">+216 71 452 256</div>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="social-icon-1">
                  <div className="social-icon-2">
                    <TiSocialLinkedin />
                  </div>
                </div>
                <div className="social-icon-1">
                  <div className="social-icon-2">
                    <TiSocialFacebook />
                  </div>
                </div>
                <div className="social-icon-1">
                  <div className="social-icon-2">
                    <TbBrandThreads />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LeadersSection;
