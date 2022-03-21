import React from "react";

import { filters } from "../utils/filters";
import { Sort } from "./Sort";
import { Checkbox } from "./Checkbox";

const Filter = () => {
  return (
    <section className='filter'>
      <div className='filter-head flex jc-between'>
        <h4>Filter</h4>
        <h4>Clear All</h4>
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

        {/* <li class='filter-section-title'>SORT</li>
        <li>
          <label class='form-label'>
            <input type='radio' name='sort' value='HIGH_TO_LOW_PRICE' />
            Price High to low
          </label>
        </li>
        <li>
          <label class='form-label'>
            <input type='radio' name='sort' value='LOW_TO_HIGH_PRICE' />
            Price Low to High
          </label>
        </li>
        <div class='card-divider'></div>
        <li class='filter-section-title'>CATEGORIES</li>
        <li>
          <label class='form-label'>
            <input type='checkbox' />
            Hat
          </label>
        </li>
        <li>
          <label class='form-label'>
            <input type='checkbox' />
            Stickers
          </label>
        </li>
        <li>
          <label class='form-label'>
            <input type='checkbox' />
            Keyboards
          </label>
        </li>
        <li>
          <label class='form-label'>
            <input type='checkbox' />
            BackPack
          </label>
        </li>
        <div class='card-divider'></div>
        <li class='filter-section-title'>BRANDS</li>
        <li>
          <label class='form-label'>
            <input type='checkbox' />
            Apple
          </label>
        </li>
        <li>
          <label class='form-label'>
            <input type='checkbox' />
            Google
          </label>
        </li>
        <li>
          <label class='form-label'>
            <input type='checkbox' />
            Dev
          </label>
        </li>
        <li>
          <label class='form-label'>
            <input type='checkbox' />
            Github
          </label>
        </li>
        <div class='card-divider'></div>
        <li class='filter-section-title'>OTHER</li>
        <li>
          <label class='form-label'>
            <input type='checkbox' checked='' />
            Include out of stock
          </label>
        </li> */}
      </ul>
    </section>
  );
};

export default Filter;
