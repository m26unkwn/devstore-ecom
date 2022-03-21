import { Input } from "./Input";

export const Sort = ({ filter }) => {
  return (
    <>
      <li className='filter-section-title'>{filter.name}</li>
      {filter.data.map((sort) => (
        <li key={sort.id}>
          <Input
            inputType='radio'
            value={sort.value}
            name={sort.name}
            label={sort.label}
            filterType={filter.type}
            filterParam={filter.parameter}
            type='SORT_CHANGE'
          />
        </li>
      ))}
    </>
  );
};
