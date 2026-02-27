import { useState } from "react";

function App() {
	const [status, setStatus] = useState("Отключено");
	const [hover, setHover] = useState(false);

	const isActive = status !== "Отключено";

	return (
		<div
			style={{
				minHeight: "100vh",
				background: "linear-gradient(135deg, #1e3c72, #2a5298)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "20px",
				fontFamily: "Segoe UI, sans-serif",
			}}
		>
			<div
				style={{
					width: "100%",
					maxWidth: "900px",
					backgroundColor: "#ffffff",
					borderRadius: "16px",
					boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
					padding: "40px",
					textAlign: "center",
				}}
			>
				<header style={{ marginBottom: "40px" }}>
					<h1
						style={{
							fontSize: "36px",
							margin: 0,
							background: "linear-gradient(90deg, #1e3c72, #2a5298)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					>
						CloudHub Solutions
					</h1>
					<p style={{ color: "#666", marginTop: "10px" }}>
						Будущее ваших данных в надежных руках
					</p>
				</header>

				{/* Карточка 1 */}
				<section style={cardStyle}>
					<h2>Что такое Облако?</h2>
					<p style={{ lineHeight: "1.6", color: "#555" }}>
						Облачные вычисления — это предоставление серверов, хранилищ,
						баз данных и программного обеспечения через Интернет.
						Это быстро, безопасно и масштабируемо.
					</p>
				</section>

				{/* Карточка 2 */}
				<section style={cardStyle}>
					<h2>Наши преимущества</h2>
					<ul style={listStyle}>
						<li>✔ Высокая доступность 99.99%</li>
						<li>✔ Мгновенная масштабируемость</li>
						<li>✔ Enterprise-уровень безопасности</li>
						<li>✔ Экономия на инфраструктуре</li>
					</ul>
				</section>

				{/* Изображение */}
				<div style={{ margin: "30px 0" }}>
					<img
						src="https://miro.medium.com/v2/resize:fit:1400/1*9MZL1F7Lz7aJg6YVdE8H1A.png"
						alt="Cloud Architecture"
						style={{
							width: "100%",
							borderRadius: "12px",
							boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
						}}
					/>
				</div>

				{/* Статус */}
				<section style={cardStyle}>
					<h2>Статус сервера</h2>

					<p
						style={{
							fontSize: "18px",
							fontWeight: "bold",
							color: isActive ? "#28a745" : "#dc3545",
							transition: "0.3s",
						}}
					>
						{status}
					</p>

					<button
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						onClick={() =>
							setStatus(
								isActive
									? "Отключено"
									: "Активен (подключено к Cloudflare)"
							)
						}
						style={{
							marginTop: "15px",
							padding: "12px 25px",
							fontSize: "16px",
							borderRadius: "8px",
							border: "none",
							cursor: "pointer",
							background: hover
								? "linear-gradient(90deg, #2a5298, #1e3c72)"
								: "linear-gradient(90deg, #1e3c72, #2a5298)",
							color: "#fff",
							boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
							transform: hover ? "scale(1.05)" : "scale(1)",
							transition: "all 0.2s ease",
						}}
					>
						{isActive ? "Отключить сервер" : "Проверить статус"}
					</button>
				</section>

				<footer
					style={{
						marginTop: "40px",
						fontSize: "14px",
						color: "#888",
					}}
				>
					© 2026 CloudHub Solutions. Все права защищены.
				</footer>
			</div>
		</div>
	);
}

const cardStyle: React.CSSProperties = {
	padding: "25px",
	marginBottom: "25px",
	borderRadius: "12px",
	backgroundColor: "#f8f9fa",
	boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
};

const listStyle: React.CSSProperties = {
	listStyle: "none",
	padding: 0,
	lineHeight: "1.8",
	color: "#444",
};

export default App;
