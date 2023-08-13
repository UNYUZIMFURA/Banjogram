export interface Props {
  pageSource: string;
  displayUsernameInput: boolean;
}

export interface User {
  username?: string;
  email: string;
  password: string;
}
