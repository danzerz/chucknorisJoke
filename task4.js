const fetchCountry = async (alpah3code) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${alpah3code}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchCountryAndNeighbor = async () => {
  const columbia = await fetchCountry("COL");
  const neighbors = await Promise.all(
    columbia.borders.map((border) => fetchCountry(border))
  );
  console.log(neighbors);
  // console.log(columbia)
};

fetchCountry();
