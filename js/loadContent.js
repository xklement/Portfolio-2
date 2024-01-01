// import experiences from './workExperiences';

const experiences = [
  {
    name: "PM-SA",
    logo: "../../img/logo_pmsa_g.png",
    date: "2018",
    poste: "Developpeur Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />In urna neque, molestie vulputate consectetur venenatis, maximus vitae ex. Aenean euismod vulputate ligula",
    tech: ["test"],
  },
  {
    name: "PM-SA",
    logo: "../../img/logo_pmsa_g.png",
    date: "2021",
    poste: "Developpeur Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />In urna neque, molestie vulputate consectetur venenatis, maximus vitae ex. Aenean euismod vulputate ligula",
    tech: ["test"],
  },
  {
    name: "Memosya",
    logo: "../../img/logo_memosya.png",
    date: "2023",
    poste: "Developpeur Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />In urna neque, molestie vulputate consectetur venenatis, maximus vitae ex. Aenean euismod vulputate ligula",
    tech: ["test"],
  },
  {
    name: "Acensi",
    logo: "../../img/logo_acensi.png",
    date: "Currently",
    poste: "Developpeur Web",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />In urna neque, molestie vulputate consectetur venenatis, maximus vitae ex. Aenean euismod vulputate ligula",
    tech: ["test"],
  },
];

const timelineContainer = document.getElementById("timeline-container");

experiences.forEach((experience, index) => {
  const container = document.createElement("div");
  container.className = "container " + (index % 2 === 0 ? "left" : "right");

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  cardContent.innerHTML = `
        <div class="card-header">
          <h2>${experience.name}</h2>
          <img class="card-logo" src="${experience.logo}" alt="${experience.name} logo" />
        </div>
        <p>${experience.description}</p>
      `;

  container.appendChild(cardContent);
  timelineContainer.appendChild(container);
});
