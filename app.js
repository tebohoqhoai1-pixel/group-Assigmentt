const FALLBACK_CATALOGUE = [
  {
    id: 1,
    title: "Blood & Water",
    region: "Africa",
    genre: "Drama / Mystery",
    year: 2020,
    duration: "4 Seasons",
    description: "A Cape Town teen transfers to a prestigious high school after suspecting a swimming star is her sister abducted at birth.",
    poster: "bloo n water.jpg",
    youtubeId: "27Fl-kfohok",
    youtubeUrl: "https://www.youtube.com/watch?v=27Fl-kfohok"
  },
  {
    id: 2,
    title: "Queen Sono",
    region: "Africa",
    genre: "Action / Thriller",
    year: 2020,
    duration: "1 Season",
    description: "A highly trained South African spy takes on her most dangerous mission while facing changing relationships in her personal life.",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    youtubeId: "w82p6-wA24M",
    youtubeUrl: "https://www.youtube.com/watch?v=w82p6-wA24M"
  },
  {
    id: 3,
    title: "Puss in Boots",
    region: "America",
    genre: "History / Drama",
    year: 2023,
    duration: "3 Season",
    description: "where the cats and other small animals are taking part.",
    poster: "https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    youtubeId: "7gV6M02T2t4",
    youtubeUrl: "https://youtu.be/1esRrwrmWzA?t=22https%3a%2f%2fwww.youtube.com%2fchannel%2fUCq0OueAsdxH6b8nyAspwViw&FORM=VAMGZC"
  },
  {
    id: 4,
    title: "Stranger Things",
    region: "America",
    genre: "Sci-Fi / Horror",
    year: 2016,
    duration: "4 Seasons",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and terrifying supernatural forces.",
    poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    youtubeId: "b9EkMc79ZSU",
    youtubeUrl: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
  },
  {
    id: 5,
    title: "The Last of Us",
    region: "America",
    genre: "Post-Apocalyptic / Drama",
    year: 2023,
    duration: "1 Season",
    description: "A hardened survivor takes charge of a 14-year-old girl who may be humanity's last hope across a ravaged America.",
    poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    youtubeId: "uLtkt8BonwM",
    youtubeUrl: "https://www.youtube.com/watch?v=uLtkt8BonwM"
  },
  {
    id: 6,
    title: "Breaking Bad",
    region: "America",
    genre: "Crime / Thriller",
    year: 2008,
    duration: "5 Seasons",
    description: "A chemistry teacher diagnosed with terminal cancer turns to manufacturing methamphetamine with a former student.",
    poster: "break bad.jpg",
    youtubeId: "HhesaQXLuRY",
    youtubeUrl: "https://www.youtube.com/watch?v=HhesaQXLuRY"
  },
  {
    id: 7,
    title: "Squid Game",
    region: "Korea",
    genre: "Thriller / Survival",
    year: 2021,
    duration: "2 Seasons",
    description: "Hundreds of cash-strapped players accept a strange invitation to compete in deadly versions of children's games.",
    poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    youtubeId: "oqxAJKy0ii4",
    youtubeUrl: "https://www.youtube.com/watch?v=oqxAJKy0ii4"
  },
  {
    id: 8,
    title: "All of Us Are Dead",
    region: "Korea",
    genre: "Horror / Action",
    year: 2022,
    duration: "1 Season",
    description: "Trapped students must fight their way out of their high school after it becomes ground zero for a zombie virus outbreak.",
    poster: "all of us are dead.jpg",
    youtubeId: "IN5TD4VRcSM",
    youtubeUrl: "https://www.youtube.com/channel/UCYreLg1n8SefcOtCcbsQZ1g"
  },
   {
    id: 9,
    title: "Shameless",
    region: "America",
    genre: "Comedy n Dram",
    year: 2022,
    duration: "2 Season",
    description: "This is the Franks Gallegers family and others enjoying themselves.",
    poster: "shameless.jpg",
    youtubeId: "dqP1GRBbR24",
    youtubeUrl: "https://www.youtube.com/watch?v=dqP1GRBbR24"
  },
   {
    id: 10,
    title: "All American",
    region: "America",
    genre: "Sport series",
    year: 2022,
    duration: "10 Season",
    description: " excitin Drama of teenagers in High School until College.",
    poster: "All American.jpg",
    youtubeId: "8O0o9bJ73ME",
    youtubeUrl: "https://www.youtube.com/watch?v=8O0o9bJ73ME"
  },
   {
    id: 11,
    title: "Bel-Air",
    region: "America",
    genre: "Sport drama",
    year: 2025,
    duration: "3 Season",
    description: "The boy who was ascaped from Asia to America and live with the wealthy family.",
    poster: "Bel-Air.jpg",
    youtubeId: "X8B6uJ1i1G4",
    youtubeUrl: "https://www.youtube.com/watch?v=X8B6uJ1i1G4"
  },
   {
    id: 12,
    title: "Mopheme",
    region: "Lesotho",
    genre: "Thrilled / drama",
    year: 2004,
    duration: "3 Season",
    description: "Exciting drama of mopheme .",
    poster: "mopheme.jpg",
    youtubeId: "rdnnDZNbmaw",
    youtubeUrl: "https://www.youtube.com/watch?v=rdnnDZNbmaw"
  },
   {
    id: 13,
    title: "Take her to the O😊🎶",
    region: "America",
    genre: "Music Video",
    year: 2020,
    duration: "From vol 3",
    description: "Chicago Legend.",
    poster: "king von.jpg",
    youtubeId: "hzt31eJTGxo&t=14s",
    youtubeUrl: "https://www.youtube.com/watch?v=hzt31eJTGxo&t=14s"
  },
   {
    id: 14,
    title: "Limkokwin University Lesotho",
    region: "Korea",
    genre: "Academic",
    year: 2022,
    duration: "Posts",
    description: "School events online.",
    poster: "limkoz.jpg",
    youtubeId: "xIaN4KxHg7g",
    youtubeUrl: "https://www.youtube.com/watch?v=xIaN4KxHg7g"
  },
];

let allSeries = [];
let myList = JSON.parse(localStorage.getItem("view_livestream_mylist")) || [];

const catalogueGrid = document.getElementById("catalogueGrid");
const myListGrid = document.getElementById("myListGrid");
const searchInput = document.getElementById("searchInput");
const regionFilter = document.getElementById("regionFilter");
const fetchStatusText = document.getElementById("fetchStatusText");
const listCountBadge = document.getElementById("listCountBadge");
const myListFeedback = document.getElementById("myListFeedback");

async function loadCatalogueData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("HTTP error " + response.status);
    allSeries = await response.json();
    fetchStatusText.innerHTML = `<i class="bi bi-check-circle-fill text-success me-2"></i>Loaded ${allSeries.length} international series via Fetch API (<code>data.json</code>).`;
  } catch (error) {
    allSeries = FALLBACK_CATALOGUE;
    fetchStatusText.innerHTML = `<i class="bi bi-shield-check text-warning me-2"></i>Loaded ${allSeries.length} series via local fallback dataset .`;
  }
  renderCatalogue(allSeries);
  renderMyList();
}

function renderCatalogue(items) {
  catalogueGrid.innerHTML = "";

  if (items.length === 0) {
    catalogueGrid.innerHTML = `<div class="col-12"><div class="alert alert-secondary">No series matched your search or region filter.</div></div>`;
    return;
  }

  items.forEach((series) => {
    const isSaved = myList.includes(series.id);
    const fallbackPoster = `https://placehold.co/400x600/181822/e57cd8?text=${encodeURIComponent(series.title)}`;

    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <article class="card custom-card series-card h-100">
        <div class="poster-wrapper">
          <span class="region-tag">${series.region}</span>
          <img src="${series.poster}" alt="${series.title} cover poster" onerror="this.onerror=null;this.src='${fallbackPoster}';" />
        </div>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold text-white mb-1">${series.title}</h5>
          <p class="small text-secondary mb-2">${series.genre} • ${series.year} • ${series.duration}</p>
          <p class="card-text small text-light-muted flex-grow-1">${series.description}</p>
          <div class="d-grid gap-2 mt-3">
            <button class="btn btn-brand btn-sm" onclick="openTrailerModal(${series.id})">
              <i class="bi bi-play-circle-fill me-1"></i> Watch Trailer
            </button>
            <div class="d-flex gap-2">
              <button class="btn btn-outline-light btn-sm flex-grow-1" onclick="toggleMyList(${series.id})">
                <i class="bi ${isSaved ? "bi-check-lg text-success" : "bi-plus-lg"}"></i>
                ${isSaved ? "Saved" : "My List"}
              </button>
              <a href="${series.youtubeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-danger btn-sm" title="Open on YouTube">
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    `;
    catalogueGrid.appendChild(col);
  });
}

function filterCatalogue() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedRegion = regionFilter.value;

  const filtered = allSeries.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.genre.toLowerCase().includes(query);
    const matchesRegion = selectedRegion === "All" || item.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  renderCatalogue(filtered);
}

searchInput.addEventListener("input", filterCatalogue);
regionFilter.addEventListener("change", filterCatalogue);

function openTrailerModal(seriesId) {
  const series = allSeries.find((s) => s.id === seriesId);
  if (!series) return;

  document.getElementById("modalTitle").textContent = series.title;
  document.getElementById("modalRegion").textContent = series.region;
  document.getElementById("modalGenre").textContent = series.genre;
  document.getElementById("modalYear").textContent = `${series.year} • ${series.duration}`;
  document.getElementById("modalDesc").textContent = series.description;
  document.getElementById("modalYoutubeExternal").href = series.youtubeUrl;

  const player = document.getElementById("youtubePlayer");
  player.src = `https://www.youtube.com/embed/${series.youtubeId}?autoplay=1`;

  const modalBtn = document.getElementById("modalWatchlistBtn");
  modalBtn.onclick = () => toggleMyList(series.id);

  const modalElement = document.getElementById("detailsModal");
  const bsModal = new bootstrap.Modal(modalElement);
  bsModal.show();

  modalElement.addEventListener(
    "hidden.bs.modal",
    () => {
      player.src = "";
    },
    { once: true }
  );
}

function toggleMyList(seriesId) {
  const series = allSeries.find((s) => s.id === seriesId);
  if (!series) return;

  if (myList.includes(seriesId)) {
    myList = myList.filter((id) => id !== seriesId);
    showListMessage(`Removed "${series.title}" from My List.`, "warning");
  } else {
    myList.push(seriesId);
    showListMessage(`Added "${series.title}" to My List!`, "success");
  }

  localStorage.setItem("view_livestream_mylist", JSON.stringify(myList));
  filterCatalogue();
  renderMyList();
}

function showListMessage(text, type) {
  myListFeedback.innerHTML = `<div class="alert alert-${type} py-2 small">${text}</div>`;
  setTimeout(() => {
    myListFeedback.innerHTML = "";
  }, 3000);
}

function renderMyList() {
  listCountBadge.textContent = myList.length;
  myListGrid.innerHTML = "";

  if (myList.length === 0) {
    myListGrid.innerHTML = `<div class="col-12"><p class="text-secondary">Your watchlist is currently empty. Click <strong>+ My List</strong> on any series above to save it.</p></div>`;
    return;
  }

  const savedSeries = allSeries.filter((s) => myList.includes(s.id));
  savedSeries.forEach((series) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
    col.innerHTML = `
      <div class="card custom-card p-3 h-100 d-flex flex-column justify-content-between">
        <div>
          <span class="badge brand-badge mb-2">${series.region}</span>
          <h6 class="fw-bold text-white">${series.title}</h6>
          <p class="small text-secondary mb-3">${series.genre} (${series.year})</p>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-brand btn-sm flex-grow-1" onclick="openTrailerModal(${series.id})">Play</button>
          <button class="btn btn-outline-danger btn-sm" onclick="toggleMyList(${series.id})">Remove</button>
        </div>
      </div>
    `;
    myListGrid.appendChild(col);
  });
}

document.getElementById("clearListBtn").addEventListener("click", () => {
  myList = [];
  localStorage.removeItem("view_livestream_mylist");
  filterCatalogue();
  renderMyList();
  showListMessage("Watchlist cleared.", "info");
});

document.getElementById("authForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const pin = document.getElementById("demoPasscode").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (name.length < 3 || !email.includes("@") || pin.length < 6) {
    feedback.innerHTML = `<div class="alert alert-danger py-2 small">Please enter a valid name (3+ chars), email, and 6+ character demo PIN.</div>`;
    return;
  }

  feedback.innerHTML = `<div class="alert alert-success py-2 small">Welcome to View Livestream, <strong>${name}</strong>! Demo session active (no credentials stored).</div>`;
  this.reset();
});

loadCatalogueData();