export async function getCarPrices(model) {
  const path = `prices/${model}`;
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
