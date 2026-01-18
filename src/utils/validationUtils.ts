// Validation des dates
export const isDateValid = (date: string): boolean => {
  const selectedDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
};

// Validation de la période
export const isDateRangeValid = (departDate: string, returnDate: string): boolean => {
  const depart = new Date(departDate);
  const return_ = new Date(returnDate);
  return return_ > depart;
};

// Messages d'erreur
export const errorMessages = {
  required: 'Ce champ est obligatoire',
  invalidDate: 'La date doit être postérieure à aujourd\'hui',
  invalidDateRange: 'La date de retour doit être postérieure à la date de départ',
  invalidTravelers: 'Le nombre de voyageurs doit être entre 1 et 6',
  destination: 'Veuillez sélectionner une destination',
  roomType: 'Veuillez sélectionner un type de chambre',
  specialRequests: 'Les demandes spéciales ne peuvent pas dépasser 500 caractères'
};