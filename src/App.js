import Card from './components/Card'
import content from './content'

function App() {
  return (
    <div>
    {content.map((item, index) => (
      <Card key= {index} item= {item} />
    ))}
    </div>
  );
}

export default App;
