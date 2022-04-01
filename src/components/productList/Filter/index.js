import { filters } from "../utils/filters";
import { Sort } from "./Sort";
import { Checkbox } from "./Checkbox";
import { useData } from "../../../Context/stateManage/state-context";
import { CheckboxBrand } from "./CheckboxBrand";
import { ReactComponent as StarIcon } from "../../../assets/Star.svg";

import "./slider.css";
const Filter = () => {
  const {
    dispatch,
    state: { selectedFilters, rating },
  } = useData();

  const clearFilterHandler = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  let clearFilterFlag =
    selectedFilters.price?.data ||
    selectedFilters.category?.data ||
    selectedFilters.brands?.data ||
    rating;

  let onChangeSlider = (e) => {
    console.log(e.target.value);
    dispatch({ type: "INCREASE_RATING", rating: e.target.value });
  };

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
        <div className='card-divider'></div>
        <li className='filter-section-title'>Rating</li>

        <li className='flex flex-col  flex-gap jc-center'>
          <label className='flex jc-center ai-center'>
            <StarIcon width='25' height='25' />
            <span style={{ fontSize: "1.5rem" }}>{rating}</span>
          </label>
          <input
            type='range'
            min='1'
            max='5'
            defaultValue='0'
            value={rating}
            onChange={onChangeSlider}
            class='slider'
          />
        </li>
      </ul>
    </section>
  );
};

export default Filter;
