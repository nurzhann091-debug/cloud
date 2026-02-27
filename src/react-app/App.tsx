import { useState } from "react";

function App() {
	const [liked, setLiked] = useState(false);

	return (
		<div style={page}>
			{/* HERO */}
			<section style={hero}>
				<h1 style={title}>🍫 ChocoDelight</h1>
				<p style={subtitle}>
					Искусство настоящего шоколада
				</p>

				<button
					onClick={() => setLiked(!liked)}
					style={{
						...button,
						background: liked
							? "linear-gradient(90deg,#6b3e26,#3e1f12)"
							: "linear-gradient(90deg,#a0522d,#6b3e26)",
					}}
				>
					{liked ? "❤️ Люблю шоколад!" : "Попробовать вкус"}
				</button>
			</section>

			{/* ABOUT */}
			<section style={about}>
				<h2>Что такое настоящий шоколад?</h2>
				<p style={text}>
					Настоящий шоколад создаётся из какао-бобов высшего качества.
					Он тает во рту, раскрывая глубокий аромат и насыщенный вкус.
					Это не просто сладость — это удовольствие.
				</p>
			</section>

			{/* TYPES */}
			<section style={grid}>
				{types.map((item, i) => (
					<div key={i} style={card}>
						<h3>{item.title}</h3>
						<p style={{ opacity: 0.8 }}>{item.desc}</p>
					</div>
				))}
			</section>

			{/* STATUS */}
			<section style={footerBlock}>
				<p>
					{liked
						? "Вы сделали отличный выбор 🍫"
						: "Шоколад делает жизнь слаще ✨"}
				</p>
			</section>

			<footer style={footer}>
				© 2026 ChocoDelight
			</footer>
		</div>
	);
}

/* ---------- DATA ---------- */

const types = [
	{
		title: "Тёмный шоколад",
		desc: "Насыщенный вкус с высоким содержанием какао.",
	},
	{
		title: "Молочный шоколад",
		desc: "Нежная текстура и мягкий сладкий вкус.",
	},
	{
		title: "Белый шоколад",
		desc: "Сливочный и сладкий, без какао-порошка.",
	},
	{
		title: "Ручная работа",
		desc: "Эксклюзивные рецепты от мастеров-шоколатье.",
	},
];

/* ---------- STYLES ---------- */

const page: React.CSSProperties = {
	minHeight: "100vh",
	background:
		"radial-gradient(circle at 20% 20%, #4b2e2e, #2b1a1a 60%)",
	color: "#fff8f0",
	fontFamily: "Georgia, serif",
	padding: "60px 20px",
};

const hero: React.CSSProperties = {
	textAlign: "center",
	marginBottom: "80px",
};

const title: React.CSSProperties = {
	fontSize: "64px",
	margin: 0,
	fontWeight: 700,
};

const subtitle: React.CSSProperties = {
	marginTop: 15,
	marginBottom: 30,
	fontSize: 18,
	opacity: 0.8,
};

const button: React.CSSProperties = {
	padding: "14px 36px",
	borderRadius: 20,
	border: "none",
	color: "white",
	fontSize: 16,
	cursor: "pointer",
	boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
	transition: "0.3s",
};

const about: React.CSSProperties = {
	textAlign: "center",
	maxWidth: 700,
	margin: "0 auto 60px auto",
};

const text: React.CSSProperties = {
	marginTop: 20,
	lineHeight: 1.7,
	opacity: 0.9,
};

const grid: React.CSSProperties = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
	gap: 25,
	marginBottom: 60,
};

const card: React.CSSProperties = {
	padding: 30,
	borderRadius: 20,
	background: "rgba(255,255,255,0.05)",
	backdropFilter: "blur(10px)",
	border: "1px solid rgba(255,255,255,0.1)",
	boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
};

const footerBlock: React.CSSProperties = {
	textAlign: "center",
	padding: 30,
	borderRadius: 20,
	background: "rgba(255,255,255,0.05)",
	maxWidth: 400,
	margin: "0 auto",
};

const footer: React.CSSProperties = {
	textAlign: "center",
	marginTop: 80,
	opacity: 0.4,
	fontSize: 14,
};

export default App;
