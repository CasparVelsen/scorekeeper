import Player from "../components/Player";
import Form from "../components/Form";

export default function HomePage() {
  return (
    <>
      <Form />
      <Player name={"Max Mustermann"} score={"10"} />;
    </>
  );
}
