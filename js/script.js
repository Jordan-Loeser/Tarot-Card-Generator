const pallete = {
    primary: {
        red:    '#FA1405',
        orange: '#F46701',
        yellow: '#FFD100',
        green:  '#03823D',
        blue:   '#195eab',
        purple: '#554B63',
    },
    secondary: {
        red:    '#FCB3A2',
        orange: '#FB7F43',
        yellow: '#FCDB8A',
        green:  '#AFCC96',
        blue:   '#5ABCE7',
        purple: '#AAB8DA',
    }
}

var backgrounds = [0, 1, 4];
var foregrounds = [
    'Baboon',
    'Giraffe',
    'Butterfly',
    'Bird',
    'Flower',
    'Ray',
]

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generateCards() {
    console.log("Generating cards...")

    // ***Generate Palette
    let chosen_palette = Math.round(Math.random()) ? pallete.primary : pallete.secondary;
    let colors = shuffle(Object.values(chosen_palette));

    // ***Implement Coloring
    // document.body.style.background = colors[0]; // Background
    // SVGs
    for(var i = 0; i < 3; i++) {
        Array.from(document.getElementsByClassName("cls-"+(i+1))).forEach((item) => {
            item.style.fill = colors[i];
        });
    }
    // Label Colors
    // Array.from(document.getElementsByClassName("label")).forEach((item) => {
    //     item.style.backgroundColor = colors[0];
    // });

    // ***Generate Cards
    // Foreground
    shuffled_foregrounds = shuffle(JSON.parse(JSON.stringify(foregrounds)));
    for(var i = 0; i < 3; i++) {
        idx = foregrounds.indexOf(shuffled_foregrounds[i])
        console.log(`foregrounds.indexOf(${shuffled_foregrounds[i]})`, idx)
        document.getElementById("fg_"+i).style.backgroundImage = "url('./img/foreground/"+idx+".png')";
    }
    Array.from(document.getElementsByClassName("name")).forEach((item, i) => {
        item.style.backgroundColor = colors[0];
        item.textContent = shuffled_foregrounds[i];
    });

    // Background
    shuffled_backgrounds = shuffle(backgrounds);
    console.log('Showing backgrounds', shuffled_backgrounds.slice(0,3))
    for(var i = 0; i < 3; i++) {
        document.getElementById("bg_"+i).style.backgroundImage = "url('./img/background/"+shuffled_backgrounds[i]+".png')";
    }
}

// Actions to Perform on Load
generateCards();
