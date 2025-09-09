import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1>🎉 Welcome to the Quiz App 🎉</h1>
      <Link to="/quiz">
        <button>Start Quiz</button>
      </Link>
    </div>
  );
}
