const palette = {
    // white:  '#FFFFFF',
    pink:   '#e0007a',
    blue:   '#55a7dc',
    yellow: '#fef31c',
};

var titles = [
    'betrayal',
    'billions',
    'luck',
    'secrets',
    'success',
    'truth',
];

var names = [
    'earth',
    'king',
    'mars',
    'moon',
    'orbit',
    'star',
    'strike',
    'sun',
];

var celebs = [
    'arianna',
    'obama',
    'olsens',
    'rihanna',
    'shia',
    'trump',
];

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
    let colors = shuffle(Object.values(palette));

    // ***Generate Cards
    // Foreground
    shuffled_titles = shuffle(JSON.parse(JSON.stringify(titles)));
    shuffled_names = shuffle(JSON.parse(JSON.stringify(names)));
    shuffled_celebs = shuffle(JSON.parse(JSON.stringify(celebs)));
    for(var i = 0; i < 3; i++) {
        document.getElementById("title_"+i).style.backgroundImage = "url('./img/titles/"+shuffled_titles[i]+".png')";
        document.getElementById("name_"+i).style.backgroundImage = "url('./img/names/"+shuffled_names[i]+".png')";
        document.getElementById("celeb_"+i).style.backgroundImage = "url('./img/celebs/"+shuffled_celebs[i]+".png')";
    }
    document.getElementById("spread").style.backgroundColor = colors[0];
}

// Actions to Perform on Load
generateCards();
