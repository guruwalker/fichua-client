declare interface IAnalytics {
  pie_chart: {
    open_cases: number;
    closed_cases: number;
  }
  bar_chart: {
    officer_id: number;
    number_of_closed_cases: number;
    officer_details: IUserFormState
  }[]
}


declare interface IFetchAnalytics {
  success: boolean;
  message: string;
  data: IAnalytics;
}
