import styled from 'styled-components'

export const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 330px;
	height: 440px;
	padding: 2.3rem;
	background-color: hsl(31, 77%, 52%);

	h2 {
		color: hsl(0, 0%, 95%);
		font-family: 'Big Shoulders Display', cursive;	
		font-size: 2.3rem;
		font-weight: 700;
		text-transform: uppercase;
	}
	p {
		color: hsla(0, 0%, 100%, 0.75);
		font-size: 1.2rem;
	}
	a {
		width: 155px;
		padding: .5rem;
		text-align: center;
		text-decoration: none;		
		background-color: hsl(0, 0%, 95%);
		color: hsl(31, 77%, 52%);
		border-radius: 24px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

		&:hover {
			color: hsl(0, 0%, 95%);
			background-color: hsl(31, 77%, 52%);
			border: 2px solid hsl(0, 0%, 95%);
			cursor: pointer;
		}
	}

`
