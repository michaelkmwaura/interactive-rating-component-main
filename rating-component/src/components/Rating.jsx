import "./Rating.css"
import icon from './images/icon-star.svg'
import {useState} from "react"


const Rating = ({ rating, setRating, setThankYouPage }) => {
    const [activeRating, setactiveRating] = useState({
        oneStar: false,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false,
    });

    const handleSubmit = () =>{
        if(!rating) return;
        setThankYouPage(true);
    };

    return(

        <div id="maindiv">
        <div id="icon">
        <img src={icon} alt="icon star"/>
        </div>

        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div id="form">
            <div className="formdiv">
            <div onClick={()=>{
                setactiveRating({
                    oneStar: true,
                    twoStars: false,
                    threeStars: false,
                    fourStars: false,
                    fiveStars: false,
                }); 
                setRating(1)
            }} className={activeRating.oneStar ? "btnActive" : "btn"}>1</div>
            
            <div onClick={()=>{
                setactiveRating({
                    oneStar: false,
                    twoStars: true,
                    threeStars: false,
                    fourStars: false,
                    fiveStars: false,
                });
                setRating(2)
            }} className={activeRating.twoStars ? "btnActive" : "btn"} >2</div>
            
            <div onClick={()=>{
                setactiveRating({
                    oneStar: false,
                    twoStars: false,
                    threeStars: true,
                    fourStars: false,
                    fiveStars: false,
                });
                setRating(3)
            }} className={activeRating.threeStars ? "btnActive" : "btn"} >3</div>
            
            <div onClick={()=>{
                setactiveRating({
                    oneStar: false,
                    twoStars: false,
                    threeStars: false,
                    fourStars: true,
                    fiveStars: false,
                }); setRating(4)
            }} className={activeRating.fourStars ? "btnActive" : "btn"} >4</div>
            
            <div onClick={()=>{
                setactiveRating({
                    oneStar: false,
                    twoStars: false,
                    threeStars: false,
                    fourStars: false,
                    fiveStars: true,
                });
                setRating(5);
            }} className={activeRating.fiveStars ? "btnActive" : "btn"} >5</div>
            </div>
        </div> 
        <button id="submit" onSubmit={handleSubmit}>SUBMIT</button>
    </div>
    
    )
}

export default Rating;