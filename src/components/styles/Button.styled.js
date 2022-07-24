import styled from 'styled-components'


export const Button = styled.button`
		width: 150px;
		padding: .7rem .5rem;
		text-align: center;
		color: ${({ color }) => color};	  
		background-color: hsl(0, 0%, 95%);
		border-radius: 24px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
		border: 2px solid transparent;

		&:hover {
			color: hsl(0, 0%, 95%);
			background-color: ${({ bg }) => bg};
			border: 2px solid hsl(0, 0%, 95%);
			cursor: pointer;
		}

`