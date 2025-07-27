import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_38upcj9",
        "template_ri8dh1j",
        formRef.current!,
        "SgbmTLcUNs23_cqsM"
      )
      .then(() => {
        alert("Message sent! 🎉");
        setLoading(false);
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong 😔");
        setLoading(false);
      });
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Contact Me</h2>
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.form}
        aria-label="Contact form"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className={styles.input}
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className={styles.input}
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className={styles.textarea}
        />
        <button
          type="submit"
          disabled={loading}
          className={`${styles.button} ${loading ? "" : "hover:scale-105"}`}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;