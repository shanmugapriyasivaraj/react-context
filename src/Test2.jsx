import Test3 from "./Test3";

function Test2(props) {
  return (
    <>
      <p>Test2 Component - {props.name}</p>
      <Test3 name={props.name} />
    </>
  );
}

export default Test2;
