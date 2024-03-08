export function useUsers() {
  const users = ref<IGetAllUsers>();

  const router = useRouter();

  const userId = useCookie<string | number>("user_id");
  const userFullName = useCookie<string | undefined>("full_name");
  const userName = useCookie<string | undefined>("username");
  const userEmail = useCookie<string | undefined>("email");
  const userRole = useCookie<string | undefined>("role");
  const userPhone = useCookie<string | undefined>("phone_number");
  const userOrganizationId = useCookie<string | number | undefined>(
    "organization_id"
  );

  const setUserCookies = (user: IGetSingleUserResponse) => {
    userRole.value = user?.data?.role;
    userFullName.value = user?.data.full_name;
    userName.value = user?.data?.username;
    userEmail.value = user?.data?.email;
    userPhone.value = user?.data.phone_number;
  };

  const logout = () => {
    userRole.value = null;
    userFullName.value = null;
    userName.value = null;
    userEmail.value = null;
    userPhone.value = null;
    userId.value = null;
    router.push("/");
  };

  const isEditingUser = useState<boolean>("is-editing-user", () => false);

  /**
   * ---------------------------------------------------
   * Users  FormState
   * ---------------------------------------------------
   *
   */
  const userFormState = useState<IUserFormState>("user", () => ({
    id: 0,
    full_name: "",
    phone_number: "",
    email: "",
    role: "",
    national_id: "",
    created_at: null,
    updated_at: null,
  }));

  /**
   * ---------------------------------------------------
   * Reset users  FormState
   * ---------------------------------------------------
   *
   */
  const resetUsersFormState = () => {
    userFormState.value = {
      id: 0,
      full_name: "",
      phone_number: "",
      email: "",
      role: "",
      national_id: "",
      created_at: null,
      updated_at: null,
    };
  };

  /**
   * ---------------------------------------------------
   * Get all users
   * ---------------------------------------------------
   *
   */
  const getAllUsers = async () => {
    try {
      const response = await useApi<IGetAllUsers>("/users", {
        method: "GET",
      });

      users.value = response?.data.data;
      return response?.data;
    } catch (error) {
      console.error("Error getAllUsers::: ", error);
    }
  };

    /**
   * ---------------------------------------------------
   * Create new user
   * ---------------------------------------------------
   *
   */
    const createUser = async () => {
      try {
        const response = await useApi<ICreateUserResponse>(
          "/auth/register",
          {
            method: "POST",
            data: userFormState.value satisfies ICreateUserRequest,
          }
        );

        if (response?.success) {
          notification["success"]({
            description: "The user has been created successfully.",
            message: "Success",
            placement: "bottomRight",
            duration: 8,
          });

          router.push("/users");
          resetUsersFormState();
          return response?.data;
        } else {
          notification["error"]({
            description: "Could not create the user. Please try again.",
            message: "Failed",
            placement: "bottomRight",
            duration: 8,
          });
        }
      } catch (error) {
        console.error("Error createUser::: ", error);
      }
    };

  /**
   * ---------------------------------------------------
   * Get single user
   * ---------------------------------------------------
   *
   */
  const getSingleUser = async (user_id: string) => {
    try {
      const response = await useApi<IGetSingleUserResponse>(
        `/users/${user_id}`,
        {
          method: "GET",
        }
      );

      console.log('response', response.data)

      if (response?.success === true) {
        userFormState.value = response?.data;
        return response?.data
      }
    } catch (error) {
      console.error("Error getSingleUser::: ", error);
    }
  };

  /**
   * ---------------------------------------------------
   * Update single user
   * ---------------------------------------------------
   *
   */
  const updateSingleUser = async (user_id: number | undefined) => {
    try {
      const response = await useApi<IUpdateUserResponse>(`/users/${user_id}`, {
        method: "PUT",
        data: userFormState.value satisfies IUpdateUserRequest,
      });

      if (response?.success) {
        notification["success"]({
          description: "User has been updated successfully.",
          message: "Success",
          placement: "bottomRight",
          duration: 8,
        });

        router.push("/users");
        resetUsersFormState();
        isEditingUser.value = false;
        return response?.data;
      } else {
        notification["error"]({
          description: "Could not update the user. Please try again.",
          message: "Failed",
          placement: "bottomRight",
          duration: 8,
        });
      }
    } catch (error) {
      console.error("Error updateSingleUser::: ", error);
    }
  };

  /**
   * ---------------------------------------------------
   * Delete single user
   * ---------------------------------------------------
   *
   */
  const deleteSingleUser = async (user_id: number) => {
    try {
      const deleteUserResponse = await useApi<IDeleteUserResponse>(`/users/${user_id}`, {
        method: "DELETE",
      });

      if (deleteUserResponse?.success === true) {
        notification["success"]({
          description: "The user has been deleted successfully.",
          message: "Success",
          placement: "bottomRight",
          duration: 8,
        });

        return deleteUserResponse.data?.data;
      } else if (deleteUserResponse.data?.code === "E_ROW_NOT_FOUND") {
        notification["warning"]({
          description: deleteUserResponse.data?.message,
          message: "Failed",
          placement: "bottomRight",
          duration: 8,
        });
      } else if (deleteUserResponse.data?.code === "ER_ROW_IS_REFERENCED_2") {
        notification["warning"]({
          description: deleteUserResponse.data?.message,
          message: "Failed",
          placement: "bottomRight",
          duration: 8,
        });
      }
    } catch (error) {
      console.error("Error deleteSingleUser::: ", error);
    }
  };

  /**
   * ---------------------------------------------------
   * Get logged in user data
   * ---------------------------------------------------
   *
   */
  const getLoggedInUser = async (user_id: string | number) => {
    try {
      const response = await Authentication<IGetSingleUserResponse>(
        `/users/${user_id}`,
        {
          method: "GET",
        }
      );
      setUserCookies(response?.data);

      return response?.data;
    } catch (error) {
      console.error("Error getLoggedInUser::: ", error);
    }
  };

  return {
    users,
    userFormState,
    isEditingUser,
    createUser,
    getAllUsers,
    getSingleUser,
    updateSingleUser,
    deleteSingleUser,
    getLoggedInUser,
    resetUsersFormState,
    logout,
  };
}
