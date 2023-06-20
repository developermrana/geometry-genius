function getInputValue(id) {
  const inputElement = document.getElementById(id);
  const inputValueString = inputElement.value;
  const inputValue = parseFloat(inputValueString);
  inputElement.value = "";
  return inputValue;
}

function setTotalArea(id, totalArea) {
  const areaElement = document.getElementById(id);
  areaElement.innerText = totalArea;
}

function multiplicationHalfBaseHeight(base, height, setTotal, displayBlockId) {
  if ((base, height) > 0 && isNaN(base, height) == false) {
    const areaInt = 0.5 * base * height;
    const area=areaInt.toFixed(2);
    setTotalArea(setTotal, area);
    document.getElementById(displayBlockId).style.display = "block";
  } else {
    alert("please input only positive number");
  }
}

function multiplicationBaseHeight(base, height, setTotal, displayBlockId) {
  if ((base, height) > 0 && isNaN(base, height) == false) {
    const areaInt = base * height;
    const area= areaInt.toFixed(2);
    setTotalArea(setTotal, area);
    document.getElementById(displayBlockId).style.display = "block";
  } else {
    alert("please input only positive number");
  }
}

// triangle code start
document.getElementById("triangle-calc").addEventListener("click", function () {
  const triangleBase = getInputValue("triangle-base");
  const triangleHeight = getInputValue("triangle-height");

  multiplicationHalfBaseHeight(
    triangleBase,
    triangleHeight,
    "triangle-area",
    "triangle-result"
  );
});
// triangle code end

// rectangle code start
document
  .getElementById("rectangle-calc")
  .addEventListener("click", function () {
    const rectangleBase = getInputValue("rectangle-base");
    const rectangleHeight = getInputValue("rectangle-height");

    multiplicationBaseHeight(
      rectangleBase,
      rectangleHeight,
      "rectangle-area",
      "rectangle-result"
    );
  });
// rectangle code end

// parallelogram code start
document
  .getElementById("parallelogram-calc")
  .addEventListener("click", function () {
    const parallelogramBase = getInputValue("parallelogram-base");
    const parallelogramHeight = getInputValue("parallelogram-height");

    multiplicationBaseHeight(
      parallelogramBase,
      parallelogramHeight,
      "parallelogram-area",
      "parallelogram-result"
    );
  });
// parallelogram code end

// rhombus code start
document.getElementById("rhombus-calc").addEventListener("click", function () {
  const rhombusBase = getInputValue("rhombus-base");
  const rhombusHeight = getInputValue("rhombus-height");

  multiplicationHalfBaseHeight(
    rhombusBase,
    rhombusHeight,
    "rhombus-area",
    "rhombus-result"
  );
});
// rhombus code end

// pentagon code start
document.getElementById("pentagon-calc").addEventListener("click", function () {
  const pentagonBase = getInputValue("pentagon-base");
  const pentagonHeight = getInputValue("pentagon-height");

  multiplicationHalfBaseHeight(
    pentagonBase,
    pentagonHeight,
    "pentagon-area",
    "pentagon-result"
  );
});
// pentagon code end

// ellipse code start
document.getElementById("ellipse-calc").addEventListener("click", function () {
  const ellipseBase = getInputValue("ellipse-base");
  const ellipseHeight = getInputValue("ellipse-height");

  if (
    (ellipseBase, ellipseHeight) > 0 &&
    isNaN(ellipseBase, ellipseHeight) == false
  ) {
    const ellipseAreaInt = 3.14 * ellipseBase * ellipseHeight;
    const ellipseArea=ellipseAreaInt.toFixed(2);
    setTotalArea("ellipse-area", ellipseArea);
    document.getElementById("ellipse-result").style.display = "block";
  } else {
    alert("please input only positive number");
  }
});
// ellipse code end

// random Background color
const cards = document.getElementsByClassName("card");
for (let card of cards) {
  card.addEventListener("mouseenter", function randomNumber() {
    const randomNum = Math.round(Math.random() * 1000000 - 1) + "";
    if (randomNum.length > 5) {
      card.style.backgroundColor ="#"+randomNum;
    } else {
      randomNumber();
    }
    
  });
}
