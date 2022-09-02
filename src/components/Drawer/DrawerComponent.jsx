import DrawerCard from "./DrawerCard";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import useCart from "../../Hooks/useCart";
import { useSelector } from "react-redux";
const DrawerComponent = (props) => {
  const { cartItems, remove, total, itemsQuant } = useCart();
  const Cart = useSelector((state) => state.Cart);
  console.log(Cart);
  return (
    <Drawer
      open={props.isOpen}
      onClose={props.toggleDrawer}
      direction="right"
      style={{
        width: "30%",
        backgroundColor: "#F8F8F8",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <div className="flex flex-col space-y-6 p-4 h-full  ">
        <button
          className="font-bold text-3xl p-4  self-end  "
          onClick={props.toggleDrawer}
        >
          X
        </button>
        <h1 className=" text-4xl font-bold  text-fontPrimary">Cart</h1>
        {cartItems?.map((item) => (
          <DrawerCard
            onRemove={() => {
              remove(item);
            }}
            title="REMOVE"
            ParagraphStyle="text-lg font-bold"
            category="Electronics"
            name={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
        <p className="text-4xl text-fontPrimary flex     ">
          <p className="text-fontSecondary">Total :</p>
          {total}$
        </p>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
