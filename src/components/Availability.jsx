// src/components/Availability.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Availability = () => {
  // Establecemos las horas disponibles
  const availableTimes = [
    '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'
  ];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className='home'>
      <h1>Seleccione su fecha y hora de cita</h1>

      {/* Selector de fecha */}
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Selecciona una fecha"
        minDate={new Date()}
      />

      <h2>Seleccione una hora</h2>
      <ul>
        {availableTimes.map((time, index) => (
          <li key={index}>
            <button
              onClick={() => handleTimeSelect(time)}
              disabled={!selectedDate} // Deshabilita la selección de hora hasta que se seleccione una fecha
            >
              {time}
            </button>
          </li>
        ))}
      </ul>

      {selectedDate && selectedTime && (
        <div>
          <p>Fecha seleccionada: {selectedDate.toLocaleDateString()}</p>
          <p>Hora seleccionada: {selectedTime}</p>
          <Link to={`/payment/${selectedDate.toISOString()}/${selectedTime}`}>
            <button>Continuar con el pago</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Availability;
