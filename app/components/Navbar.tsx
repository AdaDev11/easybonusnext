"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    }, [open]);

    const closeMenu = () => setOpen(false);

    return (
        <div className="nav">
            <div className="nav-logo">
                <Link href="/">
                    <img
                        src="/assets/icon-app-itunes-1024x1024.svg"
                        alt="logo"
                        className="nav-logo__img"
                    />
                </Link>
                <Link href="/">
                    <h1>Easy Bonus</h1>
                </Link>
            </div>

            <div className={`nav-menu ${open ? "active" : ""}`}>
                <Link href="/" className="nav-menu__item" onClick={closeMenu}>
                    Главная
                </Link>
                <Link
                    href="/#about"
                    className="nav-menu__item"
                    onClick={closeMenu}
                >
                    О Нас
                </Link>
                <Link
                    href="/#demo"
                    className="nav-menu__item"
                    onClick={closeMenu}
                >
                    Демо
                </Link>
                <Link
                    href="/#contact"
                    className="nav-menu__item"
                    onClick={closeMenu}
                >
                    Контакты
                </Link>
            </div>

            <button className="nav-btn" href="#demo">
                <Link href="/#demo" className="demo__item">
                    Получить демо
                </Link>
            </button>

            <div className="burger" onClick={() => setOpen(!open)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
