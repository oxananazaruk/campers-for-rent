import { AdvertsCard } from "../AdvertsCard/AdvertsCard";

export const AdvertsList = ({ items }) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <AdvertsCard item={item} />
          </li>
        ))}
      </ul>
    );
};
