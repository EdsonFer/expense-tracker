import styled from 'styled-components';

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
	padding: 0.625rem;
`;

export const Category = styled.div<{ color: string }>`
	display: inline-block;

	padding: 0.313rem 0.625rem;
	border-radius: 0.313rem;
	color: #fff;
	background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
	color: ${props => props.color};
`;
