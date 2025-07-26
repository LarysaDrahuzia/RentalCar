import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import css from './CarBookingForm.module.css';

const CarBookingForm = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <form className={css.form}>
      <h3>Book your car now</h3>
      <p>Stay connected! We are always ready to help you.</p>

      <input className={css.input} type="text" placeholder="Name*" required />
      <input className={css.input} type="email" placeholder="Email*" required />
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
      <textarea className={css.textarea} placeholder="Comment" rows="4" />
      <Button className={css.button} type="submit">
        Send
      </Button>
    </form>
  );
};

export default CarBookingForm;
