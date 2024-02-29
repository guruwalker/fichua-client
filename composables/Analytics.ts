export function useAnalytics() {
  const analytics = ref<IFetchAnalytics>();

  /**
   * ---------------------------------------------------
   * Analytics FormState
   * ---------------------------------------------------
   *
   */
  const analyticsState = useState<IAnalytics>("analytics", () => ({
    pie_chart: {
      open_cases: 0,
      closed_cases: 0
    },
    horizontal_bar_chart: [{
      officer_id: 0,
      number_of_closed_cases: 0,
      officer_details: {
        id: 0,
        full_name: "",
        phone_number: "",
        email: "",
        role: "",
        national_id: "",
        created_at: null,
        updated_at: null
      }
    }],
    bar_chart: {
      January: 0,
      February: 0,
      March: 0,
      April: 0,
      May: 0,
      June: 0,
      July: 0,
      August: 0,
      September: 0,
      October: 0,
      November: 0,
      December: 0
    }
  }));

  /**
   * ---------------------------------------------------
   * Reset analytics
   * ---------------------------------------------------
   *
   */
  const resetAnalyticsState = () => {
    analyticsState.value = {
      pie_chart: {
        open_cases: 0,
        closed_cases: 0
      },
      horizontal_bar_chart: [{
        officer_id: 0,
        number_of_closed_cases: 0,
        officer_details: {
          id: 0,
          full_name: "",
          phone_number: "",
          email: "",
          role: "",
          national_id: "",
          created_at: null,
          updated_at: null
        }
      }],
      bar_chart: {
        January: 0,
        February: 0,
        March: 0,
        April: 0,
        May: 0,
        June: 0,
        July: 0,
        August: 0,
        September: 0,
        October: 0,
        November: 0,
        December: 0
      }
    };
  };

  /**
   * ---------------------------------------------------
   * Fetch analytics
   * ---------------------------------------------------
   *
   */
  const getAnalytics = async () => {
    try {
      const response = await useApi<IFetchAnalytics>("/pages/analytics", {
        method: "GET",
      });

      analyticsState.value = response?.data
      return response?.data;
    } catch (error) {
      console.error("Error getAnalytics::: ", error);
    }
  };

  return {
    analytics,
    analyticsState,
    getAnalytics,
    resetAnalyticsState
  };
}
