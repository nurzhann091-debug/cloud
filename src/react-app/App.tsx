// src/App.tsx

import { useState } from "react";

// Основные стили для контейнеров
const cardStyle: React.CSSProperties = {
	padding: "2em",
	border: "1px solid #ccc",
	borderRadius: "8px",
	marginBottom: "20px",
	backgroundColor: "#f9f9f9",
	color: "#333",
};

const containerStyle: React.CSSProperties = {
	maxWidth: "800px",
	margin: "0 auto",
	padding: "20px",
	fontFamily: "Arial, sans-serif",
	textAlign: "center",
};

const buttonStyle: React.CSSProperties = {
	padding: "10px 20px",
	fontSize: "16px",
	cursor: "pointer",
	backgroundColor: "#007bff",
	color: "white",
	border: "none",
	borderRadius: "4px",
};

function App() {
	const [status, setStatus] = useState("Отключено");

	return (
		<div style={containerStyle}>
			<header>
				<h1 style={{ color: "#0056b3" }}>CloudHub Solutions</h1>
				<p>Будущее ваших данных в надежных руках</p>
			</header>

			<section style={cardStyle}>
				<h2>Что такое Облако?</h2>
				<p>
					Облачные вычисления — это предоставление вычислительных услуг (включая серверы,
					хранилища, базы данных, сети, программное обеспечение) через Интернет
					(«облако»).
				</p>
			</section>

			<section style={cardStyle}>
				<h2>Наши преимущества</h2>
				<ul style={{ textAlign: "left", display: "inline-block" }}>
					<li>Высокая доступность 99.99%</li>
					<li>Масштабируемость ресурсов</li>
					<li>Безопасность данных уровня Enterprise</li>
					<li>Экономия на оборудовании</li>
				</ul>
			</section>
			
			

[Image of cloud computing architecture diagram]


			<section style={cardStyle}>
				<h2>Статус сервера</h2>
				<p>Текущее состояние: <strong>{status}</strong></p>
				<button
					style={buttonStyle}
					onClick={() => setStatus("Активен (подключено к Cloudflare)")}
				>
					Проверить статус
				</button>
			</section>

			<footer style={{ marginTop: "40px", fontSize: "0.8em", color: "#666" }}>
				<p>&copy; 2026 CloudHub Solutions. Все права защищены.</p>
			</footer>
		</div>
	);
}

export default App;
