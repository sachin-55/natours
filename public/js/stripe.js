/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_yackSqV2MnoMIr6fTZ3GI1Ql00TJz6rcGQ');

export const bookTour = async (tourId) => {
  try {
    //Get checkout session
    const session = await axios(
      `http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    console.log(session);

    //create checkout form
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
