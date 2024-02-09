import { CardBack } from "components/CardBack/CardBack";
import { CardFront } from "components/CardFront/CardFront";
import { Container } from "components/Container/Container";
import { Form } from "components/Form/Form";
import { useState } from "react";

function App() {
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <Container>
      <div className="cards">
        <CardFront />
        <CardBack />
      </div>
      <Form isConfirm={isConfirm} setIsConfirm={setIsConfirm} />
    </Container>
  );
}

export default App;
