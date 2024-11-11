import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import { colors } from "../colors.tsx";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        transition: "linear",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
        <IconButton
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ color: "#E1306c" }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/company/vendacerto"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          sx={{ color: "#0A66C2" }}
        >
          <LinkedInIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "#007f3b",
          }}
        >
          <PhoneIcon />
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            (11) 95945-5865
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          padding: "1rem",
          backgroundColor: "#007f3b",
          color: "#fff",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          PROSPECÇÃO E BPO COMERCIAL
        </Typography>
      </Box>

      <Box sx={{ textAlign: "center", padding: "2rem" }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "#007f3b", fontWeight: "bold" }}
        >
          SOBRE NÓS
        </Typography>
        <Typography
          variant="body1"
          sx={{ maxWidth: "800px", margin: "0 auto", lineHeight: 1.6 }}
        >
          A{" "}
          <span style={{ color: "#007f3b", fontWeight: "bold" }}>
            Venda Certo
          </span>{" "}
          foi fundada em 2019 com a missão de conectar empresas aos melhores
          profissionais do mercado em cada etapa do funil comercial, como{" "}
          <em>
            LDR, SDR, BDR, Closer, CRM, Marketing, Copywriter e Customer
            Success.
          </em>{" "}
          Pioneira no Brasil, somos o primeiro BPO comercial completo,
          oferecendo uma solução ponta a ponta para otimizar e expandir
          operações comerciais.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: colors.actionBlue,
            color: "#fff",
            marginTop: "1rem",
            "&:hover": {
              backgroundColor: colors.actionBlueHover,
            },
          }}
          onClick={() => navigate("/about")}
        >
          Saiba Mais
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
