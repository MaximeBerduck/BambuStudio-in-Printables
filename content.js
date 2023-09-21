import i18next from 'i18next.js';

setTimeout(function () {
  injectButtons();
}, 1000);

function injectButtons() {
  // Sélectionnez tous les boutons avec la classe "slicer-download"
  const slicerButtons = document.querySelectorAll("a.slicer-download");

  // Parcourez tous les boutons et ajoutez un nouveau bouton à côté de chaque bouton
  slicerButtons.forEach(function (button) {
    // Créez un lien avec une icône personnalisée
    const customLink = document.createElement("a");
    customLink.style.alignSelf = "center";

    // Récupérez le lien de téléchargement qui est en paramètre de l'URL "file"
    const url = new URL(button.href);
    const file = url.searchParams.get("file");

    // Déterminez la plateforme de l'utilisateur
    const isMacOS = navigator.platform.toLowerCase().includes("mac");

    // Créez le lien en fonction de la plateforme
    if (isMacOS) {
      customLink.href = "bambustudioopen://" + encodeURIComponent(file); // Sous macOS
    } else {
      customLink.href = "bambustudio://open?file=" + encodeURIComponent(file); // Sous Windows
    }

    // Créez un conteneur pour l'icône
    const iconContainer = document.createElement("div");
    iconContainer.style.width = "30px";
    iconContainer.style.height = "30px";
    iconContainer.style.borderRadius = "50%"; // Crée un cercle
    iconContainer.style.borderStyle = "solid"; // Définit le style de la bordure sur "solid"
    iconContainer.style.borderColor = "#e0e0e0"; // Couleur de la bordure du cercle (noir)
    iconContainer.style.borderWidth = "1px"; // Épaisseur de la bordure du cercle
    iconContainer.style.overflow = "hidden"; // Masque tout contenu dépassant du cercle
    iconContainer.style.display = "flex"; // Utilisez Flexbox pour centrer l'icône verticalement
    iconContainer.style.justifyContent = "center"; // Centre l'icône horizontalement

    // Créez un élément d'image pour l'icône personnalisée
    const customIcon = document.createElement("img");
    customIcon.src = chrome.runtime.getURL("images/Logo_BL.svg"); // Utilisez chrome.runtime.getURL() pour obtenir l'URL absolu
    customIcon.alt = i18next.t('openInBambuStudio'); // Texte alternatif pour l'icône

    customIcon.style.width = "15px"; // Ajustez la taille de l'icône si nécessaire

    // Ajoutez l'icône à l'intérieur du conteneur
    iconContainer.appendChild(customIcon);

    // Ajoutez le conteneur de l'icône au lien
    customLink.appendChild(iconContainer);

    // Insérez le nouveau bouton après le bouton existant
    button.parentNode.insertBefore(customLink, button.nextSibling);
  });
}