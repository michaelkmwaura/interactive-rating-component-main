import { useState } from 'react'
import Card from "./components/Card"
import Rating from "./components/Rating"
import ThankYou from "./components/thankYou"
import './App.css'

function App() {
  const [ThankYouPage, setThankYouPage] = useState(false);
  const [rating, setRating] = useState(null);
  
  return (
    <>
    <Card>
      {ThankYouPage ? (<ThankYou rating={rating} />) : (<Rating rating={rating} setRating={setRating} setThankYouPage={setThankYouPage} />)}
    </Card>
    </>
  );
}

export default App;
