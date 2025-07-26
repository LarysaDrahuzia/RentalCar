import css from './Logo.module.css';

export default function Logo() {
  return (
    <div className={css.container}>
      <p className={css.logo}>
        <span className={css.logoBold}>Rental</span>
        <span className={css.logoColored}>Car</span>
      </p>
    </div>
  );
}
