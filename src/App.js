import { GlobalStyles } from './components/styles/Global'
import { Container } from './components/styles/Container.styled'
import Card from './components/Card'
import content from './content'

function App() {
  return (
    <>
    <GlobalStyles/>
    <Container>
      {content.map((item, index) => (
        <Card key= {index} item= {item} />
      ))}
    </Container>
    </>
  );
}

export default App;
