import { categories } from '../../data/categories';
import { Item } from '../../interfaces/Item';
import { Category, TableColumn, TableLine, Value } from './styles';

interface TableItemProps {
	item: Item;
}

export function TableItem({ item }: TableItemProps) {
	return (
		<TableLine>
			<TableColumn>
				{new Intl.DateTimeFormat('pt-BR').format(new Date(item.date))}
			</TableColumn>
			<TableColumn>
				<Category color={categories[item.category].color}>
					{categories[item.category].title}
				</Category>
			</TableColumn>
			<TableColumn>{item.title}</TableColumn>
			<TableColumn>
				<Value color={categories[item.category].expense ? 'red' : 'green'}>
					{new Intl.NumberFormat('pt-BR', {
						style: 'currency',
						currency: 'BRL',
					}).format(item.value)}
				</Value>
			</TableColumn>
		</TableLine>
	);
}
