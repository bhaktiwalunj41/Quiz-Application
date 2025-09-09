import { useLocation, Link } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="result">
      <h1>🎯 Quiz Completed! 🎯</h1>
      <h2>
        You scored {score} out of {total}
      </h2>
      <Link to="/">
        <button>Play Again</button>
      </Link>
    </div>
  );
}
