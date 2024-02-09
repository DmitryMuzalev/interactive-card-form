import { useEffect, useState } from "react";
import { checkEmptyField } from "util/fieldValidation";

function FormField({
  name,
  value,
  handlerOnChange,
  handlerOnBlur,
  label,
  placeholder,
  isConfirm,
  error,
}) {
  return (
    <div className="form__item">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handlerOnChange}
        onBlur={handlerOnBlur}
      />
      {isConfirm && error && <span className="errorMessage">{error}</span>}
    </div>
  );
}
export { FormField };
