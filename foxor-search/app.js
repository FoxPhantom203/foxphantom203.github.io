"use strict";

const form = document.querySelector("#searchForm");
const queryInput = document.querySelector("#query");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = queryInput.value.trim();
  if (!query) {
    queryInput.focus();
    return;
  }

  const searchUrl = new URL("https://search.brave.com/search");
  searchUrl.searchParams.set("q", query);
  window.location.assign(searchUrl.toString());
});
