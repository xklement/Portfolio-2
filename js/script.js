const carouselText = [
  { text: "Full-stack developer.", color: "orange" },
  { text: "Mobile developer.", color: "yellow" },
];

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  const element = document.querySelector(eleRef);
  while (i < letters.length) {
    await waitForMs(delay);
    element.innerHTML += letters[i];
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const element = document.querySelector(eleRef);
  const sentence = element.innerHTML;
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    element.innerHTML = letters.join("");
  }
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  const element = document.querySelector(eleRef);
  while (true) {
    updateFontColor(element, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(element, color) {
  element.style.color = color;
}

carousel(carouselText, "#sentence");
