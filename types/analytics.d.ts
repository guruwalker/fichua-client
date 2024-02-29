declare interface IAnalytics {
  pie_chart: {
    open_cases: number;
    closed_cases: number;
  }
  horizontal_bar_chart: {
    officer_id: number;
    number_of_closed_cases: number;
    officer_details: IUserFormState
  }[]
  bar_chart: {
    January: number;
    February: number;
    March: number;
    April: number;
    May: number;
    June: number;
    July: number;
    August: number;
    September: number;
    October: number;
    November: number;
    December: number;
  }
}


declare interface IFetchAnalytics {
  success: boolean;
  message: string;
  data: IAnalytics;
}
