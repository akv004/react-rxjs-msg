// @flow
import * as React from "react";
import { messageService } from "./utils";
import styled from "styled-components";

type Props = {};

type PropsType = {
  color?: string;
  children?: React.ReactNode;
};

export const PageA = React.memo((props: Props) => {
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
        <h1>Component A</h1>
        <div>{messages?.length > 0 ? messages[0].text : ""}</div>
      </div>
    </PageAWrapper>
  );
});

const PageAWrapper = styled.section`
  padding: 4em;
  border: 0.03em dotted orange;
`;
