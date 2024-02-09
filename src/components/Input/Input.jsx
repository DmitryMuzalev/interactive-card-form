import { useEffect, useState } from "react";
import { checkEmptyField } from "util/fieldValidation";

function Input({
  name,
  placeholder,
  isConfirm,
  handlerOnChange,
  handlerOnBlur,
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isConfirm && checkEmptyField(value)) {
      setError("Can't be blank");
    }
  }, [isConfirm]);

  return (
    <>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handlerOnChange(e, setValue, setError)}
        onBlur={(e) => handlerOnBlur(e, setError)}
      />
      {isConfirm && error && <span className="errorMessage">{error}</span>}
    </>
  );
}
export { Input };
