export function CRUD() {
	let users = JSON.parse(localStorage.getItem("users")) || [];
	let id = JSON.parse(localStorage.getItem("idUsers")) || 0;

	let userEditing = null;

	// Create user
	const createUser = (user) => {
		// user.id = crypto.randomUUID();
		user.id = ++id;
		users.push(user);
		localStorageSetUser();
		localStorage.setItem("idUsers", JSON.stringify(id));
	};
	// Read users
	const getUsers = () => users;
	const getUser = (id) => users.find((user) => user.id === id);

	// Update user
	const updateUser = (id, userUpdate) => {
		users = users.map((user) =>
			user.id === id ? { ...user, ...userUpdate } : user
		);
		localStorageSetUser();
	};

	// Delete user
	const deleteUser = (id) => {
		users = users.filter((user) => user.id !== id);
		localStorageSetUser();
	};

	const localStorageSetUser = () =>
		localStorage.setItem("users", JSON.stringify(users));

	return {
		createUser,
		getUsers,
		getUser,
		updateUser,
		deleteUser,
	};
}
