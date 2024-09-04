import { CardBack } from "components/CardBack/CardBack";
import { CardFront } from "components/CardFront/CardFront";
import { Container } from "components/Container/Container";
import { Final } from "components/Final/Final";
import { Form } from "components/Form/Form";
import { useAppContext } from "hook/useAppContext";

function App() {
  const { isSent } = useAppContext();

  return (
    <Container>
      <div className="cards">
        <CardFront />
        <CardBack />
      </div>
      {isSent ? <Final /> : <Form />}
    </Container>
  );
}

export default App;
