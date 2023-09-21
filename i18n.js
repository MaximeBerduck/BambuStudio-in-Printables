import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).init({
  resources: {
    en: {
      translation: {
        // Définissez vos traductions en anglais ici
        // Exemple : "hello": "Hello"
        openInBambuStudio: 'Open in BambuStudio',
      },
    },
    fr: {
      translation: {
        // Définissez vos traductions en français ici
        // Exemple : "hello": "Bonjour"
        openInBambuStudio: 'Ouvrir dans BambuStudio',
      },
    },
  },
  fallbackLng: 'en', // Langue par défaut en cas de non-correspondance
});

export default i18next;
