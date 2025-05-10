import { Form } from "./components/Form";
import { MessageList } from "./components/MessageList";
import { GlobalStyles } from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <h1>Happy Thoughts</h1>
      <Form />
      <MessageList />
    </>
  );
};
