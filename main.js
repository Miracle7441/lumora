const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const projects = [
  { title: "Noir Loft Tribeca", type: "Residential", year: "2024", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800" },
  { title: "Hearth Restaurant", type: "Hospitality", year: "2023", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800" },
  { title: "Atelier Soma Offices", type: "Office", year: "2023", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
  { title: "Casa Maré Lisbon", type: "Residential", year: "2022", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" },
  { title: "Aesop Kyoto", type: "Hospitality", year: "2022", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800" },
  { title: "Studio Noma", type: "Office", year: "2021", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800" },
  { title: "Villa Orada", type: "Residential", year: "2021", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800" },
  { title: "The Loom Café", type: "Hospitality", year: "2020", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800" }
];

const grid = document.getElementById('projectsGrid');

function renderProjects(filter = "All") {
  if (!grid) return;
  grid.innerHTML = "";

  const filtered = filter === "All" ? projects : projects.filter(p => p.type === filter);

  filtered.forEach(p => {
    const card = document.createElement('div');
    card.className = 'feat-card';
    card.innerHTML = `
      <div class="feat-img" style="background:url('${p.img}') center/cover"></div>
      <div class="feat-body">
        <div class="feat-title">${p.title}</div>
        <p style="font-size:12px; color:#8A7F76; margin-top:4px;">${p.type} • ${p.year}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

renderProjects();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});


const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you! Your inquiry has been sent to hello@lumora.studio");
    form.reset();
  });
}