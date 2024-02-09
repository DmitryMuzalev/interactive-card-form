import { Input } from "components/Input/Input";

function FormField({
  name,
  handlerOnChange,
  handlerOnBlur,
  label,
  placeholder,
  isConfirm,
}) {
  return (
    <div className="form__item">
      <label htmlFor={name}>{label}</label>
      <Input
        isConfirm={isConfirm}
        placeholder={placeholder}
        handlerOnBlur={handlerOnBlur}
        handlerOnChange={handlerOnChange}
      />
    </div>
  );
}
export { FormField };
