import Item from "./Item.jsx";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="Pour les candidats" />
      <Item Links={RESOURCES} title="Pour les entreprises" />
      <Item Links={COMPANY} title="Information" />
      <Item Links={SUPPORT} title="Contact Nous" />
    </div>
  );
};

export default ItemsContainer;