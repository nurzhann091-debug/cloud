import { useState } from "react";

function App() {
	const [active, setActive] = useState(false);

	return (
		<div style={page}>
			{/* HERO */}
			<section style={hero}>
				<h1 style={title}>☁ SkyCloud</h1>
				<p style={subtitle}>
					Интеллектуальная облачная платформа нового поколения
				</p>
				<button
					onClick={() => setActive(!active)}
					style={{
						...button,
						background: active
							? "linear-gradient(90deg,#00e676,#00c853)"
							: "linear-gradient(90deg,#4f46e5,#3b82f6)",
					}}
				>
					{active ? "Система активна" : "Запустить платформу"}
				</button>
			</section>

			{/* FEATURES */}
			<section style={grid}>
				{cards.map((card, i) => (
					<div key={i} style={cardStyle}>
						<h3 style={{ marginBottom: 10 }}>{card.title}</h3>
						<p style={{ opacity: 0.75 }}>{card.desc}</p>
					</div>
				))}
			</section>

			{/* INFO BLOCK */}
			<section style={infoBlock}>
				<h2>Что такое облако?</h2>
				<p style={{ maxWidth: 700, margin: "20px auto", opacity: 0.8 }}>
					Облачные вычисления позволяют хранить данные, запускать приложения
					и управлять инфраструктурой через интернет без необходимости
					покупки собственного оборудования. Это гибко, безопасно и
					масштабируемо.
				</p>
			</section>

			{/* STATUS */}
			<section style={statusBlock}>
				<div
					style={{
						...dot,
						backgroundColor: active ? "#00e676" : "#ff5252",
					}}
				/>
				<p>
					{active
						? "Сервер подключён и работает стабильно"
						: "Сервер остановлен"}
				</p>
			</section>

			<footer style={footer}>
				© 2026 SkyCloud Technologies
			</footer>
		</div>
	);
}

/* ---------- DATA ---------- */

const cards = [
	{
		title: "Мгновенная масштабируемость",
		desc: "Ресурсы автоматически увеличиваются при росте нагрузки.",
	},
	{
		title: "Глобальная инфраструктура",
		desc: "Дата-центры по всему миру для минимальной задержки.",
	},
	{
		title: "Максимальная безопасность",
		desc: "Шифрование, защита и мониторинг 24/7.",
	},
	{
		title: "Экономия бюджета",
		desc: "Платите только за фактическое использование ресурсов.",
	},
];

/* ---------- STYLES ---------- */

const page: React.CSSProperties = {
	minHeight: "100vh",
	background:
		"radial-gradient(circle at 10% 20%, #1e1b4b, #0f172a 60%)",
	color: "white",
	fontFamily: "Inter, system-ui, sans-serif",
	padding: "60px 20px",
};

const hero: React.CSSProperties = {
	textAlign: "center",
	marginBottom: "80px",
};

const title: React.CSSProperties = {
	fontSize: "64px",
	margin: 0,
	fontWeight: 800,
	letterSpacing: "1px",
};

const subtitle: React.CSSProperties = {
	opacity: 0.7,
	marginTop: 20,
	marginBottom: 30,
	fontSize: 18,
};

const button: React.CSSProperties = {
	padding: "14px 34px",
	borderRadius: 14,
	border: "none",
	color: "white",
	fontSize: 16,
	cursor: "pointer",
	transition: "0.3s",
	boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
};

const grid: React.CSSProperties = {
	display: "grid",
	gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
	gap: 25,
	marginBottom: 80,
};

const cardStyle: React.CSSProperties = {
	padding: 30,
	borderRadius: 20,
	background: "rgba(255,255,255,0.05)",
	backdropFilter: "blur(15px)",
	border: "1px solid rgba(255,255,255,0.1)",
	boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
	transition: "0.3s",
};

const infoBlock: React.CSSProperties = {
	textAlign: "center",
	marginBottom: 60,
};

const statusBlock: React.CSSProperties = {
	textAlign: "center",
	padding: 30,
	borderRadius: 20,
	background: "rgba(255,255,255,0.05)",
	backdropFilter: "blur(10px)",
	border: "1px solid rgba(255,255,255,0.1)",
	maxWidth: 400,
	margin: "0 auto",
};

const dot: React.CSSProperties = {
	width: 16,
	height: 16,
	borderRadius: "50%",
	margin: "0 auto 15px auto",
	transition: "0.3s",
};

const footer: React.CSSProperties = {
	textAlign: "center",
	marginTop: 80,
	opacity: 0.4,
	fontSize: 14,
};

export default App;
