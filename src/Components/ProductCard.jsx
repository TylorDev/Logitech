import "./ProductCard.scss";
function ProductCard({ img, title, content }) {
  return (
    <div className="product-card ">
      <div className="product-img">
        <img src={img} id="p1" alt="" className="" />
      </div>

      <div className="product-info">
        <div className="product-tittle">{title} </div>
        <div className="product-desc">{content}</div>
      </div>
    </div>
  );
}

export default ProductCard;
