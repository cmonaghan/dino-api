# Dino API

An API that takes car miles traveled and returns the equivalent number of dinosaurs (fossil fuel) it took to produce that much gasoline.

## See it live

### From the browser

https://dino.api.woolgathering.io/?miles=400&mpg=30 (You can change the query params to in the url to see the impact of different trips.)

### From the command line

    curl -G https://dino.api.woolgathering.io -d "miles=400" -d "mpg=30"


## Development
### Setup

    npm install

### Run tests

    npm test

### Run locally

    wrangler dev

### Make a request

    # local
    curl -G http://localhost:8787 -d "miles=400" -d "mpg=30"
    # production
    curl -G https://dino.api.woolgathering.io -d "miles=400" -d "mpg=30"

### Deploy to Cloudflare

    wrangler publish

### Upgrade `npm` packages

See outdated packages

    npm outdated

Upgrade all packages to latest

    # install ncu if you don't have it yet
    npm install -g npm-check-updates
    # update all packages to latest version
    ncu --upgrade
    # install new package versions
    npm install


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
