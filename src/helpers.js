// list of some common dinosaurs: Tyrannosaurus Rex, Triceratops, Velociraptor, Stegosaurus, Spinosaurus, Archaeopteryx, Brachiosaurus, Pterodactyl, Allosaurus, Megalodon
const dinoConstantsDescendingOrder = [
  {
    name: "Tyrannosaurus Rex",
    emissionsPerDino: .8,
    image: "https://webstockreview.net/images/clipart-dinosaur-silhouette-15.png",
  },
  {
    name: "Brachiosaurus",
    emissionsPerDino: .65,
  },
  {
    name: "Megalodon",
    emissionsPerDino: .47,
  },
  {
    name: "Triceratops",
    emissionsPerDino: .2,
    image: "https://designlooter.com/images/herbivorous-svg-3.png",
  },
  {
    name: "Pterodactyl",
    emissionsPerDino: .01,
    image: "https://cdn3.iconfinder.com/data/icons/prehistoric-animals/100/05-512.png",
  }
]


// returns data in the format:
//   const dinoData = [
//     {
//       name: "Tyrannosaurus Rex",
//       count: 3,
//       image: "https://webstockreview.net/images/clipart-dinosaur-silhouette-15.png",
//     },
//     ...
//   }
// all emissions values assume tons CO2 equivalent
export const convertEmissionsToDinos = (emissionsValue) => {
  let remainingValue = emissionsValue;
  let dinoData = [];

  dinoConstantsDescendingOrder.forEach(dino => {
    let maxDinos = Math.floor(remainingValue / dino.emissionsPerDino);

    if (maxDinos > 0) {
      dinoData.push({
        name: dino.name,
        count: maxDinos,
        image: dino.image,
      });

      // decrement remaining value so we know when all emissions are allocated
      remainingValue = remainingValue - (maxDinos * dino.emissionsPerDino);
    }
  });

  return dinoData;
}
