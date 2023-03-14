import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup"

function App() {
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
	const [selectedCard, setSelectedCard] = React.useState({})

	function closeAllPopups() {
		setIsEditProfilePopupOpen(false)
		setIsAddPlacePopupOpen(false)
		setIsEditAvatarPopupOpen(false)
		setSelectedCard({})
	}
	return (
		<div className="root">
			<div className="page">
				<Header />
				<Main
					onEditProfile={setIsEditProfilePopupOpen}
					onEditAvatar={setIsEditAvatarPopupOpen}
					onAddPlace={setIsAddPlacePopupOpen}
					onCardClick={setSelectedCard}
				/>
				<Footer />
				<PopupWithForm
					name="popupEditProfile"
					title="Редактировать профиль"
					buttonText="Сохранить"
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
				>
					<label className="popup__label">
						<input id="text-name" className="popup__input popup__input_input_name" name="inputName" type="text"
							placeholder="Имя" minLength="2" maxLength="40" required />
						<span id="text-name-error" className="error"></span>
					</label>
					<label className="popup__label">
						<input id="text-profile" className="popup__input popup__input_input_job" name="inputJob" type="text"
							placeholder="О себе" minLength="2" maxLength="200" required />
						<span id="text-profile-error" className="error"></span>
					</label>
				</PopupWithForm>
				<PopupWithForm
					name="popupNewPlace"
					title="Новое место"
					buttonText="Создать"
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
				>
					<label className="popup__label">
						<input id="text" className="popup__input popup__input_input_name" name="name" type="text"
							placeholder="Название" minLength="2" maxLength="30" required />
						<span id="text-error" className="error"></span>
					</label>
					<label className="popup__label">
						<input id="url" className="popup__input popup__input_input_job" name="link" type="url"
							placeholder="Ссылка на картинку" required />
						<span id="url-error" className="error"></span>
					</label>
				</PopupWithForm>
				<PopupWithForm
					name="popupConfirmation"
					title="Вы уверены?"
					buttonText="Да"
				></PopupWithForm>
				<PopupWithForm
					name="popupEditAvatar"
					title="Обновить аватар"
					buttonText="Сохранить"
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
				>
					<input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" className="popup__input" required />
					<span id="avatar-error" className="error"></span>
				</PopupWithForm>
				<ImagePopup card={selectedCard} onClose={closeAllPopups} />
			</div>
		</div >
	);
}

export default App;
