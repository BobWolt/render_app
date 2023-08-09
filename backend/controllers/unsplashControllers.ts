import express, { Request, Response } from 'express';
import axios from 'axios';

export const getImage = async (req: Request, res: Response) => {
	// `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_SECRET_KEY}`
	console.log(process.env.UNSPLASH_ACCESS_KEY);
	axios
		.get(
			`https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=5&query=office>`
		)
		.then((response) => {
			console.log('Status Code:', response.data);
			res.status(200).json({ message: response.data });
		})
		.catch((err) => {
			console.log('Error: ', err.message);
		});
};

export const setTodo = (req: Request, res: Response) => {
	res.status(200).json({ message: 'Set todo' });
};

//export default { getTodos, setTodo };
