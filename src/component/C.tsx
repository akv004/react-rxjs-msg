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

export const C = (props: PropsType) => {
  const [messages, setMessages] = React.useState<any>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //setMessages( e.target.value);
    messageService.sendMessage(e.target.value);
  };

  return (
    <PageAWrapper>
      <div>
        <h1>Component C</h1>
        <input name={""} onChange={onChange} />
      </div>
    </PageAWrapper>
  );
};
