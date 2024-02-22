const projects = [
    {
      name: "Acenstream",
      description: "Dynamic content broadcast management application for remote TV.",
      image: "../../img/raspberry.webp",
      link: "https://www.acensi.fr/page/accueil/",
      tech: ["React", "NodeJS", "Electron", "PostgreSQL"],
    },
    {
      name: "Syneryx",
      description: "Management tool for parks (licenses, users, devices, mailboxes, SMS).",
      image: "../../img/syneryx.webp",
      link: "https://www.acensi.fr/page/accueil/",
      tech: ["React", "NodeJS", "PostgreSQL"],
    },
    {
      name: "Memosya",
      description: "Web/mobile application for course review.",
      image: "../../img/memosya.webp",
      link: "https://www.memosia.fr/",
      tech: ["React", "React native", "Ruby on rails", "PostgreSQL"],
    },
    {
      name: "Arena",
      description: "Web tool for automating certain tasks based on customized scenarios.",
      image: "../../img/ARENA.webp",
      link: "https://github.com/xklement",
      tech: ["VueJS", "NodeJS", "Flutter", "MongoDB"],
    },
    {
      name: "Work About Game",
      description: "Unity 3D game.",
      image: "../../img/WAG.webp",
      link: "https://github.com/xklement",
      tech: ["Unity", "C#", "Blender", "Maya"],
    },
  ];

const carousel = document.getElementById("carousel");
const dotsContainer = document.querySelector(".dots-container");

// Generate carousel items and dots
projects.forEach((project, index) => {
  const item = document.createElement("div");
  const techBadges = project.tech
    .map((tech) => `<span class="badge">${tech}</span>`)
    .join("");
  item.classList.add("item");
  item.style.setProperty("--offset", index + 1);

  item.innerHTML = `
      <img class="card-image" src="${project.image}" alt="${project.name}">
      <div class="card-items-content">
        <h2 class="card-title">${project.name}</h2>
        <p class="card-description">${project.description}</p>
        <div class="tech-badges">
            ${techBadges}
        </div>
      </div>
      <div class="card-actions">
        <a href="${project.link}" class="btn-box">More</a>
      </div>
  `;
  carousel.appendChild(item);

  const dot = document.createElement("input");
  dot.type = "radio";
  dot.name = "position";
  dot.id = `position${index + 1}`;
  if (index === 0) {
    dot.checked = true;
  }
  dot.setAttribute("aria-label", `Position ${index + 1}`);
  dotsContainer.appendChild(dot);

  dot.addEventListener("change", () => {
    carousel.style.setProperty("--position", index + 1);
  });
});
