import { AccordionImageContainer, AccordionOuter } from "../styles.js";
import { CLOUDINARY_CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../slice/cartSlice.js";

const ItemList = ({ items, isAdded }) => {
  const dispatch = useDispatch();

  const handleAddItem = (itemInfo) => {
    dispatch(addItem(itemInfo));
  };

  const handleRemoveItem = (itemIndex) => {
    dispatch(removeItem(itemIndex));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={item.card.info.id} className="menu-item">
          <AccordionOuter>
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
          </AccordionOuter>
          <AccordionImageContainer>
            {item.card.info.imageId && (
              <img
                src={CLOUDINARY_CDN_URL + item.card.info.imageId}
                className="accordion-image"
              />
            )}
            {!isAdded && (
              <button
                className="accordion-button-add"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            )}
            {isAdded && (
              <button
                className="accordion-button-delete"
                onClick={() => handleRemoveItem(index)}
              >
                Remove -
              </button>
            )}
          </AccordionImageContainer>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
