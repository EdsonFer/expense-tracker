import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	box-shadow: 0px 0px 5px #ccc;
	border-radius: 0.625rem;
	padding: 1.25rem;
	margin-top: 1rem;

	display: flex;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

export const Form = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	text-align: center;
	font-weight: bold;

	input,
	select {
		outline: none;
		padding: 0.625rem;
		border-radius: 0.5rem;
	}

	button {
		padding: 0.5rem 1rem;
		background-color: #add8e6;
		border: none;
		border-radius: 0.625rem;
		margin-top: 1rem;
	}
`;
