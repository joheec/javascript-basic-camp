function getSearchResults(term, location) {
  return fetch('http://localhost:4000/yelp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...(term && { term }),
      ...(location && {location }),
    }),
  })
    .then(res => res.json())
    .catch(err => console.error({ err }));
}

export default { getSearchResults };
