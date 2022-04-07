import { filters } from "../utils/filters";
import { Sort } from "./Sort";
import { Checkbox } from "./Checkbox";
import { useData } from "../../../Context";
import { CheckboxBrand } from "./CheckboxBrand";
import { ReactComponent as StarIcon } from "../../../assets/Star.svg";
import { ReactComponent as FilterIcon } from "../../../assets/Filter.svg";

import "./slider.css";
import { useState } from "react";
import MobileFilter from "./MobileFilter";
const Filter = () => {
  const {
    dispatch,
    state: { selectedFilters },
  } = useData();

  const clearFilterHandler = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };

  const [openFilter, setOpenFilter] = useState(false);

  const { rating } = selectedFilters;

  let clearFilterFlag =
    selectedFilters.price?.data ||
    selectedFilters.category?.data ||
    selectedFilters.brands?.data;

  let onChangeSlider = (e) => {
    console.log(e.target.value);
    dispatch({ type: "CHANGE_RATING", rating: e.target.value });
  };

  const filterIconOpen = () => {
    setOpenFilter((flag) => !flag);
  };

  return (
    <>
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
            <label
              style={{ marginRight: "10px" }}
              className='flex jc-center ai-center'>
              <StarIcon
                width='25'
                fill={rating > 0 ? "orange" : "white"}
                height='25'
              />
              <StarIcon
                width='25'
                fill={rating >= 2 ? "orange" : "white"}
                height='25'
              />
              <StarIcon
                width='25'
                fill={rating >= 3 ? "orange" : "white"}
                height='25'
              />
              <StarIcon
                width='25'
                fill={rating >= 4 ? "orange" : "white"}
                height='25'
              />
              <StarIcon
                width='25'
                fill={rating >= 5 ? "orange" : "white"}
                height='25'
              />
            </label>
            <input
              type='range'
              min='1'
              max='5'
              value={rating}
              onChange={onChangeSlider}
              className='slider'
            />
          </li>
        </ul>
      </section>
      <div className='mobile-filter-button'>
        <button onClick={filterIconOpen} className='btn btn-float'>
          <FilterIcon storke='white' />
        </button>
      </div>
      {openFilter && (
        <MobileFilter
          onChangeSlider={onChangeSlider}
          filters={filters}
          clearFilterHandler={clearFilterHandler}
          rating={rating}
          clearFilterFlag={clearFilterFlag}
          setOpenFilter={setOpenFilter}
        />
      )}
    </>
  );
};

export default Filter;
