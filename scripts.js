const findmore = document.querySelector('.findmore')
const close = document.querySelector('.close')
const modals = document.querySelector('.modals')
const modals2 = document.querySelector('.modals2')
const close2 = document.querySelector('.close2')

findmore.onclick = function () {
	if (modals.classList.contains('modals')) {
		modals.className = 'modals modals_active'
		if (modals.classList.contains('modals modals_active')) {
			modals.className = 'modals'
		}
	}
}

close.onclick = function () {
	if (modals2.classList.contains('modals2')) {
		modals2.className = 'modals modals2 modals_active'
		modals.className = 'modals'
	}
	close2.onclick = function () {
		modals2.className = 'modals'
	}
	}

// close2.onclick = function () {
// 	modals2.className = 'modals'
// }

