import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length) return <Message message="No cities found" />;

  const countries = cities.reduce((acc, cur) => {
    const existingCountry = acc.find((el) => el.country === cur.country);
    if (!existingCountry) {
      return [
        ...acc,
        { country: cur.country, city: cur.city, emoji: cur.emoji },
      ];
    }
    return acc;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
