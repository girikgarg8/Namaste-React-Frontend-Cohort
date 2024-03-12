import { CLOUDINARY_CDN_URL } from "../../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="menu-item">
          <div className="accordion-outer">
            <div className="menu-header">
              <span> {item.card.info.name} </span>
              <span>
                - ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="accordion-body-description">
              {item.card.info.description}
            </p>
          </div>
          <div className="accordion-image-container">
            {item.card.info.imageId && (
              <img
                src={CLOUDINARY_CDN_URL + item.card.info.imageId}
                className="accordion-image"
              />
            )}
            <button className="accordion-button"> Add + </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
