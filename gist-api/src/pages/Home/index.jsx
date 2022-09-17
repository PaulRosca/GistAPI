import { useState } from 'react';
import Search from "../../components/Search";
import Gist from "../../components/Gist";
import Title from "../../components/Title";
import "./style.css";

function Home() {
  const [gists, setGists] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div className="home">
      <Title />
      <Search setGists={setGists} setLoading={setLoading} />
      {
        loading ? <div className="loading">Loading...</div> : gists && gists.map((gist, index) => <Gist key={`gist_${index}`} data={gist} />)
      }
    </div>
  );
}

export default Home;
