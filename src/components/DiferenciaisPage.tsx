import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "../colors.tsx";

const DiferenciaisPage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: colors.secondaryGray,
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "800px",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem",
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
          DIFERENCIAIS
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: colors.textDark,
            lineHeight: 1.8,
            fontSize: "1.1rem",
          }}
        >
          <Box
            component="ul"
            sx={{
              paddingLeft: "1rem",
              color: colors.textDark,
              lineHeight: 2.0,
            }}
          >
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Sem fidelidade
              </span>
              ;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Sem custos de implantação
              </span>
              : Realizamos uma implementação bem consultiva e sem custos
              adicionais;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Tecnologia
              </span>
              : As melhores do mercado global e integradas no mesmo ambiente -
              LGPD;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Redução de custos
              </span>
              ;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Backup
              </span>
              : Sem faltas, absenteísmo ou turnover;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Exclusividade
              </span>
              : Não atuamos com mais de uma empresa do mesmo segmento ou que
              fornece o mesmo serviço - zero conflito de interesses!;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Metodologia própria
              </span>
              : Embasada nos principais especialistas e estudos de mercado, sem
              inventar a roda, com novos insights e moldado ao negócio do nosso
              cliente;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                CRM
              </span>
              : Implantamos as melhores opções para o cliente - versões
              gratuitas ou contratadas.
            </li>
          </Box>
        </Typography>
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
      <Box
        sx={{
          width: "60%",
          textAlign: "center",
          backgroundColor: colors.secondaryGray,
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2024 Venda Certo - Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default DiferenciaisPage;
