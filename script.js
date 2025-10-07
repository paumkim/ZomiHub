const MEDIA_TYPES = {
  book: { label: "Book", shelfLabel: "Books", accent: "#CBA96E" },
  film: { label: "Film", shelfLabel: "Films", accent: "#EC6A5F" },
  tv: { label: "TV", shelfLabel: "TV", accent: "#6C80FF" },
  music: { label: "Music", shelfLabel: "Music", accent: "#3CBF8A" },
  article: { label: "Article", shelfLabel: "Articles", accent: "#9C6CFF" },
};

const CATALOG = [
  {
    id: "book-hearth",
    type: "book",
    title: "Stories by the Hearth",
    creator: "Anthology curated by Cin Khai",
    year: 2022,
    duration: "368 pages",
    summary:
      "A modern compilation of folktales collected from elders in Tedim, Tonzang, and Falam townships, presented with side-by-side translations.",
    tags: ["Folklore", "Language", "Family"],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "book-living-archives",
    type: "book",
    title: "Living Archives: Zomi Women in Their Own Words",
    creator: "Hnem Hil's oral history project",
    year: 2019,
    duration: "212 pages",
    summary:
      "Transcribed interviews with Zomi women across generations, highlighting leadership, family traditions, and migration stories.",
    tags: ["Oral History", "Women", "Diaspora"],
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "book-linguistic",
    type: "book",
    title: "Zomi Language Companion",
    creator: "Zomi Language Preservation Council",
    year: 2023,
    duration: "145 pages",
    summary:
      "Lesson plans and pronunciation guides for diaspora classrooms with QR codes linking to native speaker audio.",
    tags: ["Language", "Education"],
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "book-oral-proverbs",
    type: "book",
    title: "Proverbs of the Highlands",
    creator: "Curated by the Zomi Proverbs Circle",
    year: 2020,
    duration: "189 pages",
    summary:
      "Parallel language presentation of 420 beloved Zomi proverbs with annotations from elders across the region.",
    tags: ["Wisdom", "Language"],
    image:
      "https://images.unsplash.com/photo-1514894780887-121968d00567?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "film-mountain-songs",
    type: "film",
    title: "Mountain Songs of Resilience",
    creator: "Directed by Zam Mang",
    year: 2021,
    duration: "78 min",
    summary:
      "A documentary following musicians as they compose new festival music inspired by ancestral drum patterns.",
    tags: ["Music", "Festival", "Documentary"],
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "film-woven-paths",
    type: "film",
    title: "Woven Paths",
    creator: "Produced by Zomi Cultural Trust",
    year: 2020,
    duration: "96 min",
    summary:
      "An immersive film capturing loom weaving traditions, from preparing dyes to celebrating the finished textiles in village ceremonies.",
    tags: ["Art", "Weaving"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "film-harvest-harmony",
    type: "film",
    title: "Harvest Harmony",
    creator: "Festival of Seeds initiative",
    year: 2024,
    duration: "54 min",
    summary:
      "A seasonal look at Zomi agricultural rituals and communal feasts that accompany rice harvests in the highlands.",
    tags: ["Agriculture", "Festival"],
    image:
      "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "film-colors-of-homes",
    type: "film",
    title: "Colors of Home",
    creator: "Zomi Youth Filmmakers",
    year: 2018,
    duration: "64 min",
    summary:
      "Portraits of Zomi artists who paint murals documenting migration, belonging, and intergenerational bonds.",
    tags: ["Art", "Diaspora"],
    image:
      "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "tv-diaspora-journal",
    type: "tv",
    title: "Diaspora Journal",
    creator: "ZomiHub Studios",
    year: 2023,
    duration: "Season 2",
    summary:
      "A television series interviewing Zomi families across the globe about how they keep cultural traditions alive.",
    tags: ["Interview", "Diaspora"],
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "tv-mountain-classroom",
    type: "tv",
    title: "Mountain Classroom",
    creator: "Hosted by Nuam Bawi",
    year: 2022,
    duration: "Season 1",
    summary:
      "An educational TV program teaching Zomi language and geography through animated storytelling and field trips.",
    tags: ["Education", "Language"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "tv-culinary-trails",
    type: "tv",
    title: "Culinary Trails",
    creator: "Chef Van Lian",
    year: 2024,
    duration: "Season 3",
    summary:
      "Each episode explores Zomi cuisine with guest cooks, highlighting locally grown ingredients and festive dishes.",
    tags: ["Cuisine", "Lifestyle"],
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "tv-festival-chronicles",
    type: "tv",
    title: "Festival Chronicles",
    creator: "Broadcast Collective",
    year: 2019,
    duration: "Season 4",
    summary:
      "Coverage of annual Zomi festivals with live performances, elder interviews, and behind-the-scenes preparations.",
    tags: ["Festival", "Culture"],
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=640&q=80",
  },
  {
    id: "music-hills-chorus",
    type: "music",
    title: "Chorus of the Hills",
    creator: "Falam Youth Choir",
    year: 2021,
    duration: "12 tracks",
    summary:
      "A choral album blending traditional harmonies with contemporary arrangements recorded live at community gatherings.",
    tags: ["Choir", "Live"],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "music-pulse-of-chins",
    type: "music",
    title: "Pulse of the Chins",
    creator: "DJ Mang Tual",
    year: 2020,
    duration: "9 tracks",
    summary:
      "Electronic remixes of ceremonial drum rhythms designed for dance gatherings and cultural festivals abroad.",
    tags: ["Electronic", "Festival"],
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "music-lullabies",
    type: "music",
    title: "Lullabies Across Generations",
    creator: "Lenchi & Family",
    year: 2018,
    duration: "15 tracks",
    summary:
      "A gentle collection of bedtime songs recorded with grandparents and grandchildren in home studios.",
    tags: ["Family", "Tradition"],
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "music-strings-of-home",
    type: "music",
    title: "Strings of Home",
    creator: "Zophei Ensemble",
    year: 2022,
    duration: "11 tracks",
    summary:
      "Instrumental recordings featuring bamboo zithers, flutes, and percussion used in traditional ceremonies.",
    tags: ["Instrumental", "Tradition"],
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "article-oral-histories",
    type: "article",
    title: "Archiving Oral Histories with Care",
    creator: "Zomi Research Collective",
    year: 2023,
    duration: "17 min read",
    summary:
      "Best practices for recording, translating, and cataloging oral histories in collaboration with elders and community leaders.",
    tags: ["Research", "Oral History"],
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "article-diaspora-roots",
    type: "article",
    title: "Diaspora Roots: Mapping Zomi Migration",
    creator: "K. Tuan Boi",
    year: 2022,
    duration: "12 min read",
    summary:
      "An interactive essay tracing key migration waves and the cultural centers that emerged in each region.",
    tags: ["Diaspora", "History"],
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=480&q=80",
  },
  {
    id: "article-heritage-cuisine",
    type: "article",
    title: "Heritage Cuisine for Modern Kitchens",
    creator: "Chef Pawlian",
    year: 2021,
    duration: "9 min read",
    summary:
      "A culinary primer that adapts ceremonial dishes for small apartments while keeping ancestral flavors intact.",
    tags: ["Cuisine", "Lifestyle"],
    image:
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=480&q=80",
  },
];

const CURATOR_SPOTLIGHTS = {
  all: {
    name: "The Cultural Council",
    note: "A rotating panel featuring educators, historians, and artists sharing their must-watch picks each month.",
  },
  book: {
    name: "Nu Thang (Literary Steward)",
    note: "Nu Thang digitizes rare manuscripts and pairs them with contemporary fiction to show how stories evolve.",
  },
  film: {
    name: "Van Zam (Documentary Filmmaker)",
    note: "Van Zam curates films that capture environmental stewardship and festival life across the Chin Hills.",
  },
  tv: {
    name: "Tuan Mawi (Broadcast Producer)",
    note: "Tuan highlights episodic programs that are perfect for family watch nights and classroom screenings.",
  },
  music: {
    name: "Lenchi (Community DJ)",
    note: "Lenchi blends archival recordings with contemporary artists to create playlists for every celebration.",
  },
  article: {
    name: "Dr. Hang (Cultural Researcher)",
    note: "Dr. Hang surfaces research and essays that provide deeper context for Zomi history and policy.",
  },
};

const STORAGE_KEYS = {
  library: "zomihub-library-state",
  downloads: "zomihub-download-queue",
  following: "zomihub-following",
};

const appState = {
  library: loadLibrary(),
  downloads: loadDownloads(),
  following: loadFollowing(),
  modalItemId: null,
};

const collectionInstances = [];
const libraryInstances = [];
const downloadInstances = [];

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "home";

  initGlobalChrome(page);
  initCollectionBrowsers();
  initLibraryShelves();
  initDownloadCenters();
  initTimeline();
  initStorySwitchers();

  if (page === "home") {
    initHomeHighlights();
  }
});

function loadLibrary() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.library);
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultLibraryState(), ...parsed };
    }
  } catch (error) {
    console.warn("Unable to load library from storage", error);
  }
  return defaultLibraryState();
}

function loadDownloads() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.downloads);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.warn("Unable to load downloads from storage", error);
  }
  return [];
}

function loadFollowing() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.following);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.warn("Unable to load followed curators", error);
  }
  return [];
}

function defaultLibraryState() {
  return {
    book: [],
    film: [],
    tv: [],
    music: [],
    article: [],
  };
}

function saveLibrary() {
  localStorage.setItem(STORAGE_KEYS.library, JSON.stringify(appState.library));
}

function saveDownloads() {
  localStorage.setItem(STORAGE_KEYS.downloads, JSON.stringify(appState.downloads));
}

function saveFollowing() {
  localStorage.setItem(STORAGE_KEYS.following, JSON.stringify(appState.following));
}

function initGlobalChrome(page) {
  initNavigation(page);
  initAccountPanel();
  initModal();
  initToast();
}

function initNavigation(page) {
  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.querySelector(".primary-nav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      primaryNav.classList.toggle("open");
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        primaryNav.classList.remove("open");
      });
    });
  }

  const navLinks = document.querySelectorAll("[data-nav]");
  navLinks.forEach((link) => {
    if (link.dataset.nav === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}

function initAccountPanel() {
  const accountPanel = document.getElementById("accountPanel");
  const signInButton = document.getElementById("signInButton");
  const closeAccountPanel = document.getElementById("closeAccountPanel");
  const createAccountButton = document.getElementById("createAccount");
  const accountForm = document.querySelector(".account-form");

  if (!accountPanel) return;

  const openPanel = () => {
    accountPanel.setAttribute("aria-hidden", "false");
    accountPanel.classList.add("open");
  };

  const closePanel = () => {
    accountPanel.setAttribute("aria-hidden", "true");
    accountPanel.classList.remove("open");
  };

  signInButton?.addEventListener("click", openPanel);
  closeAccountPanel?.addEventListener("click", closePanel);
  accountPanel.addEventListener("click", (event) => {
    if (event.target === accountPanel) closePanel();
  });
  createAccountButton?.addEventListener("click", () => {
    showToast("Account creation will open registration flow soon.");
  });
  accountForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Demo only – authentication will be connected later.");
  });

  const downloadCenterButton = document.getElementById("downloadCenter");
  downloadCenterButton?.addEventListener("click", (event) => {
    if (downloadCenterButton.tagName === "BUTTON") {
      event.preventDefault();
      window.location.href = "downloads.html";
    }
  });
}

let modalElements = null;

function initModal() {
  const modal = document.getElementById("itemModal");
  if (!modal) return;

  modalElements = {
    modal,
    modalTitle: document.getElementById("modalTitle"),
    modalType: modal.querySelector(".modal__type"),
    modalMeta: modal.querySelector(".modal__meta"),
    modalDescription: modal.querySelector(".modal__description"),
    modalMedia: modal.querySelector(".modal__media"),
    modalSaveBtn: document.getElementById("modalSave"),
    modalDownloadBtn: document.getElementById("modalDownload"),
    closeModalBtn: document.getElementById("closeModal"),
  };

  modalElements.closeModalBtn?.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  modalElements.modalSaveBtn?.addEventListener("click", () => {
    if (!appState.modalItemId) return;
    toggleLibraryItem(appState.modalItemId);
  });

  modalElements.modalDownloadBtn?.addEventListener("click", () => {
    if (!appState.modalItemId) return;
    const item = getItem(appState.modalItemId);
    simulateDownload(item);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

let toastElement = null;

function initToast() {
  toastElement = document.getElementById("toast");
}

function initCollectionBrowsers() {
  const sections = document.querySelectorAll('[data-component="collection-browser"]');
  sections.forEach((section) => {
    const instance = createCollectionBrowser(section);
    if (instance) {
      collectionInstances.push(instance);
    }
  });
}
function createCollectionBrowser(section) {
  const resultsGrid = section.querySelector(".results-grid");
  if (!resultsGrid) return null;

  const defaultCategory = section.dataset.defaultCategory || "all";
  const allowed = section.dataset.categories
    ? section.dataset.categories.split(",").map((entry) => entry.trim())
    : null;

  const state = {
    activeCategory: defaultCategory,
    searchTerm: "",
  };

  const tabButtons = Array.from(section.querySelectorAll(".tab-btn"));
  const searchInput = section.querySelector("[data-role=\"search\"]") || section.querySelector("input[type=\"search\"]");
  const curatorName = section.querySelector(".spotlight__name");
  const curatorNote = section.querySelector(".spotlight__note");
  const followCuratorBtn = section.querySelector('[data-role="follow-curator"]');

  if (allowed && tabButtons.length) {
    tabButtons.forEach((button) => {
      const category = button.dataset.category;
      if (category !== "all" && !allowed.includes(category)) {
        button.remove();
      }
    });
  }

  function setActiveCategory(category) {
    state.activeCategory = category;
    tabButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.category === category);
    });
    updateSpotlight();
    renderCatalog();
  }

  function updateSpotlight() {
    if (!curatorName || !curatorNote) return;
    const spotlight = CURATOR_SPOTLIGHTS[state.activeCategory] || CURATOR_SPOTLIGHTS.all;
    curatorName.textContent = spotlight.name;
    curatorNote.textContent = spotlight.note;
  }

  function renderCatalog() {
    const filtered = CATALOG.filter((item) => {
      const matchesCategory =
        state.activeCategory === "all" || item.type === state.activeCategory;
      const matchesAllowed = !allowed || allowed.includes(item.type);
      const matchesSearch = state.searchTerm
        ? [item.title, item.creator, ...(item.tags || [])]
            .join(" ")
            .toLowerCase()
            .includes(state.searchTerm.toLowerCase())
        : true;
      return matchesCategory && matchesAllowed && matchesSearch;
    });

    resultsGrid.innerHTML = "";

    if (!filtered.length) {
      const empty = document.createElement("div");
      empty.className = "empty-state";
      empty.innerHTML = `
        <h3>No results found</h3>
        <p>Try adjusting your filters or searching for another title.</p>
      `;
      resultsGrid.append(empty);
      return;
    }

    filtered.forEach((item) => {
      resultsGrid.append(createMediaCard(item));
    });
  }

  resultsGrid.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (!action) return;
    const id = event.target.dataset.id;
    const item = getItem(id);

    if (!item) return;

    if (action === "toggle") {
      toggleLibraryItem(id);
    } else if (action === "details") {
      openModal(item);
    } else if (action === "download") {
      simulateDownload(item);
    }
  });

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveCategory(button.dataset.category);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.searchTerm = event.target.value.trim();
      renderCatalog();
    });
  }

  if (followCuratorBtn) {
    followCuratorBtn.addEventListener("click", () => {
      const active = state.activeCategory;
      if (!appState.following.includes(active)) {
        appState.following.push(active);
        saveFollowing();
      }
      const spotlight = CURATOR_SPOTLIGHTS[active] || CURATOR_SPOTLIGHTS.all;
      showToast(`You will now receive updates from ${spotlight.name}.`);
    });
  }

  setActiveCategory(defaultCategory);
  updateSpotlight();
  renderCatalog();

  return {
    refresh: renderCatalog,
  };
}

function initLibraryShelves() {
  const sections = document.querySelectorAll('[data-component="library-shelves"]');
  sections.forEach((section) => {
    const instance = createLibrarySection(section);
    if (instance) {
      libraryInstances.push(instance);
    }
  });
  updateLibrarySummaries();
}

function createLibrarySection(section) {
  const clearButton = section.querySelector('[data-action="clear-library"]');
  const emptyState = section.querySelector('[data-role="empty-library"]');
  const shelves = Array.from(section.querySelectorAll(".shelf"));

  if (!shelves.length) return null;

  section.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (!action) return;
    const id = event.target.dataset.id;
    const item = getItem(id);

    if (action === "remove") {
      toggleLibraryItem(id);
    } else if (action === "download" && item) {
      simulateDownload(item);
    }
  });

  clearButton?.addEventListener("click", () => {
    clearLibrary();
  });

  function render() {
    let totalSaved = 0;

    shelves.forEach((shelf) => {
      const type = shelf.dataset.shelf;
      const content = shelf.querySelector(".shelf__content");
      if (!content) return;

      const items = (appState.library[type] || []).map(getItem).filter(Boolean);
      content.innerHTML = "";

      if (!items.length) {
        const empty = document.createElement("p");
        empty.className = "shelf__empty";
        empty.textContent = `No ${MEDIA_TYPES[type].shelfLabel.toLowerCase()} saved yet.`;
        content.append(empty);
      } else {
        totalSaved += items.length;
        items.forEach((item) => {
          content.append(createShelfItem(item));
        });
      }
    });

    if (emptyState) {
      emptyState.hidden = totalSaved > 0;
    }
  }

  render();
  return { render };
}

function initDownloadCenters() {
  const sections = document.querySelectorAll('[data-component="download-center"]');
  sections.forEach((section) => {
    const instance = createDownloadCenter(section);
    if (instance) {
      downloadInstances.push(instance);
    }
  });
}

function createDownloadCenter(section) {
  const list = section.querySelector('[data-role="download-list"]');
  if (!list) return null;

  const emptyState = section.querySelector('[data-role="download-empty"]');
  const clearButton = section.querySelector('[data-action="clear-downloads"]');

  section.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (!action) return;
    const id = event.target.dataset.id;

    if (action === "remove-download") {
      appState.downloads = appState.downloads.filter((entry) => entry.id !== id);
      saveDownloads();
      render();
      showToast("Removed from downloads.");
    } else if (action === "mark-complete") {
      const entry = appState.downloads.find((item) => item.id === id);
      if (entry) {
        entry.status = "Saved offline";
        entry.updatedAt = Date.now();
        saveDownloads();
        render();
        showToast("Marked as saved offline.");
      }
    }
  });

  clearButton?.addEventListener("click", () => {
    appState.downloads = [];
    saveDownloads();
    render();
    showToast("Download list cleared.");
  });

  function render() {
    list.innerHTML = "";

    if (!appState.downloads.length) {
      if (emptyState) emptyState.hidden = false;
      return;
    }

    if (emptyState) emptyState.hidden = true;

    const sorted = [...appState.downloads].sort((a, b) => b.updatedAt - a.updatedAt);

    sorted.forEach((entry) => {
      const item = getItem(entry.id);
      if (!item) return;
      list.append(createDownloadRow(item, entry));
    });
  }

  render();
  return { render };
}

function initTimeline() {
  const timeline = document.querySelector("[data-component=\"timeline\"]");
  if (!timeline) return;

  const stages = timeline.querySelectorAll("button[data-stage]");
  const panels = timeline.querySelectorAll("[data-stage-panel]");

  stages.forEach((stage) => {
    stage.addEventListener("click", () => {
      const target = stage.dataset.stage;
      stages.forEach((btn) => btn.classList.toggle("active", btn === stage));
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.stagePanel !== target;
      });
    });
  });

  const first = stages[0];
  if (first) first.click();
}

function initStorySwitchers() {
  document.querySelectorAll("[data-component=\"story-switcher\"]").forEach((component) => {
    const buttons = component.querySelectorAll("button[data-story]");
    const stories = component.querySelectorAll("[data-story-panel]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.story;
        buttons.forEach((btn) => btn.classList.toggle("active", btn === button));
        stories.forEach((panel) => {
          panel.hidden = panel.dataset.storyPanel !== target;
        });
      });
    });

    const first = buttons[0];
    if (first) first.click();
  });
}

function initHomeHighlights() {
  const learnMoreBtn = document.getElementById("learnMore");
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      const target = document.getElementById("features");
      target?.scrollIntoView({ behavior: "smooth" });
    });
  }

  document.querySelectorAll('[data-open-id]').forEach((button) => {
    button.addEventListener("click", () => {
      const item = getItem(button.dataset.openId);
      if (item) {
        openModal(item);
      }
    });
  });
}

function renderAllLibraries() {
  libraryInstances.forEach((instance) => instance.render());
  updateLibrarySummaries();
}

function updateLibrarySummaries() {
  document.querySelectorAll('[data-library-count]').forEach((node) => {
    const type = node.dataset.libraryCount;
    if (type === "total") {
      const total = Object.values(appState.library).reduce((sum, items) => sum + items.length, 0);
      node.textContent = total;
    } else if (appState.library[type]) {
      node.textContent = appState.library[type].length;
    }
  });

  document.querySelectorAll('[data-library-empty]').forEach((node) => {
    const type = node.dataset.libraryEmpty;
    if (type === "total") {
      const total = Object.values(appState.library).every((items) => items.length === 0);
      node.hidden = total ? false : true;
    } else if (appState.library[type]) {
      node.hidden = appState.library[type].length !== 0;
    }
  });
}

function refreshCollectionBrowsers() {
  collectionInstances.forEach((instance) => instance.refresh());
}

function refreshDownloadCenters() {
  downloadInstances.forEach((instance) => instance.render());
}

function isSaved(id) {
  return Object.values(appState.library).some((entries) => entries.includes(id));
}

function getItem(id) {
  return CATALOG.find((item) => item.id === id);
}

function toggleLibraryItem(id) {
  const item = getItem(id);
  if (!item) return;

  const list = appState.library[item.type];
  const index = list.indexOf(id);

  if (index === -1) {
    list.push(id);
    showToast(`${item.title} added to your ${MEDIA_TYPES[item.type].shelfLabel.toLowerCase()}.`);
  } else {
    list.splice(index, 1);
    showToast(`${item.title} removed from your library.`);
  }

  saveLibrary();
  refreshCollectionBrowsers();
  renderAllLibraries();
  updateModalButtons();
}

function clearLibrary() {
  appState.library = defaultLibraryState();
  saveLibrary();
  refreshCollectionBrowsers();
  renderAllLibraries();
  showToast("Library cleared.");
  updateModalButtons();
}

function openModal(item) {
  if (!modalElements || !item) return;
  appState.modalItemId = item.id;
  modalElements.modalTitle.textContent = item.title;
  modalElements.modalType.textContent = MEDIA_TYPES[item.type].label;
  modalElements.modalMeta.textContent = `${item.creator} • ${item.year} • ${item.duration}`;
  modalElements.modalDescription.textContent = item.summary;
  modalElements.modalMedia.style.backgroundImage = `url('${item.image}')`;
  modalElements.modal.setAttribute("aria-hidden", "false");
  modalElements.modal.classList.add("open");
  document.body.classList.add("modal-open");
  updateModalButtons();
}

function closeModal() {
  if (!modalElements) return;
  modalElements.modal.setAttribute("aria-hidden", "true");
  modalElements.modal.classList.remove("open");
  document.body.classList.remove("modal-open");
  appState.modalItemId = null;
}

function updateModalButtons() {
  if (!modalElements || !appState.modalItemId) return;
  const saved = isSaved(appState.modalItemId);
  modalElements.modalSaveBtn.textContent = saved ? "Remove from library" : "Add to library";
  modalElements.modalSaveBtn.classList.toggle("ghost", saved);
  modalElements.modalSaveBtn.classList.toggle("primary", !saved);
}

function simulateDownload(item) {
  if (!item) return;

  const existing = appState.downloads.find((entry) => entry.id === item.id);
  const timestamp = Date.now();

  if (existing) {
    existing.status = "Ready to download";
    existing.updatedAt = timestamp;
  } else {
    appState.downloads.unshift({
      id: item.id,
      status: "Ready to download",
      updatedAt: timestamp,
    });
  }

  saveDownloads();
  refreshDownloadCenters();
  showToast(`Preparing download: ${item.title}`);
}

function createMediaCard(item) {
  const card = document.createElement("article");
  card.className = `media-card media-card--${item.type}`;
  const typeInfo = MEDIA_TYPES[item.type];
  const saved = isSaved(item.id);

  card.innerHTML = `
    <div class="media-card__visual" style="background-image: url('${item.image}')" aria-hidden="true"></div>
    <div class="media-card__body">
      <span class="media-card__type" style="color: ${typeInfo.accent}">${typeInfo.label}</span>
      <h3>${item.title}</h3>
      <p class="media-card__summary">${item.summary}</p>
      <p class="media-card__meta">${item.creator} • ${item.year} • ${item.duration}</p>
      <div class="media-card__tags">
        ${item.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <div class="media-card__actions">
        <button class="btn small ${saved ? "ghost" : "primary"}" data-action="toggle" data-id="${item.id}">
          ${saved ? "In library" : "Add to library"}
        </button>
        <button class="btn small secondary" data-action="details" data-id="${item.id}">Details</button>
        <button class="btn small ghost" data-action="download" data-id="${item.id}">Download</button>
      </div>
    </div>
  `;

  return card;
}

function createShelfItem(item) {
  const container = document.createElement("div");
  container.className = `shelf-item shelf-item--${item.type}`;
  const typeInfo = MEDIA_TYPES[item.type];

  if (item.type === "film" || item.type === "tv") {
    container.innerHTML = `
      <div class="shelf-item__visual" style="background-image: url('${item.image}')"></div>
      <div class="shelf-item__body">
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
        <p class="shelf-item__meta">${item.creator} • ${item.year} • ${item.duration}</p>
        <div class="shelf-item__actions">
          <button class="btn small ghost" data-action="remove" data-id="${item.id}">Remove</button>
          <button class="btn small secondary" data-action="download" data-id="${item.id}">Download</button>
        </div>
      </div>
    `;
  } else if (item.type === "music") {
    container.innerHTML = `
      <div class="music-thumb" style="background-image: url('${item.image}')"></div>
      <div class="music-info">
        <div>
          <h4>${item.title}</h4>
          <p>${item.creator}</p>
        </div>
        <span>${item.duration}</span>
        <div class="shelf-item__actions">
          <button class="btn small ghost" data-action="remove" data-id="${item.id}">Remove</button>
          <button class="btn small secondary" data-action="download" data-id="${item.id}">Download</button>
        </div>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="book-spine" style="background-image: url('${item.image}')"></div>
      <div class="book-details">
        <h4>${item.title}</h4>
        <p>${item.creator}</p>
        <span>${item.year} • ${item.duration}</span>
      </div>
      <div class="shelf-item__actions">
        <button class="btn small ghost" data-action="remove" data-id="${item.id}">Remove</button>
        <button class="btn small secondary" data-action="download" data-id="${item.id}">Download</button>
      </div>
    `;
  }

  container.dataset.id = item.id;
  container.dataset.type = item.type;
  container.style.setProperty("--accent", typeInfo.accent);
  return container;
}

function createDownloadRow(item, entry) {
  const row = document.createElement("li");
  row.className = "download-row";
  row.innerHTML = `
    <div class="download-row__thumb" style="background-image: url('${item.image}')"></div>
    <div class="download-row__body">
      <span class="download-row__type" style="color: ${MEDIA_TYPES[item.type].accent}">${MEDIA_TYPES[item.type].label}</span>
      <h4>${item.title}</h4>
      <p>${item.creator} • ${item.year}</p>
    </div>
    <div class="download-row__meta">
      <span class="download-row__status">${entry.status}</span>
      <time>${new Date(entry.updatedAt).toLocaleString()}</time>
    </div>
    <div class="download-row__actions">
      <button class="btn small secondary" data-action="mark-complete" data-id="${item.id}">Mark saved</button>
      <button class="btn small ghost" data-action="remove-download" data-id="${item.id}">Remove</button>
    </div>
  `;
  return row;
}

function showToast(message) {
  if (!toastElement) return;
  toastElement.textContent = message;
  toastElement.classList.add("visible");
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toastElement.classList.remove("visible");
  }, 2800);
}
