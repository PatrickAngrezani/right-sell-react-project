import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { colors } from "../colors.tsx";

const plansData = [
  {
    title: "LDR",
    subtitleColor: "#8B0000",
    items: [
      "Lead Development Representative (LDR): O profissional LDR é treinado na metodologia exclusiva Venda Certo, garantindo a entrega das demandas de maneira eficiente e alinhada às necessidades do cliente;",
      "Copywriter Profissional: Desenvolve textos técnicos e persuasivos para prospecção por e-mail, WhatsApp e LinkedIn, sempre alinhados com o discurso e a identidade do cliente;",
      "Definição de ICPs (Ideal Customer Profile): Trabalhamos com o cliente para identificar os nichos de mercado, cargos dos leads e segmentos de empresas a serem abordados, garantindo uma prospecção mais assertiva;",
      "Prospecção e Enriquecimento de Listas: Em vez de comprar listas frias, criamos e enriquecemos listas de leads do zero, utilizando nossa metodologia e tecnologia para garantir a melhor qualidade. (atualização semanal);",
      "Automação de Disparos em Cadência: Realizamos disparos de e-mails em massa (100-150 por semana, inclusos), WhatsApp e LinkedIn. Para envios em massa via WhatsApp e LinkedIn, consulte nossos planos especializados. Todos os disparos são feitos com total controle e monitoramento;",
      "Metodologia e Plataforma Proprietária de LDR: Utilizamos uma plataforma exclusiva e metodologia proprietária para o acompanhamento detalhado das tarefas e evolução dos leads;",
      "Reuniões Pré Qualificadas: Em nosso plano, já incluímos a realização de reuniões pré-qualificadas, otimizando o processo e garantindo que o cliente receba leads altamente relevantes e preparados para a conversão.",
    ],
  },
  {
    title: "SDR / BDR",
    subtitleColor: "silver",
    items: [
      "Tudo que engloba o plano LDR, além de:",
      "Profissional BDR/SDR Híbrido e Dedicado (Inbound e Outbound): Este profissional, treinado na metodologia exclusiva Venda Certo, ficará dedicado exclusivamente ao cliente, gerenciando tanto a prospecção inbound quanto outbound com eficiência;",
      "Sales Development Representative (SDR): Responsável por ativar e atender às demandas de prospecção geradas pelo cliente, trabalhando os leads inbound e qualificando-os para avançar no funil de vendas;",
      "Business Development Representative (BDR): Focado em atender e ativar as demandas de prospecção geradas pelo LDR da Venda Certo, o BDR realiza a prospecção outbound, buscando novos leads e oportunidades de negócios;",
      "Metodologia de agendamento e qualificação de reuniões: Este profissional é responsável por agendar e qualificar as reuniões comerciais de acordo com as metas e expectativas do cliente, garantindo que apenas leads qualificados sejam encaminhados para as etapas subsequentes do funil de vendas;",
      'Gestão de CRM: O profissional gerencia o pipeline de vendas e o CRM do cliente, organizando as demandas inbound e outbound e acompanhando as etapas até a "apresentação", além de realizar o follow-up das pré-vendas, garantindo um processo de vendas eficiente e bem estruturado.',
    ],
  },
  {
    title: "CLOSER",
    subtitleColor: "#FFD700",
    items: [
      "Tudo que engloba o plano LDR e tudo que engloba o plano BDR, além de:",
      "Profissional Closer Dedicado: Treinado na metodologia Venda Certo, este profissional ficará à disposição do cliente para gerenciar o processo comercial de ponta a ponta, coordenando as atividades de LDR e BDR e garantindo que todas as etapas do funil sejam bem executadas;",
      "Apresentação de Resultados: O closer realizará apresentações de resultados de forma periódica (semanal, quinzenal ou mensal) em conjunto com o Head de CS, no formato coletivo, para garantir alinhamento e transparência com o cliente;",
      'Gestão de CRM: Este profissional é responsável por operar o pipeline de vendas e o CRM do cliente, gerenciando as demandas inbound e outbound desde a geração até a conclusão da etapa final ("ganho" ou "perdido"). Também acompanha os follow-ups de pré-vendas e vendas, assegurando o andamento contínuo e eficaz das oportunidades;',
      "Kick-off de Novos Clientes: O closer participará das reuniões de kick-off com novos clientes, coordenando a transição entre o time comercial e as equipes de CS, CX ou CSM, garantindo uma passagem de bastão tranquila e alinhada;",
      "Participação em Eventos e Reuniões Presenciais: Este profissional também estará disponível para participar de eventos de networking e reuniões comerciais presenciais, conforme as necessidades específicas do cliente, reforçando o relacionamento e ampliando as oportunidades de negócio.",
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
        Consulte nossos planos, mas antes entenda algumas funções!{" "}
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
              <span style={{ color: plan.subtitleColor }}>{plan.title}</span>
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

                const [highlight, ...rest] = item.split(":");
                const content = rest.join(":");

                return (
                  <Box
                    component="li"
                    key={itemIndex}
                    sx={{
                      color: isFirstItemSpecial
                        ? colors.primaryGreen
                        : colors.textDark,
                      fontWeight: isFirstItemSpecial ? "bold" : "normal",
                      listStyleType: isFirstItemSpecial ? "none" : "disc",
                      marginTop: "0.5rem",
                    }}
                  >
                    {isFirstItemSpecial ? (
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
