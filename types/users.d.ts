declare interface IUserFormState {
  id?: number;
  full_name: string;
  phone_number: string;
  email: string;
  password?: string;
  role: string;
  national_id: string
  created_at?: Date | null;
  updated_at?: Date | null;
}

declare interface IGetAllUsers {
  success: boolean;
  message: string;
  data: IUserFormState[];
}

declare interface ICreateUserRequest extends IUserFormState {
  // Additional properties specific to the request, if any
}

declare interface ICreateUserResponse {
  success: boolean;
  message: string;
  data: IUserFormState;
}

declare interface IGetSingleUserResponse {
  success: boolean;
  message: string;
  data: IUserFormState;
}

declare interface IUpdateUserRequest extends IUserFormState {
  // Additional properties specific to the request, if any
}

declare interface IUpdateUserResponse {
  success: boolean;
  message: string;
  data: IUserFormState;
}

declare interface IDeleteUserResponse {
  success: boolean;
  message: string;
  data: null;
  code?: string;
}


