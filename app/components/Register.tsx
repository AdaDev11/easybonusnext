"use client";
import { motion } from "framer-motion";
import React from "react";

export default function Register() {
    return (
        <div className="register">
            <div className="register_container">
                <motion.h2
                    className="register_title"
                    initial={{ opacity: 0, y: 90 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    Хотите опробовать <span className="green-text">демо?</span>
                </motion.h2>
                <div className="register_container_main">
                    <motion.div
                        className="register_about"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h1 className="register_about_title">
                            Попробуйте EASY BONUS в действии — без обязательств
                            и оплаты.
                        </h1>
                        <ul className="register_about_list">
                            <li>
                                <img
                                    src="./assets/Distribute Vertical.svg"
                                    alt="скан"
                                />
                                <span>Сканируйте тестовый штрих-код</span>
                            </li>
                            <li>
                                <img
                                    src="./assets/Coin Dollar.svg"
                                    alt="бонусы"
                                />
                                <span>Узнайте, как начисляются бонусы</span>
                            </li>
                            <li>
                                <img src="./assets/Adjust.svg" alt="система" />
                                <span>
                                    Оцените, насколько легко работает система
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        className="register_form"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 3, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <form action="#" method="post">
                            <div className="form-group-row">
                                <div className="form-group">
                                    <label htmlFor="name">Имя</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Введите имя"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname">Фамилия</label>
                                    <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        placeholder="Введите фамилию"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">
                                    Название компании
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    placeholder="Введите название компании"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Введите почту"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Номер телефона</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="+998 - xxx - xx - xx"
                                />
                            </div>
                            <button type="submit">Отправить заявку</button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
