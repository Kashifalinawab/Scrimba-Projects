import React, { useEffect, useState } from "react";

function Home(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=17&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => setState(data.results));
  }, []);
  console.log(state);

  return (
    <div>
      {state.map((data) => {
        return (
          <div>
            <h3>{data.question}</h3>
          </div>
        );
      })}{" "}
    </div>
  );
}

export default Home;
