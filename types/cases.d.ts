declare interface ICasesFormState {
  id?: number;
  case_uuid: string;
  reported_by: string | number | null;
  crime_type: string;
  statement: string;
  location: string;
  status: string;
  assigned_officer: number | null;
  attachments: string | null;
  priority: string;
  date_closed: string | Date | null;
  created_at?: Date | null;
  updated_at?: Date | null;
  reporter?: IUserFormState | null;
  assigned?: IUserFormState | null;
}

declare interface IGetAllCases {
  success: boolean;
  message: string;
  data: {
    meta: IMeta;
    data: ICasesFormState[];
  }
}

declare interface IGetSingleCase {
  success: boolean;
  message: string;
  data: ICasesFormState;
}

declare interface ICreateCasesRequest extends ICasesFormState {
  // Additional properties specific to the request, if any
}

declare interface ICreateCasesResponse {
  success: boolean;
  message: string;
  data: ICasesFormState;
}

declare interface IUpdateCasesRequest extends ICasesFormState {
  // Additional properties specific to the request, if any
}

declare interface IUpdateCaseResponse {
  success: boolean;
  message: string;
  data: ICasesFormState;
}

declare interface IDeleteCaseResponse {
  success: boolean;
  message: string;
  data: null;
  code?: string;
}
