setTimeout(function () {
  injectButtons();
}, 1000);

function injectButtons() {
  // Select all buttons with the "slicer-download" class
  const slicerButtons = document.querySelectorAll("a.slicer-download");

  // Iterate through all the buttons and add a new button next to each one
  slicerButtons.forEach(function (button) {
    // Create a link with a custom icon
    const customLink = document.createElement("a");
    customLink.style.alignSelf = "center";

    // Get the download link from the "file" parameter in the URL
    const url = new URL(button.href);
    const file = url.searchParams.get("file");

    // Determine the user's platform
    const isMacOS = navigator.platform.toLowerCase().includes("mac");

    // Create the link based on the platform
    if (isMacOS) {
      customLink.href = "bambustudioopen://" + encodeURIComponent(file); // On macOS
    } else {
      customLink.href = "bambustudio://open?file=" + encodeURIComponent(file); // On Windows
    }

    // Create a container for the icon
    const iconContainer = document.createElement("div");
    iconContainer.style.width = "30px";
    iconContainer.style.height = "30px";
    iconContainer.style.borderRadius = "50%"; // Create a circle
    iconContainer.style.borderStyle = "solid"; // Set the border style to "solid"
    iconContainer.style.borderColor = "#e0e0e0"; // Border color of the circle (gray)
    iconContainer.style.borderWidth = "1px"; // Border thickness of the circle
    iconContainer.style.overflow = "hidden"; // Hide any content overflowing from the circle
    iconContainer.style.display = "flex"; // Use Flexbox to center the icon vertically
    iconContainer.style.justifyContent = "center"; // Center the icon horizontally

    // Create an image element for the custom icon
    const customIcon = document.createElement("img");
    customIcon.src = chrome.runtime.getURL("images/Logo_BL.svg"); // Use chrome.runtime.getURL() to get the absolute URL
    customIcon.alt = "Open in BambuStudio"; // Alternate text for the icon
    customIcon.style.width = "15px"; // Adjust the size of the icon if necessary

    // Add the icon inside the container
    iconContainer.appendChild(customIcon);

    // Add the icon container to the link
    customLink.appendChild(iconContainer);

    // Insert the new button after the existing button
    button.parentNode.insertBefore(customLink, button.nextSibling);
  });
}
