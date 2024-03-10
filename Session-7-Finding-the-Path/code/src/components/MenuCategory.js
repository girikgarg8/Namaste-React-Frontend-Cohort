import ItemList from "./ItemList";

const MenuCategory = (props) => {
  const { data, accordionIndex, index, openCallBack, closeCallBack } = props;

  const handleButtonClick = () => {
    if (index == accordionIndex) closeCallBack();
    else openCallBack(index);
  };

  return (
    <div className="accordion-header">
      <div className="accordion-body" onClick={handleButtonClick}>
        <span className="accordion-header-title">
          {data.title} ({data.itemCards.length})
        </span>
        <span> ⬇️ </span>
      </div>
      {index == accordionIndex && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default MenuCategory;
