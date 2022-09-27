const Operation = ({ value }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  return (
    <div
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

export default Operation;
