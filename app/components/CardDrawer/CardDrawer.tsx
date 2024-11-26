"use client";
import { useCart } from "@/app/context/CartContext";
import { Drawer, Button, List, Avatar, Typography, InputNumber } from "antd";
import { useRouter } from "next/navigation";
import { IoRemoveCircleOutline } from "react-icons/io5";

const { Text } = Typography;

const CartDrawer = () => {
  const {
    isCartModalOpen,
    closeCartModal,
    cartItems,
    clearCart,
    removeFromCart,
    addToCart,
  } = useCart();
  const router = useRouter();
  const handleQuantityChange = (value: number, itemId: string | number) => {
    const cartItem = cartItems.find((item) => item.id === itemId);
    if (cartItem && value > 0 && value <= 1) {
      addToCart({ ...cartItem, quantity: value });
    }
  };

  const handleCheckout = () => {
    router.push("/checkout");
    closeCartModal();
  };

  const getPriceAsNumber = (price: string | number): number => {
    if (typeof price === "number") return price;
    if (typeof price === "string" && price.startsWith("$")) {
      return parseFloat(price.slice(1));
    }
    return 0;
  };

  return (
    <Drawer
      title="Your Cart"
      placement="right"
      onClose={closeCartModal}
      open={isCartModalOpen}
      width={600}
    >
      {cartItems.length > 0 ? (
        <>
          <List
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <div style={{ display: "flex" }}>
                    <InputNumber
                      min={1}
                      max={50}
                      value={item.quantity}
                      onChange={(value) =>
                        handleQuantityChange(value ?? 1, item.id)
                      }
                      style={{ width: 60 }}
                    />
                    ,
                    <Button
                      type="link"
                      danger
                      onClick={() => removeFromCart(item.id)}
                    >
                      <IoRemoveCircleOutline size={26} />
                    </Button>
                  </div>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.image} size={64} />}
                  title={<Text strong>{item.title}</Text>}
                  description={
                    <>
                      <Text>{item.description}</Text>
                      <div>
                        <Text style={{ marginRight: "10px" }} strong>
                          {item.price}$
                        </Text>
                        <Text type="secondary">{item.calories}</Text>
                      </div>
                    </>
                  }
                />
              </List.Item>
            )}
          />
          <div style={{ marginTop: 20 }}>
            <Text strong>Total Items: {cartItems.length}</Text>
            <br />
            <Text strong>
              Total Price: $
              {cartItems
                .reduce(
                  (total, item) =>
                    total + getPriceAsNumber(item.price) * item.quantity,
                  0
                )
                .toFixed(2)}
            </Text>
          </div>
          <Button
            type="primary"
            style={{ marginTop: 20, backgroundColor: "rgb(0, 123, 85)" }}
            block
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </>
      ) : (
        <Text>Your cart is empty.</Text>
      )}
    </Drawer>
  );
};

export default CartDrawer;
