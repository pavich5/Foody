"use client";
import React, { useState } from "react";
import {
  Radio,
  Form,
  Input,
  List,
  Typography,
  Button,
  Divider,
  Card,
  Row,
  Col,
  Modal,
  notification,
  TimePicker,
} from "antd";
import { useCart } from "../context/CartContext";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const { Title, Text } = Typography;

const CheckoutPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState("home");
  const [form] = Form.useForm();
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [markerPosition, setMarkerPosition] = useState<LatLngExpression | null>(
    null
  );
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handlePromoCodeChange = (e: any) => {
    setPromoCode(e.target.value);
  };

  const applyPromoCode = () => {
    if (promoCode === "TEST10") {
      setDiscount(10);
      notification.success({
        message: "Promo Code Applied",
        description: "You have successfully applied the promo code!",
      });
    } else {
      notification.error({
        message: "Invalid Promo Code",
        description:
          "The promo code you entered is not valid. Please try again.",
      });
    }
  };
  const handlePlaceOrder = () => {
    if (cartItems.length < 1) {
      notification.error({
        message: "Empty Order",
        description: "Please add items in order to create order",
        placement: "top",
      });
      return;
    }
    form.validateFields().then((values) => {
      console.log("Order Details:", { ...values, cartItems, deliveryMethod });
      setIsLoading(true);
      setTimeout(() => {
        console.log("Order Details:", { ...values, cartItems, deliveryMethod });
        const generatedOrderId = Math.floor(Math.random() * 1000000);
        setIsOrderPlaced(true);
        setIsLoading(false);
        notification.success({
          message: "Order Placed Successfully",
          description: "Your order has been placed successfully",
          placement: "top",
        });
        form.resetFields();
      }, 3000);
      form.resetFields();
    });
  };

  const handleTimeChange = (value: any) => {
    form.setFieldsValue({ deliveryTime: value });
  };

  if (isOrderPlaced) {
    return (
      <Card title="Order Confirmation" bordered>
        <section>
          <Title level={4}>Order Summary</Title>
          <p>
            <strong>Order ID:</strong> #11312
          </p>
          <p>
            <strong>Delivery Method:</strong>{" "}
            {deliveryMethod === "home" ? "Home Delivery" : "Store Pickup"}
          </p>
          <p>
            <strong>Delivery Time:</strong>{" "}
            {form.getFieldValue("deliveryTime") || "Not selected"}
          </p>
          <Title level={5}>Cart Items:</Title>
          <List
            itemLayout="horizontal"
            dataSource={cartItems}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: 60, height: 60, borderRadius: 5 }}
                    />
                  }
                  title={item.title}
                  description={item.price}
                />
              </List.Item>
            )}
          />
        </section>
      </Card>
    );
  }
  const deliveryCost = deliveryMethod === "home" ? 5 : 0;
  const totalItemsCost = cartItems?.reduce(
    (acc, item) => acc + parseFloat(item?.price),
    0
  );
  const finalTotal = (
    totalItemsCost +
    deliveryCost -
    totalItemsCost * (discount / 100)
  )?.toFixed(2);

  return (
    <div style={{ maxWidth: 900, margin: "20px auto", padding: "30px" }}>
      <Card title="Checkout" bordered>
        <section>
          <Title level={4}>Delivery Options</Title>
          <Radio.Group
            value={deliveryMethod}
            onChange={(e) => setDeliveryMethod(e.target.value)}
          >
            <Radio value="home">Deliver to Home</Radio>
            <Radio value="pickup">Pick Up from Store</Radio>
          </Radio.Group>
        </section>

        <Divider />

        <section>
          <Title level={4}>Your Cart</Title>
          {cartItems.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={cartItems}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button
                      type="link"
                      danger
                      onClick={() => removeFromCart(item.id)}
                    >
                      <IoRemoveCircleOutline size={26} />
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: 60, height: 60, borderRadius: 5 }}
                      />
                    }
                    title={<Text strong>{item.title}</Text>}
                    description={
                      <>
                        <Text>{item.description}</Text>
                        <br />
                        <Text strong style={{ color: "rgba(0,123,85,1.0)" }}>
                          {item.price}
                        </Text>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          ) : (
            <Text>Your cart is empty.</Text>
          )}
        </section>

        <Divider />

        <section>
          <Title level={4}>Contact & Payment Information</Title>
          <Form form={form} layout="vertical">
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Form.Item
                  name="fullName"
                  label="Full Name"
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                >
                  <Input placeholder="John Doe" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phoneNumber"
                  label="Mobile Number"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your mobile number",
                    },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Enter a valid 10-digit number",
                    },
                  ]}
                >
                  <Input placeholder="1234567890" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: deliveryMethod === "home",
                  message: "Please enter your address",
                },
              ]}
            >
              <Input
                placeholder="Enter your delivery address"
                disabled={deliveryMethod !== "home"}
                value={selectedAddress}
                onClick={() =>
                  deliveryMethod === "home" && setIsMapVisible(true)
                }
              />
            </Form.Item>
            <Form.Item label="Promo Code">
              <Input
                value={promoCode}
                onChange={handlePromoCodeChange}
                placeholder="Enter promo code(TEST10)"
                addonAfter={
                  <Button
                    style={{
                      width: "70px",
                      height: "30px",
                      backgroundColor: "rgb(0, 123, 85)",
                    }}
                    type="primary"
                    onClick={applyPromoCode}
                  >
                    Apply
                  </Button>
                }
              />
            </Form.Item>

            <Form.Item label="Delivery Time" name="deliveryTime">
              <TimePicker
                style={{ width: "100%" }}
                onChange={handleTimeChange}
                format="HH:mm"
                placeholder="Select delivery time"
              />
            </Form.Item>
            <Form.Item
              name="paymentMethod"
              label="Payment Method"
              rules={[
                { required: true, message: "Please select a payment method" },
              ]}
            >
              <Radio.Group>
                <Radio value="cash">Cash on Delivery</Radio>
              </Radio.Group>
            </Form.Item>
            <div style={{ marginTop: 20 }}>
              <Text strong>Total Items Cost:</Text> ${totalItemsCost.toFixed(2)}
              <br />
              <Text strong>Delivery Cost:</Text> ${deliveryCost.toFixed(2)}
              <br />
              {discount > 0 && (
                <>
                  <Text strong>Discount:</Text> -{discount}%
                  <br />
                </>
              )}
              <Text strong>Final Total:</Text> ${finalTotal}
            </div>
          </Form>
        </section>

        <Divider />

        <Button
          type="primary"
          size="large"
          block
          onClick={handlePlaceOrder}
          style={{
            backgroundColor: "rgba(0,123,85,1.0)",
            borderColor: "rgba(0,123,85,1.0)",
          }}
          loading={isLoading}
        >
          {isLoading ? "Processing Order..." : "Place Order"}
        </Button>
      </Card>

      <Modal
        title="Select Your Location"
        open={isMapVisible}
        onCancel={() => setIsMapVisible(false)}
        footer={null}
        width={800}
      >
        <div style={{ height: "400px", width: "100%" }}>
          <MapContainer
            center={[40.7128, -74.006]}
            zoom={10}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {markerPosition && (
              <Marker position={markerPosition}>
                <Popup>{selectedAddress}</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
