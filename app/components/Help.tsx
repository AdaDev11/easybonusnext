import React from "react";

export default function Help() {
    return (
        <div className="help">
            <div className="help_title">
                Как это помогает <span className="green-text">бизнесу?</span>
            </div>
            <div className="help_cards">
                <div className="help_card">
                    <img
                        src="assets/bag-dynamic-clay.svg"
                        alt=""
                        className="help_icon"
                    />
                    <p className="help_desc">
                        Увеличение продаж через рекомендации
                    </p>
                </div>
                <div className="help_card">
                    <img
                        src="assets/toggle-dynamic-clay.svg"
                        alt=""
                        class="help_icon"
                    />
                    <p className="help_desc">
                        Программа лояльности без сложных систем
                    </p>
                </div>
                <div className="help_card">
                    <img
                        src="assets/rocket-dynamic-clay.svg"
                        alt=""
                        className="help_icon"
                    />
                    <p className="help_desc">
                        Быстрая и удобная маркировка товаров
                    </p>
                </div>
                <div className="help_card">
                    <img
                        src="assets/boy-dynamic-clay.svg"
                        alt=""
                        className="help_icon"
                    />
                    <p className="help_desc">
                        Привлечение и удержание мастеров
                    </p>
                </div>
            </div>
        </div>
    );
}
