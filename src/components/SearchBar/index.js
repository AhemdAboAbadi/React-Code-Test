import "./style.css";
import InputField from "./InputField";
import Button from "../Button";

const SearchBar = ({ setSearch, setShouldTriggerSearch }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setShouldTriggerSearch((prev) => !prev);
  };
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <Button setShouldTriggerSearch={setShouldTriggerSearch} />
      <InputField setSearch={setSearch} />
    </form>
  );
};

export default SearchBar;
