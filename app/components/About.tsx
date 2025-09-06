"use client";
import { motion } from "motion/react";

export default function About() {
    return (
        <div className="about">
            <h1 className="about-title">
                Привет, мы <span className="green-text">Easy Bonus!</span>
            </h1>
            <div className="about__cards">
                <motion.div
                    className="about-card"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h3 className="about-card__title">Кто мы?</h3>
                    <p className="about-card__desc">
                        <span className="green-text">Мы</span> — команда
                        IT-специалистов, создающая простые и эффективные
                        цифровые решения для реального бизнеса.
                    </p>
                </motion.div>
                <div className="about-card">
                    <h3 className="about-card__title">Какова наша цель?</h3>
                    <p className="about-card__desc">
                        <span className="green-text">Наша цель</span> — помочь
                        специалистам (сантехникам, электрикам и другим мастерам)
                        зарабатывать больше, а магазинам — продавать активнее с
                        помощью приложения{" "}
                        <span className="green-text">EASY BONUS.</span>
                    </p>
                </div>
                <motion.div
                    className="about-card about-answer"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <span>
                        <span className="green-text">Мы </span>
                        понимаем, как важно упростить повседневные задачи,
                        поэтому создали удобный инструмент, который:
                    </span>
                    <span>- Автоматизирует учёт рекомендаций товаров;</span>
                    <span>
                        - Позволяет быстро сканировать и отслеживать бонусы;
                    </span>
                    <span>
                        - Делает процесс прозрачным и выгодным для всех
                        участников.
                    </span>
                </motion.div>
            </div>
        </div>
    );
}
