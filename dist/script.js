const testimonials = [
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  },
  {
    content:
      "Id leo in vitae turpis. Libero nunc consequat interdum varius. Eget mauris pharetra et ultrices neque ornare aenean euismod. Donec ac odio tempor orci. Iaculis nunc sed augue lacus viverra vitae congue.",
    name: "John Doe",
    role: "CEO, ABC corp"
  }
].slice(0, 8);

var template = `
  <div class='chat-bubble' style='--rotation:{rotation}deg'>
    <i class='fa fa-quote-left'></i>
    <br>
    <div class='content'>{content}</div>
    <div class='person'>
      <img class='img' src='https://i.pravatar.cc/150?img=68'>
      <div class='name'>{name}</div>
      <div class='role'>{role}</div>
    </div>
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
    rotation: Math.round(i * rotationAmt)
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