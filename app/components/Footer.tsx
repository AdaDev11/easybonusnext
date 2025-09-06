import React from "react";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_left">
                    <div className="support_icon">
                        <img src="assets/Frame 148.svg" alt="Social icon" />
                    </div>
                    <div className="support_about">
                        <div className="support_name">Отдел продаж</div>
                        <div className="support_phone">
                            <a href="https://t.me/w3bC0d3r">
                                +998 97 500 05 01
                            </a>
                        </div>
                        <div className="support_link">
                            <a
                                className="support_link_a"
                                href="https://softium.uz/"
                            >
                                softium.uz
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer_right">
                    <div className="support_scince">
                        © 2025 Cargo Calc. Все права защищены.
                    </div>
                    <div className="support_author_name">© SOFTIUM 2025</div>
                </div>
            </div>
        </div>
    );
}
