import { CardBack } from "components/CardBack/CardBack";
import { CardFront } from "components/CardFront/CardFront";
import { Container } from "components/Container/Container";
import { Form } from "components/Form/Form";
import { useState } from "react";
import { cardNumberFormatter } from "util/cardNumberFormatter";

function App() {
  const [name, setName] = useState("");
  const [numberCard, setNumberCard] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [CVC, setCVC] = useState("");

  const handlerInputName = (e) => {
    const value = e.target.value;
    const pattern = /^[A-Za-z\s]*$/;
    if (pattern.test(value)) {
      setName(value);
    }
  };

  const handlerInputNumber = (e) => {
    const value = e.target.value;
    setNumberCard(cardNumberFormatter(value.trim()));
  };

  const handlerInputMonth = (e) => {
    const value = e.target.value;
    const v = value.replace(/[^0-9]/gi, "").substr(0, 2);

    if (+v > 12) {
      setMonth("12");
    } else if (v === "00") {
      setMonth("01");
    } else setMonth(v);
  };

  const onBlurInputMonth = (e) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (value !== "0") {
        setMonth(value.padStart(2, "0"));
      } else {
        setMonth("01");
      }
    }
  };

  const handlerInputYear = (e) => {
    const value = e.target.value;
    const v = value.replace(/[^0-9]/gi, "").substr(0, 2);

    if (v === "00") {
      setYear("01");
    } else setYear(v);
  };

  const onBlurInputYear = (e) => {
    const value = e.target.value;
    if (value.length === 1) {
      if (value !== "0") {
        setYear(value.padStart(2, "0"));
      } else {
        setYear("01");
      }
    }
  };

  const handlerInputCVC = (e) => {
    const value = e.target.value;
    const v = value.replace(/[^0-9]/gi, "").substr(0, 4);
    setCVC(v);
  };

  return (
    <Container>
      <div className="cards">
        <CardFront />
        <CardBack />
      </div>
      <Form
        name={name}
        numberCard={numberCard}
        month={month}
        year={year}
        CVC={CVC}
        handlerInputName={handlerInputName}
        handlerInputNumber={handlerInputNumber}
        handlerInputMonth={handlerInputMonth}
        onBlurInputMonth={onBlurInputMonth}
        handlerInputYear={handlerInputYear}
        onBlurInputYear={onBlurInputYear}
        handlerInputCVC={handlerInputCVC}
      />
    </Container>
  );
}

export default App;
