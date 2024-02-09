function FormDateFields({
  month,
  handlerInputMonth,
  onBlurInputMonth,
  year,
  handlerInputYear,
  onBlurInputYear,
}) {
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
          onChange={handlerInputMonth}
          onBlur={onBlurInputMonth}
        />
        <input
          type="text"
          id="year"
          name="year"
          placeholder="YY"
          value={year}
          onChange={handlerInputYear}
          onBlur={onBlurInputYear}
        />
      </div>
      <span className="errorMessage">Error message</span>
    </div>
  );
}
export { FormDateFields };
