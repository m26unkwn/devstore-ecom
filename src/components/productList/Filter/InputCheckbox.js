import { useData } from "../../../Context/state-context";

export const InputCheckbox = ({
  filterParam,
  type,
  filterType,
  value,
  name,
  label,
  stateValue,
}) => {
  const { dispatch } = useData();
  const onChangeHandler = () => {
    dispatch({
      type: type,
      payload: {
        data: value,
        filterType: filterType,
        filterParam: filterParam,
      },
    });
  };

  let checkedValue = Array.isArray(stateValue)
    ? stateValue.some((val) => value === val)
    : false;

  console.log("is Array ", checkedValue, value);

  return (
    <label className='form-label'>
      <input
        type='checkbox'
        name={name}
        value={value}
        onChange={onChangeHandler}
        checked={checkedValue}
      />
      {label}
    </label>
  );
};
