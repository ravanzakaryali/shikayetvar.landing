const box = document.querySelector(".section-faq-bottom");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let interval;

let messageArray = [
  [
    {
      role: "customer",
      text: "1 It’s a brand new AI-powered fan donation and engagement tool that can boost your earnings like never before.",
    },
    {
      role: "customer",
      text: "Yes, NeoWave is 100% free to use. We only take a small cut to cover operational expenses and our processing costs.",
    },
    { role: "user", text: "Is it free?" },
  ],
  [
    {
      role: "customer",
      text: "2 It’s a brand new AI-powered fan donation and engagement tool that can boost your earnings like never before.",
    },
    {
      role: "customer",
      text: "Yes, NeoWave is 100% free to use. We only take a small cut to cover operational expenses and our processing costs.",
    },
    { role: "user", text: "Is it free?" },
  ],
  [
    {
      role: "customer",
      text: "3 It’s a brand new AI-powered fan donation and engagement tool that can boost your earnings like never before.",
    },
    {
      role: "user",
      text: "Yes, NeoWave is 100% free to use. We only take a small cut to cover operational expenses and our processing costs.",
    },
  ],
  [
    {
      role: "customer",
      text: " 4It’s a brand new AI-powered fan donation and engagement tool that can boost your earnings like never before.",
    },
    { role: "user", text: "lorem ipsum,hj nedfgt?" },
    { role: "customer", text: "yes" },
    { role: "user", text: "great" },
  ],
  [
    {
      role: "customer",
      text: "5 It’s a brand new AI-powered fan donation and engagement tool that can boost your earnings like never before.",
    },
    { role: "user", text: "lorem ipsum,hj nedfgt?" },
    { role: "customer", text: "yes" },
    { role: "user", text: "great" },
  ],
];

let startIndex = 0;
let startArrayIndex = 0;
function handleWrite() {
  box.innerHTML = messageArray
    .map(
      (item) =>
        `
  <div class="section-faq-bottom-item">
    <div class="section-faq-bottom-item-message">
      ${item
        .map(
          (mes) =>
            `
          <p class="section-faq-bottom-item-message-${mes.role}">${mes.text}</p>
          `
        )
        .join("")}
    </div>
    <ul class="section-faq-bottom-item-tags">
      <span>#gizlilik</span>
      <span>#qeydiyyat</span>
    </ul>
  </div>
    `
    )
    .join("");
}
handleWrite();
function handleNewItem() {
  if (startArrayIndex == messageArray.length) {
    startArrayIndex = 0;
  }

  let newItem = document.createElement("div");
  newItem.className = "section-faq-bottom-item";
  newItem.innerHTML = `
    <div class="section-faq-bottom-item-message">
      ${messageArray[startArrayIndex]
        .map(
          (mes) => `
        <p class="section-faq-bottom-item-message-${mes.role}">${mes.text}</p>
      `
        )
        .join("")}
    </div>
    <ul class="section-faq-bottom-item-tags">
      <li>#gizlilik</li>
      <li>#qeydiyyat</li>
    </ul>
  `;
  box.append(newItem);
  startArrayIndex++;
}

handleInterval();
function handleCorusel() {
  handleInterval();
  let boxItem = document.querySelectorAll(".section-faq-bottom-item");
  startIndex++;
  if (!window.matchMedia("(max-width: 768px)")) {
    boxItem.forEach((item) => {
      item.style.transform = `translateX(calc(-${startIndex} * 100% ))`;
    });
    if (startIndex >= messageArray.length - 3) {
      handleNewItem(startArrayIndex);
    }
  } else {
    boxItem.forEach((item) => {
      item.style.transform = `translateX(calc(-${startIndex} * 100% - ${startIndex} * 4.9rem))`;
    });
    if (startIndex >= messageArray.length - 3) {
      handleNewItem(startArrayIndex);
    }
  }
}

let classIndex = 1;
function nextClass() {
  let items = document.querySelectorAll(".section-faq-bottom-item");
  items.forEach((item) => {
    item.classList.remove("active");
  });
  items[classIndex].classList.add("active");
  classIndex++;
}
nextClass();

function prevClass() {
  if (classIndex >= 3) {
    let items = document.querySelectorAll(".section-faq-bottom-item");
    items.forEach((item) => {
      item.classList.remove("active");
    });
    --classIndex;
    items[classIndex - 1].classList.add("active");
  }
}
nextBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  handleCorusel();
  nextClass();
});
prevBtn.addEventListener("click", () => {
  if (startIndex >= 1) {
    startIndex -= 2;
    clearInterval(interval);
    interval = null;
    handleCorusel();
    prevClass();
  }
});

function handleInterval() {
  if (!interval) {
    interval = setInterval(() => {
      handleCorusel();
      nextClass();
    }, 2000);
  }
}
//---------------------------------------------------------

let showCase = document.querySelector(".section-features-showcase-area");
let usersData = [
  "Event Creation 🎉",
  "Content Management 🪄",
  "Feedback and Surveys 💭",
  "Event Analytics 👀",
  "Ticketing 🎫",
];
let partnersData = [
  "Rəvan Creation 🎉",
  "Rəvan Management 🪄",
  "Rəvan and Surveys 💭",
  "Rəvan Analytics 👀",
  "Rəvan 🎫",
];

const tabSwitcherBtn = document.querySelectorAll(
  ".section-features-tab-switcher-btn"
);

featuresActive(usersData);

tabSwitcherBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabSwitcherBtn.forEach((b) => b.classList.remove("click-btn"));

    btn.classList.add("click-btn");

    if (btn.classList.contains("users-btn")) {
      featuresActive(partnersData);
    } else if (btn.classList.contains("partner-btn")) {
      featuresActive(usersData);
    }
  });
});

function featuresActive(data) {
  showCase.innerHTML = data
    .map(
      (item) => `
    <p class="section-features-showcase-message">
      ${item}
    </p>
  `
    )
    .join("");
}
