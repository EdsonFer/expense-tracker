import { Item } from '../../interfaces/Item';
import { TableItem } from '../TableItem';
import { Table, TableHeadColumn } from './styles';

interface TableAreaProps {
	list: Item[];
}

export function TableArea({ list }: TableAreaProps) {
	return (
		<Table>
			<thead>
				<tr>
					<TableHeadColumn width={100}>Data</TableHeadColumn>
					<TableHeadColumn width={130}>Categoria</TableHeadColumn>
					<TableHeadColumn>Título</TableHeadColumn>
					<TableHeadColumn width={150}>Valor</TableHeadColumn>
				</tr>
			</thead>
			<tbody>
				{list.map((item, index) => (
					<TableItem key={index} item={item} />
				))}
			</tbody>
		</Table>
	);
}
