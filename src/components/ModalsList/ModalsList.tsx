import AuthModal from "@c/modals/AuthModal/AuthModal"
import FinishAuthModal from "@c/modals/FinishAuthModal/FinishAuthModal"
import RegisterModal from "@c/modals/RegisterModal/RegisterModal"
import RemindModal from "@c/modals/RemindModal/RemindModal"
import Privacy from "@c/Privacy/Privacy"

const ModalsList = () => {
	return (
		<>
			<AuthModal />
			<RegisterModal />
			<RemindModal />
			<FinishAuthModal />
			<Privacy />
		</>
	)
}

export default ModalsList
