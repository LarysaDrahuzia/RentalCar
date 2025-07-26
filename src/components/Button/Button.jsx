import css from './Button.module.css';

export default function Button({
  children,
  variant = '',
  type = 'button',
  disabled = false,
  className = '',
  onClick,
  ...props
}) {
  if (typeof className === 'object') {
    console.error('⚠️ className is object:', className);
  }

  if (typeof css[variant] === 'object') {
    console.error('⚠️ css[variant] is object:', css[variant]);
  }
  return (
    <button
      className={`${css.button} ${css[variant]} ${
        disabled ? css.disabled : ''
      } ${className}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
