const baseUrl = process.env.REACT_APP_API_URL || '';

export function getAvailable(domainsArr) {
  const domainsStr = domainsArr.toString();
  return fetch(`${baseUrl}/domains/available?domains=${domainsStr}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  });
}
