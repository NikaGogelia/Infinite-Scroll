export async function fetchData(endpoint) {
  const response = await fetch(endpoint);

  if (!response.ok) {
    throw Error(`Error Occurred While Fetching Data: ${response.status}`);
  }

  const json = await response.json();
  return json;
}
