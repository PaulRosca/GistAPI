import "./style.css";
import { getGistForks } from "../../services";
import { useEffect, useState } from "react";
import Fork from "../Fork";
import Tag from "../Tag";
const Gist = ({ data }) => {
  const [forks, setForks] = useState([]);
  const getTags = () => {
    const tags = [];
    for (const file in data?.files) {
      if (data.files[file].language && !tags.includes(data.files[file].language)) {
        tags.push(data.files[file].language);
      }
    }
    return tags.map((tag, index)=><Tag key={`tag_${index}`} tag={tag}/>)
  }
  useEffect(() => {
    const getForks = async () => {
      let fetchedForks = [];
      try {
        const resp = await getGistForks(data.id);
        if (resp.length <= 3) {
          fetchedForks = resp;
        }
        else {
          fetchedForks = [resp[resp.length - 3], resp[resp.length - 2], resp[resp.length - 1]];
        }
        setForks(fetchedForks);
      }
      catch (e) {
        console.log("ERROR", e)
      }
    }
    getForks();
  }, []);

  const redirect = () => {
    const file = Object.keys(data.files)[0];
    window.open(data.files[file]?.raw_url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="gist" onClick={redirect}>
      <div className="gist-id">
        {data.id}
        <div className="gist-tags">
          {getTags()}
        </div>
      </div>
      <div className="gist-description">
        {data.description}
      </div>
      {
        forks.length ? (<div className="gist-fork-list-title">Forks</div>) : null
      }
      <div className="gist-fork-list">
        {forks.map((fork, index) => <Fork key={`fork_${index}`} userName={fork?.owner?.login} avatar={fork?.owner?.avatar_url} />)}
      </div>
    </div>
  )
};
export default Gist;
