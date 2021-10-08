import { useState } from 'react';
import { categories } from '../../data/categories';
import { Item } from '../../interfaces/Item';
import { Container, Form } from './styles';

interface InputAreaProps {
	onAdd: (item: Item) => void;
}

export function InputArea({ onAdd }: InputAreaProps) {
	const [dateField, setDateField] = useState('');
	const [categoryField, setCategoryField] = useState('');
	const [titleField, setTitleField] = useState('');
	const [valueField, setValueField] = useState(0);

	let categoryKeys: string[] = Object.keys(categories);

	const handleAddEvent = () => {
		let errors: string[] = [];

		if (isNaN(new Date(dateField).getTime())) {
			errors.push('Data inválida');
		}
		if (!categoryKeys.includes(categoryField)) {
			errors.push('Categoria Inválida');
		}
		if (titleField === '') {
			errors.push('Título Vazio');
		}
		if (valueField < 0) {
			errors.push('Valor inválido');
		}
		if (errors.length > 0) {
			alert(errors.join('\n'));
		} else {
			onAdd({
				date: new Date(dateField),
				category: categoryField,
				title: titleField,
				value: valueField,
			});
			clearField();
		}
	};

	const clearField = () => {
		setDateField('');
		setCategoryField('');
		setTitleField('');
		setValueField(0);
	};

	return (
		<Container>
			<Form>
				<label>Data</label>
				<input
					type="date"
					value={dateField}
					onChange={event => setDateField(event.target.value)}
				/>
			</Form>
			<Form>
				<label>Categoria</label>
				<select
					value={categoryField}
					onChange={event => setCategoryField(event.target.value)}
				>
					<option></option>
					{categoryKeys.map((key, index) => (
						<option key={index} value={key}>
							{categories[key].title}
						</option>
					))}
				</select>
			</Form>
			<Form>
				<label>Título</label>
				<input
					type="text"
					value={titleField}
					onChange={event => setTitleField(event.target.value)}
				/>
			</Form>
			<Form>
				<label>Valor</label>
				<input
					type="number"
					value={valueField}
					onChange={event => setValueField(parseFloat(event.target.value))}
				/>
			</Form>
			<Form>
				<button onClick={handleAddEvent}>Adicionar</button>
			</Form>
		</Container>
	);
}
