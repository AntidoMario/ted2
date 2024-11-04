$(document).ready(function() {
  // Show Add Item modal and initialize Select2
  const addButton = document.querySelector(".add-btn");
  const addModal = document.getElementById("addItemModal");
  addButton.addEventListener("click", () => {
    addModal.style.display = "flex";
    
    // Initialize Select2 for Add Item Modal
    $('#addSupplierName, #addCategories').select2();
  });

  // Show Edit Item modal and initialize Select2
  const editButtons = document.querySelectorAll(".bx-edit");
  const editModal = document.getElementById("editItemModal");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      editModal.style.display = "flex";
      
      // Initialize Select2 for Edit Item Modal
      $('#editSupplierName, #editCategories').select2();
    });
  });

  // Hide Add Item modal
  const closeAddButton = addModal.querySelector(".close-btn");
  closeAddButton.addEventListener("click", () => {
    addModal.style.display = "none";
  });

  // Hide Edit Item modal
  const closeEditButton = editModal.querySelector(".close-btn");
  closeEditButton.addEventListener("click", () => {
    editModal.style.display = "none";
  });
});
