import url from 'url';

addEventListener('fetch', event => {
  let requestUrl = url.parse(event.request.url, true);
  console.log(requestUrl.query);

  // list of some common dinosaurs: Tyrannosaurus Rex, Triceratops, Velociraptor, Stegosaurus, Spinosaurus, Archaeopteryx, Brachiosaurus, Pterodactyl, Allosaurus
  const dinoData = [
    {
      name: "Tyrannosaurus Rex",
      count: 3,
      image: "https://webstockreview.net/images/clipart-dinosaur-silhouette-15.png",
    },
    {
      name: "Triceratops",
      count: 1,
      image: "https://designlooter.com/images/herbivorous-svg-3.png",
    },
    {
      name: "Pterodactyl",
      count: 4,
      image: "https://cdn3.iconfinder.com/data/icons/prehistoric-animals/100/05-512.png",
    },
  ];

  const json = JSON.stringify(dinoData, null, 2);

  return event.respondWith(
    new Response(json, {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  );
});
