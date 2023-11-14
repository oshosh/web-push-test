const instance = async (endpoint, options) => {
  const api = await fetch(`http://localhost:9000${endpoint}`, { ...options });
  const response = await api.json();

  return response;
};

export const getApi = async (endpoint) => {
  const options = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
    credentials: 'include',
  };
  const response = instance(endpoint, options);
  console.log(`method: GET, endpoint: ${endpoint}, response : ${response}`);
  return response;
};

export const postApi = async (endpoint, params) => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(params),
    credentials: 'include',
  };
  const response = instance(endpoint, options);
  console.log(`method: POST, endpoint: ${endpoint}, response : ${response}`);

  return response;
};
