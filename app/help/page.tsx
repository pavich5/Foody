"use client";
import React, { useState } from "react";
import { Input, Collapse, Typography, Button, Form } from "antd";
import { PhoneOutlined, MessageOutlined } from "@ant-design/icons";
import styles from "./page.module.css";
import { faqs } from "../mockData";

const { Panel } = Collapse;
const { Paragraph } = Typography;

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFeedback = (feedback: string) => {
    alert(`Thank you for your feedback: ${feedback}`);
  };

  const handleFormSubmit = (values: any) => {
    alert(`Message submitted! Name: ${values.name}, Email: ${values.email}`);
  };

  return (
    <div className={styles.helpPage}>
      <div className={styles.heroSection}>
        <h1>How can we help you today?</h1>
        <Input.Search
          placeholder="Search for help..."
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginBottom: 16, maxWidth: 600 }}
        />
      </div>

      <div className={styles.contactUsSection}>
        <div className={styles.contactButtons}>
          <Button
            type="default"
            icon={<PhoneOutlined />}
            href="tel:+1234567890"
            size="large"
            style={{ marginRight: 16 }}
          >
            Call Us
          </Button>
          <Button
            type="default"
            icon={<MessageOutlined />}
            href="sms:+1234567890"
            size="large"
          >
            Text Us
          </Button>
        </div>
      </div>

      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <Collapse accordion>
          {filteredFAQs.map((faq, index) => (
            <Panel header={faq.question} key={index}>
              <Paragraph>{faq.answer}</Paragraph>
              <div style={{ marginTop: 8 }}>
                <span>Was this helpful?</span>
                <Button
                  type="link"
                  onClick={() => handleFeedback("Yes")}
                  style={{ marginLeft: 8 }}
                >
                  Yes
                </Button>
                <Button type="link" onClick={() => handleFeedback("No")}>
                  No
                </Button>
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>

      <div className={styles.contactForm}>
        <h2>Need Further Assistance?</h2>
        <Form layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <Input.TextArea rows={4} placeholder="How can we help you?" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Help;
