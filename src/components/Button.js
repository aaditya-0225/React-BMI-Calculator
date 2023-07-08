import Button from "react-bootstrap/Button";
export default function Buttons({ onclick }) {
  return (
    <div style={{ margin: "50%", marginTop: "2%", marginBottom: "2%" }}>
      <Button variant="dark" onClick={onclick}>
        Calculate
      </Button>
    </div>
  );
}
