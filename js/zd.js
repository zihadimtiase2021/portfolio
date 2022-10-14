//Preloaader function
(function preloader() {
  const preloaader = document.getElementById("preaload-sation");

  window.addEventListener("load", () => {
    preloaader.style.display = "none";
  });
})();
//herosection

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let btn = document.getElementById("custom");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  console.log(value);
  // stars.style.left = value + 0.25 + "px";
  if (window.outerWidth > 768) {
    stars.style.left = value + 0.25 + "px";
  }
  moon.style.top = value + 1.05 + "px";
  mountains_behind.style.top = value * 0.5 + "px";
  mountains_front.style.top = value * 0 + "px";
  if (window.outerWidth < 768) {
    text.style.marginRight = value * 1.5 + "px";
  } else {
    text.style.marginRight = value * 4 + "px";
  }
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
});

//skillsation function
(function skillsation() {
  //circuler progress effect
  const circProgress = document.querySelectorAll(".circuler-progres");

  circProgress.forEach((parentElem) => {
    let circulerStartValue = 0;
    let progress_value = 0;

    const circulerEndValue = parentElem.getAttribute("data-value");
    const progressText = parentElem.querySelector(".progress-value");
    const progressInterval = setInterval(() => {
      progress_value++;
      circulerStartValue++;

      parentElem.style.background = `conic-gradient(#fff ${
        circulerStartValue * 3.6
      }deg, rgb(255 255 255 / 10%) 0deg)`;

      progressText.innerText = `${progress_value}%`;
      if (circulerStartValue == circulerEndValue) {
        clearInterval(progressInterval);
      }
    }, 10);
  });

  // // lineProgress text change effect
  let lineProgress = document.querySelectorAll(".line-progress-value");

  lineProgress.forEach((text) => {
    let lineTextEndValue = text.getAttribute("data-value");
    let lineTextStartValue = 0;
    let lineProgressTextIntervel = setInterval(() => {
      lineTextStartValue++;

      text.innerText = `${lineTextStartValue}%`;

      if (lineTextStartValue == lineTextEndValue) {
        clearInterval(lineProgressTextIntervel);
      }
    }, 10);
  });

  // lineprogress-bar

  let progressInline = document.querySelectorAll(".progress-inline");

  progressInline.forEach((line) => {
    let progressLineEndValue = line.getAttribute("data-value");
    let progresLineStartValue = 0;

    let preogressLineIntervel = setInterval(() => {
      progresLineStartValue++;

      line.style.width = `${progresLineStartValue}%`;

      if (progresLineStartValue == progressLineEndValue) {
        clearInterval(preogressLineIntervel);
      }
    }, 10);
  });
})();

// testimonialsation function
(function testimonialsation() {
  const testimonials = [
    {
      content:
        "Zahan helped out spontaneously when a project got delayed. he managed to solve the task very efficiently and professional. I am looking forward to work with him on future tasks.",
      name: "Felix W.",
      stars: `<div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        </div>`,
      img: "img/felix.png",
    },
    {
      content:
        "Id leo in vitae turpis. Libero nunc consequat interdum varius. ",
      name: "John Doe",
      stars: `<div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        </div>`,
      img: "img/zihad.jpg",
    },
    {
      content:
        "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
      name: "John Doe",
      stars: `<div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        </div>`,
      img: "img/front-page.jpg",
    },
    {
      content:
        "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod.",
      name: "John Doe",
      stars: `<div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        </div>`,
      img: "img/front-page.jpg",
    },
    {
      content:
        "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
      name: "John Doe",
      stars: `<div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        </div>`,
      img: "img/front-page.jpg",
    },
    {
      content:
        "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
      name: "John Doe",
      stars: `<div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        </div>`,
      img: "img/front-page.jpg",
    },
  ].slice(0, 8);

  //   var template = `
  // 	<div class='chat-bubble' style='--rotation:{rotation}deg'>
  // 	  <i class='fa fa-quote-left'></i>
  // 	  <div class='content'>{content}</div>
  // 	  <div class='person'>
  // 		<img class='slider-img' src='{img}'>
  // 		<div class='name'>{name}</div>
  // 		<div class='role'>{stars}</div>
  // 	  </div>
  // 	</div>
  //   `;

  var template = `
      <div class='chat-bubble text-center' style='--rotation:{rotation}deg'>
      <div class='person'>
      <img class='slider-img' src='{img}'>
        <div> 
        <div class='name'>{name}</div>
        <div class='role'>{stars}</div>
      </div>
      </div>
      <i class='fa fa-quote-left'></i>
      <div class='content'>{content}</div>
    </div>
    `;

  function buildTemplate(template, data) {
    for (const key in data) {
      const reg = new RegExp(`{${key}}`, "ig");
      template = template.replace(reg, data[key]);
    }
    return template;
  }

  const rotationAmt = 360 / testimonials.length;
  let focused = 0;
  const tElem = document.querySelector(".testimonial");
  const testimonialsElem = document.querySelector(".testimonials");
  const navElem = document.querySelector(".navigation");

  function getFocusedIndex() {
    let n = focused;
    while (n < 0) n += testimonials.length;
    return n % testimonials.length;
  }

  const radius = 400 / (2 * Math.sin(Math.PI / testimonials.length));
  const distToEdge = Math.round(Math.sqrt(radius ** 2 - 200 ** 2) + 30);
  testimonialsElem.style.setProperty("--distance", distToEdge + "px");

  testimonials.forEach((t, i) => {
    const elem = buildTemplate(template, {
      ...t,
      rotation: Math.round(i * rotationAmt),
    });
    testimonialsElem.innerHTML += elem;

    const navBtn = document.createElement("div");
    navBtn.classList.add("nav-dot");
    navBtn.addEventListener("click", () => {
      select(i);
    });
    navElem.appendChild(navBtn);
  });

  let timeout;
  function update() {
    testimonialsElem.style.setProperty(
      "--rotation",
      -Math.round(focused * rotationAmt) + "deg"
    );
    const { children } = testimonialsElem;
    for (var i = 0; i < children.length; i++) {
      if (getFocusedIndex() === i) {
        children[i].style.setProperty("filter", "blur(0)");
        navElem.children[i].classList.add("focused");
      } else {
        children[i].style.setProperty("filter", "blur(2px)");
        navElem.children[i].classList.remove("focused");
      }
    }
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      focused++;
      update();
    }, 5000);
  }
  function select(index) {
    const closest = index - getFocusedIndex();
    focused += closest;
    update();
  }
  update();

  document.querySelector(".arrow-right").addEventListener("click", () => {
    focused++;
    update();
  });

  document.querySelector(".arrow-left").addEventListener("click", () => {
    focused--;
    update();
  });
})();

//portfolio
const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("filter-item")) {
    //remove exsist active class
    filterContainer
      .querySelector(".portfolio-active")
      .classList.remove("portfolio-active");
    //add active class
    event.target.classList.add("portfolio-active");
    //image filter
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue)) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});

//////////////////
function togglePopup(idname) {
  document.getElementById(idname).classList.toggle("active");
}
