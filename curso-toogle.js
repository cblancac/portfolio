document.addEventListener("DOMContentLoaded", function () {
    const allDetails = document.querySelectorAll("details");
  
    allDetails.forEach((detail) => {
      detail.addEventListener("toggle", () => {
        if (detail.open) {
          allDetails.forEach((other) => {
            if (other !== detail) other.removeAttribute("open");
          });
        }
      });
    });
  });
  