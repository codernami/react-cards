import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background-color: hsl(0, 0%, 95%);
		font-family: 'Lexend Deca', sans-serif;
		font-size: 15px;
	}
	img {
		display: block;
		max-width: 100%;
	}
`