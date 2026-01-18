const PHONE_NUMBER = '21269444701'; // Votre numéro de téléphone au format international sans le +

export const generateWhatsAppUrl = (type: 'contact' | 'devis', data: Record<string, string>) => {
  let message = '';
  
  if (type === 'contact') {
    message = `Bonjour,\n\nJe souhaite vous contacter.\n\n` +
      `Nom: ${data.name || 'Non renseigné'}\n` +
      `Email: ${data.email || 'Non renseigné'}\n` +
      `Téléphone: ${data.phone || 'Non renseigné'}\n\n` +
      `Message:\n${data.message || ''}`;
  } else if (type === 'devis') {
    message = `Bonjour,\n\nJe souhaite obtenir un devis pour le service suivant :\n\n` +
      `Nom: ${data.name || 'Non renseigné'}\n` +
      `Email: ${data.email || 'Non renseigné'}\n` +
      `Téléphone: ${data.phone || 'Non renseigné'}\n` +
      `Service: ${data.service || 'Non spécifié'}\n` +
      `Budget estimé: ${data.budget || 'Non spécifié'}\n\n` +
      `Description du projet:\n${data.description || ''}`;
  }

  // Encoder le message pour l'URL
  const encodedMessage = encodeURIComponent(message);
  
  // Retourner le lien WhatsApp
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};
