import React from "react"

function Card(card) {
	function handleCardClick() {
		card.onCardClick(card)
	}

	return (
		<div className="element elements__element">
			<button className="element__button-delete" type="button"></button>
			<img
				className="element__image"
				src={card.link}
				alt={card.name}
				onClick={handleCardClick}
			/>
			<div className="element__caption">
				<h2 className="element__title">{card.name}</h2>
				<div className="element__likes">
					<button className="element__button-like" type="button"></button>
					<p className="element__likes-number">{card.likes.length}</p>
				</div>
			</div>
		</div>
	)
}

export default Card