"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

type Item = { title: string; content: string };

const items: Item[] = [
    {
        title: "Сканирование штрих-кодов товаров",
        content:
            "Пользователи (специалисты) могут сканировать штрих-коды товаров через приложение для фиксации рекомендации и начисления бонусов.",
    },
    {
        title: "Начисление бонусов и вознаграждений",
        content:
            "После сканирования, специалист получает денежное вознаграждение или баллы от магазина — за факт рекомендации и использования товара.",
    },
    {
        title: "Механизм рекомендаций через специалистов",
        content:
            "Приложение рассчитано на взаимодействие с мастерами (сантехники, электрики и т.д.), которые рекомендуют товары клиентам, тем самым продвигая продукцию магазинов.",
    },
    {
        title: "Генерация уникальных штрих-кодов для товаров",
        content:
            "Система позволяет магазинам создавать неограниченное количество уникальных штрих-кодов, в которых заложена информация о бонусах.",
    },
    {
        title: "Подготовка штрих-кодов к печати",
        content:
            "Приложение или связанный с ним сервис может подготовить штрих-коды для печати на стикер-принтерах — удобно для маркировки товаров.",
    },
    {
        title: "Поддержка программы лояльности для магазинов",
        content:
            "Интеграция этой системы помогает магазинам автоматизировать программу лояльности, управлять бонусами и отслеживать активность специалистов.",
    },
    {
        title: "Стимулирование роста продаж",
        content:
            "Через привлечение активных специалистов и мотивацию рекомендаций, приложение увеличивает объём продаж товаров в магазине.",
    },
];

export default function Assignment() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="assignment">
            <motion.div
                className="assignment-title"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Что умеет <span className="green-text">наше приложение?</span>
            </motion.div>

            <div className="assignment-accordion">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="assignment-accordion__item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div
                            className={`assignment-accordion__header ${
                                openIndex === index
                                    ? "assignment-accordion__active"
                                    : ""
                            }`}
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            <span className="assignment-accordion__title">
                                {item.title}
                            </span>
                            <img
                                className="assignment-accordion-icon"
                                src={
                                    openIndex === index
                                        ? "/assets/откырый.svg"
                                        : "/assets/закрытый.svg"
                                }
                                alt=""
                            />
                        </div>

                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    className="assignment-accordion__content"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="inner">{item.content}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
