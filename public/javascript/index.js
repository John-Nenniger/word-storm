
  console.log("stuffs loaded ")
  const words = {"ethereal": "extremely delicate and light in a way that seems too perfect for this world", "lugubrious": "looking or sounding sad and dismal", "pernicious": "having a harmful effect, especially in a gradual or subtle way", "litigious": "unreasonably prone to go to law to settle disputes", "nefarious": "(typically of an action or activity) wicked or criminal"}

  for (const [key, value] of Object.entries(words)){
    let hNumber = Math.floor(Math.random() * 6 + 1);
    let word = document.createElement(`h${hNumber}`)
    word.innerHTML = key
    document.getElementById("body").appendChild(word)
  }
