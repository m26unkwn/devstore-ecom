import { useData } from "../../../Context/state-context";

export const Input = ({
  filterParam,
  dispatchType,
  filterType,
  inputType,
  value,
  name,
  label,
  stateValue,
}) => {
  const { dispatch } = useData();

  const onChangeHandler = () => {
    dispatch({
      type: dispatchType,
      payload: {
        data: value,
        filterType: filterType,
        filterParam: filterParam,
      },
    });
  };

  let checkedValue = Array.isArray(stateValue)
    ? stateValue.some((val) => value === val)
    : stateValue
    ? value === stateValue
    : false;

  return (
    <label className='form-label'>
      <input
        type={inputType}
        name={name}
        value={value}
        onChange={onChangeHandler}
        checked={checkedValue}
      />
      {label}
    </label>
  );
};
