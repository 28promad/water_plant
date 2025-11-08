const plant = document.getElementById('plant');

const waterBtn = document.getElementById('waterBtn');

let stage = 0;

const stages = [
	'plant1.png',
	'plant2.png',
	'plant3.png',
	'plant4.png',
	'plant5.png',
	'plant6.png',
];

if (localStorage.getItem('plantStage')){
	stage = parseInt(localStorage.getItem('plantStage'));
	plant.src = stages[stage];
}

waterBtn.addEventListener('click', () => {
	if (stage < stages.length - 1) {
		stage++;
		plant.src = stages[stage];

		// small animation over here
		plant.style.transform = 'scale(1.1)';
		plant.setAttribute('alt', `Plant stage ${stage + 1}`);
		setTimeout(() => plant.style.transform = 'scale(1)', 300);

		localStorage.setItem('plantStage', stage);
	} else {
		if (waterBtn.textContent === "Reset plant") {
			stage = 0;
			plant.src = stages[stage];
			waterBtn.textContent = "Water the plant";
			waterBtn.classList.remove('reset');
		} else {
			waterBtn.textContent = "Reset plant";
			waterBtn.classList.add('reset');
		}
		plant.setAttribute('alt', `Plant stage ${stage + 1}`);
		setTimeout(() => plant.style.transform = 'scale(1)', 300);
		localStorage.setItem('plantStage', stage);
	}
});

