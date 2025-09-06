"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function Comments() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < 2) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="comment">
            <motion.h2
                className="comment_title"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Что говорят <span className="green-text">о нас?</span>
            </motion.h2>

            <div className="comment_slider">
                <div className="comment_cards">
                    <div
                        className="comment_card"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: "transform 0.5s ease-in-out",
                        }}
                    >
                        <p className="comment_text">
                            Теперь я не просто советую клиентам хорошие товары,
                            но и получаю за это бонусы. Удобно, честно и выгодно
                            — отличная мотивация!
                        </p>
                        <div className="user_info">
                            <img
                                src="./assets/Frame 122.svg"
                                alt="Андрей Кузмин"
                            />
                            <div className="user_details">
                                <span className="user_name">Андрей Кузмин</span>
                                <span className="user_prof">Электрик</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="comment_card"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: "transform 0.5s ease-in-out",
                        }}
                    >
                        <p className="comment_text">
                            C EASY BONUS мы увеличили продажи на 18% за первый
                            месяц. Система проста в использовании, а мастера
                            стали чаще возвращаться именно к нам.
                        </p>
                        <div className="user_info">
                            <img
                                src="./assets/Frame 122 (1).svg"
                                alt="ТехноМаркет"
                            />
                            <div className="user_details">
                                <span className="user_name">ТехноМаркет</span>
                                <span className="user_prof">Магазин</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="comment_card"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: "transform 0.5s ease-in-out",
                        }}
                    >
                        <p className="comment_text">
                            Раньше просто рекомендовала товары — теперь это
                            приносит доход. Приложение простое, всё наглядно.
                            Рекомендую коллегам!
                        </p>
                        <div className="user_info">
                            <img
                                src="./assets/Frame 122 (2).svg"
                                alt="Наталья Сараева"
                            />
                            <div className="user_details">
                                <span className="user_name">
                                    Наталья Сараева
                                </span>
                                <span className="user_prof">Сантехник</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="slider_controls">
                <button className="slider_btn prev_btn" onClick={handlePrev}>
                    ←
                </button>
                <div className="slider_dots">
                    <span
                        className={`dot ${currentIndex === 0 ? "active" : ""}`}
                    ></span>
                    <span
                        className={`dot ${currentIndex === 1 ? "active" : ""}`}
                    ></span>
                    <span
                        className={`dot ${currentIndex === 2 ? "active" : ""}`}
                    ></span>
                </div>
                <button className="slider_btn next_btn" onClick={handleNext}>
                    →
                </button>
            </div>
        </div>
    );
}
