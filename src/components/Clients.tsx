import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

import antilhasVarejo from "../assets/antilhas-varejo.png";
import asr from "../assets/asr.png";
import braniva from "../assets/braniva.png";
import cadernoVirtual from "../assets/caderno-virtual.png";
import chaProd from "../assets/cha-prod.png";
import grupoForest from "../assets/grupo-forest.png";
import jmfConsults from "../assets/jmf-consults.png";
import marcasPatentes from "../assets/marcas-patentes.png";
import nityoInfotech from "../assets/nityo-infotech.png";
import noAge from "../assets/no-age.png";
import optimiza from "../assets/optimiza.jpg";
import ravim from "../assets/ravim.png";
import recrutify from "../assets/recrutify.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Client {
  id: number;
  name: string;
  logo: string;
  link: string;
}

const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-25px", color: "white" }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-25px", color: "white" }}
      onClick={onClick}
    />
  );
};

const clients: Client[] = [
  {
    id: 1,
    name: "Antilhas Varejo",
    logo: antilhasVarejo,
    link: "https://www.antilhas.com.br/varejo",
  },
  { id: 2, name: "ASR", logo: asr, link: "https://www.asrconsult.com.br/asr" },
  { id: 3, name: "Braniva", logo: braniva, link: "https://braniva.com/" },
  {
    id: 4,
    name: "Caderno Virtual",
    logo: cadernoVirtual,
    link: "https://cadernovirtual.com.br/",
  },
  { id: 5, name: "Cha Prod", logo: chaProd, link: "http://chaproducoes.com/" },
  {
    id: 6,
    name: "Grupo Forest",
    logo: grupoForest,
    link: "https://grupoforest.com.br/",
  },
  {
    id: 7,
    name: "JMF Consults",
    logo: jmfConsults,
    link: "https://www.instagram.com/jmf_consult_group/",
  },
  {
    id: 8,
    name: "Marcas e Patentes",
    logo: marcasPatentes,
    link: "https://b3smarcas.com.br/",
  },
  {
    id: 9,
    name: "Nityo Infotech",
    logo: nityoInfotech,
    link: "https://www.nityo.com/",
  },
  { id: 10, name: "No Age", logo: noAge, link: "https://www.noage.com.br/" },
  {
    id: 11,
    name: "Optimiza",
    logo: optimiza,
    link: "https://optimizamarketing.com/",
  },
  { id: 12, name: "Ravim", logo: ravim, link: "https://ravim.health/" },
  { id: 13, name: "Recrutify", logo: recrutify, link: "https://recrutify.io/" },
];

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        padding: "20px 0",
        width: "100%",
        margin: "auto",
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ color: "#007f3b", fontWeight: "bold", marginBottom: "2rem" }}
      >
        CONHEÇA QUEM JÁ CONFIA EM NOSSAS SOLUÇÕES
      </Typography>
      <Slider {...settings}>
        {clients.map((client) => (
          <Box key={client.id} sx={{ textAlign: "center", padding: "20px" }}>
            <a
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", outline: "none" }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  width: client.name === "Cha Prod" ? "50px" : "100px",
                  height: "auto",
                  objectFit: "contain",
                  margin: "0 auto",
                  backgroundColor:
                    client.name === "JMF Consults" ? "#007bb5" : "none",
                }}
              />
            </a>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ClientCarousel;
