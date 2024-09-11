"use client";

import { useEffect, useState } from "react";

const Home = () => {
	const [name, setName] = useState("");
	useEffect(() => {
		fetch("https://first-project-2s4a.onrender.com")
			.then((res) => res.json())
			.then((data) => console.log(data));
	}, []);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetch("https://first-project-2s4a.onrender.com", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
			}),
		});
	};
	return (
		<div>
			<h1 className="text-2xl text-center">Home Page</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} />
				<button>Submit</button>
			</form>
		</div>
	);
};

// const Home = async () => {
// const response = await fetch("https://first-project-2s4a.onrender.com/");
// 	const response = await fetch("http://localhost:8080");
// 	const data = await response.json();
// 	console.log("data", data);
// 	return (
// 		<div>
// 			{data.name}
// 		</div>
// 	);
// };

export default Home;
