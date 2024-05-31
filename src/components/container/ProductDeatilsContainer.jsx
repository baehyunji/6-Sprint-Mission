import ProductDetails from "../ui/ProductDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct, getComment } from "../../api";
import CommentDetails from "../ui/CommentDetails";

function ProductDetailsContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const detailedProduct = async () => {
      try {
        const productData = await getProduct(productId);
        setProduct(productData);
      } catch (e) {
        if (e.response) {
          console.log(e.response.status);
          console.log(e.response.data);
        } else {
          console.log("리퀘스트가 실패했습니다.");
        }
      }
    };

    const detailedComment = async () => {
      const params = { limit: 3 };
      try {
        const commentData = await getComment({ productId, params });
        setComments(commentData.list);
      } catch (e) {
        if (e.response) {
          console.log(e.response.status);
          console.log(e.response.data);
        } else {
          console.log("리퀘스트가 실패했습니다.");
        }
      }
    };
    detailedComment();
    detailedProduct();
  }, [productId]);

  if (!product) {
    return <div>로딩중</div>;
  }

  return (
    <>
      <ProductDetails product={product} />
      <CommentDetails comments={comments} />
    </>
  );
}

export default ProductDetailsContainer;
