import { useData } from "../../../Context/state-context";

export const Input = ({
  filterParam,
  type,
  filterType,
  inputType,
  value,
  name,
  label,
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
        type={inputType}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
      {label}
    </label>
  );
};
