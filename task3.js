const fetchData = async () => {
  const re = await fetch("https://restcountries.com/v3.1/alpha/col");
  const country = await re.json();
  console.log(country);
};
fetchData();
