import { Input } from "./Input";
import { useData } from "../../../Context/state-context";

export const Sort = ({ filter }) => {
  const {
    state: { selectedFilters },
  } = useData();
  let value = selectedFilters?.price?.data;

  return (
    <>
      <li className='filter-section-title'>{filter.name}</li>
      {filter.data.map((sort) => (
        <li key={sort.id}>
          <Input
            value={sort.value}
            name={sort.name}
            label={sort.label}
            filterType={filter.type}
            filterParam={filter.parameter}
            type='SORT_CHANGE'
            stateValue={value}
            inputType='radio'
          />
        </li>
      ))}
    </>
  );
};
