import { StyledCard } from './styles/Card.styled'


export default function Card({
	item: {id, title, text, image}
}) {
	return (
		<StyledCard>
			<div>
        <img src={`./images/${image}`}/>
      </div>
			<h2>{title}</h2>
			<p>{text}</p>
			<a href="#">Learn More</a>
		</StyledCard>
	);
}