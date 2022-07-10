const tRex = {
  name: "Tyrannosaurus Rex",
  weightTons: 8, // https://www.thoughtco.com/things-to-know-tyrannosaurus-1093804
  image: "https://webstockreview.net/images/clipart-dinosaur-silhouette-15.png",
};

const PLANT_MATTER_TONS_IN_ONE_GALLON_GASOLINE = 98;

export const convertMilesToFuelGallons = (miles, mpg) => {
  return miles / mpg;
}

export const convertFuelToOrganicMatterTons = (fuelGallons) => {
  return fuelGallons * PLANT_MATTER_TONS_IN_ONE_GALLON_GASOLINE;
}

export const convertTonsToTRexCount = (tons) => {
  let tRexCount = tons / tRex.weightTons;

  let tRexData = tRex;
  delete tRex.weightTons;
  tRexData.count = tRexCount;

  return tRexData;
}
