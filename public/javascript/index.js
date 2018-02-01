
  console.log("hold onto your butts, javascript is happening")
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const allWords = {"Ethereal": "extremely delicate and light in a way that seems too perfect for this world.",
                 "Lugubrious": "looking or sounding sad and dismal.",
                 "Pernicious": "having a harmful effect, especially in a gradual or subtle way.",
                 "Litigious": "unreasonably prone to go to law to settle disputes.",
                 "Nefarious": "(typically of an action or activity) wicked or criminal.",
                 "Decathect": "to withdraw one’s feelings of attachment from (a person, idea, or object), as in anticipation of a future loss.",
                 "Nycotophilia": "love of darkness or night. Finding relaxation or comfort in the darkness.",
                 "Agathist": "a person who believes that all things tend towards ultimate good.",
                 "Retroherence" :"the tendency of clusters of events to be logically connectable after they’ve happened.",
                 "Nemorian": "an inhabitant of - or pertaining to - forests, woodland, or groves.",
                 "Nebulous": "indistinct, vague.",
                 "Staunch": "local and committed in attitude.",
                 "Placate": "to soothe or mollify especially by concessions.",
                 "Obfuscate": "to make obscure or unclear.",
                 "Fastidious": "excessively particular, critical, or demanding; hard to please.",
                 "Sonder": "The realization that each passerby has a life as vivid and complex as your own.",
                 "Occhiolism": "awareness of the smallness of your perspective.",
                 "Rubatosis": "The unsettling awareness of your own heartbeat.",
                 "Exulansis": "The tendency to give up trying to talk about an experience because people are unable to relate to it.",
                 "Habile": "deft or skillful.",
                 "Logomachy": "an argument about words.",
                 "Oneirataxia": "inability to distinguish dreams or fantasy with real life.",
                 "Jouska": "A hypothetical conversation that you compulsively play out in your head.",
                 "Liberosis": "desire to care less about things.",
                 "Vemödalen": "frustration of photographing something amazing when thousands of identical photos already exist.",
                 "Enervate": "to cause (someone) to feel drained of energy or vitality.",
                 "Nonplussed": "(of a person) surprised and confused so much that they are unsure how to react.",
                 "Elysian": "anything which connotes beauty, perfection, celestial divinity, bliss, or paradise.",
                 "Ennui": "a feeling of listlessness and dissatisfaction arising from a lack of occupation or excitement.",
                 "Refute": "to prove a claim is false",
                 "Tartle": "to hesitate when introducing someone because you've forgotten their name",
                 "Polymorphic": "an organism having more than one adult form, such as the different castes in social ants",
                 "Egregious": "outstandingly/shockingly bad",
                 "Horripilation": "(medically) a bristling of hair on the head or body; goosbumps",
                 "Catharsis": "the process of releasing, and thereby providing relief from, strong or repressed emotions.",
                 "Forlorn": "pitifully sad and abandoned or lonely. Or (of an aim or endeavor) unlikely to succeed or be fulfilled; hopeless",
                 "Prevaricate": "to speak or act in an evasive way.",
                 "Repentant": "expressing or feeling sincere regret and remorse; remorseful.",
                 "Illustrious": "well know, respected and admired for their past achievments",
                 "Ebullient": "cheerful and full of energy.",
                 "Illusory": "based on illusion; not real.",
                 "Ephemeral": "lasting for a very short time.",
                 "Esoteric": "intended for or likely to be understood by only a small number of people with a specialized knowledge or interest.",
                 "Eternal": "asting or existing forever; without end or beginning.",
                 "Bashful": "reluctant to draw attention to oneself; shy.",
                 "Cacophany": "a harsh, discordant mixture of sounds",
                 "Hale": "(of a person, especially an elderly one) strong and healthy.",
                 "Enigmatic": "difficult to interpret or understand; mysterious",
                 "Morose": "sullen and ill-tempered.",
                 "Vivacious": "(especially of a woman) attractively lively and animated.",
                 "Effervescent": "giving off bubbles; fizzy. Or vivacious and enthusiatic.",
                 "Egocentric": "thinking only of oneself, without regard for the feelings or desires of others; self-centered.",
                 "Meticulous": "showing great attention to detail; very careful and precise.",
                 "Scrupulous": "(of a person or process) dilligent, thorough, and extremely attentive to details",
                 "Assidious": "showing great care and perseverance",
                 "Assimilate": "to be taken in or absorbed",
                 "Stanch": "to stop or restrict (a flow of blood) from a wound.",
                 "Gale": "a strong current of air",
                 "Spurious": "outwardly similar or corresponding to something without having its genuine qualities. Or not being what it purports to be; false or fake.",
                 "Malfeasance": "wrongdoing, especially by a public official.",
                 "Venerable": "accorded a great deal of respect, especially because of age, wisdom, or character.",
                 "Volition": "the faculty or power of using one's will.",
                 "Verbose": "using or expressed in more words than are needed.",
                 "Diffuse": "(adj) spread out over a large area; not contained.",
                 "Fulminate": "express vehement protest.",
                 "Vehement": "showing strong feeling; forceful, passionate, or intense.",
                 "Miasma": "an oppressive or unpleasant atmosphere or smell that surrounds or emanates from something.",
                 "Stasis": "A state of inactivity; a freezing, or state of motionlessness.",
                 "Melodious": "of, producingm or having a pleasant tune.",
                 "Cantankerous": "bad-tempered, argumentative, and uncooperative.",
                 "Sanguine": "consisting of or relating to blood",
                 "Sagacious": "having or showing keen mental discernment and good judgment; shrewd.",
                 "Acute": "present or experienced to a severe or intense degree. (or a person) having or showing a perceptive understanding or insight.",
                 "Aberration": "a departure from what is normal, usual, or expected, typically one that is unwelcome."
               }
   // Object.entries()turns allWords into an array
   // Then I sort that array randomly, and take the first 20 word:description pairs
  const random20Words = Object.entries(allWords).sort(() => 0.5 - Math.random()).slice(0,20)

  function random(max){
    return Math.floor((Math.random() * max) + 1)
  }

  function showDescription(description){
    description.classList.add("visibleDescription")
    description.classList.remove("hiddenDescription")
  }

  function hideDescription(description){
    description.classList.add("hiddenDescription")
    description.classList.remove("visibleDescription")
  }

  for (const [key, value] of random20Words){
    const word = document.createElement("p");
    word.innerHTML = key;
    word.classList.add("word");
    word.classList.add("dim");
    word.style.position = "absolute";
    word.style.fontSize = `${((random(120)*windowWidth)/1500) + 4}px`
    document.getElementById("body").appendChild(word);
    // I need to calculate the word's size before I calculate its position,
    // but after I append it to the Dom... a litle confusing but not too bad
    const readFontSize = window.getComputedStyle(word, null).getPropertyValue('font-size')
    const wordHeight = word.offsetHeight;
    const wordWidth = word.offsetWidth;
    word.style.top = `${random(windowHeight - (wordHeight + (windowHeight*0.10)))}px`;
    word.style.right = `${random(windowWidth - wordWidth)}px`;
    // create description
    const description = document.createElement("p")
    // add the text into the tag
    description.innerHTML = value
    description.classList.add("description");
    // change description size based on the word's font-size
    description.style.fontSize = `${parseInt(word.style.fontSize, 10) * 0.8}px`
    description.style.position = "absolute"
    document.getElementById("body").appendChild(description)
    // put description in the approprite position
    // I need to factor in the size of the word though
    description.style.top = `${parseInt(word.style.top, 10) + word.offsetHeight + 10}px`
    description.style.textAlign = "center"
    // i need the width of the description so that I don't position it off the page
    const descriptionWidth = description.offsetWidth
    description.style.right = `${parseInt(word.style.right - (descriptionWidth/2), 10)}px`
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
     })

  }

  function handleWordClick(descrip){
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
