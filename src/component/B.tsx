// @flow
import * as React from "react";
import styled from "styled-components";
import { messageService } from "../utils/MessageService";

type PropsType = {
  color?: string;
  children?: React.ReactNode;
};

const PageAWrapper = styled.section`
  padding: 4em;
  border: 0.03em dotted orange;
`;

export const B = React.memo((props: PropsType) => {
  const [messages, setMessages] = React.useState<any>([]);
  React.useEffect(() => {
    // subscribe to home component messages
    const subscription = messageService.onMessage().subscribe((message) => {
      if (message) {
        // add message to local state if not empty
        setMessages([...messages, message]);
      } else {
        // clear messages when empty message received
        setMessages([]);
      }
    });

    // return unsubscribe method to execute when component unmounts
    return subscription.unsubscribe;
  }, []);

  return (
    <PageAWrapper>
      <div>
        <h1>Component B</h1>
        <div>{messages?.length > 0 ? messages[0].text : ""}</div>
      </div>
    </PageAWrapper>
  );
});
