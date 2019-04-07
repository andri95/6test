class Einstaklingur{
	constructor(nafn, score){
		this._nafn = nafn;
		this._score = score;
	}
}

let einstEitt = new Einstaklingur("Kalli", "50"),
	einstTvo = new Einstaklingur("Gunna", "90"),
	einstThrju = new Einstaklingur("Siggi", "60"),
	einstFjogur = new Einstaklingur("Lea", "70"),
	einstFimm = new Einstaklingur("Arnar", "95");

var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

let einstaklingar = [einstEitt, einstTvo, einstThrju, einstFjogur, einstFimm];

function filterItems(einstaklingar, score){
	return einstaklingar.filter(einstaklingar => {
		return einstaklingar.score >= score[0] && einstaklingar.score[1]
	})
};

slider.on('update', function(values){
	let filteredItems = filterItems(items, values)
	renderItems(filteredItems)
})

function renderItems(einstaklingar){
	let listi = document.querySelector('.nidurstada');
	let listi.innerHTML = einstaklingar.map(einstalingur => `
		<li>${nafn}:${score}</li>`
	)}.join('')

