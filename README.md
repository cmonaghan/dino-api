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
