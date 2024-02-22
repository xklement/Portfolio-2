// import experiences from './workExperiences';

const experiences = [
  {
    name: "PM-SA",
    logo: "../../img/logos/logo_pmsa_g.png",
    date: "2018",
    position: "Web Developer",
    description: "Development and maintenance of web applications, business enabling to facilitate communication and monitoring of different teams.",
    tech: ["Php", "Js", "JQuery", "MySql"],
  },
  {
    name: "PM-SA",
    logo: "../../img/logos/logo_pmsa_g.png",
    date: "2021",
    position: "Web Developer",
    description: "Development and maintenance of web applications, business enabling to facilitate communication and monitoring of different teams.",
    tech: ["Php", "Js", "JQuery", "MySql"],
  },
  {
    name: "Memosya",
    logo: "../../img/logos/logo_memosya.png",
    date: "2023",
    position: "Web Developer",
    description: "Development of the Memosya application. Memosya is a mobile application and a website incorporating techniques developed in neuroeducation to learn more information more quickly and for longer periods of time.",
    tech: ["React", "Ruby on Rails", "PostgreSQL"],
  },
  {
    name: "Acensi",
    logo: "../../img/logos/logo_acensi.png",
    date: "Currently",
    position: "Web Developer",
    description: "Development and maintenance of web applications within the DSI.",
    tech: ["React", "NodeJS", "Electron", ".NET", "PostgreSQL"],
  },
];


const timelineContainer = document.getElementById("timeline-container");

function createCardHTML(experience) {
  const techBadges = experience.tech.map(tech => `<span class="badge">${tech}</span>`).join('');

  return `
    <div class="card-header">
      <h2>${experience.name}</h2>
      <img class="card-logo" src="${experience.logo}" alt="${experience.name} logo" />
    </div>
    <p>${experience.description}</p>
    <div class="tech-badges">
      ${techBadges}
    </div>
  `;
}

function applyCardAnimation(element, animationName) {
  element.style.animation = `${animationName} 1s ease forwards`;
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      const isLeft = target.classList.contains("left");

      if (entry.isIntersecting) {
        applyCardAnimation(
          target.firstChild,
          isLeft ? "fadeLeftIn" : "fadeRightIn"
        );
      } else {
        applyCardAnimation(
          target.firstChild,
          isLeft ? "fadeRightOut" : "fadeLeftOut"
        );
      }
    });
  },
  { threshold: 0.5 }
);

experiences.forEach((experience, index) => {
  const container = document.createElement("div");
  container.className = `container ${index % 2 === 0 ? "left" : "right"}`;

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";
  cardContent.innerHTML = createCardHTML(experience);

  container.appendChild(cardContent);
  observer.observe(container);
  timelineContainer.appendChild(container);
});
