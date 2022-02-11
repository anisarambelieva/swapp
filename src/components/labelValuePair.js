const LabelValuePair = ({ label, value }) => (
  <p style={{ color: "#4e5b6e", margin: "0", fontWeight: "bold" }}>
    {label}: <span style={{ color: "#4bd5ee" }}>{value}</span>
  </p>
);

export default LabelValuePair;
