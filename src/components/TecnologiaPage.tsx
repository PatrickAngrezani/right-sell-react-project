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
                <strong>1. Inteligência comercial</strong>
                <p>
                  Nossa tecnologia de inteligência comercial reúne dados
                  estratégicos para apoiar decisões de vendas, mapeando
                  oportunidades e tendências do mercado em tempo real. Essa
                  solução permite prever demandas, entender o comportamento dos
                  clientes e identificar as melhores estratégias para maximizar
                  o potencial de vendas, garantindo maior precisão e
                  assertividade nas ações comerciais;
                </p>
                <strong>2. Inteligência de Mercado</strong>
                <p>
                  Com uma plataforma robusta de inteligência de mercado,
                  analisamos dados relevantes sobre concorrentes, segmentos e
                  comportamentos de compra. Esse sistema ajuda a identificar
                  lacunas no mercado, otimizar o posicionamento da empresa e
                  antecipar mudanças nas preferências dos consumidores,
                  contribuindo para uma visão mais completa e embasada do
                  cenário competitivo;
                </p>
                <strong>3. CRM</strong>
                <p>
                  Nosso sistema de CRM centraliza todas as interações e
                  informações dos clientes, proporcionando uma gestão eficaz do
                  relacionamento e aumentando o engajamento. A solução é
                  projetada para segmentar perfis, personalizar campanhas e
                  oferecer um acompanhamento detalhado de cada etapa da jornada
                  do cliente, garantindo um serviço mais direcionado e
                  satisfatório;
                </p>
                <strong>4. Gestão de Tarefas e Projetos</strong>
                <p>
                  Para melhorar a produtividade e a colaboração, oferecemos uma
                  tecnologia de gestão de tarefas e projetos que facilita o
                  planejamento, o acompanhamento de metas e o controle de
                  prazos. Esse sistema permite a delegação de tarefas, a
                  visualização em tempo real do progresso e a integração entre
                  equipes, promovendo maior alinhamento e eficiência nos
                  projetos;
                </p>
                <strong>5. Assinatura Digital</strong>
                <p>
                  Nossa tecnologia de assinatura digital facilita processos de
                  contratação e assinatura de documentos de forma segura,
                  eficiente e em conformidade com normas de privacidade. Essa
                  solução elimina a necessidade de documentos físicos, reduzindo
                  o tempo de tramitação, otimizando processos e garantindo a
                  validade jurídica dos documentos, com segurança e praticidade
                  para clientes e parceiros.
                </p>
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
          © 2019 Venda Certo - Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default TecnologiaPage;
