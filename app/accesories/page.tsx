"use client";

import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import styles from "./page.module.css";
import { useCart } from "../context/CartContext";
import { accessories } from "../mockData";

const { Title } = Typography;

const Accessories = () => {
  const { addToCart, openCartModal } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      image: item.image,
      title: item.title,
      description: item.description,
      //@ts-ignore
      price: parseFloat(item.price.replace("$", "")),
      calories: item.calories,
      quantity: 1,
    });
    openCartModal();
  };

  return (
    <div className={styles.accessoriesContainer}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "30px" }}>
        Accessories
      </Title>
      <Row gutter={[16, 16]} justify="center">
        {accessories.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={8}>
            <Card
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  className={styles.cardImage}
                />
              }
              bodyStyle={{ padding: "20px" }}
              actions={[
                <Button
                  type="primary"
                  style={{
                    width: "100%",
                    backgroundColor: "#0A6B33",
                    borderColor: "#0A6B33",
                    textAlign: "center",
                    padding: "10px",
                  }}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>,
              ]}
            >
              <Card.Meta
                title={item.title}
                description={
                  <>
                    <div>
                      <strong>{item.price}</strong>
                    </div>
                    <div>{item.description}</div>
                  </>
                }
                style={{ textAlign: "center" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Accessories;
