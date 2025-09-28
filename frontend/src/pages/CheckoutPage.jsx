import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const stripeKey = import.meta.env.VITE_SOME_KEY;
const stripePromise = loadStripe(stripeKey);


const CheckoutPage = () => {
    const amount = 899;
  return (
    <div>
        <h1>Complete your order</h1>
        <Elements stripe={stripePromise} options={{clientSecret : "CONSTANT_clientSecret_SECRET"}}>
            <CheckoutForm amount={amount}></CheckoutForm>
        </Elements>
    </div>
  )
}

export default CheckoutPage