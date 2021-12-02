import { Observable, Subject } from "rxjs";

const subject = new Subject();

interface Message {
  type: string;
  payload: any;
}

export const messageService = {
  sendMessage: (message: any) => subject.next({ text: message }),
  clearMessage: (value: void) => subject.next(value),
  onMessage: () => subject.asObservable()
};
