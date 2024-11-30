"use client";
import { categories } from "@/app/mockData";
import { useSearchParams } from "next/navigation";
import React, { useState, useMemo } from "react";
import { Card, Checkbox, Input, Button, Divider, Image, message } from "antd";
import { useCart } from "../context/CartContext";

const CustomizePage: React.FC = () => {
  const { addToCart, openCartModal } = useCart();
  const searchParams = useSearchParams();
  const itemId = searchParams.get("id");

  const foundCategory = categories.find((category) =>
    category.items.some((item) => item.id === Number(itemId))
  );
  const foundItem = foundCategory?.items.find(
    (item) => item.id === Number(itemId)
  );

  const [customizations, setCustomizations] = useState<string[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!foundItem || !foundCategory) {
    return <div>Item not found</div>;
  }

  const handleCustomizationChange = (checkedValues: string[]) => {
    setCustomizations(checkedValues);
  };

  const dynamicDescription = useMemo(() => {
    const customizationText =
      customizations.length > 0
        ? `Customizations: ${customizations.join(", ")}`
        : "";

    const instructionsText = specialInstructions
      ? `Special Instructions: "${specialInstructions}"`
      : "";

    const additionalDetails = [customizationText, instructionsText]
      .filter(Boolean)
      .join(". ");

    return additionalDetails
      ? `${foundItem.description}. ${additionalDetails}`
      : foundItem.description;
  }, [customizations, specialInstructions, foundItem.description]);

  const handleAddToCart = () => {
    setIsLoading(true);
    try {
      addToCart({
        id: foundItem.id.toString(),
        name: foundItem.title,
        //@ts-ignore
        price: parseFloat(foundItem.price.replace("$", "")),
        quantity: 1,
        image: foundItem.image,
        calories: foundItem.calories,
        description: dynamicDescription,
        title: foundItem.title,
        customizations,
        specialInstructions,
      });
      openCartModal();
      message.success(`${foundItem.title} added to the cart!`);
    } catch (error) {
      message.error("Failed to add the item to the cart. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Card
        title={`Customize Your ${foundItem.title}`}
        bordered
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src={foundItem.image}
          alt={foundItem.title}
          width="100%"
          height="auto"
          style={{
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />
        <h3>{foundItem.title}</h3>
        <p>{dynamicDescription}</p>
        <p>
          <strong>Price:</strong> {foundItem.price}
        </p>
        <p>
          <strong>Calories:</strong> {foundItem.calories}
        </p>
        <Divider />
        <h4>Customize</h4>
        {foundCategory.customizationOptions &&
        foundCategory.customizationOptions.length > 0 ? (
          <Checkbox.Group
            options={foundCategory.customizationOptions}
            value={customizations}
            onChange={handleCustomizationChange}
            style={{ marginBottom: "20px" }}
          />
        ) : (
          <p>No customizations available for this item.</p>
        )}
        <Divider />
        <h4>Special Instructions</h4>
        <Input.TextArea
          placeholder="Add any special instructions here"
          rows={3}
          value={specialInstructions}
          onChange={(e) => setSpecialInstructions(e.target.value)}
          style={{ marginBottom: "20px" }}
        />
        <Divider />
        <Button
          type="primary"
          block
          onClick={handleAddToCart}
          style={{ background: "rgb(0, 123, 85)" }}
          loading={isLoading}
          disabled={customizations.length === 0 && !specialInstructions}
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default CustomizePage;
