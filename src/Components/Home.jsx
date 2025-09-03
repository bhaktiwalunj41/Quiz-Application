import React from "react";
import {useNavigate} from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();

    const startQuiz = ()=>{
        navigate("/quiz")
    }

   

    return(
    <div>
        <h1>Welcome to Quiz...!!🎉</h1>
        <p>Start and Test Your knowledge and see how many questions you can answer correctly✅</p>
        <button onClick={startQuiz()}>Start Quiz</button>
    </div>
    );
}

export default Home;