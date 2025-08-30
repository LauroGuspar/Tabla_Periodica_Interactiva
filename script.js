// === Mapa de posiciones (grid real) ===
const elementPositions = {
  1: { row: 1, col: 1 }, // H
  2: { row: 1, col: 18 }, // He

  3: { row: 2, col: 1 }, // Li
  4: { row: 2, col: 2 }, // Be
  5: { row: 2, col: 13 }, // B
  6: { row: 2, col: 14 }, // C
  7: { row: 2, col: 15 }, // N
  8: { row: 2, col: 16 }, // O
  9: { row: 2, col: 17 }, // F
  10: { row: 2, col: 18 }, // Ne

  11: { row: 3, col: 1 }, // Na
  12: { row: 3, col: 2 }, // Mg
  13: { row: 3, col: 13 }, // Al
  14: { row: 3, col: 14 }, // Si
  15: { row: 3, col: 15 }, // P
  16: { row: 3, col: 16 }, // S
  17: { row: 3, col: 17 }, // Cl
  18: { row: 3, col: 18 }, // Ar

  19: { row: 4, col: 1 }, // K
  20: { row: 4, col: 2 }, // Ca
  21: { row: 4, col: 3 }, // Sc
  22: { row: 4, col: 4 }, // Ti
  23: { row: 4, col: 5 }, // V
  24: { row: 4, col: 6 }, // Cr
  25: { row: 4, col: 7 }, // Mn
  26: { row: 4, col: 8 }, // Fe
  27: { row: 4, col: 9 }, // Co
  28: { row: 4, col: 10 }, // Ni
  29: { row: 4, col: 11 }, // Cu
  30: { row: 4, col: 12 }, // Zn
  31: { row: 4, col: 13 }, // Ga
  32: { row: 4, col: 14 }, // Ge
  33: { row: 4, col: 15 }, // As
  34: { row: 4, col: 16 }, // Se
  35: { row: 4, col: 17 }, // Br
  36: { row: 4, col: 18 }, // Kr

  37: { row: 5, col: 1 }, // Rb
  38: { row: 5, col: 2 }, // Sr
  39: { row: 5, col: 3 }, // Y
  40: { row: 5, col: 4 }, // Zr
  41: { row: 5, col: 5 }, // Nb
  42: { row: 5, col: 6 }, // Mo
  43: { row: 5, col: 7 }, // Tc
  44: { row: 5, col: 8 }, // Ru
  45: { row: 5, col: 9 }, // Rh
  46: { row: 5, col: 10 }, // Pd
  47: { row: 5, col: 11 }, // Ag
  48: { row: 5, col: 12 }, // Au
  49: { row: 5, col: 13 }, // Hg
  50: { row: 5, col: 14 }, // Tl
  51: { row: 5, col: 15 }, // Pb
  52: { row: 5, col: 16 }, // Bi
  53: { row: 5, col: 17 }, // Po
  54: { row: 5, col: 18 }, // At

  55: { row: 6, col: 1 }, // Cs
  56: { row: 6, col: 2 }, // Ba
  72: { row: 6, col: 4 }, // Hf
  73: { row: 6, col: 5 }, // Ta
  74: { row: 6, col: 6 }, // W
  75: { row: 6, col: 7 }, // Re
  76: { row: 6, col: 8 }, // Os
  77: { row: 6, col: 9 }, // Ir
  78: { row: 6, col: 10 }, // Pt
  79: { row: 6, col: 11 }, // Au
  80: { row: 6, col: 12 }, // Hg
  81: { row: 6, col: 13 }, // Tl
  82: { row: 6, col: 14 }, // Pb
  83: { row: 6, col: 15 }, // Bi
  84: { row: 6, col: 16 }, // Po
  85: { row: 6, col: 17 }, // At
  86: { row: 6, col: 18 }, // Rn

  87: { row: 7, col: 1 }, // Fr
  88: { row: 7, col: 2 }, // Ra
  104: { row: 7, col: 4 }, // Rf
  105: { row: 7, col: 5 }, // Db
  106: { row: 7, col: 6 }, // Sg
  107: { row: 7, col: 7 }, // Bh
  108: { row: 7, col: 8 }, // Hs
  109: { row: 7, col: 9 }, // Mt
  110: { row: 7, col: 10 }, // Ds
  111: { row: 7, col: 11 }, // Rg
  112: { row: 7, col: 12 }, // Cn
  113: { row: 7, col: 13 }, // Nh
  114: { row: 7, col: 14 }, // Fl
  115: { row: 7, col: 15 }, // Mc
  116: { row: 7, col: 16 }, // Lv
  117: { row: 7, col: 17 }, // Ts
  118: { row: 7, col: 18 }, // Og

  119: { row: 8, col: 1 }, // Uue

  // Bloque f
  // Lantánidos
  57: { row: 9, col: 4 }, // La
  58: { row: 9, col: 5 }, // Ce
  59: { row: 9, col: 6 }, // Pr
  60: { row: 9, col: 7 }, // Nd
  61: { row: 9, col: 8 }, // Pm
  62: { row: 9, col: 9 }, // Sm
  63: { row: 9, col: 10 }, // Eu
  64: { row: 9, col: 11 }, // Gd
  65: { row: 9, col: 12 }, // Tb
  66: { row: 9, col: 13 }, // Dy
  67: { row: 9, col: 14 }, // Ho
  68: { row: 9, col: 15 }, // Er
  69: { row: 9, col: 16 }, // Tm
  70: { row: 9, col: 17 }, // Yb
  71: { row: 9, col: 18 }, // Lu
  // Actínidos
  89: { row: 10, col: 4 }, // Ac
  90: { row: 10, col: 5 }, // Th
  91: { row: 10, col: 6 }, // Pa
  92: { row: 10, col: 7 }, // U
  93: { row: 10, col: 8 }, // Np
  94: { row: 10, col: 9 }, // Pu
  95: { row: 10, col: 10 }, // Am
  96: { row: 10, col: 11 }, // Cm
  97: { row: 10, col: 12 }, // Bk
  98: { row: 10, col: 13 }, // Cf
  99: { row: 10, col: 14 }, // Es
  100: { row: 10, col: 15 }, // Fm
  101: { row: 10, col: 16 }, // Md
  102: { row: 10, col: 17 }, // No
  103: { row: 10, col: 18 }, // Lr
};

// === Cambiar HEX a RGB ===
function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;
  return { r, g, b};
}

// === Construcción ===
fetch("elements.json")
  .then((res) => res.json())
  .then((data) => {
    const columns = data.Table.Columns.Column;
    const rows = data.Table.Row;
    const elements = rows.map((r) => {
      let el = {};
      r.Cell.forEach((val, idx) => {
        el[columns[idx]] = val;
      });
      return el;
    });
    buildTable(elements);
    initFilters(elements);
  });

function buildTable(elements) {
  const container = document.getElementById("periodic-table");
  container.innerHTML = "";

  elements.forEach((el) => {
    const div = document.createElement("div");
    div.className = `element`;
    div.dataset.group = el.GroupBlock;

    div.innerHTML = `
      <span class="number">${el.AtomicNumber}</span>
      <span class="symbol">${el.Symbol}</span>
      <span class="mass">${el.AtomicMass}</span>
    `;

    const { r, g, b, a } = hexToRgb(el.CPKHexColor || "CCCCCC");
    div.style.background = `linear-gradient(110deg, rgba(${r},${g},${b},0.2), rgba(${r},${g},${b},0.25))`;

    // Posicionamiento de los Elementos
    const pos = elementPositions[parseInt(el.AtomicNumber)];
    if (pos) {
      div.style.gridRow = pos.row;
      div.style.gridColumn = pos.col;
    }

    div.addEventListener("click", () => openModal(el));
    container.appendChild(div);
  });
}

// === Modal ===
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal");

function openModal(el) {
  document.getElementById("element-name").textContent = el.Name;
  document.getElementById("element-symbol").textContent = el.Symbol;
  document.getElementById("element-number").textContent = el.AtomicNumber;
  document.getElementById("element-mass").textContent = el.AtomicMass;
  document.getElementById("element-state").textContent = el.StandardState;
  document.getElementById("element-config").textContent =
    el.ElectronConfiguration;
  document.getElementById("element-group").textContent = el.GroupBlock;
  modal.style.display = "block";
  document.getElementById("element-year").textContent = el.YearDiscovered || "Desconocido";
}

closeModalBtn.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// === Tema ===
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});

// === Filtros ===
let activeFilter = null;
let activeButton = null;

// Mostrar/ocultar subgrupos
function toggleSubFilters(main) {
  hideAllSubFilters();
  if (main === "Metales") {
    document.getElementById("sub-metales").style.display = "block";
  } else if (main === "No Metales") {
    document.getElementById("sub-nometales").style.display = "block";
  }
}

function initFilters(elements) {
  const subButtons = document.querySelectorAll(".sub-filters button[data-group]");
  const mainButtons = document.querySelectorAll("#filters button[data-main]");
  const clearBtn = document.getElementById("clear-filter");

  const categoryMap = {
    Metales: [
      "Metal Alcalino",
      "Metal Alcalinotérreo",
      "Metal de Transición",
      "Metal de Post-transición",
      "Lantánido",
      "Actinido",
    ],
    Metaloide: ["Metaloide"],
    "No Metales": ["Gas Noble", "No Metal Reactivo"],
  };

// Subgrupos
subButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const group = btn.dataset.group;

    if (activeFilter === group) {
      // Si ya estaba activo → reset
      resetFilter();
      setActiveButton(clearBtn, "all");
      hideAllSubFilters();
    } else {
      applyFilter([group]);

      // limpiar todos los sub-filtros antes de activar solo el clicado
      document.querySelectorAll(".sub-filters button").forEach(b => b.classList.remove("active"));
      setActiveButton(btn, group);
    }
  });
});


  // Grupos principales
  mainButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const main = btn.dataset.main;

      if (activeFilter === main) {
        // Si ya estaba activo → reset
        resetFilter();
        setActiveButton(clearBtn, "all");
        hideAllSubFilters();
      } else {
        const groups = categoryMap[main] || [];
        applyFilter(groups);
        setActiveButton(btn, main);
        toggleSubFilters(main);
        highlightSubFilters(groups);
      }
    });
  });

  // Botón "Mostrar Todos"
  clearBtn.addEventListener("click", () => {
    resetFilter();
    setActiveButton(clearBtn, "all");
    hideAllSubFilters();
  });

  // Activar por defecto "Mostrar Todos"
  setActiveButton(clearBtn, "all");
}

function applyFilter(groups) {
  document.querySelectorAll(".element").forEach((el) => {
    if (groups.includes(el.dataset.group)) {
      el.classList.remove("dimmed");
    } else {
      el.classList.add("dimmed");
    }
  });
}

function resetFilter() {
  document.querySelectorAll(".element").forEach((el) => el.classList.remove("dimmed"));
  document.querySelectorAll("#filters button, .sub-filters button").forEach(btn => btn.classList.remove("active"));
  activeFilter = null;
  activeButton = null;
}

function setActiveButton(btn, filterName) {
  // Se desmarcamos el anterior
  if (activeButton) activeButton.classList.remove("active");
  activeButton = btn;
  activeButton.classList.add("active");
  activeFilter = filterName;
}

// Resalta sub-filtros cuando se selecciona un grupo completo
function highlightSubFilters(groups) {
  // Se limpian todos
  document.querySelectorAll(".sub-filters button").forEach(btn => btn.classList.remove("active"));

  // Se activan todos los que pertenezcan a ese grupo
  document.querySelectorAll(".sub-filters button").forEach(btn => {
    if (groups.includes(btn.dataset.group)) {
      btn.classList.add("active");
    }
  });
}


// Oculta todos los sub-filtros
function hideAllSubFilters() {
  document.querySelectorAll(".sub-filters").forEach(div => div.style.display = "none");
}
