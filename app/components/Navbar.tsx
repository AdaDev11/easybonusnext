"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

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

    const handleScroll = (e, id) => {
        e.preventDefault();

        gsap.to(window, {
            duration: 1.9,
            scrollTo: {
                y: id,
                offsetY: 90,
            },
        });
    };

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
                    onClick={(e) => {
                        closeMenu();
                        handleScroll(e, "#about");
                    }}
                >
                    О Нас
                </Link>
                <Link
                    href="/#demo"
                    className="nav-menu__item"
                    onClick={(e) => {
                        closeMenu();
                        handleScroll(e, "#demo");
                    }}
                >
                    Демо
                </Link>
                <Link
                    href="/#contact"
                    className="nav-menu__item"
                    onClick={(e) => {
                        closeMenu();
                        handleScroll(e, "#contact");
                    }}
                >
                    Контакты
                </Link>
            </div>

            <button className="nav-btn">
                <Link
                    href="/#demo"
                    className="demo__item"
                    onClick={(e) => {
                        handleScroll(e, "#demo");
                    }}
                >
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
