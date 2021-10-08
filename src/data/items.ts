import { Item } from '../interfaces/Item';

export const items: Item[] = [
	{
		date: new Date(2021, 10, 15),
		category: 'food',
		title: 'McDonalds',
		value: 32.12,
	},
	{
		date: new Date(2021, 9, 9),
		category: 'food',
		title: 'Burger King',
		value: 28,
	},
	{
		date: new Date(2021, 9, 15),
		category: 'rent',
		title: 'Aluguel Apt',
		value: 2300,
	},
	{
		date: new Date(2021, 9, 15),
		category: 'salary',
		title: 'Salário',
		value: 4500,
	},
];
