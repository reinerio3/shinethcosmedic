// src/components/Payment.js
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Payment = () => {
  const { time } = useParams();
  const history = useHistory();
  const [paymentInfo, setPaymentInfo] = useState('');

  const handlePayment = () => {
    // Aquí puedes hacer la lógica de pago real
    alert('Pago realizado con éxito');
    history.push('/'); // Redirigir a la página de inicio
  };

  return (
    <div>
      <h1>Confirmar Cita - {time}</h1>
      <div>
        <label>Detalles de pago:</label>
        <input
          type="text"
          placeholder="Número de tarjeta"
          value={paymentInfo}
          onChange={(e) => setPaymentInfo(e.target.value)}
        />
      </div>

      <button onClick={handlePayment}>Pagar y Confirmar Cita</button>
    </div>
  );
};

export default Payment;
