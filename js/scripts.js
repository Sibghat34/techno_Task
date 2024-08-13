// Example: Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menuClose = document.getElementById("menu-close");
  const navLinksMobile = document.getElementById("nav-links-mobile");
  const tabs = document.querySelectorAll("#project-tabs li");
  const tabContents = document.querySelectorAll(".project-tab");

  hamburger.addEventListener("click", function () {
    navLinksMobile.style.display = "flex";
    menuClose.style.display = "block";
    hamburger.style.display = "none";
  });

  menuClose.addEventListener("click", function () {
    navLinksMobile.style.display = "none";
    menuClose.style.display = "none";
    hamburger.style.display = "block";
  });

  function deactivateTabs() {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((content) => (content.style.display = "none"));
  }

  // Function to activate a specific tab and show its content
  function activateTab(tabId) {
    console.log(`Activating tab: ${tabId}`); // Debugging statement
    deactivateTabs();
    document.querySelector(`#${tabId}`).style.display = "grid";
    document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
  }

  // Set default active tab
  activateTab("all");

  // Add click event to each tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();
      const tabId = this.getAttribute("data-tab");
      activateTab(tabId);
    });
  });
});