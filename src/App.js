import { CardBack } from "components/CardBack/CardBack";
import { CardFront } from "components/CardFront/CardFront";
import { Container } from "components/Container/Container";
import { Form } from "components/Form/Form";

function App() {
  return (
    <Container>
      <div className="cards">
        <CardFront />
        <CardBack />
      </div>
      <Form />
    </Container>
  );
}

export default App;
