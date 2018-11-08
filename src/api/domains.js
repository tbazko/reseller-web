export function getAvailable(domainsArr) {
  const domainsStr = domainsArr.toString();
  return fetch(`/domains/available?domains=${domainsStr}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  });
};
