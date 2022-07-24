import styled from 'styled-components'

export const StyledCard = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 330px;
	height: 440px;
	padding: 2.3rem;
	background-color: ${({ bg }) => bg};

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
`
