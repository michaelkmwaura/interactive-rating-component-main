import "./thankYou.css"
import thankYou from './images/illustration-thank-you.svg'

export default function ThankYou({rating}) {
    return(
        <>
        <div id="afterDiv">
            <img src={thankYou} alt="thank you"/>
            <div id="insideDiv">You selected {rating} out of 5</div>
            <h1>Thank You!</h1>
            <p>We appreciate you taking the time to give a rating. If you need more support, dont hesitate to get in touch!</p>
        </div>
        </>
    )
}

