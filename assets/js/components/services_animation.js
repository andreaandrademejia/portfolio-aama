// assets/js/components/services_animation.js

export default function initServicesAnimation() {
	const servicesSection = document.querySelector('#services');
	const cards = document.querySelectorAll('.service-card');

	if (!servicesSection || cards.length === 0) return;

	let currentIndex = 0;
	let isAnimating = false;

	const highlightNextCard = () => {
		// Limpiar todas las cards antes de iluminar la siguiente
		cards.forEach((card) => card.classList.remove('card-active'));

		if (currentIndex < cards.length) {
			cards[currentIndex].classList.add('card-active');
			currentIndex++;
			setTimeout(highlightNextCard, 1000); // 1 segundo por card
		} else {
			// Espera 3 segundos y reinicia el ciclo
			setTimeout(() => {
				currentIndex = 0;
				highlightNextCard();
			}, 3000);
		}
	};

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				// Se activa cuando el usuario llega a la sección y no está animando ya
				if (entry.isIntersecting && !isAnimating) {
					isAnimating = true;
					currentIndex = 0; // Reiniciar siempre al entrar
					highlightNextCard();
				} else if (!entry.isIntersecting) {
					isAnimating = false; // Permitir que se reactive al volver a bajar
				}
				// Opcional: dejar de observar si solo quieres que pase una vez
				// observer.unobserve(entry.target);
			});
		},
		{ threshold: 0.3 },
	); // Se activa cuando se ve el 30% de la sección

	observer.observe(servicesSection);
}
