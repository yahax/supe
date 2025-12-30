const BASE_URL = "https://wa.me/212676877273";

export const buildWhatsAppLink = (service: string, country?: string) => {
  const destinationPart = country ? ` Destination: ${country}.` : "";
  const message = `Bonjour FavoriVoyages, je veux un devis. Service: ${service}.${destinationPart} Merci.`;
  const encoded = encodeURIComponent(message.trim());
  return `${BASE_URL}?text=${encoded}`;
};
