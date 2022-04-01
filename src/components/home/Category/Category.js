import { Link } from "react-router-dom";

export const CategoryCard = ({ img, categoryName }) => {
  return (
    <div className='categories-item'>
      <Link to={`/products/category/${categoryName}`}>
        <img className='img-resposive' src={img} alt='clothing-section' />
      </Link>
      <div className='item-btn'>
        <Link to={`/products/category/${categoryName}`}>
          Shop {categoryName}
        </Link>
      </div>
    </div>
  );
};
