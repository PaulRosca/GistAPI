import { useEffect, useMemo, useState } from "react";
import { searchUserGist } from "../../services";
import throttle from "lodash/throttle";
import "./style.css";

const Search = ({ setGists, setLoading }) => {
  const [searchedUser, setSearchedUser] = useState("");
  const changeSearchedUser = (e) => {
    setSearchedUser(e.target.value);
    fetchGists(e.target.value);
  }
  const fetchGists = useMemo(() =>
    throttle(async (newUsername) => {
      try {
        setLoading(true);
        const resp = await searchUserGist(newUsername);
        setGists(resp);
      }
      catch (e) {
        setGists([]);
        console.log("ERROR", e.message);
      }
      setLoading(false);
    }, 400)
    , []);

  useEffect(() => {
    return () => {
      fetchGists.cancel();
    }
  }, []);

  return (
    <div className="search">
      <div className="search-label">
        Username
      </div>
      <input type="text" value={searchedUser} onChange={changeSearchedUser} className="search-input" />
    </div>
  );
}
export default Search;
