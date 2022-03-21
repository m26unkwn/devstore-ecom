import { Input } from "./Input";

export const Checkbox = ({ filter }) => {
  return (
    <>
      <div className='card-divider'></div>

      <li className='filter-section-title'>{filter.name}</li>
      {filter.data.map((check) => (
        <li key={check.id}>
          <Input
            type='CHECKBOX_CHANGE'
            filterType={filter.type}
            inputType='checkbox'
            label={check.label}
            value={check.value}
            name={check.name}
            filterParam={filter.parameter}
          />
        </li>
      ))}
    </>
  );
};
