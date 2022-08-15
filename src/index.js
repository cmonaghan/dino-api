import url from 'url';
import {
  convertMilesToFuelGallons,
  convertFuelToOrganicMatterTons,
  convertTonsToTRexCount,
} from './helpers.js';


addEventListener('fetch', event => {
  let requestUrl = url.parse(event.request.url, true);

  const query = requestUrl.query

  if (query && query.miles) {
    let mpg = query.mpg || 30; // set a reasonable default mpg
    let fuelConsumed = convertMilesToFuelGallons(query.miles, mpg);
    let tonsOfDino = convertFuelToOrganicMatterTons(fuelConsumed);
    let tRexCount = convertTonsToTRexCount(tonsOfDino);

    const json = JSON.stringify(tRexCount, null, 2);

    return event.respondWith(
      new Response(json, {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      })
    );
  } else {
    return event.respondWith(
      new Response("Error! Requests must include query params in the format '?miles={number}. View API documentation for additional supported params.", {
        status: 400,
      })
    );
  }
});
