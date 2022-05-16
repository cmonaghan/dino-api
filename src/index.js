import url from 'url';
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async fetch(request) {
    console.log("method:", request.method);
    // console.log("body:", request.body);
    // console.log("headers:", request.headers);
    // console.log("redirect:", request.redirect);
    // console.log("cf:", JSON.stringify(request.cf)); // metadata from cloudflare about where the request originated
    // console.log("url:", request.url);

    try {
      let queryParams = url.parse(request.url).query;
      console.log(queryParams);
      return new Response("Success!");
    } catch (err) {
      console.error(err);
      return new Response("Error");
    }
  },

};
