"use client";
import React, { useRef } from "react";
import { Carousel } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import styles from "./DealSlider.module.css";
import { offers } from "@/app/mockData";

const DealSlider = () => {
  const carouselRef = useRef(null);

  const goToPrev = () => {
    // @ts-ignore
    carouselRef.current.prev();
  };

  const goToNext = () => {
    // @ts-ignore
    carouselRef.current.next();
  };

  return (
    <div className={styles.sliderContainer}>
      <Carousel ref={carouselRef} dots autoplay>
        {offers.map((offer, index) => (
          <div key={index} className={styles.sliderItem}>
            <img
              src={offer.image}
              alt={offer.title}
              className={styles.sliderImage}
            />
            <div className={styles.sliderContent}>
              <h1>{offer.title}</h1>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      <div className={styles.customArrowLeft} onClick={goToPrev}>
        <ArrowLeftOutlined style={{ fontSize: "24px", color: "#fff" }} />
      </div>
      <div className={styles.customArrowRight} onClick={goToNext}>
        <ArrowRightOutlined style={{ fontSize: "24px", color: "#fff" }} />
      </div>
    </div>
  );
};

export default DealSlider;
