import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/Payment.css';
import AppContext from '../../context/AppContext';
import { PayPalButton } from 'react-paypal-button';

const Payment = () => {
  const { state, AddNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useHistory();

  const paypalOptions = {
    clientId:
      'ASN9dHtqklI0FyvpcbqcieZVW1aRYaHChC9vXLaV1zpYuPy0Z11NBFh8iJ09s-05tPqGe2NRe124uzV7',
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log(data, 'ok');
    if (data.status === 'COMPLETED') {
      console.log('ok 2');
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      AddNewOrder(newOrder);
      console.log('ok 3');
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resument del pedido:</h3>
        {cart.map((item) => {
          return (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          );
        })}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(err) => console.log(err)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
