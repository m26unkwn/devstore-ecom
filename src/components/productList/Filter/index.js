import { filters } from "../utils/filters";
import { Sort } from "./Sort";
import { Checkbox } from "./Checkbox";
import { useData } from "../../../Context/stateManage/state-context";
import { CheckboxBrand } from "./CheckboxBrand";

const Filter = () => {
  const {
    dispatch,
    state: { selectedFilters },
  } = useData();

  const clearFilterHandler = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  let clearFilterFlag =
    selectedFilters.price?.data ||
    selectedFilters.category?.data ||
    selectedFilters.brands?.data;

  return (
    <section className='filter'>
      <div className='filter-head flex jc-between'>
        <h4>Filter</h4>
        {clearFilterFlag ? (
          <h4 onClick={clearFilterHandler} style={{ cursor: "pointer" }}>
            Clear All
          </h4>
        ) : null}
      </div>
      <div className='card-divider'></div>

      <ul className='filter-section'>
        {filters.map((filter) => {
          return filter.type === "sort" ? (
            <Sort key={filter.parameter} filter={filter} />
          ) : filter.type === "checkbox" ? (
            <Checkbox key={filter.parameter} filter={filter} />
          ) : filter.type === "checkboxBrand" ? (
            <CheckboxBrand key={filter.parameter} filter={filter} />
          ) : (
            ""
          );
        })}
      </ul>
    </section>
  );
};

export default Filter;
