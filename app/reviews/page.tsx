"use client";
import React, { useState } from "react";
import {
  Rate,
  Card,
  Button,
  Input,
  Form,
  Typography,
  notification,
} from "antd";
import styles from "./page.module.css";
import { reviewsData } from "../mockData";

const { Title, Paragraph } = Typography;

const Reviews = () => {
  const [reviewText, setReviewText] = useState("");

  const handleReviewSubmit = (values: any) => {
    console.log("New Review Submitted:", values);
    notification.success({
      message: "Thank you for your feedback!",
      description: "Your review has been successfully submitted.",
      placement: "topRight",
      duration: 3,
    });
  };

  return (
    <div className={styles.reviewsPage}>
      <div className={styles.heroSection}>
        <Title level={1}>What Our Customers Are Saying</Title>
        <Paragraph>
          We're proud to serve delicious food to happy customers. Here's what
          they're saying about our burgers, fries, and shakes!
        </Paragraph>
      </div>

      <div className={styles.reviewsList}>
        {reviewsData.map((review) => (
          <Card
            key={review.id}
            hoverable
            style={{ marginBottom: 16, maxWidth: 300, borderRadius: 8 }}
            bodyStyle={{ padding: "12px 16px" }}
            className={styles.reviewCard}
          >
            <div className={styles.cardHeader}>
              <img
                alt="Customer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3lmsvlIvBPm_6grhc3MpJ9LnJAvK1JXaKaA&s"
                className={styles.profileImage}
              />
              <Title level={4} style={{ fontSize: "1.2rem", marginBottom: 10 }}>
                {review.name}
              </Title>
            </div>
            <div className={styles.ratingStars}>
              <Rate disabled value={review.rating} />
            </div>
            <Paragraph style={{ fontSize: "0.95rem", marginBottom: 12 }}>
              {review.review}
            </Paragraph>
            <div className={styles.reviewDate}>
              <small>{review.date}</small>
            </div>
          </Card>
        ))}
      </div>

      <div className={styles.addReview}>
        <Title level={2}>Leave a Review</Title>
        <Form layout="vertical" onFinish={handleReviewSubmit}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Please select a rating" }]}
          >
            <Rate />
          </Form.Item>

          <Form.Item
            label="Review"
            name="review"
            rules={[{ required: true, message: "Please write your review" }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="What did you love about our food?"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit Review
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Reviews;
