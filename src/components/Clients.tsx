import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import antilhasVarejo from "../assets/antilhas-varejo.png";
import braniva from "../assets/braniva.png";
import cadernoVirtual from "../assets/caderno-virtual.png";
import chaProd from "../assets/cha-prod.png";
import grupoForest from "../assets/grupo-forest.png";
import jmfConsults from "../assets/jmf-consults.png";
import marcasPatentes from "../assets/marcas-patentes.png";
import nityoInfotech from "../assets/nityo-infotech.png";
import noAge from "../assets/no-age.png";
import ravim from "../assets/ravim.png";
import recrutify from "../assets/recrutify.png";

interface Client {
  name: string;
  logo: string;
}

const clients: Client[] = [
  { name: "antilhas-varejo", logo: antilhasVarejo },
  { name: "braniva", logo: braniva },
  { name: "cadernoVirtual", logo: cadernoVirtual },
  { name: "chaProd", logo: chaProd },
  { name: "grupoForest", logo: grupoForest },
  { name: "jmfConsults", logo: jmfConsults },
  { name: "marcasPatentes", logo: marcasPatentes },
  { name: "nityoInfotech", logo: nityoInfotech },
  { name: "noAge", logo: noAge },
  { name: "ravim", logo: ravim },
  { name: "recrutify", logo: recrutify },
];

const Clients: React.FC = () => {
  return (
    <Box sx={{ padding: "4rem 0", backgroundColor: "#007f3b" }}>
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ color: "#ffffff", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Nossos Clientes
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {clients.map((client, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <Box
              sx={{
                padding: "1rem",
                textAlign: "center",
                backgroundColor: "#007f3b",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  width: "100%",
                  maxHeight: "80px",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Clients;
