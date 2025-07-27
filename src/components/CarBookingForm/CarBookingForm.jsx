import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Button from '../Button/Button.jsx';
import toast, { Toaster } from 'react-hot-toast';
import 'react-datepicker/dist/react-datepicker.css';
import css from './CarBookingForm.module.css';

const CarBookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [comment, setComment] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !startDate) {
      toast.error('Please fill in all required fields.');
      return;
    }

    toast.success('Your booking request has been sent!');

    // скидати всі поля
    setName('');
    setEmail('');
    setStartDate(null);
    setComment('');
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              backgroundColor: '#2d6a4f',
              color: '#ffffff',
              fontWeight: '500',
            },
          },
        }}
      />

      <form className={css.form} onSubmit={handleSubmit}>
        <h3 className={css.title}>Book your car now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>

        <input
          className={css.input}
          type="text"
          placeholder="Name*"
          required
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          className={css.input}
          type="email"
          placeholder="Email*"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          placeholderText="Booking date"
          className={css.input}
          calendarClassName={css.calendar}
          dateFormat="dd MMMM yyyy"
          minDate={new Date()}
          required
        />
        <textarea
          className={css.textarea}
          placeholder="Comment"
          rows="4"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <Button className={css.button} type="submit">
          Send
        </Button>
      </form>
    </>
  );
};

export default CarBookingForm;
