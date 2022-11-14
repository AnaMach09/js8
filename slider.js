let dataSlider = [
  {
    id: 1,
    imageUrl:
      "https://i.pinimg.com/474x/c1/b2/0b/c1b20b4d3265f36197b5c49be86100d3.jpg",
    title: "title1",
  },
  {
    id: 2,
    imageUrl:
      "https://i.pinimg.com/474x/b1/d8/44/b1d844cfcbee5336b044e06b37241134.jpg",
    title: "title2",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/474x/eb/4b/1b/eb4b1bfe605c7de0cd7f0538f26dcc46.jpg",
    title: "title3",
  },
  {
    id: 4,
    imageUrl:
      "https://i.pinimg.com/474x/12/44/53/12445310aef7069b9388e27f0ba99352.jpg",
    title: "title4",
  },
  {
    id: 5,
    imageUrl:
      "https://i.pinimg.com/474x/d8/24/66/d824666e2d96ae140157d0f1751284c1.jpg",
    title: "title4",
  },
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const sliderContent = document.getElementById("slider-content");
const dotItem = document.getElementsByClassName('dot');
let sliderIndex = 0;

function createDivTag(item) {
  const div = document.createElement("div");
  div.style.backgroundImage=`url(${item.imageUrl})`;
  div.classList.add("slide");
 return div;
}
function createh2Tag(item) {
  const title = document.createElement("h2");
  title.textContent = item.title;
  return title;
}

function createDots(item) {
  const dotsParent = document.createElement("div");
  dotsParent.classList.add("dotsWraper");

  dataSlider.forEach((element) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-id", element.id - 1);

    dot.addEventListener("click", function (event) {
      let id = event.target.getAttribute("data-id");
      sliderIndex = id;
      setSlide();
    });
    dotsParent.appendChild(dot);
  });

  return dotsParent;
}

function setSlide() {
  sliderContent.innerHTML = " ";
  const slideDiv = createDivTag(dataSlider[sliderIndex]);

  const h2Tag = createh2Tag(dataSlider[sliderIndex]);
  const dots = createDots();


  slideDiv.appendChild(h2Tag);
  sliderContent.appendChild(slideDiv);
  sliderContent.appendChild(dots);
  currentDotActive();
}

function currentDotActive() {
    dotItem[sliderIndex].classList.add('active');
}


function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = dataSlider.length - 1;
    setSlide();
    return;
  }

  sliderIndex--;
  setSlide();
}
function arrowRightClick() {
  if (sliderIndex == dataSlider.length - 1) {
    sliderIndex = 0;
    setSlide();
    return;
  }
  sliderIndex++;
  setSlide();
}

arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);


setSlide();



document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide' ).mount();
} );
