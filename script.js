const ranks = [
  {
    name: "VIP",
    price: "Rp15.000",
    permissions: ["3x Limit Claim", "5000 Limit Block", "5x Sethome"],
    features: [
      "/clan create",
      "/repair",
      "/food",
      "/heal",
      "/kit vip",
      "Money Rp25.000",
    ],
  },
  {
    name: "MVP",
    price: "Rp20.000",
    permissions: ["5x Limit Claim", "8000 Limit Block", "10x Sethome"],
    features: [
      "Enderchest: /ec",
      "/feed",
      "/nick",
      "/kit mvp",
      "Termasuk fitur VIP",
      "Money Rp40.000",
    ],
  },
  {
    name: "ELITE",
    price: "Rp40.000",
    permissions: ["8x Limit Claim", "10.000 Limit Block", "15x Sethome"],
    features: [
      "/ec",
      "/fly",
      "/nick",
      "/repair",
      "/feed",
      "/kit elite",
      "Termasuk fitur MVP",
      "Money Rp70.000",
    ],
  },
  {
    name: "LEGEND",
    price: "Rp50.000",
    permissions: ["10x Limit Claim", "20.000 Limit Block", "25x Sethome"],
    features: [
      "/ec",
      "/fly",
      "/nick",
      "/repair",
      "/kit legend",
      "Termasuk fitur Elite",
      "Money Rp250.000",
    ],
  },
  {
    name: "SULTAN",
    price: "Rp65.000",
    permissions: ["20x Limit Claim", "30.000 Limit Block", "50x Sethome"],
    features: [
      "/ec",
      "/beezooka",
      "/feed",
      "/fly",
      "/nick",
      "/repair",
      "/heal",
      "/kit sultan",
      "Termasuk fitur Legend",
      "Money Rp350.000",
    ],
  },
  {
    name: "SUPREME",
    price: "Rp80.000",
    permissions: ["∞ Limit Claim", "∞ Limit Block", "999 Sethome"],
    features: [
      "/ec",
      "/feed",
      "/fly",
      "/repair",
      "/nick",
      "/heal",
      "/craft",
      "/head",
      "/beezooka",
      "/kit supreme",
      "Termasuk fitur Sultan",
      "Money Rp700.000",
    ],
  },
];

const rankList = document.getElementById("rankList");

ranks.forEach((rank) => {
  const rankCard = document.createElement("div");
  rankCard.classList.add("rank-card");

  rankCard.innerHTML = `
        <h2 class="rank-title">${rank.name}</h2>
        <p class="rank-price">${rank.price}</p>
        <h3>Rank Permission</h3>
        <ul class="rank-features">
            ${rank.permissions.map((item) => `<li>▨ ${item}</li>`).join("")}
        </ul>
        <h3>Feature</h3>
        <ul class="rank-features">
            ${rank.features.map((item) => `<li>▨ ${item}</li>`).join("")}
        </ul>
        <a href="#" class="buy-button">Beli Sekarang</a>
    `;

  rankList.appendChild(rankCard);
});

document.addEventListener("DOMContentLoaded", function () {
  const weapons = [
    {
      name: "Excalibur",
      image: "excalibur.png",
      description: "Pedang legendaris dengan kekuatan luar biasa.",
    },
    {
      name: "Bow of Eternity",
      image: "bow_of_eternity.png",
      description: "Busur yang mampu menembakkan panah tanpa batas.",
    },
    {
      name: "Shadow Dagger",
      image: "shadow_dagger.png",
      description:
        "Belati yang memungkinkan pemiliknya bergerak dalam bayangan.",
    },
  ];

  const weaponContainer = document.getElementById("weaponList");

  weapons.forEach((weapon) => {
    const weaponCard = document.createElement("div");
    weaponCard.classList.add("weapon-card");

    weaponCard.innerHTML = `
            <img src="images/${weapon.image}" alt="${weapon.name}" class="weapon-image">
            <h2 class="weapon-name">${weapon.name}</h2>
            <p class="weapon-description">${weapon.description}</p>
        `;

    weaponContainer.appendChild(weaponCard);
  });
});
