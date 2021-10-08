import { Container, Info, Title } from './styles';

interface ResumeItemProps {
	title: string;
	value: number;
	color?: string;
}

export function ResumeItem({ title, value, color }: ResumeItemProps) {
	return (
		<Container>
			<Title>{title}</Title>
			<Info color={color}>
				{new Intl.NumberFormat('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				}).format(value)}
			</Info>
		</Container>
	);
}
