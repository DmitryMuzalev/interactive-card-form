import { useAppContext } from "hook/useAppContext";

function FormField({
  name,
  value,
  handlerOnChange,
  handlerOnBlur,
  label,
  placeholder,
  error,
}) {
  const { isConfirm } = useAppContext();

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
