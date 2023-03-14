
const popupEditProfile = document.querySelector('.popup-edit');
const popupAddNewCard = document.querySelector('.popup-add');
const popupEditAvatar = document.querySelector('.popup_type_avatar');

const profileEditBtn = document.querySelector('.profile__edit-button');
const popupAddNewCardOpenBtn = document.querySelector('.profile__add-button');
const buttonEditAvatar = document.querySelector('.profile__edit-avatar');

const formEditProfile = popupEditProfile.querySelector('.popup__form');
const formAddNewCard = popupAddNewCard.querySelector('.popup__form');
const formEditAvatar = popupEditAvatar.querySelector('.popup__form');

const nameInput = formEditProfile.querySelector('#text-name');
const jobInput = formEditProfile.querySelector('#text-profile');

const avatar = document.querySelector('.profile__avatar');

const config = {
	popupForm: '.popup__form',
	inputErrorClass: 'popup__input_type_error',
	inputErrorActive: 'form__input-error_active',
	activeButtonClass: 'popup__button_valid',
	inactiveButtonClass: 'popup__button_disabled',
	formInput: '.popup__input',
	formSubmit: '.popup__button',
};

export {
	popupEditProfile, profileEditBtn, formEditProfile, nameInput, jobInput, formAddNewCard,
	popupAddNewCardOpenBtn, popupAddNewCard, config, buttonEditAvatar, formEditAvatar,
	avatar
};