// Links a WhatsApp con mensaje prearmado: la persona solo toca "enviar".
export const WA_NUMBER = '5491160560371';

export const wa = (text: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

export const WA = {
  proyecto: wa('Hola! Tengo un proyecto en mente y quiero saber cómo pueden ayudarme.'),
  agenda: wa('Hola! Me gustaría agendar una videollamada para contarles mi caso.'),
  soluciones: wa('Hola! Vi las soluciones de NOVAI y quiero saber cuál se adapta a mi negocio.'),
  agencia: wa('Hola! Tengo una agencia y me interesa delegarles la parte tecnológica de un proyecto.'),
  demoAgente: wa('Hola! Quiero probar el agente de IA.'),
  demoLead: wa('Hola! Quiero ver la demo de seguimiento de un lead.'),
};
