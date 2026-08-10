const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const form = document.getElementById("enquiryForm");
const message = document.getElementById("formMessage");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const text = `Hello UmmatTours, I would like to enquire about a trip to ${data.get("destination") || "a destination"}. My name is ${data.get("name")} and my phone number is ${data.get("phone")}.`;
  const whatsappNumber = "910000000000"; // Replace with your real WhatsApp number.
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  message.textContent = "Opening WhatsApp with your enquiry…";
});
