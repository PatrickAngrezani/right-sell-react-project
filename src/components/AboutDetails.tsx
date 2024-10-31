import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../colors.tsx";

const AboutDetails: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "4rem",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: 1.8,
        textAlign: "center",
        color: colors.textDark,
        backgroundColor: colors.secondaryGray,
        borderRadius: "8px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: colors.primaryGreen, fontWeight: "bold" }}
      >
        Nossa Missão, Visão e Valores
      </Typography>
      <Typography variant="body1" paragraph>
        Nossa missão, visão e valores, estão conectados em nossos diferenciais:
        pessoas (força de vendas treinada de forma humanizada e focada em
        resultados – pessoas felizes, trabalham melhores), tecnologia (unimos as
        melhores plataformas do mundo, integradas em um ambiente único),
        exclusividade (não atuamos com mais de uma empresa do mesmo segmento ou
        que fornece o mesmo serviço – zero conflito de interesses!) e
        metodologia própria (embasada nos principais especialistas e estudos de
        mercado, sem reinventar a roda, com novos insights e moldado ao negócio
        do nosso cliente.)
      </Typography>
      <Typography variant="body1" paragraph>
        Nosso objetivo como organização é cuidar do cliente do nosso cliente de
        forma única, exclusiva e saudável, trazendo longevidade para os negócios
        e aumento de ROI constante.
      </Typography>
    </Box>
  );
};

export default AboutDetails;
