import { useState } from "react";

function App() {
	const [liked, setLiked] = useState(false);

	return (
		<div style={page}>
			{/* HERO */}
			<section style={hero}>
				<h1 style={title}>🍫 ChocoDelight</h1>
				<p style={subtitle}>
					Искусство настоящего шоколада премиального качества
				</p>

				<button
					onClick={() => setLiked(!liked)}
					style={{
						...button,
						background: liked
							? "linear-gradient(90deg,#5a2d1d,#2e140c)"
							: "linear-gradient(90deg,#8b4513,#5a2d1d)",
					}}
				>
					{liked ? "❤️ Вы выбрали шоколад!" : "Попробовать вкус"}
				</button>
			</section>

			{/* ABOUT */}
			<section style={aboutSection}>
				<h2 style={sectionTitle}>О нашем шоколаде</h2>
				<p style={text}>
					Мы создаём шоколад из лучших какао-бобов, тщательно отобранных
					на плантациях Южной Америки. Нежная текстура, глубокий аромат
					и идеальный баланс сладости делают каждый кусочек настоящим
					наслаждением.
				</p>
			</section>

			{/* TYPES */}
			<section style={gridSection}>
				{products.map((item, i) => (
					<div key={i} style={card}>
						<h3>{item.title}</h3>
						<p style={{ opacity: 0.85 }}>{item.desc}</p>
					</div>
				))}
			</section>

			{/* STATUS */}
			<section style={statusSection}>
				<div
					style={{
						...statusDot,
						backgroundColor: liked ? "#00e676" : "#ff5252",
					}}
				/>
				<p style={{ fontSize: 18 }}>
					{liked
						? "Спасибо за любовь к шоколаду 🍫"
						: "Шоколад делает жизнь слаще ✨"}
				</p>
			</section>

			<footer style={footer}>
				© 2026 ChocoDelight Premium Chocolate
			</footer>
		</div>
	);
}

/* ---------- DATA ---------- */

const products = [
	{
		title: "Тёмный 85%",
		desc: "Максимально насыщенный вкус для настоящих ценителей.",
	},
	{
		title: "Молочный классический",
		desc: "Нежный и сливочный вкус с карамельными нотами.",
	},
	{
		title: "Белый шоколад",
		desc: "Сладкий, кремовый, с ароматом ванили.",
	},
	{
		title: "Шоколад с орехами",
		desc: "Идеальное сочетание хрустящих орехов и мягкого шоколада.",
	},
];

/* ---------- STYLES ---------- */

const page: React.CSSProperties = {
	minHeight: "100vh",
	width: "100%",
	background:
		"radial-gradient(circle at 10% 20%, #4b2e2e, #2b1a1a 70%)",
	color: "#fff8f0",
	fontFamily: "Georgia, serif",
};

const hero: React.CSSProperties = {
	textAlign: "center",
	padding: "120px 80px 80px 80px",
};

const title: React.CSSProperties = {
	fontSize: "72px",
	margin: 0,
	fontWeight: 700,
};

const subtitle: React.CSSProperties = {
	marginTop: 20,
	marginBottom: 40,
	fontSize: 20,
	opacity: 0.85,
};

const button: React.CSSProperties = {
	padding: "16px 40px",
	borderRadius: 30,
	border: "none",
	color: "white",
	fontSize: 18,
	cursor: "pointer",
	boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
	transition: "0.3s",
};

const aboutSection: React.CSSProperties = {
	padding: "80px 120px",
	textAlign: "center",
};

const sectionTitle: React.CSSProperties = {
	fontSize: 36,
	marginBottom: 30,
};

const text: React.CSSProperties = {
	maxWidth: 1000,
	margin: "0 auto",
	lineHeight: 1.8,
	fontSize: 18,
	opacity: 0.9,
};

const gridSection: React.CSSProperties = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
	gap: 40,
	padding: "80px 120px",
};

const card: React.CSSProperties = {
	padding: 40,
	borderRadius: 25,
	background: "rgba(255,255,255,0.06)",
	backdropFilter: "blur(12px)",
	border: "1px solid rgba(255,255,255,0.15)",
	boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
	transition: "0.3s",
};

const statusSection: React.CSSProperties = {
	textAlign: "center",
	padding: "60px 20px",
};

const statusDot: React.CSSProperties = {
	width: 18,
	height: 18,
	borderRadius: "50%",
	margin: "0 auto 20px auto",
};

const footer: React.CSSProperties = {
	textAlign: "center",
	padding: "40px",
	opacity: 0.5,
	fontSize: 14,
};

export default App;
