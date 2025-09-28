import {useStripe, useElements, PaymentElement} from "@stripe/react-stripe-js";
import {useState} from "react";

function CheckoutForm() {
    const [isLoading, setIsLoading] = useState(false);
    const stripe = useStripe();
    const [message, setMessage]= "";
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const {error} = await stripe.confirmPayment({
    // `Elements` instance that's used to create the Express Checkout Element.
    elements,
    // `clientSecret` from the created PaymentIntent
    // clientSecret,
    confirmParams: {
      return_url: `${window.location.origin}/complete`,
    },
    // Uncomment below if you only want redirect for redirect-based payments.
    // redirect: 'if_required',
  });

  if (error) {
    // This point is reached only if there's an immediate error when confirming the payment. Show the error to your customer (for example, payment details incomplete).
    setMessage(error.message);
  } else {
    // Your customer will be redirected to your `return_url`.
    setMessage("something went wrong");
  }
  setIsLoading(fasle);
    }
  return (
    <form id="course-payment" onSubmit={handleSubmit}>
        <PaymentElement id="course-payment-element" />
        <button disabled={isLoading || !elements || !stripe} id ="submit">
            Pay now {isLoading && <div className="spinner" id="spinner" ></div>}
        </button> 
        {message && <p>{message}</p>}
    </form>
  )
}

export default CheckoutForm