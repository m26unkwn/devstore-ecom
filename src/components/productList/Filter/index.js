import React from "react";

import { filters } from "../utils/filters";
import { Sort } from "./Sort";
import { Checkbox } from "./Checkbox";
import { useData } from "../../../Context/state-context";

const Filter = () => {
  const {  dispatch } = useData();

  const clearFilterHanlder = () => {
    dispatch({ type: "CLEAR_FILTER", payload: {} });
  };
  return (
    <section className='filter'>
      <div className='filter-head flex jc-between'>
        <h4>Filter</h4>
        <h4 onClick={clearFilterHanlder} style={{ cursor: "pointer" }}>
          Clear All
        </h4>
      </div>
      <div className='card-divider'></div>
      <ul className='filter-section'>
        {filters.map((filter) => {
          return filter.type === "sort" ? (
            <Sort key={filter.parameter} filter={filter} />
          ) : filter.type === "checkbox" ? (
            <Checkbox key={filter.parameter} filter={filter} />
          ) : (
            ""
          );
        })}
      </ul>
    </section>
  );
};

export default Filter;
