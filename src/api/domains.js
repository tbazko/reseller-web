const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export function getAvailable(domainsArr) {
  const domainsStr = domainsArr.toString();
  return fetch(`${baseUrl}/domains/available?domains=${domainsStr}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    credentials: 'include',
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  });
}
