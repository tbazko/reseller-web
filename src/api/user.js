const baseUrl = process.env.REACT_APP_API_URL || '';
const postOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export function establishSession({ email, password }) {
  return fetch(`${baseUrl}/customers/login`, {
    ...postOptions,
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  });
}

export function destroySession() {
  return fetch(`${baseUrl}/customers/logout`, {
    ...postOptions,
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
  });
}

export function hasValidSession() {
  return fetch(`${baseUrl}/customers/is-authenticated`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  });
}

export function register(userData) {
  return fetch(`${baseUrl}/customers/register`, {
    ...postOptions,
    body: JSON.stringify(userData),
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
  });
}

export function saveUserDomain(email, domain) {
  return fetch(`${baseUrl}/customers/domain`, {
    ...postOptions,
    body: JSON.stringify({ email, domain }),
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
  });
}

export function getSelf() {
  return fetch(`${baseUrl}/customers/self`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  });
}
