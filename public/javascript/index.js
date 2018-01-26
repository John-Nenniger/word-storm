
  console.log("stuffs loaded ")
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const words = {"ethereal": "extremely delicate and light in a way that seems too perfect for this world", "lugubrious": "looking or sounding sad and dismal", "pernicious": "having a harmful effect, especially in a gradual or subtle way", "litigious": "unreasonably prone to go to law to settle disputes", "nefarious": "(typically of an action or activity) wicked or criminal"}

  const random = function(max){
    return Math.floor((Math.random() * max) + 1)
  }

  for (const [key, value] of Object.entries(words)){
    // let hNumber = random(6);
    let word = document.createElement("p");
    word.innerHTML = key;
    word.className += "word";
    word.style.position = "absolute";
    console.log()
    document.getElementById("body").appendChild(word);
    let wordHeight = word.offsetHeight;
    let wordWidth = word.offsetWidth;
    word.style.top = `${random(windowHeight - wordHeight)}px`;
    word.style.right = `${random(windowWidth - wordWidth)}px`;
  }
