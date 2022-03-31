import { useParams } from "react-router-dom";
import { useData } from "../../Context/stateManage/state-context";

const SingleProduct = () => {
  const { productId } = useParams();
  const {
    state: { products },
  } = useData();

  const singleProduct = products.find((item) => item._id === productId);
  console.log(singleProduct);

  console.log(useParams());
  return <div>{JSON.stringify(singleProduct)}</div>;
};
export default SingleProduct;
