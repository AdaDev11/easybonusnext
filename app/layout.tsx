import "./globals.css";
import "./styles/reset.css";
import "./styles/style.css";
import "./styles/mobile.css";
import "./styles/animation.css";
import "./styles/planshet.css";
import "./styles/laptop.css";
import "./styles/desktop.css";
import "./styles/monitorlarge.css";

export const metadata = {
    title: "Easy Bonus",
    description: "Сканируй. Рекомендуй. Зарабатывай.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body>{children}</body>
        </html>
    );
}
