import url from 'url';
import {
  covertEmissionsToDinos,
} from './helpers.js';


addEventListener('fetch', event => {
  let requestUrl = url.parse(event.request.url, true);

  const query = requestUrl.query
  console.log(query);

  if (query && query.emissions) {
    let dinoData = covertEmissionsToDinos(query.emissions);

    const json = JSON.stringify(dinoData, null, 2);

    return event.respondWith(
      new Response(json, {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      })
    );
  } else {
    return event.respondWith(
      new Response("Error! Requests must include a query param in the format '?emissions={number}'", {
        status: 400,
      })
    );
  }
});
