    // Código JavaScript
    const contactList = document.getElementById("contact-list");
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const adressInput = document.getElementById("adress");

    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      // Crear un nuevo contacto
      const contact = document.createElement("div");
      contact.innerHTML = `<strong>${nameInput.value}</strong> - ${emailInput.value} </strong> - ${phoneInput.value}</strong> - ${adressInput.value}`;
      contactList.appendChild(contact);

      // Limpiar los campos del formulario
      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
      adressInput.value = "";
      
        // Agregar el evento de eliminación al ícono "X"
    const deleteButton = contact.querySelector(".delete-button");
    deleteButton.addEventListener("click", function() {
      contact.remove();
    });

    contactList.appendChild(contact);

    });

    

    contactList.addEventListener("click", function(event) {
      if (event.target.tagName === "DIV") {
        // Eliminar el contacto al hacer clic en él
        event.target.remove();
      }
    });

// ... Resto de tu código JavaScript ...
