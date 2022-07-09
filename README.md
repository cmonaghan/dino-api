# Dino API

An api that takes a carbon emissions value and returns the equivalent number of dinosaurs it took to produce that much fossil fuel.

## Setup

  npm install

## Run tests

  npm test

## Run locally

  wrangler dev

## Make a request

  curl -G http://localhost:8787 -d "emissions=7"

## Deploy to Cloudflare

  wrangler publish

## Reference

- [Wrangler commands](https://developers.cloudflare.com/workers/wrangler/commands/)

## Emissions Data Sources

- [Discover Magazine](https://www.discovermagazine.com/environment/whats-in-a-gallon-of-gas)
  - 100 tons of plant matter -> 1 gallon gasoline -> 20 lbs carbon dioxide
- [BlueSkyModel (gasoline)](http://www.blueskymodel.org/gallon-gas)
  - Chemically, 1 gallon gasoline -> 18 pounds carbon dioxide
  - However the US Energy Information Administration reported 19.6 pounds carbon dioxide, likely due to additional additives in gasoline you find at the pump
- [BlueSkyModel (air mile)](http://www.blueskymodel.org/air-mile)
  - 1 air mile -> 53 pounds of carbon dioxide (based on average of many types of commercial aircraft)
- [University of Utah](https://archive.unews.utah.edu/news_releases/bad-mileage-98-tons-of-plants-per-gallon/)
  - 98 tons of plant matter -> 1 gallon gasoline
  - 98 tons is equivalent to 40 acres of wheat
  - in 1997, humanity burned 400x all the plant matter that grows in the world in a year

## Dinosaur Data Sources

- [ThoughtCo dino database](https://www.thoughtco.com/dinosaurs-a-to-z-1093748) - using this as primary source
- [Heaviest dinosaurs](https://dinopedia.fandom.com/wiki/Dinosaur_size_comparison#Heaviest_ornithopods)
- [AZ Animals](https://a-z-animals.com/blog/dinosaur-size-comparison/)
- [Active Wild](https://www.activewild.com/list-of-dinosaurs-names-with-pictures/)
- [BusinessInsider dino size comparison](https://www.businessinsider.com/dinosaur-size-comparison-chart-2015-6?op=1)
- [Dino Animals database](https://dinoanimals.com/dinosaurs/complete-dinosaurs-database/)
