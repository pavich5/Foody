"use client";
import { categories } from "@/app/mockData";
import { useCart } from "@/app/context/CartContext";
import styles from "./BurgersMenu.module.css";
import { useState, useRef, useEffect } from "react";
import { IoBeerOutline, IoIceCreamOutline } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";
import { FaHamburger, FaDrumstickBite } from "react-icons/fa";

const BurgersMenu = () => {
  const { addToCart, openCartModal } = useCart();
  const [activeCategory, setActiveCategory] = useState("burgers");
  const [showIcons, setShowIcons] = useState(true);

  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);

    categoryRefs.current[categoryId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (pageHeight - scrollPosition <= 400) {
        setShowIcons(true);  
      } else {
        setShowIcons(false);  
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuContent}>
        <div
          className={`${styles.iconContainer} ${
            showIcons && styles.iconMobile
          }`}
        >
          {[
            { id: "burgers", label: "Burgers", icon: <FaHamburger /> },
            {
              id: "iceCreams",
              label: "Ice Creams",
              icon: <IoIceCreamOutline />,
            },
            { id: "fries", label: "Fries", icon: <MdFastfood /> },
            {
              id: "chicken-burgers",
              label: "Chicken Burgers",
              icon: <FaDrumstickBite />,
            },
            { id: "drinks", label: "Drinks", icon: <IoBeerOutline /> },
          ].map(({ id, label, icon }) => (
            <div
              key={id}
              role="button"
              tabIndex={0}
              aria-label={label}
              className={`${styles.iconItem} ${
                activeCategory === id ? styles.activeCategory : ""
              }`}
              onClick={() => handleCategoryClick(id)}
              onKeyDown={(e) => e.key === "Enter" && handleCategoryClick(id)}
            >
              <div className={styles.icon}>{icon}</div>
              <span className={styles.hoverText}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {categories.map((category) => (
            <div
              key={category.id}
              //@ts-ignore
              ref={(el) => (categoryRefs.current[category.id] = el)}
              className={`${styles.category} ${
                activeCategory === category.id ? styles.showCategory : ""
              }`}
              style={{ marginTop: 20 }}
            >
              <h3 className={styles.menuTitle}>{category.title}</h3>
              <p className={styles.menuDescription}>{category.description}</p>
              <div className={styles.itemsContainer}>
                {category.items.map((item) => (
                  <div key={item.id} className={styles.item}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className={styles.itemImage}
                    />
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemDescription}>{item.description}</p>
                    <p className={styles.itemPriceCalories}>
                      {item.price} · {item.calories} cals
                    </p>
                    <div className={styles.itemButtons}>
                      <button className={styles.customizeButton}>
                        Customize
                      </button>
                      <button
                        className={styles.addButton}
                        onClick={() => {
                          addToCart({
                            id: item.id.toString(),
                            name: item.title,
                            //@ts-ignore
                            price: parseFloat(item.price.replace("$", "")),
                            quantity: 1,
                            image: item.image,
                            calories: item.calories,
                            description: item.description,
                            title: item.title,
                          });
                          openCartModal();
                        }}
                      >
                        Add To Bag
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BurgersMenu;
