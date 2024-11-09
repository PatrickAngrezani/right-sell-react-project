import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import RTLMImage from "../assets/rtlm.png";
import TecnologiaImage from "../assets/tecnologia.png";
import DiferenciaisImage from "../assets/diferenciais.png";
import PlansImage from "../assets/planos.png";

interface Service {
  title: string;
  description: string | React.ReactNode;
  image: string;
  path: string;
}

const services: Service[] = [
  {
    title: "RTLM",
    description: (
      <Typography>
        As pessoas são nossa prioridade; sem elas, não seríamos nada! Capacitar,
        engajar e desenvolver talentos é um dos nossos pilares fundamentais. Por
        isso, recrutamos, selecionamos e investimos na formação dos melhores
        profissionais, elevando continuamente seu nível de excelência.
      </Typography>
    ),
    image: RTLMImage,
    path: "/rtlm",
  },
  {
    title: "TECNOLOGIA",
    description: (
      <Typography>
        Promovemos inovações contínuas e utilizamos tecnologias de ponta,
        provenientes de países como Estados Unidos, Rússia, Ucrânia e Israel,
        todas homologadas conforme a LGPD e com suporte no Brasil. Essas
        soluções estão integradas em um único ambiente para maximizar a
        eficiência e a segurança.
      </Typography>
    ),
    image: TecnologiaImage,
    path: "/tecnologia",
  },
  {
    title: "DIFERENCIAIS",
    description: (
      <ul style={{ paddingLeft: "1rem", margin: 0, listStyleType: "none" }}>
        <br />
        <li>Sem fidelidade;</li>
        <li>Sem custos de implantação;</li>
        <li>Tecnologia de ponta;</li>
        <li>Redução de custos;</li>
        <li>Backup;</li>
        <li>Exclusividade;</li>
        <li>Metodologia própria;</li>
        <li>CRM.</li>
      </ul>
    ),
    image: DiferenciaisImage,
    path: "/diferenciais",
  },
  {
    title: "PLANOS",
    description: (
      <>
        <Typography variant="body2" gutterBottom>
          Conheça nossos planos, agende com um especialista!
        </Typography>
        <br />
        <Box
          component="ul"
          sx={{ paddingLeft: "1rem", margin: 0, listStyleType: "none" }}
        >
          <li>Plano Basic;</li>
          <li>Plano Standard;</li>
          <li>Plano Premium;</li>
          <li>Plano Customized.</li>
        </Box>
      </>
    ),
    image: PlansImage,
    path: "/planos",
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{ padding: "4rem", textAlign: "center", backgroundColor: "#007f3b" }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "white", paddingBottom: "2rem" }}
      >
        Nossas Soluções
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{
                    marginBottom: "1rem",
                    fontWeight: "bold",
                    borderColor: "#333",
                    color: "#333",
                    "&:hover": {
                      backgroundColor: "#d9d9d9",
                      borderColor: "#333",
                    },
                  }}
                  onClick={() => navigate(service.path)}
                >
                  Saiba Mais
                </Button>
                <Typography
                  variant="h6"
                  sx={{ color: "#007f3b", fontWeight: "bold" }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ textAlign: "center", minHeight: "190px" }}
                >
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
