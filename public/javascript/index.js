
  console.log("stuffs loaded ")
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const words = {"Ethereal": "extremely delicate and light in a way that seems too perfect for this world",
                 "Lugubrious": "looking or sounding sad and dismal",
                 "Pernicious": "having a harmful effect, especially in a gradual or subtle way",
                 "Litigious": "unreasonably prone to go to law to settle disputes",
                 "Nefarious": "(typically of an action or activity) wicked or criminal",
                 "Decathect": "to withdraw one’s feelings of attachment from (a person, idea, or object), as in anticipation of a future loss",
                 "Nycotophilia": "love of darkness or night. Finding relaxation or comfort in the darkness",
                 "Agathist": "a person who believes that all things tend towards ultimate good",
                 "Retroherence" :"the tendency of clusters of events to be logically connectable after they’ve happened",
                 "Nemorian": "an inhabitant of - or pertaining to - forests, woodland, or groves"
               }

  const random = function(max){
    return Math.floor((Math.random() * max) + 1)
  }

  for (const [key, value] of Object.entries(words)){
    // let hNumber = random(6);
    let word = document.createElement("p");
    word.innerHTML = key;
    word.className += "word";
    word.className += "hover-near-white:hover";
    word.style.position = "absolute";
    word.style.fontSize = `${random(56) + 5}px`
    document.getElementById("body").appendChild(word);
    // I need to calculate the word's size before I calculate its position,
    // but after I append it to the Dom... a litle confusing but not too bad
    let fontSize = window.getComputedStyle(word, null).getPropertyValue('font-size')
    console.log(fontSize)
    let wordHeight = word.offsetHeight;
    let wordWidth = word.offsetWidth;
    word.style.top = `${random(windowHeight - wordHeight)}px`;
    word.style.right = `${random(windowWidth - wordWidth)}px`;
  }
