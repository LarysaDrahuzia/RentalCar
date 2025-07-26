// import { useSelector } from 'react-redux';
// import { selectCars } from '../../redux/cars/selectors.js';
import CarCard from '../CarCard/CarCard.jsx';
import css from './CarsList.module.css';

const CarsList = ({ cars }) => {
  // const cars = useSelector(selectCars);
  return (
    <div className={css.carsWrap}>
      <ul className={css.list}>
        {cars.map(car => (
          <li key={car.id}>
            <CarCard {...car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;
