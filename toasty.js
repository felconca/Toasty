/**
 * Author: felcon albaladejo
 * Version: 0.1 March 28, 2024
 * License: OpenSource Free
 * Credits: Animista for animation
 * Github: https://github.com/felconca/Toasty.git
 */
var Toasty = {
  // Function to show toast notification
  showToast: function (title, message, iconHTML = null, time = 3000) {
    var toastBox = document.getElementById("toastBox");
    if (!toastBox) {
      toastBox = document.createElement("div");
      toastBox.id = "toastBox";
      document.body.appendChild(toastBox);
    }

    // Create toast element
    var toast = document.createElement("div");
    toast.classList.add("toast");

    // Create icon container if icon HTML is provided
    if (iconHTML !== null) {
      var iconContainer = document.createElement("div");
      iconContainer.classList.add("icon-container");
      iconContainer.innerHTML = iconHTML;
      toast.appendChild(iconContainer);
    }

    // Create toast container for content
    var toastContainer = document.createElement("div");
    toastContainer.classList.add("toast-container");
    toast.appendChild(toastContainer);

    // Create header container for title and close button
    var titleHeader = document.createElement("div");
    titleHeader.classList.add("title-header");
    toastContainer.appendChild(titleHeader);

    // Create title element and append to title header
    var titleElement = document.createElement("div");
    titleElement.classList.add("toast-title");
    titleElement.textContent = title;
    titleHeader.appendChild(titleElement);

    // Check if autoclose time is provided
    if (time !== null) {
      // Create close button and append to title header
      var closeButton = document.createElement("button");
      closeButton.classList.add("toast-close");
      closeButton.innerHTML = "&#10005;"; // Close symbol Unicode
      closeButton.addEventListener("click", function () {
        // Add fade-out animation
        toast.classList.add("fade-out-top");
        // Remove toast after animation ends
        toast.addEventListener("animationend", function () {
          toastBox.removeChild(toast);
        });
      });
      titleHeader.appendChild(closeButton);

      // Remove toast after the specified time
      setTimeout(function () {
        // Add fade-out animation
        toast.classList.add("fade-out-top");
        // Remove toast after animation ends
        toast.addEventListener("animationend", function () {
          toastBox.removeChild(toast);
        });
      }, time);
    }

    // Create message element and append to toast container
    var messageElement = document.createElement("div");
    messageElement.classList.add("toast-text");
    messageElement.textContent = message;
    toastContainer.appendChild(messageElement);

    // Append toast to toastBox
    toastBox.appendChild(toast);
  },
};
