import "./style.css";
const Tag = ({ tag }) => {
  const getBackgroundColor = () => {
    switch (tag) {
      case "JavaScript":
        return "#e7e70a";
      case "Text":
      case "Markdown":
        return "gray";
      case "HTML":
        return "orange"
      case "JSON":
        return "#8015dc";
      case "Elm":
        return "green";
      case "Cycript":
      case "YAML":
        return "purple";
      case "C":
        return "blue";
      case "C++":
        return "#00a3ff";
      case "Ruby":
        return "red"
      default:
        return "#dc1543";
    }
  }
  return (
    <div className="tag" style={{ backgroundColor: getBackgroundColor() }}>
      {tag}
    </div>
  );
}
export default Tag;
