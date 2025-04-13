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
