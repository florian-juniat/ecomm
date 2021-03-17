

import { useState } from 'react';
import axios from 'axios';
import '../css/SignUp.css';

import { loadStripe } from "@stripe/stripe-js";


import HeaderStart from '../utility/HeaderStart'

//const stripe = window.Stripe("pk_test_51IW08HH1tQZu8g0MReJAaUbqYR30vtIS3iQOHDE6WJzbToUm4n3sdRyGM7BcFbgEDuJbIXyiJlNweKFByDt3Qs0o00SSVE8rzy")





function Paiement(props) {

    //const stripePromise = loadStripe("pk_test_51IW08HH1tQZu8g0MReJAaUbqYR30vtIS3iQOHDE6WJzbToUm4n3sdRyGM7BcFbgEDuJbIXyiJlNweKFByDt3Qs0o00SSVE8rzy")
    
    const [error, setError] = useState("")

    const handleTest = () => {

        var id = "";

        axios.get('http://localhost:8000/paiement/test').then(res => {
            console.log(res)
                const stripe = window.Stripe("pk_test_51IW08HH1tQZu8g0MReJAaUbqYR30vtIS3iQOHDE6WJzbToUm4n3sdRyGM7BcFbgEDuJbIXyiJlNweKFByDt3Qs0o00SSVE8rzy")

                if (!stripe) {
                    setError("Error")
                } else {
                    stripe.redirectToCheckout({ sessionId: res.data.id });

                }
        }).catch(function (error) {
            setError("Sign Up refused: use another name")
        });

        
    }

    return (
        <div className="Home">
            <HeaderStart setPage={props.setPage}/>


            <p className="title">Test Paiement</p>
            <button className="signButtonSend" onClick={handleTest}>
                            test
                    </button>
                    <p className="errorMessage">{error}</p>
            
        </div>
    );
}
    
export default Paiement;