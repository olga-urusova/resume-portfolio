document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Портфолио: фильтрация кейсов
  // =========================

  const filterButtons = document.querySelectorAll(".filter-button");
  const caseCards = document.querySelectorAll(".case-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedFilter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      caseCards.forEach((card) => {
        const categories = card.dataset.categories || "";

        if (selectedFilter === "all" || categories.includes(selectedFilter)) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });

  // =========================
  // Портфолио: кнопки "Подробнее / Свернуть"
  // =========================

  const detailButtons = document.querySelectorAll(".details-button");

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".case-card");
      const details = card.querySelector(".case-details");

      if (!details) return;

      const isHidden = details.hasAttribute("hidden");

      if (isHidden) {
        details.removeAttribute("hidden");
        button.textContent = "Свернуть";
      } else {
        details.setAttribute("hidden", "");
        button.textContent = "Подробнее";
      }
    });
  });

  // =========================
  // Контакты: кнопка "Скопировать email"
  // =========================

  const copyEmailButtons = document.querySelectorAll(".copy-email-button");

  copyEmailButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const email = button.dataset.email;
      const status = button.parentElement.querySelector(".copy-email-status");

      try {
        await navigator.clipboard.writeText(email);

        button.textContent = "Скопировано";

        if (status) {
          status.textContent = "Email скопирован";
        }

        setTimeout(() => {
          button.textContent = "Скопировать email";

          if (status) {
            status.textContent = "";
          }
        }, 2000);
      } catch (error) {
        if (status) {
          status.textContent = "Не удалось скопировать. Скопируйте email вручную.";
        }
      }
    });
  });
  // =========================
  // Опыт работы: кнопки "Подробнее / Свернуть"
  // =========================

  const experienceButtons = document.querySelectorAll(".experience-details-button");

  experienceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const timelineItem = button.closest(".timeline-item");
      const details = timelineItem.querySelector(".experience-details");

      if (!details) return;

      const isHidden = details.hasAttribute("hidden");

      if (isHidden) {
        details.removeAttribute("hidden");
        button.textContent = "Свернуть";
        button.setAttribute("aria-expanded", "true");
      } else {
        details.setAttribute("hidden", "");
        button.textContent = "Подробнее";
        button.setAttribute("aria-expanded", "false");
      }
    });
  });
});