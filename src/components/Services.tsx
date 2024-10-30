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

import RTLMImage from "../assets/rtlm.png";
import TecnologiaImage from "../assets/tecnologia.png";
import DiferenciaisImage from "../assets/diferenciais.png";
import PlansImage from "../assets/planos.png";

interface Service {
  title: string;
  description: string | React.ReactNode;
  image: string;
}

const services: Service[] = [
  {
    title: "RTLM",
    description: (
      <Typography>
        O ser humano é primordial para nós e sem as pessoas, não seríamos nada!
        Capacitar, engajar e elevar o nível dos profissionais, também é um dos
        nossos pilares e por isso recrutamos, selecionamos e elevamos os
        melhores.
      </Typography>
    ),
    image: RTLMImage,
  },
  {
    title: "TECNOLOGIA",
    description: (
      <Typography>
        Promovemos inovações constantes e utilizamos tecnologia de ponta de
        países como: Estados Unidos, Rússia, Ucrânia e Israel (todas homologadas
        pela LGPD e suporte no Brasil) e integradas em um único ambiente:
      </Typography>
    ),
    image: TecnologiaImage,
  },
  {
    title: "DIFERENCIAIS",
    description: (
      <ul style={{ paddingLeft: "1rem", margin: 0 }}>
        <li>Sem fidelidade;</li>
        <li>Sem custos de implantação;</li>
        <li>Tecnologia;</li>
        <li>Redução de custos;</li>
        <li>Backup;</li>
        <li>Exclusividade;</li>
        <li>Metodologia própria;</li>
        <li>CRM.</li>
      </ul>
    ),
    image: DiferenciaisImage,
  },
  {
    title: "PLANOS",
    description: (
      <>
        <Typography variant="body2" gutterBottom>
          Conheça nossos planos:
        </Typography>
        <Typography variant="body2" gutterBottom>
          Contamos com os seguintes serviços disponíveis:
        </Typography>
        <Box component="ul" sx={{ paddingLeft: "1rem", margin: 0 }}>
          <li>Plano LDR;</li>
          <li>Plano BDR;</li>
          <li>Plano Closer.</li>
        </Box>
      </>
    ),

    image: PlansImage,
  },
];

const Services: React.FC = () => {
  return (
    <Box sx={{ padding: "4rem", textAlign: "center" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#007f3b" }}
      >
        Nossos Serviços
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
                    "&.hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
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
                  sx={{ textAlign: "left" }}
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
