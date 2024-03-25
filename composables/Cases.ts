export function useCases() {

  const userId = useCookie("user_id")

  const userRole = useCookie<string | undefined>("role");

  const router = useRouter();

  const cases = ref<IGetAllCases>();

  const isEditingCases = useState<boolean>("is-editing-case", () => false);

  /**
   * ---------------------------------------------------
   * Cases FormState
   * ---------------------------------------------------
   *
   */
  const casesFormState = useState<ICasesFormState>("cases", () => ({
    id: 0,
    case_uuid: "",
    reported_by: null,
    crime_type: "",
    statement: "",
    is_anonymous: false,
    location: "",
    status: "",
    assigned_officer: null,
    priority: "",
    date_closed: null,
    created_at: null,
    updated_at: null,
  }));

  /**
   * ---------------------------------------------------
   * Reset Cases FormState
   * ---------------------------------------------------
   *
   */
  const resetCasesFormState = () => {
    casesFormState.value = {
      id: 0,
    case_uuid: "",
    reported_by: null,
    crime_type: "",
    statement: "",
    is_anonymous: false,
    location: "",
    status: "",
    assigned_officer: null,
    priority: "",
    date_closed: null,
    created_at: null,
    updated_at: null,
    };
  };
  const generateShortUUID = () => {
    const uuidLength = 16;
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let uuid = "";

    for (let i = 0; i < uuidLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters.charAt(randomIndex);
    }
    return uuid;
  };

  /**
   * ---------------------------------------------------
   * Get all cases
   * ---------------------------------------------------
   *
   */
  const getAllCases = async () => {
    try {
      const response = await useApi<IGetAllCases>("/cases", {
        method: "GET",
      });

      cases.value = response?.data
      return response?.data;
    } catch (error) {
      console.error("Error getAllCases::: ", error);
    }
  };

  /**
   * ---------------------------------------------------
   * Create new case
   * ---------------------------------------------------
   *
   */
  const createCase = async () => {
    try {

      casesFormState.value.case_uuid = generateShortUUID();
      casesFormState.value.reported_by = userId.value
      casesFormState.value.status = 'reported'
      casesFormState.value.assigned_officer = null
      casesFormState.value.priority = 'unknown'
      casesFormState.value.date_closed = ''

      const response = await useApi<ICreateCasesResponse>("/cases", {
        method: "POST",
        data: casesFormState.value satisfies ICreateCasesRequest,
      });
      if (response?.success) {
        notification["success"]({
          description: "Case created successfully.",
          message: "Success",
          placement: "bottomRight",
          duration: 8,
        });

        userRole.value === 'user' ? router.push("/updates") : router.push("/cases");
        resetCasesFormState();
        return response?.data;
      } else {
        notification["error"]({
          description:
            "Could not create the case. Please try again.",
          message: "Failed",
          placement: "bottomRight",
          duration: 8,
        });
      }
    } catch (error) {
      console.error("Error createCase::: ", error);
    }
  };

  /**
   * ---------------------------------------------------
   * Get single cases
   * ---------------------------------------------------
   *
   */
  const getSingleCase = async (case_id: string | number) => {
    try {
      const response = await useApi<IGetSingleCase>(`/cases/${case_id}`, {
        method: "GET",
      });

      if (response?.success) {
        casesFormState.value = response?.data;
        return response?.data;
      }
    } catch (error) {
      console.error("Error getSingleCase::: ", error);
    }
  };

  /**
   * ---------------------------------------------------
   * Update single cases
   * ---------------------------------------------------
   *
   */
  const updateSingleCase = async (case_id: number | undefined) => {
    try {
      const response = await useApi<IUpdateCaseResponse>(`/cases/${case_id}`, {
        method: "PUT",
        data: casesFormState.value satisfies IUpdateCasesRequest,
      });
      if (response?.success) {
        notification["success"]({
          description: "Case updated successfully.",
          message: "Success",
          placement: "bottomRight",
          duration: 8,
        });

        userRole.value === 'user' ? router.push("/updates") : router.push("/cases");
        resetCasesFormState();
        isEditingCases.value = false;
        return response?.data;
      } else {
        notification["error"]({
          description:
            "Could not update the case. Please try again.",
          message: "Failed",
          placement: "bottomRight",
          duration: 8,
        });
      }
    } catch (error) {
      console.error("Error updateSingleCase::: ", error);
    }
  };

  /**
   * ---------------------------------------------------
   * Delete single cases
   * ---------------------------------------------------
   *
   */
  const deleteSingleCase = async (case_id: number) => {
    try {
      const deleteCaseResponse = await useApi<IDeleteCaseResponse>(`/cases/${case_id}`, {
        method: "DELETE",
      });
      if (deleteCaseResponse?.success === true) {
        notification["success"]({
          description: "Case deleted successfully.",
          message: "Success",
          placement: "bottomRight",
          duration: 8,
        });

        return deleteCaseResponse.data?.data;
      } else if (deleteCaseResponse.data?.code === "E_ROW_NOT_FOUND") {
        notification["warning"]({
          description: deleteCaseResponse.data?.message,
          message: "Failed",
          placement: "bottomRight",
          duration: 8,
        });
      } else if (deleteCaseResponse.data?.code === "ER_ROW_IS_REFERENCED_2") {
        notification["warning"]({
          description: deleteCaseResponse.data?.message,
          message: "Failed",
          placement: "bottomRight",
          duration: 8,
        });
      }
    } catch (error) {
      console.error("Error deleteSingleCase::: ", error);
    }
  };

  return {
    cases,
    casesFormState,
    isEditingCases,
    getAllCases,
    createCase,
    getSingleCase,
    updateSingleCase,
    deleteSingleCase,
    resetCasesFormState
  };
}
