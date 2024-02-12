import { useAppContext } from "hook/useAppContext";

function FormDateFields() {
  const {
    month,
    year,
    dateError,
    isConfirm,
    handlerOnChangeMonth,
    handlerOnBlurMonth,
    handlerOnChangeYear,
    handlerOnBlurYear,
  } = useAppContext();

  return (
    <div className="form__item">
      <label htmlFor="month">exp. date (mm/yy)</label>
      <div className="form__dateInputs">
        <input
          type="text"
          id="month"
          name="month"
          placeholder="MM"
          value={month}
          onChange={handlerOnChangeMonth}
          onBlur={handlerOnBlurMonth}
        />
        <input
          type="text"
          id="year"
          name="year"
          placeholder="YY"
          value={year}
          onChange={handlerOnChangeYear}
          onBlur={handlerOnBlurYear}
        />
      </div>
      {isConfirm && dateError && (
        <span className="errorMessage">{dateError}</span>
      )}
    </div>
  );
}
export { FormDateFields };
