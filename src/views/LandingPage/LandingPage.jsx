import { useState } from "react";
import "./landingPage.scss";

import BGHOME from "../../assets/images/client.png";
import MGLOGO from "../../assets/logos/MGLogo1.png";
import RECYCLE from "../../assets/icons/recycle.png";
import FACTORY from "../../assets/images/factory5.png";
import CIRCLE1 from "../../assets/images/circle1.png";
import DEMOVID from "../../assets/images/demoVid.png";
import EXPLORE from "../../assets/images/explorer.png";
import FB from "../../assets/icons/fb.png";
import LIN from "../../assets/icons/lin.png";
import PH from "../../assets/icons/ph.png";
import PLATFORM from "../../assets/icons/plat.png";
import MEDEX from "../../assets/images/medex.png";
import GENOIL from "../../assets/images/genoil.png";
import TICKICON from "../../assets/icons/tick1.png";
import ECOPLAST from "../../assets/images/ecoplast.png";
import RECYCLINGMAXIMAL from "../../assets/icons/reyclingIcon2.png";
import SECURITEGARANTIE from "../../assets/icons/reyclingIcon3.png";
import COLLECTE from "../../assets/icons/reyclingIcon1.png";
import CONFORMITE from "../../assets/icons/reyclingIcon4.png";
import FACTORYIMAGE2 from "../../assets/images/recyclingFactory2.jpg";
import FACTORYIMAGE3 from "../../assets/images/recyclingFactory3.jpg";
import LOGO1 from "../../assets/logos/cocaCola.png";
import CONTACTUSIMG from "../../assets/icons/contactIcon1.png";

import VIDEO from "../../assets/videos/videoBg.mp4";

import { IoPlayCircleOutline } from "react-icons/io5";
import { ImArrowUpRight2 } from "react-icons/im";

import { FaPlay } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import { HiMail } from "react-icons/hi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { PiStampBold } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import { PiBuildingsBold } from "react-icons/pi";
import { FiSend } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";

import { FiPhoneCall } from "react-icons/fi";

import ProductsSection from "./ProductsSection";
import TestimonialsSlider from "./TestimonialsSlider";
import LeadersSection from "./LeadersSection";

import { UserOutlined } from "@ant-design/icons";
import { Button, Input, Form } from "antd";
import { Select, Space } from "antd";
import { useRef } from "react";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2'

const LandingPage = () => {
  const [openConatct, setOpenContact] = useState(false);
  const toggleContact = () => {
    setOpenContact(!openConatct);
  };

  const initialPosition =
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3241.943187946892!2d10.880735074893803!3d35.65377133148335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzEzLjYiTiAxMMKwNTInNTkuOSJF!5e0!3m2!1sfr!2stn!4v1710306941805!5m2!1sfr!2stn";

  const EcoplastPosition =
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3241.943187946892!2d10.880735074893803!3d35.65377133148335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzEzLjYiTiAxMMKwNTInNTkuOSJF!5e0!3m2!1sfr!2stn!4v1710306941805!5m2!1sfr!2stn";
  const MedexPosition =
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3241.943187946892!2d10.880735074893803!3d35.65377133148335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzXCsDM5JzEzLjYiTiAxMMKwNTInNTkuOSJF!5e0!3m2!1sfr!2stn!4v1710306941805!5m2!1sfr!2stn";
  const GenoilPosition =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.998715687707!2d10.632009074902568!3d35.82450722209166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275ba562e8f27%3A0x3e9a8b11ddff7418!2ssidi%20abdelhamid%20.%20sousse!5e0!3m2!1sfr!2stn!4v1710307706157!5m2!1sfr!2stn";

  const [cardPosition, setcardPosition] = useState(initialPosition);

  const handleCardClick = (position) => {
    setcardPosition(position);
    console.log("ma position ", position);
  };

  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const accueilRef = useRef(null);
  const aproposRef = useRef(null);
  const servicesRef = useRef(null);
  const produitsRef = useRef(null);

  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };
  // const { TextArea } = Input;
  // START CONTACT SECTION EMAILING CONFIGURATION //
  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   console.log('DATA : '  , formData , event.target)

  //   formData.append("access_key", "e0cc6370-305c-4982-bd5d-e9144439e0d7");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: json,
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //   }
  // };
  // END CONTACT SECTION  ENAILING CONFIGURATION //

  const { TextArea } = Input;

  const [service, setService] = useState("Service");

  // Handle service selection
  const handleChange = (value) => {
    setService(value); // Store selected value in state
  };

  // Form submission handler
  const onFinish = async (values) => {
    console.log("💥 ENTERED THE SUBMIT FN", values);

    const formData = new FormData();
    // Append all values from the form
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    formData.append("access_key", "e0cc6370-305c-4982-bd5d-e9144439e0d7");

    console.log("💥 FORMDATA ", formData);
    // Convert formData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        console.log("Success", result);
        Swal.fire({
          title: "Bravo !",
          text: "L'équipe Mezoughi a bien reçu votre message .",
          icon: "success",
          confirmButtonText: "Merci",
          customClass: {
            confirmButton: 'custom-confirm-button'
          }
        });
      } else {
        console.log("Failed", result);
        Swal.fire({
          title: "Erreur !",
          text: "Une erreur s'est produite lors de l'envoi de votre message .",
          icon: "error"
        });
      }
    } catch (err) {
      console.error("Error submitting the form", err);
    }
  };

  return (
    <div className="page-container">
      {/* Start NavBar Section */}
      <div className="navbar-wrapper">
        {/* logo */}
        <div className="logo-wrapper">
          <div className="logo-img">
            <img src={MGLOGO} alt="" />
          </div>
          <div className="logo-text">
            <div className="logo-text-top">MEZOUGHI</div>
            <div className="logo-text-bottom">GROUP</div>
          </div>
        </div>

        {/* Menu */}
        <div className="menu-wrapper">
          <ul className="menu-items">
            <li
              className="menu-item"
              onClick={() => scrollToSection(accueilRef)}
            >
              Acceuil
            </li>
            <li
              className="menu-item"
              onClick={() => scrollToSection(aproposRef)}
            >
              A propos
            </li>
            <li
              className="menu-item"
              onClick={() => scrollToSection(servicesRef)}
            >
              Services
            </li>
            <li
              className="menu-item"
              onClick={() => scrollToSection(produitsRef)}
            >
              Produits
            </li>
          </ul>
        </div>

        {/* Contact Us Button */}
        <div className="contact-us-wrapper">
          <div
            className={`toggle ${openConatct ? "open-toggle" : "close-toggle"}`}
            onClick={toggleContact}
          >
            <img src={RECYCLE} alt="" />
          </div>

          <div className={`item1 ${openConatct ? "active" : "inActive"}`}>
            <img src={LIN} alt="" />
          </div>
          <div className={`item2 ${openConatct ? "active" : "inActive"}`}>
            <img src={FB} alt="" />
          </div>
          <div className={`item3 ${openConatct ? "active" : "inActive"}`}>
            <img src={PH} alt="" />
          </div>
          <div className={`item4 ${openConatct ? "active" : "inActive"}`}>
            <img src={PLATFORM} alt="" />
          </div>
        </div>
      </div>
      {/* End NavBar Section */}

      {/* Start Home Section */}

      <div className="home-section-wrapper" ref={accueilRef}>
        <div className="home-section-top">
          <div className="home-title">
            <div className="left">MEZOUGHI</div>
            <div className="center">
              <img src={BGHOME} alt="" />
            </div>
            <div className="right">RECYCLING</div>
          </div>
        </div>
        <div className="home-section-center">DURABILITE EN ACTION</div>

        <div className="home-section-bottom">
          <div className="home-section-bottom-left">
            <div className="left">
              <div className="top">
                <div className="circle-image-wrapper">
                  <img src={CIRCLE1} alt="" />
                </div>
                <div className="circle-video-wrapper">
                  <img src={DEMOVID} alt="" />
                  <div className="video-icon-wrapper">
                    <IoPlayCircleOutline />
                  </div>
                </div>
              </div>
              <div className="bottom">
                <div className="title">
                  <div className="text">À Propos De Nous</div>
                  <div className="line-icon"></div>
                </div>
                <div className="description-top">
                  Nous sommes spécialisés dans le recyclage de divers
                  thermoplastiques <br /> y compris les plastiques d'ingénierie
                </div>
                <div className="description-bottom">
                  <div className="left-desc">
                    <ImArrowUpRight2 />
                  </div>
                  <div className="right-desc">
                    comme les débris, les matériaux épurés, ou les granulés
                    broyés.
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <img src={FACTORY} alt="" />
            </div>
          </div>
          <div className="home-section-bottom-right">
            <div className="card-stat">
              <div className="card-top">
                <div className="stat">25</div>
                <div className="plus-icon">{/* <FaPlus /> */}</div>
              </div>
              <div className="card-bottom">Ans Expérience</div>
            </div>

            <div className="card-stat">
              <div className="card-top">
                <div className="stat">60 </div>
                <div className="plus-icon">{/* <FaPlus /> */}</div>
              </div>
              <div className="card-bottom">Clients Statisfaits</div>
            </div>

            <div className="card-stat">
              <div className="card-top">
                <div className="stat">30</div>
                <div className="plus-icon">{/* <FaPlus /> */}</div>
              </div>
              <div className="card-bottom">Produits Fabriqués</div>
            </div>
          </div>
        </div>
      </div>
      {/* End Home Section */}

      {/* Start Video Section */}
      <div className="video-section-container">
        <div className="video-section-wrapper">
          <div className="video-section-top">
            <div className="video-top-left">
              LE PROCESSUS INNOVANT DE RECYCLAGE DU PLASTIQUE <br /> DANS NOTRE
              USINE
            </div>
            <div className="video-top-right">
              Un Voyage Fascinant à Travers les Étapes de Tri, de Traitement et
              de Transformation, pour Comprendre l'Impact Positif que Nous Avons
              sur l'Environnement et la Création d'une Économie Circulaire
            </div>
          </div>
          <div className="video-section-bottom-wrapper">
            <div className="explore-more-wrapper">
              <img src={EXPLORE} alt="Explore More" />
            </div>

            <div className="video-section-bottom" onClick={toggleVideo}>
              <video
                autoPlay
                muted
                loop
                className={`video-bg ${showVideo ? "show" : ""}`}
              >
                <source src={VIDEO} type="video/mp4" />
              </video>
              {!showVideo && (
                <div className="play-button-wrapper">
                  <FaPlay />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* End Video Section */}

      <div className="divider"></div>

      {/* Start What We Do Section */}
      <div className="what-we-do-section-wrapper" ref={servicesRef}>
        <div className="what-we-do-left">
          <div className="cards-left-side">
            <div className="what-we-do-card">
              <div className="card-top">
                <img src={RECYCLINGMAXIMAL} alt="" className="recyclingIcon1" />
              </div>
              <div className="card-center">
                <div className="card-title">RECYCLAGE MAXIMAL</div>
                <div className="card-description">
                  Traitement efficace des matières plastiques, notamment le PET,
                  pour une réutilisation optimale .
                  <div className="btn-see-more">
                    <TiArrowRight />
                  </div>
                </div>
              </div>
            </div>

            <div className="what-we-do-card">
              <div className="card-top">
                <img src={SECURITEGARANTIE} alt="" className="recyclingIcon2" />
              </div>
              <div className="card-center">
                <div className="card-title">SÉCURITÉ GARANTIE</div>
                <div className="card-description">
                  Gestion conforme aux normes environnementales et de sécurité,
                  assurant la protection des travailleurs et de l'environnement
                  .
                  <div className="btn-see-more">
                    <TiArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cards-right-side">
            <div className="what-we-do-card">
              <div className="card-top">
                <img src={COLLECTE} alt="" className="recyclingIcon3" />
              </div>
              <div className="card-center">
                <div className="card-title">COLLECTE SPÉCIALISÉE</div>
                <div className="card-description">
                  Ramassage professionnel des déchets plastiques avec une
                  supervision constante pour une récupération rapide et efficace
                  .
                  <div className="btn-see-more">
                    <TiArrowRight />
                  </div>
                </div>
              </div>
            </div>

            <div className="what-we-do-card">
              <div className="card-top">
                <img src={CONFORMITE} alt="" className="recyclingIcon4" />
              </div>
              <div className="card-center">
                <div className="card-title">CONFORMITÉ LÉGALE</div>
                <div className="card-description">
                  Respect strict de toutes les réglementations environnementales
                  en vigueur pour une activité durable et responsable .
                  <div className="btn-see-more">
                    <TiArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="what-we-do-right">
          <div className="section-title">CE QUE NOUS FAISONS</div>
          <div className="section-main-title">
            NOTRE ENGAGEMENT ENVIRONNEMENTAL DURABLE
          </div>
          <div className="section-description">
            Dotés de notre propre matériel de tri, chargement et bennes, ainsi
            que de nos équipes dédiées, Mezoughi Group assure une gestion des
            déchets respectant à 100% toutes les législations environnementales
            et de sécurité. Avec notre expertise, nous atteignons un taux de
            recyclage de plus de 95%, offrant ainsi une tranquillité d'esprit
            totale quant à la gestion de vos déchets.
          </div>
          <div className="section-features">
            <div className="left">
              <div className="title-features">Actions Éco-Innovantes</div>
              <div className="features-list">
                <div className="feature">
                  <div className="icon">
                    <img src={TICKICON} alt="" />
                  </div>
                  <div className="text">Traitement plastique avancé</div>
                </div>

                <div className="feature">
                  <div className="icon">
                    <img src={TICKICON} alt="" />
                  </div>
                  <div className="text">Collecte spécialisée surveillée</div>
                </div>

                <div className="feature">
                  <div className="icon">
                    <img src={TICKICON} alt="" />
                  </div>
                  <div className="text">
                    Respect des Normes de Sécurité <br /> et d'Environnement
                  </div>
                </div>

                <div className="feature">
                  <div className="icon">
                    <img src={TICKICON} alt="" />
                  </div>
                  <div className="text">Engagement taux recyclage 95%</div>
                </div>

                <div className="feature">
                  <div className="icon">
                    <img src={TICKICON} alt="" />
                  </div>
                  <div className="text">Réduction des déchets à la source</div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={FACTORYIMAGE3} alt="" />
              <div className="sub-img-wrapper">
                <img src={FACTORYIMAGE2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start What We Do Section */}

      <div className="divider"></div>

      {/* Start Conglomerat Section */}
      <div className="conglomerat-section-wrapper" ref={aproposRef}>
        <div className="title">
          <div className="title1">EXPLOREZ LE CONGLOMÉRAT MEZOUGHI</div>
          <div className="title2">Leader du Recyclage Plastique</div>
        </div>
        <div className="description">
          Le groupe Mezoughi, en tête de l'industrie du recyclage des
          plastiques, opère dans trois entreprises spécialisées . Nous traitons
          une variété de thermoplastiques récupérés et de plastiques
          d'ingénierie, offrant des solutions pour les déchets post-consommation
          et industriels . Présents sur le marché européen avec des contacts
          solides en Asie et localement nous proposons des solutions adaptées à
          chaque marché .
        </div>
        <div className="conglomerat-details">
          <div className="left-conglomerat">
            <div
              className="card-conglomerat"
              onClick={() => handleCardClick(MedexPosition)}
            >
              <div className="card-left">
                <div className="conglomerat-card-title">MEDEX RECYCLING</div>
                <div className="conglomerat-contact">
                  <div className="item">
                    <div className="icon">
                      <BiSolidPhoneCall />
                    </div>
                    <div className="text">73 812 144</div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <HiMail />
                    </div>
                    <div className="text">medex.mzgh@gmail.com</div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <MdLocationOn />
                    </div>
                    <div className="text">
                      Zone Insustrielle Akouda <br />
                      4022 Sousse Tunisie
                    </div>
                  </div>
                </div>
                <div className="conglomerat-card-description">
                  Basée à Akouda, Sousse, Tunisie depuis 2000, notre entreprise
                  se concentre sur le traitement des matériaux d'ingénierie,
                  notamment les broyats.
                </div>
              </div>
              <div className="card-right">
                <div className="support1"></div>
                <img src={MEDEX} alt="" />
              </div>
            </div>

            <div
              className="card-conglomerat"
              onClick={() => handleCardClick(GenoilPosition)}
            >
              <div className="card-left">
                <div className="card-left">
                  <div className="conglomerat-card-title"> GENOIL</div>
                  <div className="conglomerat-contact">
                    <div className="item">
                      <div className="icon">
                        <BiSolidPhoneCall />
                      </div>
                      <div className="text">73 812 016</div>
                    </div>
                    <div className="item">
                      <div className="icon">
                        <HiMail />
                      </div>
                      <div className="text">genoil.mzgh@gmail.com</div>
                    </div>
                    <div className="item">
                      <div className="icon">
                        <MdLocationOn />
                      </div>
                      <div className="text">
                        Gp1 El Remila Akouda <br /> 4022 Sousse Tunisie
                      </div>
                    </div>
                  </div>
                  <div className="conglomerat-card-description">
                    Depuis des années, Genoil collabore à l'échelle mondiale
                    dans le retraitement des huiles usées et la collecte des
                    huiles de cuisson usagées.
                  </div>
                </div>
              </div>
              <div className="card-right">
                <div className="support1"></div>
                <img src={GENOIL} alt="" />
              </div>
            </div>
          </div>

          <div className="right-conglomerat">
            <div
              className="card-conglomerat"
              onClick={() => handleCardClick(EcoplastPosition)}
            >
              <div className="card-right">
                <div className="support1"></div>
                <img src={ECOPLAST} alt="" />
              </div>
              <div className="card-left">
                <div className="conglomerat-card-title"> ECOPLAST</div>
                <div className="conglomerat-contact">
                  <div className="item">
                    <div className="icon phone">
                      <BiSolidPhoneCall />
                    </div>
                    <div className="text">73 812 417</div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <HiMail />
                    </div>
                    <div className="text">ecoplast.mzgh@gmail.com</div>
                  </div>
                  <div className="item">
                    <div className="icon">
                      <MdLocationOn />
                    </div>
                    <div className="text">
                      BP 92 , 4051 Khezama <br /> Sousse , Tunisie
                    </div>
                  </div>
                </div>
                <div className="conglomerat-card-description">
                  Établie en 2011 à Sousse, Tunisie, l'entreprise mère du groupe
                  Mezoughi est un leader régional. Ecoplast se distingue dans le
                  recyclage du PET.
                </div>
              </div>
            </div>

            <div className="card-conglomerat">
              <iframe
                src={cardPosition}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Embed"
                className="map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* End Conglomerat Section */}

      {/* Start Products Section */}
      <div className="products-section-wrapper" ref={produitsRef}>
        <div className="products-section-title-wrapper">
          <div className="hrz-divider-1"></div>
          <div className="products-section-title">DECOUVRIR NOS PRODUITS</div>
          <div className="hrz-divider-2"></div>
        </div>

        <div className="products-section-description">
          Découvrez notre gamme variée de granulés plastiques de haute qualité
          chez Mezoughi Group . Nous offrons une sélection rigoureuse de
          granules de plastique de première qualité, comprenant l'ABS, le PET,
          le PP et le HDPE, transformés à partir de bouteilles collectées . Nos
          produits répondent aux besoins de divers processus de fabrication tout
          en soutenant nos efforts pour un environnement durable .
        </div>

        <div className="products-section-container">
          <div className="products-section-right">
            <ProductsSection />
          </div>

          <div className="products-section-left">
            {/* <img src={BOXPRODUCTS} alt="" /> */}
          </div>
        </div>
      </div>
      {/* End Products Section */}

      {/* Start Our Clients Section */}
      <div className="clients-carousel">
        <div className="carousel-wrapper">
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
          <div className="logo-wrapper">
            <img src={LOGO1} alt="" />
          </div>
        </div>
      </div>
      {/* End Our Clients Section */}

      {/* Start Testimonials Section */}
      <div className="testimonials-section-wrapper">
        <div className="testimonials-section-title-wrapper">
          <div className="hrz-divider-1"></div>
          <div className="testimonials-section-title">
            NOS TÉMOIGNAGES CLIENTS
          </div>
          <div className="hrz-divider-2"></div>
        </div>

        <TestimonialsSlider />
      </div>
      {/* End Testimonials Section */}

      <div className="divider"></div>

      {/* Start Learder Section */}
      <div className="leaders-section-wrapper">
        <div className="title">
          <div className="title1">RENCONTRE AVEC NOS LEADERS</div>
          <div className="title2">
            Découvrez les Visionnaires à l'Origine de Notre Entreprise
          </div>
        </div>
        <LeadersSection />
      </div>
      {/* End Leaders Section */}

      <div className="divider"></div>

      {/* Start Contact Section */}
      <div className="contact-section-wrapper">
        <div className="contact-us-title">
          <div className="contact-us-title1">CONTACTEZ-NOUS</div>
          <div className="contact-us-title2">
            N'hésitez pas à nous contacter pour toute question, suggestion ou
            collaboration. Notre équipe est à votre écoute et prête à vous aider
            à concrétiser vos projets. Ensemble, construisons un avenir plus
            durable et prospère .
          </div>
        </div>

        <div className="contact-details-wrapper">
          <div className="contact-left">
            <img src={CONTACTUSIMG} alt="" />
          </div>
          <div className="contact-right">
            {/* <form className="form-wrapper" onSubmit={onSubmit}>
              <div className="form-section">
                <Input
                  placeholder="Nom et Prénom"
                  name="name"
                  prefix={<UserOutlined />}
                  required
                />
                <Input
                  placeholder="Nom de la Sociéte"
                  prefix={<PiBuildingsBold />}
                  name="companyname"
                  required
                />
              </div>

              <div className="form-section">
                <Input
                  placeholder="Registre de commerce / VAT"
                  prefix={<PiStampBold />}
                  name="companytype"
                  required
                />
                <Select
                  defaultValue="Service"
                  style={{
                    width: 120,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      value: "vente",
                      label: "Vente",
                    },
                    {
                      value: "achat",
                      label: "Achat",
                    },
                    {
                      value: "autre",
                      label: "Autre",
                    },
                  ]}
                  name="companyservice"
                  required
                />
              </div>
              <div className="form-section">
                <TextArea
                  rows={4}
                  placeholder="Message ..."
                  className="message-input"
                  name="message"
                  required
                />
              </div>
              <Button icon={<FiSend />} className="send-btn" type="submit">
                Envoyer
              </Button>
            </form> */}

            <Form className="form-wrapper" onFinish={onFinish}>
              <div className="form-section">
                <Form.Item
                  name="Email"
                  rules={[
                    { required: true, message: "Ce Champs est requis !" },
                  ]}
                >
                  <Input
                    placeholder="Email Professionnel"
                    prefix={<FiMail  />}
                  />
                </Form.Item>

                <Form.Item
                  name="Nom de la Société"
                  rules={[
                    {
                      required: true,
                      message: "Ce Champs est requis !",
                    },
                  ]}
                >
                  <Input
                    placeholder="Nom de la Société"
                    prefix={<PiBuildingsBold />}
                  />
                </Form.Item>
              </div>

              <div className="form-section">
                <Form.Item
                  name="Registre de commerce / VAT"
                  rules={[
                    {
                      required: true,
                      message: "Ce Champs est requis !",
                    },
                  ]}
                >
                  <Input
                    placeholder="Registre de commerce / VAT"
                    prefix={<PiStampBold />}
                  />
                </Form.Item>

                <Form.Item name="Service" initialValue="Service">
                  <Select
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                      { value: "vente", label: "Vente" },
                      { value: "achat", label: "Achat" },
                      { value: "autre", label: "Autre" },
                    ]}

                    rules={[
                      {
                        required: true,
                        message: "Ce Champs est requis !",
                      },
                    ]}

                  />
                </Form.Item>
              </div>

              <div className="form-section">
                <Form.Item
                  name="Message"
                  rules={[
                    { required: true, message: "Ce Champs est requis !" },
                  ]}
                >
                  <TextArea
                    rows={4}
                    placeholder="Message ..."
                    className="message-input"
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <Button
                  icon={<FiSend />}
                  className="send-btn"
                  type="primary"
                  htmlType="submit"
                >
                  Envoyer
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      {/* End Contact Section */}

      {/* Start Footer */}
      <div className="footer">
        <div className="footer-wrapper">
          <div className="footer-left">
            <div className="footer-text">
              NOUS VOUS REMERCIONS DE VOTRE VISITE SUR NOTRE SITE !
            </div>
            <div className="footer-subtext">
              Nous avons hâte de partager nos dernières innovations avec vous .
              À très bientôt !
            </div>
          </div>

          <div className="footer-right">
            <div className="info-input">
              <div className="icon">
                <FiPhoneCall />
              </div>
              <div className="value">+216 73 812 144</div>
            </div>
            <div className="info-input">
              <div className="icon">
                <FiPhoneCall />
              </div>
              <div className="value">+216 73 812 144</div>
            </div>

            <div className="info-input">
              <div className="icon">
                <BiMailSend />
              </div>
              <div className="value">info@mezoughi-group.tn</div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          COPYRIGHT © 2024 MEZOUGHI GROUP TOUS DROITS RÉSERVÉS
        </div>
      </div>
      {/* End Footer */}
    </div>
  );
};

export default LandingPage;
