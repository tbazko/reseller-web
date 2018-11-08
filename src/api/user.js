export function login({ email, password }) {
  return fetch('/customers/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  });
}

export function register(userData) {
  return fetch('/customers/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
  });
}

export function saveUserDomain(email, domain) {
  return fetch('/customers/domain', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify({ email, domain }),
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
  });
}
