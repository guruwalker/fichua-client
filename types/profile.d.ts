declare interface IProfile {
  success: boolean;
  message: string;
  data: {
    user: IUserFormState;
    cases: ICasesFormState[];
  };
}
