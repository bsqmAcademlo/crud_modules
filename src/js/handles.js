import { printUsers, printModalUser } from "./ui.js";
import { editingToUser, updateToUser } from "./helpers.js";

export function handleForm(crud) {
	document.querySelector("#formUser").addEventListener("submit", (e) => {
		e.preventDefault();
		const name = e.target.username.value.trim();
		const email = e.target.useremail.value.trim();

		if (!name || !email) return alert("Los campos son necesarios");

		if (crud.userEditing) {
			updateToUser(crud, { name, email });
		} else {
			crud.createUser({ name, email });
		}
		printUsers(crud);

		e.target.reset();
	});
}

export function handleUser(crud) {
	document.querySelector("#users").addEventListener("click", (e) => {
		if (e.target.classList.contains("btn-danger")) {
			if (crud.userEditing)
				return alert("Estas editando, termina de editar");

			const id = Number(e.target.parentElement.id);
			const response = confirm("Seguro quieres eliminar esta persona?");

			if (!response) return;

			crud.deleteUser(id);
			printUsers(crud);
		}

		if (e.target.classList.contains("btn-warning")) {
			const id = Number(e.target.parentElement.id);
			editingToUser(crud, id);
		}

		if (e.target.classList.contains("btn-success")) {
			const id = Number(e.target.parentElement.id);
			printModalUser(crud, id);
		}
	});
}

export function handleModalUser(crud, nameUser, id) {
	function removeClass() {
		document
			.querySelector(".modal-brayan")
			.classList.remove("modal-brayan-hidden");
	}

	document
		.querySelector(".modal__content__buttons")
		.addEventListener("click", (e) => {
			if (e.target.classList.contains("btn-danger")) {
				const response = confirm(
					"Seguro quieres eliminar a " + nameUser
				);
				if (!response) {
					removeClass();
					return;
				}
				crud.deleteUser(id);
				printUsers(crud);
				removeClass();
			}

			if (e.target.classList.contains("btn-warning")) {
				editingToUser(crud, id);
				removeClass();
			}
		});
}

export function handleHiddenModalUser() {
	const iconCloseHTML = document.querySelector(".iconClose");

	iconCloseHTML.addEventListener("click", () => {
		document
			.querySelector(".modal-brayan")
			.classList.remove("modal-brayan-hidden");
	});
}
