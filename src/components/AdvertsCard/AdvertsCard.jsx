export const AdvertsCard = ({ item }) => {
  const {
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    description,
    details,
    gallery,
    reviews,
  } = item;

  return (
    <div>
      <img src={gallery[1]} alt={name} />
      <h2>{name}</h2>
      <p>€{price}</p>
      <div>
        <p>{rating}</p>
        <p>({reviews.length} Reviews)</p>
        <p>{location}</p>
        <p>{description}</p>
      </div>
      <div>
        <ul>
          <li>{adults} adults</li>
        </ul>
      </div>
    </div>
  );
};
