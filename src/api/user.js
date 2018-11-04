export function login({ email, password }) {
  return fetch('/customers/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw Error(response.statusText);
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
    if (response.ok) {
      return response.json();
    }

    throw Error(response.statusText);
  });
}
