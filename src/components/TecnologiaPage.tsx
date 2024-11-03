import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "../colors.tsx";

const TecnologiaPage: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: colors.secondaryGray,
          minHeight: "67vh",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "800px",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: colors.primaryGreen,
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              TECNOLOGIAS
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: colors.textDark,
                lineHeight: 1.8,
                fontSize: "1.1rem",
                marginBottom: "1rem",
              }}
            >
              <Box
                component="ul"
                sx={{
                  paddingLeft: "1rem",
                  color: colors.textDark,
                  lineHeight: 2.2,
                }}
              >
                <li>Inteligência comercial;</li>
                <li>Inteligência de mercado;</li>
                <li>CRM;</li>
                <li>Gestão de tarefas e projetos;</li>
                <li>Assinatura digital.</li>
              </Box>
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
            <Button
              href="https://www.google.com/url?q=https%3A%2F%2Fwa.me%2F%2F5511959455865%3Ftext%3DVim%2520pelo%2520site%2520%2C%2520tenho%2520interesse%2520em%2520conhecer%2520mais%2520a%2520VendaCerto&sa=D&sntz=1&usg=AOvVaw2ht1pfRew_v7VKF9hm6fdj"
              target="_blank"
              style={{
                backgroundColor: colors.actionBlue,
                color: "#fff",
                padding: "0.8rem 1.5rem",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = colors.actionBlueHover)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = colors.actionBlue)
              }
            >
              Entre em Contato
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: colors.secondaryGray,
          textAlign: "center",
          padding: "1rem 0",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2024 Venda Certo - Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default TecnologiaPage;
