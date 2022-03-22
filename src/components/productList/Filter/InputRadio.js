import { useData } from "../../../Context/state-context";

export const InputRadio = ({
  filterParam,
  type,
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
      type: type,
      payload: {
        data: value,
        filterType: filterType,
        filterParam: filterParam,
      },
    });
  };

  return (
    <label className='form-label'>
      <input
        type='radio'
        name={name}
        value={value}
        onChange={onChangeHandler}
        checked={value === stateValue}
      />
      {label}
    </label>
  );
};
