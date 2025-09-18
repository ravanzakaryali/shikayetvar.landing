const box = document.querySelector(".section-faq-bottom");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let interval;

let messageArray = [
  [
    {
      role: "user",
      text: "Platforma pulsuzdurmu?",
    },
    {
      role: "customer",
      text: "Bəli, tamamilə pulsuz. Qeydiyyat et, şikayət yaz, izlə.",
    },
  ],
  [
    {
      role: "user",
      text: "Şirkətlər cavab verirmi?",
    },
    {
      role: "customer",
      text: "Hal-hazırda bunun üçün işlər görülür şirkətlərlə əlaqə saxlanılır.",
    },
  ],
  [
    {
      role: "user",
      text: "Məlumatlarım təhlükəsizdirmi?",
    },
    {
      role: "customer",
      text: "Sadəcə ad və soyad görünür. Digər məlumatlar gizli saxlanılır",
    },
  ],
  [
    {
      role: "user",
      text: "Hansı şirkətlərə şikayət yaza bilərəm?",
    },
    {
      role: "customer",
      text: "Bütün böyük şirkətlər və xidmət provayderləri daxildir.",
    },
  ],
  [
    {
      role: "user",
      text: "Şikayətimi silə bilərəm?",
    },
    {
      role: "customer",
      text: "Bəli, istədiyiniz vaxt şikayətinizi silə bilərsiniz.",
    },
  ],
  [
    {
      role: "user",
      text: "Hardan yaza bilərəm?",
    },
    {
      role: "customer",
      text: "Mobil tətbiqdən yaza bilərsiniz. iOS və Android üçün tətbiq mövcuddur.",
    },
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
    }, 5000);
  }
}
//---------------------------------------------------------

let showCase = document.querySelector(".section-features-showcase-area");
let partnersData = [
  "Şikayət yaz ✍️",
  "Səs topla 🗳️", 
  "Status izlə 🔄",
  "Cavab al 💬",
  "Qiymətləndir ⭐",
];
let usersData = [
  "Panel idarə et 🗂️",
  "Sürətli həll ⚡",
  "Şablon cavablar 📝",
  "Analitika 📊",
  "Komanda idarəsi 🔐",
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

//------------------------------------------

const sectionTabs = document.querySelector(".section-tabs");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top; 
  const windowHeight = window.innerHeight;

  if (footerTop <= windowHeight) {
    sectionTabs.style.bottom = "22rem";
  } else {
    sectionTabs.style.position = "fixed";
    sectionTabs.style.bottom = "5%";
    sectionTabs.style.left = "50%";
    sectionTabs.style.transform =  "translate(-50%, 0)";
  }
});

