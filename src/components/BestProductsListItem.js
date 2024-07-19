import "./BestProductsListItem.css";
import favoriteImg from "../assets/favorite.png";
import { useNavigate } from "react-router-dom";

function BestProductsListItem({ product }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/items/${product.id}`);
  };

  return (
    <div className="best-products-list-item" onClick={handleProductClick}>
      <img
        className="best-products-list-item__img"
        src={product.images[0]}
        alt={product.name}
      />
      <div>
        <h3>{product.description}</h3>
        <h2>{product.price}원</h2>
        <div className="favorite-contents">
          <img src={favoriteImg} alt="favorite-img" />
          <h3>{product.favoriteCount}</h3>
        </div>
      </div>
    </div>
  );
}

export default BestProductsListItem;
