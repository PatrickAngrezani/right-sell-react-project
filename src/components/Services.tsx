import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid2,
  Grid,
} from "@mui/material";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "RTLM",
    description:
      "O ser humano é primordial para nós e sem as pessoas, não seríamos nada! Capacitar, engajar e elevar o nível dos profissionais, também é um dos nossos pilares e por isso recrutamos, selecionamos e elevamos os melhores:",
    image: "",
  },
  {
    title: "TECNOLOGIA",
    description:
      "Promovemos inovações constantes e utilizamos tecnologia de ponta de países como: Estados Unidos, Rússia, Ucrânia e Israel (todas homologadas pela LGPD e suporte no Brasil) e integradas em um único ambiente:",
    image: "",
  },
  {
    title: "DIFERENCIAIS",
    description: `
    - Sem fidelidade;
    - Sem custos de implantação;
    - Tecnologia;
    - Redução de custos;
    - Backup;
    - Exclusividade;
    - Metodologia própria;
    - CRM.
    `,
    image: "",
  },
  {
    title: "PLANOS",
    description: `Conheça nossos planos:
    
    Contamos com os seguintes serviços disponíveis:
    - Plano LDR;
    - Plano BDR;
    - Plano Closer.
    `,
    image: "",
  },
];

const Services: React.FC = () => {
  return (
    <Box sx={{ padding: "4rem" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Nossos Serviços
      </Typography>
      <Grid2 container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {service.description}
                </Typography>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ marginTop: "1rem" }}
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid2>
    </Box>
  );
};

export default Services;
