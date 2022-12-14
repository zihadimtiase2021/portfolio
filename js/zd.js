//Preloaader function
(function preloader() {
  const preloaader = document.getElementById("preaload-sation");

  window.addEventListener("load", () => {
    preloaader.style.display = "none";
  });
})();
//herosection

(function herosection() {
  let stars = document.getElementById("stars");
  let moon = document.getElementById("moon");
  let mountains_behind = document.getElementById("mountains_behind");
  let mountains_front = document.getElementById("mountains_front");
  let text = document.getElementById("text");
  let btn = document.getElementById("custom");
  let navbar = document.querySelector(".navbar");
  let sidebar = document.querySelector(".sidebar");
  let nouvil = document.querySelector(".nouvil");
  let gototop = document.querySelector(".gototop");

  window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    const sidebarHeight = sidebar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
      navbar.classList.add("navbar-bg");
    } else {
      navbar.classList.remove("navbar-bg");
    }
    if (scrollHeight > sidebarHeight) {
      sidebar.classList.add("navbar-bg");
    } else {
      sidebar.classList.remove("navbar-bg");
    }

    let value = window.scrollY;
    if (window.outerWidth > 768) {
      stars.style.left = value + 0.25 + "px";
    }
    moon.style.top = value * 3 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0 + "px";
    nouvil.style.fontSize = value + "px";

    if (scrollY >= 40) {
      nouvil.style.fontSize = 38 + "px";
      nouvil.style.position = "fixed";
      if (scrollY >= 470) {
        nouvil.style.display = "none";
      } else {
        nouvil.style.display = "block";
      }
    }
    btn.style.marginTop = value * 1.5 + "px";
    if (scrollHeight > 500) {
      gototop.classList.add("vissable");
    } else {
      gototop.classList.remove("vissable");
    }
  });
})();

//skillsation function
function skillsation() {
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
}

const fullBodyHeight = document.body.getBoundingClientRect().height;

const skillSectionHeight = document
  .getElementById("skill")
  .getBoundingClientRect().height;

const prH = document.getElementById("Portfolio").getBoundingClientRect().height;
const slH = document
  .getElementById("slidersation")
  .getBoundingClientRect().height;
const cntH = document.getElementById("Contact").getBoundingClientRect().height;

const bottomThreeSectionHeight = prH + slH + cntH;

const countedHeight =
  fullBodyHeight - skillSectionHeight - bottomThreeSectionHeight;

let called = false;
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= countedHeight - 200) {
    if (called) return;
    called = true;
    skillsation();
  }
});

// testimonialsation function
(function testimonialsation() {
  const testimonials = [
    {
      content:
        "Zihad helped out spontaneously when a project got delayed. he managed to solve the task very efficiently and professional. I am looking forward to work with him on future tasks.",
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
        " ZD is great to work with. He responds fairly quickly and is able to take a mockup and make it a mobile responsive reality. He is fast to support the work afterwards with change request. Highly recommend.",
      name: "Hunter T.",
      stars: `<div class="stars">
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
        </div>`,
      img: "img/hunter.webp",
    },
    {
      content:
        "Zihad is a fast working, reliable frontend developer with good problem-solving skills. Do not hasitate to work with him",
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

// contact bind with email
function sendMail() {
  let params = {
    from_name: document.getElementById("fullName").value,
    emial_id: document.getElementById("email_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_6khzk5b", "template_aj1dnwh", params)
    .then(function (res) {
      const vissable = document.querySelector(".emial-send");
      vissable.classList.add("vissable");
      // alert("success" + res.status);
    });
}

// validaattion
const form = document.getElementById("form");
const username = document.getElementById("fullName");
const email = document.getElementById("email_id");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("btn");

// give condition for output
submit.addEventListener("click", (e) => {
  e.preventDefault();

  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  checkValidation();

  if (
    !usernameValue ||
    !emailValue ||
    !subjectValue ||
    !messageValue ||
    !isEmail(emailValue)
  ) {
  } else {
    sendMail();
  }
});

// checking validation
function checkValidation() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const subjectValue = subject.value.trim();
  const messageValue = message.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Username cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (subjectValue === "") {
    setErrorFor(subject, "subject cant not blank");
  } else {
    setSuccessFor(subject);
  }

  if (messageValue === "") {
    setErrorFor(message, "message can not be blank");
  } else {
    setSuccessFor(message);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  console.log(small);
  formControl.className = "form-group error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-group";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
