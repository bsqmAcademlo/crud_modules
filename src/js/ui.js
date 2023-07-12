import { handleHiddenModalUser, handleModalUser } from "./handles.js";

export function printApp() {
	document.querySelector("#app").innerHTML = `
		<div class="container">
			<form class="mt-5" id="formUser">
				<h2 id="titleForm">Register user</h2>
				<div class="mb-3">
					<label for="username" class="form-label">username</label>
					<input type="text" class="form-control" id="username">
				</div>
				<div class="mb-3">
					<label for="useremail" class="form-label">email</label>
					<input type="email" class="form-control" id="useremail">
				</div>
				<div class="d-grid">
					<button type="submit" class="btn btn-primary" id="btnUser">Register</button>
				</div>
			</form>

			<table class="table table-dark mt-5">
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">name</th>
						<th scope="col">email</th>
						<th scope="col">opt</th>
					</tr>
				</thead>
				<tbody id="users"></tbody>
			</table>

			<div class="modal-brayan"></div>
		</div>
	`;
}

export function printUsers(crud) {
	let html = "";

	crud.getUsers().forEach(({ id, email, name }) => {
		html += `
            <tr>
                <th scope="row">${id}</th>
                <td>${name}</td>
                <td>${email}</td>
                <td id="${id}">
                    <button type="button" class="btn btn-danger">Elim</button>
                    <button type="button" class="btn btn-warning">Edit</button>
                    <button type="button" class="btn btn-success">Show</button>
                </td>
            </tr>
        `;
	});

	document.querySelector("#users").innerHTML = html;
}

export function printModalUser(crud, id) {
	const { name, email } = crud.getUser(id);
	const modalBrayanHTML = document.querySelector(".modal-brayan");

	modalBrayanHTML.innerHTML = `
		<div class="modal__content">
			<div class="iconClose">
				<span>x</span>
			</div>

			<div className="modal__content__info">
				<div class="modal__content__img"></div>
				<h2>${name}</h2>
				<h3>${email}</h3>
				<div class="modal__content__buttons">
					<button type="button" class="btn btn-danger">Elim</button>
					<button type="button" class="btn btn-warning">Edit</button>
				</div>
			</div>
		</div>`;

	modalBrayanHTML.classList.add("modal-brayan-hidden");

	handleHiddenModalUser();
	handleModalUser(crud, name, id);
}
