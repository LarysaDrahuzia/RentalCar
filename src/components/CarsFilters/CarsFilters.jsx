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
    onFilter?.({ page: 1, brand, rentalPrice: price, mileageFrom, mileageTo });
  };

  return (
    <form className={css.filtersForm} onSubmit={handleSubmit}>
      <label className={css.labelBrand}>
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

      <label className={css.labelPrice}>
        Price / 1 hour
        <select
          className={css.select}
          value={price}
          onChange={e => handleChange('rentalPrice', e.target.value)}
        >
          <option value="">Choose a price</option>
          {Array.from({ length: 20 }, (_, i) => 10 + i * 5).map(p => (
            <option key={p} value={p}>{`To $${p}`}</option>
          ))}
        </select>
      </label>

      <label className={css.labelMileage}>
        Car mileage / km
        <div className={css.mileageWrapper}>
          <div className={css.fakeInput}>
            <span className={css.staticText}>From</span>
            <input
              type="text"
              inputMode="numeric"
              className={css.input}
              value={mileageFrom?.toLocaleString('en-US') || ''}
              onChange={e => {
                const raw = e.target.value.replace(/,/g, '');
                if (/^\d*$/.test(raw)) {
                  handleChange('mileageFrom', Number(raw));
                }
              }}
            />
          </div>

          <div className={css.fakeInput}>
            <span className={css.staticText}>To</span>
            <input
              type="text"
              inputMode="numeric"
              className={css.input}
              value={mileageTo?.toLocaleString('en-US') || ''}
              onChange={e => {
                const raw = e.target.value.replace(/,/g, '');
                if (/^\d*$/.test(raw)) {
                  handleChange('mileageTo', Number(raw));
                }
              }}
            />
          </div>
        </div>
      </label>

      <Button type="submit" className={css.searchBtn}>
        Search
      </Button>
    </form>
  );
};

export default CarsFilters;
