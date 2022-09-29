const InputField = ({ setSearch }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for images"
        className="input-field"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
