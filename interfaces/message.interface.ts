export interface IMessage {
  type: string;
  id?: string;
  text: string;
  sender?: string;
  senderName?: string;
}
