import { InputCheckbox } from "./InputCheckbox";

import { useData } from "../../../Context/state-context";
export const Checkbox = ({ filter }) => {
  const {
    state: { selectedFilters },
  } = useData();
  let value = selectedFilters?.category?.data;

  console.log("category", value);

  return (
    <>
      <div className='card-divider'></div>

      <li className='filter-section-title'>{filter.name}</li>
      {filter.data.map((check) => (
        <li key={check.id}>
          <InputCheckbox
            type='CHECKBOX_CHANGE'
            filterType={filter.type}
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
