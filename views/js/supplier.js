  // Get modal and trigger elements
  const modal = document.getElementById("addItemModal");
  const addButton = document.querySelector(".add-btn");
  const closeButton = document.querySelector(".close-btn");

  // Show modal when the add button is clicked
  addButton.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  // Hide modal when the close button is clicked
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Hide modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Get modal elements for viewing item details
const viewModal = document.getElementById("viewItemModal");
const viewButtons = document.querySelectorAll(".bx-show"); // All "show" icons
const closeViewButton = viewModal.querySelector(".close-btn");

// Show modal when a "show" icon is clicked
viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    viewModal.style.display = "flex";
  });
});

// Hide view modal when the close button is clicked
closeViewButton.addEventListener("click", () => {
  viewModal.style.display = "none";
});

// Hide view modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === viewModal) {
    viewModal.style.display = "none";
  }
});

// Get modal elements for editing item details
const editModal = document.getElementById("editItemModal");
const editButtons = document.querySelectorAll(".bx-edit"); // All "edit" icons
const closeEditButton = editModal.querySelector(".close-btn");

// Show modal when an "edit" icon is clicked
editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    editModal.style.display = "flex";
  });
});

// Hide edit modal when the close button is clicked
closeEditButton.addEventListener("click", () => {
  editModal.style.display = "none";
});

// Hide edit modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === editModal) {
    editModal.style.display = "none";
  }
});

