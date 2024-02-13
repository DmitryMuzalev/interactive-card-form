import clsx from "clsx";
import { useAppContext } from "hook/useAppContext";
import { checkEmptyField } from "util/fieldValidation";

function FormDateFields() {
  const { date, setDate, dateError, setDateError, isConfirm } = useAppContext();

  function handlerOnChangeDateField(name) {
    return (e) => {
      setDateError("");
      const v = e.target.value.replace(/[^0-9]/gi, "").substr(0, 2);
      if (v === "00") {
        setDate({
          ...date,
          [name]: "01",
        });
      } else if (name === "month" && +v > 12) {
        setDate({
          ...date,
          [name]: "12",
        });
      } else {
        setDate({ ...date, [name]: v });
      }
    };
  }

  function handlerOnBlurDateField(name) {
    return (e) => {
      const v = e.target.value;
      if (v.length === 1) {
        if (v !== "0") {
          setDate({ ...date, [name]: v.padStart(2, "0") });
        } else {
          setDate({ ...date, [name]: "01" });
        }
      }
      if (checkEmptyField(v)) {
        setDateError("Can't be blank");
      }
    };
  }

  const handlerOnChangeMonth = handlerOnChangeDateField("month");
  const handlerOnBlurMonth = handlerOnBlurDateField("month");

  const handlerOnChangeYear = handlerOnChangeDateField("year");
  const handlerOnBlurYear = handlerOnBlurDateField("year");

  const styleInputMonth = clsx(
    isConfirm && !date.month && dateError && "errorField"
  );
  const styleInputYear = clsx(
    isConfirm && !date.year && dateError && "errorField"
  );

  return (
    <div className="form__item">
      <label htmlFor="month">exp. date (mm/yy)</label>
      <div className="form__dateInputs">
        <input
          type="text"
          id="month"
          name="month"
          placeholder="MM"
          value={date.month}
          onChange={handlerOnChangeMonth}
          onBlur={handlerOnBlurMonth}
          className={styleInputMonth}
        />
        <input
          type="text"
          id="year"
          name="year"
          placeholder="YY"
          value={date.year}
          onChange={handlerOnChangeYear}
          onBlur={handlerOnBlurYear}
          className={styleInputYear}
        />
      </div>
      {isConfirm && dateError && (
        <span className="errorMessage">{dateError}</span>
      )}
    </div>
  );
}
export { FormDateFields };
