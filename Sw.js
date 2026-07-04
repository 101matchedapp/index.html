self.addEventListener("install", () => {
  console.log("SlotSpot Pro installed");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
