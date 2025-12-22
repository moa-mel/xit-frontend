import { apiSlice } from "../api/apiSlice";

// Request interface
export interface ILoginPayload {
    email: string;
    password: string;
}

// Response interface
export interface ILoginResponse {
    accessToken: string;
    refreshToken?: string;
    user: {
        id: string;
        email: string;
        firstName?: string;
        lastName?: string;
    };
}

// Error response interface
export interface IAuthError {
    message: string;
    statusCode: number;
}

export interface IResetPasswordData {
    message: string;
}

// Register payload interface
export interface IRegisterPayload {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface ISignUpResponse {
  message: string;
  data: {
    identifier: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}


export const authService = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponse, ILoginPayload>({
            query: (body) => ({
                url: "/auth/login",
                method: "POST",
                body,
            }),
            // Optional: Store token in localStorage on success
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data.accessToken) {
                        localStorage.setItem("accessToken", data.accessToken);
                        if (data.refreshToken) {
                            localStorage.setItem("refreshToken", data.refreshToken);
                        }
                    }
                } catch (error) {
                    console.error("Login failed:", error);
                }
            },
            // Invalidate tags after successful login
            invalidatesTags: ["User"],
        }),

        signUp: builder.mutation<ISignUpResponse, IRegisterPayload>({
            query: (body) => ({
                url: "/auth/signup",
                method: "POST",
                body,
            }),
            invalidatesTags: ["User"],
        }),

        logout: builder.mutation<void, void>({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    await queryFulfilled;
                    // Clear tokens from localStorage
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                } catch (error) {
                    console.error("Logout failed:", error);
                }
            },
            invalidatesTags: ["User"],
        }),

        refreshToken: builder.mutation<{ accessToken: string }, void>({
            query: () => ({
                url: "/auth/refresh-token",
                method: "POST",
                body: {
                    refreshToken: localStorage.getItem("refreshToken"),
                },
            }),
            async onQueryStarted(arg, { queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data.accessToken) {
                        localStorage.setItem("accessToken", data.accessToken);
                    }
                } catch (error) {
                    console.error("Token refresh failed:", error);
                    // Clear invalid tokens
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("refreshToken");
                }
            },
        }),

        getCurrentUser: builder.query<ILoginResponse["user"], void>({
            query: () => "/auth/me",
            providesTags: ["User"],
        }),

        forgotPassword: builder.mutation({
            query: (body) => ({
                url: "/auth/forget-password",
                method: "POST",
                body
            })
        }),
        resetPassword: builder.mutation({
            query: ({body,  identifier }) => ({
                url: `/auth/reset-password/${identifier}`,
                method: "POST",
                body
            })
        }),
        verifyEmail: builder.mutation({
            query: ({ otp, identifier, type }) => ({
                url: `/auth/verify-email/${identifier}`,
                method: "POST",
                body: { otp, type },
            }),
        }),


    }),
});

// Export hooks
export const {
    useLoginMutation,
    useSignUpMutation,
    useLogoutMutation,
    useRefreshTokenMutation,
    useGetCurrentUserQuery,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useVerifyEmailMutation,
    endpoints,
} = authService;