import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Input({ input, parameter, onChange, type }) {
  return (
    <div
      style={{
        margin: "5%",
        marginRight: "20%",
        marginLeft: "20%",
        justifyContent: "center"
      }}
    >
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">{type}</InputGroup.Text>
        <Form.Control
          type="number"
          placeholder={parameter}
          value={input}
          onChange={onChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
    </div>
  );
}
