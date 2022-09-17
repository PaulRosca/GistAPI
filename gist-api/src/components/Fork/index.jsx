import "./style.css";
const Fork = ({ userName, avatar }) => {
  return (
    <div className="fork">
      <div className="fork-username">
        {userName}
      </div>
      <img src={avatar} className="fork-image" alt={`${userName} avatar`}/>
    </div>
  )
}
export default Fork;
