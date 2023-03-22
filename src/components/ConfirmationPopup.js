function ConfirmationPopup({ card, onClose, name, title, onCardDelete }) {

	function handleDeleteClick() {
		onCardDelete(card);
		onClose();
	}

	return (
		<section className={`popup popup_type_${name} ${card && 'popup_opened'}`}>
			<div className="popup__container">
				<button onClick={onClose} className="popup__close" type="button"></button>
				<form name="delete-form" className="popup__form popup__form-delete" noValidate>
					<h3 className="popup__title">{title}</h3>
					<button onClick={handleDeleteClick} className="popup__button" type="submit">Да</button>
				</form>
			</div>
		</section>
	);
};

export default ConfirmationPopup;