document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const form = document.querySelector(".register-form");
  const popup = document.getElementById("successPopup");
  const closeBtn = document.getElementById("closePopup");

  if (form && popup && closeBtn) {
    // Form submission
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent default submission

      // Show popup
      popup.style.display = "flex";

      // Reset form
      form.reset();

      // Auto-close popup after 3 seconds and redirect to Home
      setTimeout(() => {
        popup.style.display = "none";
        window.location.href = "index.html";
      }, 3000);
    });

    // Manual close button
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
      window.location.href = "index.html";
    });
  }

  // ===== Courses Page: Dropdown Filter =====
  const courseSelect = document.getElementById('course-medium');
  const courseSections = document.querySelectorAll('.course-section');

  if (courseSelect) {
    courseSelect.addEventListener('change', function () {
      const selectedMedium = this.value;
      courseSections.forEach(section => {
        section.style.display = section.dataset.medium === selectedMedium ? 'block' : 'none';
      });
    });
  }

  // Optional: Enroll buttons alert
  const enrollButtons = document.querySelectorAll(".course-cards .card button");
  enrollButtons.forEach(button => {
    button.addEventListener("click", function () {
      alert("Thank you for showing interest! Please contact us for enrollment.");
    });
  });
});
