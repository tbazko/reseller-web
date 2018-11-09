const postOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

export function login({ email, password }) {
  return fetch(`${process.env.REACT_APP_API_URL}/customers/login`, {
    ...postOptions,
    body: JSON.stringify({ email, password }),
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  });
}

export function register(userData) {
  return fetch(`${process.env.REACT_APP_API_URL}/customers/register`, {
    ...postOptions,
    body: JSON.stringify(userData),
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
  });
}

export function saveUserDomain(email, domain) {
  return fetch(`${process.env.REACT_APP_API_URL}/customers/domain`, {
    ...postOptions,
    body: JSON.stringify({ email, domain }),
  }).then((response) => {
    if (!response.ok) throw Error(response.statusText);
  });
}
