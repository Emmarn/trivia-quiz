import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer.js";
import Header from "./Components/Header/Header.js";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import lightbg1 from "./img/lightbg1.jpg";


function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  


  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url(' + lightbg1 + ')', backgroundSize: 'auto'}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home setName={setName} name={name} fetchQuestions={fetchQuestions}/>}>
          </Route>

          <Route path="/quiz" element={<Quiz name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions} />}>

          </Route>
          <Route path="/result" element={<Result name={name} score={score} />}>
          </Route>
          </Routes>
      
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
