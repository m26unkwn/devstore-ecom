import { Input } from "./Input";

import { useData } from "../../../Context/stateManage/state-context";
export const Checkbox = ({ filter }) => {
  const {
    state: { selectedFilters },
  } = useData();

  let value = selectedFilters?.category?.data;

  return (
    <>
      <div className='card-divider'></div>

      <li className='filter-section-title'>{filter.name}</li>
      {filter.data.map((check) => (
        <li key={check.id}>
          <Input
            dispatchType='CHECKBOX_CHANGE'
            filterType={filter.type}
            inputType='checkbox'
            label={check.label}
            value={check.value}
            name={check.name}
            filterParam={filter.parameter}
            stateValue={value}
          />
        </li>
      ))}
    </>
  );
};
