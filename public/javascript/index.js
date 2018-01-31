
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
                 "Nemorian": "an inhabitant of - or pertaining to - forests, woodland, or groves",
                 "Nebulous": "indistinct, vague",
                 "Staunch": "local and committed in attitude",
                 "Placate": "to soothe or mollify especially by concessions",
                 "Obfuscate": "to make obscure or unclear",
                 "Fastidious": "excessively particular, critical, or demanding; hard to please",
                 "Sonder": "The realization that each passerby has a life as vivid and complex as your own",
                 "Occhiolism": "awareness of the smallness of your perspective",
                 "Rubatosis": "The unsettling awareness of your own heartbeat",
                 "Exulansis": "The tendency to give up trying to talk about an experience because people are unable to relate to it"
               }

  const random = function(max){
    return Math.floor((Math.random() * max) + 1)
  }

  for (const [key, value] of Object.entries(words)){
    let word = document.createElement("p");
    word.innerHTML = key;
    word.className += "word";
    word.className += " hover-near-white:hover";
    word.style.position = "absolute";
    word.style.fontSize = `${random(56) + 5}px`
    document.getElementById("body").appendChild(word);
    // I need to calculate the word's size before I calculate its position,
    // but after I append it to the Dom... a litle confusing but not too bad
    let readFontSize = window.getComputedStyle(word, null).getPropertyValue('font-size')
    let wordHeight = word.offsetHeight;
    let wordWidth = word.offsetWidth;
    word.style.top = `${random(windowHeight - wordHeight)}px`;
    word.style.right = `${random(windowWidth - wordWidth)}px`;
    // create description
    let description = document.createElement("p")
    description.innerHTML = value
    description.className += "description";
    // change description size
    description.style.fontSize = `${parseInt(word.style.fontSize, 10) * 0.8}px`
    description.style.position = "absolute"
    document.getElementById("body").appendChild(description)
    // put description in the approprite position
    // I need to factor in the size of the word though
    description.style.top = `${parseInt(word.style.top, 10) + word.offsetHeight + 10}px`
    description.style.right = `${parseInt(word.style.right, 10)}px`
    description.classList.add("hiddenDescription")
    // add event listener to word to reveal the description when clicked
    // and hide other
    word.addEventListener('click', (e) => {
      if (document.getElementsByClassName("hiddenWord").length === 0) { // This is the first time a word has been clicked
        // reveal the description accosiated with the word in question
        handleWordClick(description);
        // and give all other words .hiddenword
        Array.from(document.getElementsByClassName("word")).forEach(function(wordToHide){
          if (wordToHide !== word){
            wordToHide.classList.add("hiddenWord")
          }
        })
      } else { // if other words are hidden already
        // hide the description again
        handleWordClick(description);
        // and reveal all the other words
        Array.from(document.getElementsByClassName("word")).forEach(function(wordToHide){
            wordToHide.classList.remove("hiddenWord")
          })
        }
      //  console.log(e.currentTarget)
     })

  }

  function handleWordClick(descrip){
    // let anyVisibleDescriptions = !document.getElementsByClassName("visibleDescription").length === 0
    // let anyHiddenWords = !document.getElementsByClassName("hiddenWord").length === 0
    // console.log(anyHiddenWords)
    if (document.getElementsByClassName("visibleDescription").length === 0){
      showDescription(descrip)
    } else if (descrip.classList.contains("visibleDescription")){
      hideDescription(descrip)
    } else if (document.getElementsByClassName("hiddenWord").length > 0){
      hideDescription(document.getElementsByClassName("visibleDescription")[0])
    } else {
      let previouslyVisibleDescription = document.getElementsByClassName("visibleDescription")[0]
      previouslyVisibleDescription.classList.remove("visibleDescription");
      previouslyVisibleDescription.classList.add("hiddenDescription")
      showDescription(descrip)
    }
  }

  function showDescription(description){
    description.classList.add("visibleDescription")
    description.classList.remove("hiddenDescription")
  }

  function hideDescription(description){
    description.classList.add("hiddenDescription")
    description.classList.remove("visibleDescription")
  }
