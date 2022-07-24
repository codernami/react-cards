import { StyledCard } from './styles/Card.styled'
import { Button } from './styles/Button.styled'

export default function Card({
	item: {id, title, text, image, description, bgColor, btnColor}
}) {
	return (
		<StyledCard bg = {bgColor}>
			<div>
        <img 
        	src = {`./images/${image}`}
        	alt= {description}
        />
      </div>
			<h2>
				{title}
			</h2>
			<p>
				{text}
			</p>
			<Button 
				bg= {bgColor} 
				color= {btnColor}>
				Learn More
			</Button>
		</StyledCard>
	);
}