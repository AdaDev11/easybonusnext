"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
    return (
        <div className="contact">
            <motion.h2
                className="contact_title"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Контакты
            </motion.h2>
            <motion.div
                className="contact_content"
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <div className="contact_info">
                    <h3>Есть вопросы или хотите обсудить внедрение?</h3>
                    <p>Свяжитесь с нами любым удобным способом:</p>
                    <ul>
                        <li>
                            <img
                                src="./assets/Message 36.svg"
                                alt="Email icon"
                            />
                            <a href="mailto:company@mail.com">
                                company@mail.com
                            </a>
                        </li>
                        <li>
                            <img
                                src="./assets/Calling 1.svg"
                                alt="Phone icon"
                            />
                            <a href="tel:+998000000000">+998 00 000 00 00</a>
                        </li>
                        <li>
                            <img
                                src="./assets/Discovery 2.svg"
                                alt="Website icon"
                            />
                            <a href="http://www.site.com">www.site.com</a>
                        </li>
                    </ul>
                </div>
                <div className="contact_visuals">
                    <img
                        src="./assets/_.svg"
                        alt="Question mark"
                        className="question_mark"
                    />
                    <div className="contact_buttons">
                        <button className="contact_btn">
                            <img src="./assets/Frame 135.svg" />
                        </button>
                        <button className="contact_btn">
                            <img src="./assets/Frame 134.svg" />
                        </button>
                        <button className="contact_btn">
                            <img src="./assets/Frame 133.svg" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
