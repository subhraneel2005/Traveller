import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import convertToSubCurrency from "../../lib/convertToSubcurrency";

function Checkout({amount, name, image}) {

    const stripe = useStripe();
    const elements = useElements();


    const [errmessage, setErrmessage] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [clientSecret, setClientSecret] = useState("")

    React.useEffect(() => {
        fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({amount: convertToSubCurrency(amount)}),
        })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret))
    },[amount]);

    async function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        if (!stripe || !elements){
            return;
        }

        const {error: submitError} = await elements.submit();

        if(submitError){
            setErrmessage(submitError.message);
            setIsLoading(false);
            return;
        }

        const {error} = await stripe.confirmPayment({
            elements,
            clientSecret,
            confirmParams:{
                return_url: `https://traveller-sooty.vercel.app/payment-success?amount=${amount}&name=${name}&image=${image}`
            },
        });

        setIsLoading(false)

    }

    if(!clientSecret || !elements || !stripe){
        return <div className="loader"></div>
    }

  return (
    <div>
        <form onClick={handleSubmit} className="bg-gray-100 p-3 rounded-xl">
            {clientSecret && <PaymentElement/>}
            <button type="submit" className="bg-gray-900 w-full rounded-lg px-4 py-2 mt-6">Pay ₹{amount}</button>
        </form>
    </div>
  )
}

export default Checkout