const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  return (
    <div onClick={event => onClick(value)}
      style={{
        padding: 10,
        border: "1px solid black",
        marginBottom: "0.5rem",
      }}
    >
      {value}
    </div>
  );
};

export default Number;
