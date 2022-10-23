import "./App.css";
import React from "react";
import axios from "axios";

import Card from "./component/card";

export default function App() {
  const [data, setData] = React.useState([]);
  const [tema, setTema] = React.useState("");

  React.useEffect(() => {
    const topik = [
      "indonesia",
      "business",
      "world",
      "academia/opinion",
      "life",
      "travel",
      "front-row",
      "sports",
    ];
    const now = new Date();

    async function restData() {
      const getData = await axios
        .get(
          "https://jakpost.vercel.app/api/category/" +
            topik[now.getSeconds() % topik.length]
        )
        .then(
          (data) => setData(data.data.posts),
          setTema(topik[now.getSeconds() % topik.length])
        )
        .catch((er) => console.log(er.response));

      return getData;
    }

    restData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        "flex-wrap": "wrap",
        "flex-direction": "column",
        "align-content": "center",
      }}
    >
      <h1 style={{ width: 450, textAlign: "center" }}>Kelompok 22</h1>
      <p style={{ width: 450, textAlign: "center", fontWeight: "bold" }}>
        News About {tema === "academia/opinion" ? "opini" : tema}
      </p>
      {data.map((item, i) => {
        return <Card key={i} data={item} />;
      })}
    </div>
  );
}
