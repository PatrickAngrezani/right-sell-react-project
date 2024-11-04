import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "../colors.tsx";

const plansData = [
  {
    title: "PLANO LDR",
    subtitleColor: "#8B0000",
    items: [
      "Lead Development Representative (LDR): Profissional treinado pela metodologia Venda Certo à disposição do cliente;",
      "Copywriter Profissional: Construção de textos de prospecção para e-mail, Whatsapp e LinkedIn;",
      "Definição de ICPs junto ao cliente;",
      "Prospecção e qualificação de leads, além de automação de disparos: E-mail, Whatsapp e LinkedIn;",
      "Enriquecimento de listas de prospecção diariamente: Criamos diretamente o seu banco de leads personalizado, não compramos nem utilizamos listas prontas!",
      "Metodologia e plataforma de LDR.",
      "Neste plano, já provamos reuniões pré-qualificadas e 1 (um) profissional LDR.",
    ],
  },
  {
    title: "PLANO BDR",
    subtitleColor: "silver",
    items: [
      "Tudo que engloba o plano LDR, além de:",
      "1 (um) profissional BDR/SDR híbrido e dedicado (inbound e outbound): Profissional treinado pela metodologia Venda Certo à disposição do cliente;",
      "Sales Development Representative (SDR): Este profissional é responsável por atender e ativar as demandas de prospecção geradas pelo cliente - SDR/inbound;",
      "Business Development Representative (BDR): Este profissional é responsável por atender e ativar as demandas de prospecção geradas pelo LDR da Venda Certo - BDR/outbound;",
      "Metodologia de agendamento e qualificação de reuniões: Este profissional é responsável por agendar e qualificar as reuniões comerciais, segundo as metas estipuladas pelo cliente;",
      "CRM: Este profissional é responsável por operar o pipeline de vendas/CRM do cliente com as demandas inbound e outbound, até a etapa “apresentação” e acompanhar as follow-ups de pré-vendas.",
    ],
  },
  {
    title: "PLANO CLOSER",
    subtitleColor: "#FFD700",
    items: [
      "Tudo que engloba o plano LDR e tudo que engloba o plano BDR, além de:",
      "1 (um) profissional closer dedicado: Este profissional, cuidador do processo comercial de ponta a ponta do cliente e coordenará os profissionais LDR e BDR e suas demandas;",
      "Apresentação de resultados semanais ou mensais: Esta etapa é realizada entre head de CS e o closer Venda Certo para o cliente;",
      "CRM: Este profissional é responsável por operar o pipeline de vendas/CRM do cliente com as demandas inbound e outbound geradas, até a etapa final “ganhou ou perdeu” e acompanhar os follow-ups de vendas;",
      "Kick-off: Este profissional participa e acompanha as reuniões de Kick-off de novos clientes e faz o passão do bastão da time comercial, para o time de CS, CX ou CSM do cliente;",
      "Eventos de networkings e reuniões presenciais: Este profissional pode participar de eventos de networking e reuniões presenciais mediante as necessidades do cliente.",
    ],
  },
];

const PlansSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: colors.secondaryGray, padding: "2rem" }}>
      <Typography
        variant="h4"
        sx={{
          color: colors.primaryGreen,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        NOSSOS PLANOS
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {plansData.map((plan, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: "500px",
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              <span style={{ color: colors.primaryGreen }}>PLANO</span>{" "}
              <span style={{ color: plan.subtitleColor }}>
                {plan.title.split(" ")[1]}
              </span>
            </Typography>
            <Box
              component="ul"
              sx={{
                padding: 0,
                listStylePosition: "inside",
                color: colors.textDark,
                lineHeight: 1.8,
              }}
            >
              {plan.items.map((item, itemIndex) => {
                const isFirstItemSpecial = itemIndex === 0 && index > 0;
                const isLastItemSpecial =
                  index === 0 && itemIndex === plan.items.length - 1;
                const [highlight, ...rest] = item.split(":");
                const content = rest.join(":");

                return (
                  <Box
                    component="li"
                    key={itemIndex}
                    sx={{
                      color:
                        isFirstItemSpecial || isLastItemSpecial
                          ? colors.primaryGreen
                          : colors.textDark,
                      fontWeight:
                        isFirstItemSpecial || isLastItemSpecial
                          ? "bold"
                          : "normal",
                      listStyleType:
                        isFirstItemSpecial || isLastItemSpecial
                          ? "none"
                          : "disc",
                      marginTop: "0.5rem",
                    }}
                  >
                    {isFirstItemSpecial || isLastItemSpecial ? (
                      <span
                        style={{
                          fontWeight: "bold",
                          color: colors.primaryGreen,
                        }}
                      >
                        {highlight}
                      </span>
                    ) : (
                      <span style={{ fontWeight: "bold" }}>{highlight}</span>
                    )}
                    {content && <span>: {content}</span>}
                  </Box>
                );
              })}
            </Box>
          </Box>
        ))}
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

      <Box
        sx={{
          width: "100%",
          backgroundColor: colors.secondaryGray,
          textAlign: "center",
          padding: "1rem 0",
          marginTop: "2rem",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © 2019 Venda Certo - Todos os direitos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default PlansSection;
