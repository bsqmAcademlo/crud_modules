import "../styles/styles.css";

import { printUsers, printApp } from "./ui.js";
import { CRUD } from "./logic.js";
import { handleForm, handleUser } from "./handles.js";

function main() {
	const crud = CRUD();
	printApp();
	printUsers(crud);
	handleForm(crud);
	handleUser(crud);
}

main();
