import Link from "next/link";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero__icons">
                <div className="hero__star-icon">
                    <img src="/assets/star-dynamic-clay.svg" alt="" />
                </div>
                <div className="hero__dollar-icon">
                    <img src="/assets/dollar-dollar-clay.svg" alt="" />
                </div>
                <div className="hero__gift-icon">
                    <img src="/assets/gift-dynamic-clay.svg" alt="" />
                </div>
                <div className="hero__thumb-icon">
                    <img src="/assets/thumb-up-dynamic-clay.svg" alt="" />
                </div>
                <div className="hero__mobile-icon">
                    <img src="/assets/mobile-dynamic-clay.svg" alt="" />
                </div>
                <div className="hero__money-icon">
                    <img src="/assets/money-dynamic-clay.svg" alt="" />
                </div>
            </div>
            <div className="hero__text-box">
                <h1 className="hero-title">
                    Сканируй. Рекомендуй. Зарабатывай.
                </h1>
                <p className="hero-desc">
                    Мы создали приложение, которое помогает специалистам, таким
                    как сантехники и электрики, зарабатывать больше, а магазинам
                    — увеличивать продажи!
                </p>
                <button className="hero-btn">
                    <Link href="/#demo" className="hero__item">
                        Попробовать сейчас
                    </Link>
                </button>
            </div>
        </div>
    );
}
