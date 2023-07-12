export function updateToUser(crud, userUpdate) {
	crud.updateUser(crud.userEditing.id, {
		...userUpdate,
	});

	titleForm.textContent = "Register user";
	btnUser.textContent = "Register";
	btnUser.classList.remove("btn-warning");
	crud.userEditing = null;
}

export function editingToUser(crud, id) {
	crud.userEditing = crud.getUser(id);
	titleForm.textContent = "Editing user " + crud.userEditing.name;
	username.value = crud.userEditing.name;
	useremail.value = crud.userEditing.email;
	btnUser.textContent = "Edit";
	btnUser.classList.add("btn-warning");
}
