// import { useDispatch, useSelector } from 'react-redux';
// import Button from '../Button/Button.jsx';
// import { setFilters } from '../../redux/filters/slice.js';
// import {
//   selectFilterBrands,
//   selectMileageFrom,
//   selectMileageTo,
//   selectFilterPrice,
// } from '../../redux/filters/selectors.js';
// import css from './CarsFilters.module.css';

// const CarsFilters = ({ onFilter }) => {
//   const dispatch = useDispatch();

//   const brands = useSelector(selectFilterBrands) || [];
//   const price = useSelector(selectFilterPrice);
//   const mileageFrom = useSelector(selectMileageFrom);
//   const mileageTo = useSelector(selectMileageTo);

//   const handleChange = (field, value) => {
//     dispatch(setFilters({ [field]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onFilter({ brands, price, mileageFrom, mileageTo });
//   };

//   return (
//     <form className={css.filtersForm} onSubmit={handleSubmit}>
//       <label className={css.label}>
//         Car brand
//         <select
//           className={css.select}
//           value={brands}
//           onChange={e => handleChange('brand', e.target.value)}
//         >
//           <option value="">Choose a brand</option>
//           {brands.map(b => (
//             <option key={b} value={b}>
//               {b}
//             </option>
//           ))}
//         </select>
//       </label>

//       <label className={css.label}>
//         Price / 1 hour
//         <select
//           className={css.select}
//           value={price}
//           onChange={e => handleChange('rentalPrice', e.target.value)}
//         >
//           <option value="">Choose a price</option>
//           {Array.from({ length: 20 }, (_, i) => (i + 10) * 5).map(p => (
//             <option key={p} value={p}>{`$${p}`}</option>
//           ))}
//         </select>
//       </label>

//       <label className={css.label}>
//         Car mileage / km
//         <div className={css.mileageWrapper}>
//           <input
//             className={css.input}
//             type="number"
//             placeholder="From"
//             value={mileageFrom}
//             onChange={e => handleChange('mileageFrom', e.target.value)}
//           />
//           <input
//             className={css.input}
//             type="number"
//             placeholder="To"
//             value={mileageTo}
//             onChange={e => handleChange('mileageTo', e.target.value)}
//           />
//         </div>
//       </label>

//       <Button type="submit" className={css.searchBtn}>
//         Search
//       </Button>
//     </form>
//   );
// };

// export default CarsFilters;

import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button/Button.jsx';
import { setFilters } from '../../redux/filters/slice.js';
import {
  selectFilterBrands,
  selectFilterBrand,
  selectFilterPrice,
  selectMileageFrom,
  selectMileageTo,
} from '../../redux/filters/selectors.js';
import css from './CarsFilters.module.css';

const CarsFilters = ({ onFilter }) => {
  const dispatch = useDispatch();

  const brands = useSelector(selectFilterBrands) || [];
  const brand = useSelector(selectFilterBrand) || '';
  const price = useSelector(selectFilterPrice) || '';
  const mileageFrom = useSelector(selectMileageFrom) || '';
  const mileageTo = useSelector(selectMileageTo) || '';

  const handleChange = (field, value) => {
    dispatch(setFilters({ [field]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onFilter?.({ brand, price, mileageFrom, mileageTo });
  };

  return (
    <form className={css.filtersForm} onSubmit={handleSubmit}>
      <label className={css.label}>
        Car brand
        <select
          className={css.select}
          value={brand}
          onChange={e => handleChange('brand', e.target.value)}
        >
          <option value="">Choose a brand</option>
          {brands.map(b => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>

      <label className={css.label}>
        Price / 1 hour
        <select
          className={css.select}
          value={price}
          onChange={e => handleChange('rentalPrice', e.target.value)}
        >
          <option value="">Choose a price</option>
          {Array.from({ length: 20 }, (_, i) => (i + 10) * 5).map(p => (
            <option key={p} value={p}>{`$${p}`}</option>
          ))}
        </select>
      </label>

      <label className={css.label}>
        Car mileage / km
        <div className={css.mileageWrapper}>
          <input
            className={css.input}
            type="number"
            placeholder="From"
            value={mileageFrom}
            onChange={e => handleChange('mileageFrom', e.target.value)}
          />
          <input
            className={css.input}
            type="number"
            placeholder="To"
            value={mileageTo}
            onChange={e => handleChange('mileageTo', e.target.value)}
          />
        </div>
      </label>

      <Button type="submit" className={css.searchBtn}>
        Search
      </Button>
    </form>
  );
};

export default CarsFilters;
