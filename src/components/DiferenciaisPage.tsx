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
              : Oferecemos flexibilidade total, sem exigência de contratos de
              fidelidade;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Sem custos de implantação
              </span>
              : Realizamos uma implementação altamente consultiva, sem custos
              adicionais para o cliente;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Tecnologia
              </span>
              : Utilizamos as melhores tecnologias globais, totalmente
              integradas em um único ambiente e em conformidade com a LGPD;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Redução de custos
              </span>
              : Otimizamos recursos e processos para promover economia
              significativa;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Continuidade Garantida
              </span>
              : Operação sem interrupções, evitando problemas de absenteísmo,
              faltas e turnover;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Exclusividade de Atendimento
              </span>
              : Atuamos com exclusividade para cada segmento e/ou tipo de
              serviço, evitando conflitos de interesse;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                Metodologia Proprietária
              </span>
              : Nossa metodologia é fundamentada em especialistas e pesquisas de
              mercado, com abordagens inovadoras e personalizadas para cada
              cliente;
            </li>
            <li>
              <span style={{ fontWeight: "bold", color: colors.primaryGreen }}>
                CRM Personalizado
              </span>
              : Implementamos as melhores opções de CRM, sejam gratuitas ou
              contratadas, adaptadas às necessidades específicas do cliente.
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
          © 2019 Venda Certo - Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default DiferenciaisPage;
