import { Button } from "@material-ui/core";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom/dist";
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <span className="titleFinal">Final Score : {score}</span>
      <Button
      className="btn"
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
      <Button
      className="btn"
      variant="contained"
            color="secondary"
            size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        a href="https://play-it-games.netlify.app/" 
      >
        Back to Play it!
      </Button>
    </div>
  );
};

export default Result;
