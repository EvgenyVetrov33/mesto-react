import React, { useEffect, useState } from "react";
import api from '../utils/api'
import Card from './Card'

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
	const [userName, setUserName] = useState("")
	const [userDescription, setUserDescription] = useState("")
	const [userAvatar, setUserAvatar] = useState("")
	const [cards, getInitialCards] = useState([])

	useEffect(() => {
		api
			.getUserInfo()
			.then((profileUserInfo) => {
				setUserName(profileUserInfo.name)
				setUserDescription(profileUserInfo.about)
				setUserAvatar(profileUserInfo.avatar)
			})
			.catch((error) => console.log(`Ошибка: ${error}`))
		api
			.getInitialCards()
			.then((cardsData) => {
				getInitialCards(
					cardsData.map((data) => ({
						likes: data.likes,
						name: data.name,
						link: data.link,
						cardId: data._id,
					}))
				)
			})
			.catch((error) => console.log(`Ошибка: ${error}`))
	}, [])

	return (
		<main className="content page__content">
			<section className="profile content__profile">
				<img src={userAvatar} className="profile__avatar" alt="Аватар" />
				<button onClick={() => {
					onEditAvatar(true)
				}}
					className="profile__edit-avatar" type="button">
				</button>
				<div className="profile__info">
					<div className="profile__name">
						<h1 className="profile__title">{userName}</h1>
						<button onClick={() => {
							onEditProfile(true)
						}}
							type="button" className="profile__edit-button"></button>
					</div>
					<p className="profile__paragraph">{userDescription}</p>
				</div>
				<button onClick={() => {
					onAddPlace(true)
				}}
					type="button" className="profile__add-button"></button>
			</section>
			<section className="elements content__elements">
				{cards.map((card) => (
					<Card key={card.cardId} likes={card.likes} name={card.name} link={card.link}
						onCardClick={onCardClick} />
				))}
			</section>
		</main>
	);
}

export default Main;