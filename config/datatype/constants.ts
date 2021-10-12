export interface RoutesDataTypes {
  name: string;
  title: string;
  path: string;
  placement?: Array<string>;
}

export interface BankDataTypes {
  name: string;
  "account-number": string;
  "account-owner": string;
}
