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
if (form && status) {
  const submitButton = form.querySelector('button[type="submit"]');
  let submitting = false;
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (submitting || !form.reportValidity()) return;
    submitting = true;
    submitButton.disabled = true;
    submitButton.textContent = "Sending…";
    form.setAttribute("aria-busy", "true");
    status.dataset.state = "sending";
    status.textContent = "Sending your message…";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const payload = Object.fromEntries(new FormData(form));
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        status.dataset.state = "error";
        status.textContent = "Your message could not be sent. Your entries have been kept. Please try again later.";
        return;
      }
      form.reset();
      status.dataset.state = "success";
      status.textContent = "Thank you. Your message has been submitted successfully. We’ll respond within 2–3 business days.";
    } catch (error) {
      status.dataset.state = "error";
      status.textContent = error.name === "AbortError"
        ? "We couldn’t confirm whether your message was sent. Your entries have been kept. Please wait before trying again to avoid sending it twice."
        : "We couldn’t confirm your submission. Your entries have been kept. Check your connection and try again later.";
    } finally {
      clearTimeout(timeout);
      submitting = false;
      submitButton.disabled = false;
      submitButton.textContent = "Send message";
      form.setAttribute("aria-busy", "false");
    }
  });
}
