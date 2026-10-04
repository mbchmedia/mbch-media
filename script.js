"use strict";
const header = document.querySelector(".header");
const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
if (toggle && navigation) {
  header.classList.add("js-enabled");
  toggle.hidden = false;
  const closeMenu = () => {
    navigation.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  };
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    toggle.textContent = open ? "Close" : "Menu";
  });
  navigation.addEventListener("click", event => { if (event.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu(); toggle.focus();
    }
  });
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");
const copyButton = document.querySelector("#copy-message");
if (form) {
  const prepare = () => {
    const value = name => form.elements.namedItem(name).value.trim();
    const type = value("collaboration");
    const subject = `MBCH MEDIA: ${type}`;
    const body = ["Hello MBCH Media,", "", value("message"), "", `Name: ${value("name")}`,
      `Email: ${value("email")}`, `Company / organization: ${value("company") || "Not provided"}`,
      `Role / profession: ${value("role") || "Not provided"}`, `Collaboration: ${type}`].join("\n");
    return { subject, body };
  };
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const { subject, body } = prepare();
    status.textContent = "Send the draft from your email app. If it did not open, copy your message and email contact@mbchmedia.com directly.";
    window.location.href = `mailto:contact@mbchmedia.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    if (!form.reportValidity()) return;
    const { subject, body } = prepare();
    const text = `To: contact@mbchmedia.com\nSubject: ${subject}\n\n${body}`;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = "Message copied. Paste it into your email app and send it to contact@mbchmedia.com.";
    } catch {
      status.textContent = "Copy is unavailable in this browser. Select your message and copy it manually, then email contact@mbchmedia.com.";
    }
  });
}
