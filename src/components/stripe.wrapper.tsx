import React, { useState } from "react";
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { CardFormButton } from "./card/styles";

// Replace "YOUR_PUBLISHABLE_KEY" with your actual Stripe publishable key

export const StripeWrapper = () => {
  const [paymentIntent, setPaymentIntent] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
        // Handle the case when the card element is not available
        return;
      }

    // Use Stripe.js to create a payment method.
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      // Handle successful payment here (e.g., send payment method ID to your server for further processing)
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} style={{marginTop:'10%'}}>
      <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "4px", width:'90%' }}>
        <CardElement options={cardElementOptions} />
      </div>
      <CardFormButton type="submit">
            Confirmar Compra
        </CardFormButton>
    </form>
  );
};
