import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "../colors.tsx";

const RTLMPage: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: colors.secondaryGray,
          minHeight: "60vh",
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
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: colors.primaryGreen,
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            RTLM
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
            <strong style={{ color: colors.primaryGreen }}>
              Recrutamento & Seleção:
            </strong>{" "}
            Contamos com a RTLM, nossa consultoria especializada, que utiliza
            métodos avançados para recrutamento e seleção, seja de forma
            passiva, com banco de talentos próprio, networking, marketing e
            divulgação de vagas, ou de forma ativa, através de hunting. Atuamos
            na busca de profissionais qualificados em áreas como LDR, SDR, BDR,
            Closer, Marketing, CRM, CS, CX e CSM.
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
            <strong style={{ color: colors.primaryGreen }}>
              Outplacement:
            </strong>{" "}
            Oferecemos suporte personalizado a empresas que desejam desenvolver
            um projeto de transição para colaboradores em processo de
            desligamento, proporcionando apoio profissional e estratégico.
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
            <strong style={{ color: colors.primaryGreen }}>Replacement:</strong>{" "}
            Apoiamos pessoas em busca de evolução de carreira ou recolocação
            profissional especializada, garantindo um acompanhamento focado e
            personalizado para alcançar seus objetivos.
          </Typography>
          <Box sx={{ marginTop: "2rem", textAlign: "center" }}>
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
          © 2019 Venda Certo - Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default RTLMPage;
