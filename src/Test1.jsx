import Test2 from "./Test2";
import { AppContext } from "./Context";

function Test1() {
  return (
    <AppContext.Consumer>
      {(context) => {
        console.log(context);
        return (
          <>
            <p>Test1 Component - {context.name}</p>
            <Test2 name={context.name} />
          </>
        );
      }}
    </AppContext.Consumer>
  );
}

export default Test1;
