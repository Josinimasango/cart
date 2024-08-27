import React from 'react'
import { Elements } from "@stripe/stripejs"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"


const PUBLIC_KEY = "pk_test_51Pqf9jP6pFU5eeDnmOtsAIwHBUmgx68GIqm1gt3EvrlcJu7XHoVULwuVPGCsEX79iCU2Kr2fh1HJZQky63F1I9Rm00J1nfbG7V"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
} 