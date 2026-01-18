const PHONE_NUMBER = '+2120669444701'; // Format international avec l'indicatif du Maroc (212) et sans le +

export const generateWhatsAppUrl = (type: 'contact' | 'devis', data: Record<string, string>) => {
  let message = '';
  
  if (type === 'contact') {
    message = `Bonjour,\n\nJe souhaite vous contacter.\n\n` +
      `*Objet*: ${data.destination || 'Non spécifié'}\n\n` +
      `*Nom*: ${data.name || 'Non renseigné'}\n` +
      `*Email*: ${data.email || 'Non renseigné'}\n` +
      `*Téléphone*: ${data.phone || 'Non renseigné'}\n\n` +
      `*Message*:\n${data.message || ''}`;
  } else if (type === 'devis') {
    const serviceLabels: Record<string, string> = {
      'site-vitrine': 'Site vitrine',
      'site-ecommerce': 'Site e-commerce',
      'application-web': 'Application web',
      'design': 'Design UI/UX',
      'maintenance': 'Maintenance',
      'referencement': 'Référencement (SEO)',
      'autre': 'Autre'
    };

    message = `Bonjour,\n\nJe souhaite obtenir un devis pour le service suivant :\n\n` +
      `*Service demandé*: ${serviceLabels[data.service] || data.service || 'Non spécifié'}\n\n` +
      `*Nom*: ${data.name || 'Non renseigné'}\n` +
      `*Email*: ${data.email || 'Non renseigné'}\n` +
      `*Téléphone*: ${data.phone || 'Non renseigné'}\n`;
      
    if (data.budget) {
      message += `*Budget estimé*: ${data.budget}\n`;
    }
    
    if (data.message) {
      message += `\n*Détails supplémentaires*:\n${data.message}`;
    }
  }

  // Encoder le message pour l'URL
  const encodedMessage = encodeURIComponent(message);
  
  // Retourner le lien WhatsApp
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};
