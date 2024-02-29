export function useProfile() {
  const profile = ref<IProfile>();

  const isEditingProfile = useState<boolean>("is-editing-profile", () => false);

  /**
   * ---------------------------------------------------
   * profile  FormState
   * ---------------------------------------------------
   *
   */
  const profileFormState = useState("profile", () => ({
    user: {
      id: 0,
      full_name: "",
      phone_number: "",
      email: "",
      role: "",
      national_id: "",
      created_at: null,
      updated_at: null,
    },
    cases: [{
      id: 0,
      case_uuid: "",
      reported_by: null,
      crime_type: "",
      statement: "",
      location: "",
      status: "",
      assigned_officer: null,
      attachments: null,
      priority: "",
      date_closed: null,
      created_at: null,
      updated_at: null,
    }]
  }));

  /**
   * ---------------------------------------------------
   * Reset profile  FormState
   * ---------------------------------------------------
   *
   */
  const resetProfileFormState = () => {
    profileFormState.value = {
      user: {
        id: 0,
        full_name: "",
        phone_number: "",
        email: "",
        role: "",
        national_id: "",
        created_at: null,
        updated_at: null,
      },
      cases: [{
        id: 0,
        case_uuid: "",
        reported_by: null,
        crime_type: "",
        statement: "",
        location: "",
        status: "",
        assigned_officer: null,
        attachments: null,
        priority: "",
        date_closed: null,
        created_at: null,
        updated_at: null,
      }]
    };
  };


  /**
   * ---------------------------------------------------
   * Get user profile
   * ---------------------------------------------------
   *
   */
  const getUserProfile = async (user_id: string) => {
    try {
      const response = await useApi<IGetSingleUserResponse>(
        `/pages/profile/${user_id}`,
        {
          method: "GET",
        }
      );
      if (response?.success === true) {
        profileFormState.value = response?.data;
        return response?.data
      }
    } catch (error) {
      console.error("Error getting user profile::: ", error);
    }
  };

  /**
   * ---------------------------------------------------
   * Update user profile
   * ---------------------------------------------------
   *
   */
  const updateProfile = async (user_id: number | undefined) => {
    try {
      const response = await useApi<IUpdateUserResponse>(`/user/${user_id}`, {
        method: "PUT",
        data: profileFormState.value.user satisfies IUpdateUserRequest,
      });

      if (response?.success) {
        notification["success"]({
          description: "Profile has been updated successfully.",
          message: "Success",
          placement: "bottomRight",
          duration: 8,
        });

        resetProfileFormState();
        isEditingProfile.value = false;
        return response?.data;
      } else {
        notification["error"]({
          description: "Could not update the profile. Please try again.",
          message: "Failed",
          placement: "bottomRight",
          duration: 8,
        });
      }
    } catch (error) {
      console.error("Error updateProfile::: ", error);
    }
  };

  return {
    profile,
    profileFormState,
    isEditingProfile,
    getUserProfile,
    updateProfile,
    resetProfileFormState,
  };
}
