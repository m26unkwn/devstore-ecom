import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../../Context";

export const CategoryCard = ({ img, categoryName }) => {
  const { dispatch } = useData();

  const navigate = useNavigate();

  const onClickNavigate = (e, navigate) => {
    e.preventDefault();
    dispatch({
      type: "CHECKBOX_CHANGE",
      payload: {
        data: categoryName,
        filterType: "checkbox",
        filterParam: "category",
      },
    });
    navigate("/products");
  };

  return (
    <div className='categories-item'>
      <Link to={`/products/category/${categoryName}`}>
        <img className='img-resposive' src={img} alt='clothing-section' />
      </Link>
      <div className='item-btn' onClick={(e) => onClickNavigate(e, navigate)}>
        <span>Shop {categoryName}</span>
      </div>
    </div>
  );
};
