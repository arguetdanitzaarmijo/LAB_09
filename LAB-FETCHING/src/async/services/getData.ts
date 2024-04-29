async function fetchData() {
  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const randomProductId = getRandomInt(1, 101);

  try {
    const response = await fetch(`https://dummyjson.com/products/${randomProductId}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al obtener los datos del producto:', error);
  }
}

fetchData();
