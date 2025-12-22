import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError
} from "@reduxjs/toolkit/query/react";

import { toast } from "react-toastify";

// Shared base query
const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// Wrapped base query with auto-refresh + error handling
const baseQueryWithReauth = async (
  args: any,
  api: BaseQueryApi,
  extraOptions: {}
) => {

  let result = await baseQuery(args, api, extraOptions);

  // 🔥 If access token is expired
  if (result.error && result.error.status === 401) {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      if (!refreshToken) throw new Error("No refresh token");

      // Attempt refresh
      const refreshResult = await baseQuery(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { refreshToken },
        },
        api,
        extraOptions
      );

      if (refreshResult.data) {
        const { accessToken } = refreshResult.data as { accessToken: string };

        // Save new token
        localStorage.setItem("accessToken", accessToken);

        // Retry the original request
        result = await baseQuery(args, api, extraOptions);
      } else {
        throw new Error("Refresh failed");
      }

    } catch (error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        toast.error("Session expired. Please login again.");
    }
  }

  // Generic errors
  if (result.error) {
    const err = result.error as FetchBaseQueryError;

    if (err.status === 403) toast.error("Access forbidden");
    else if (err.status === 404) toast.error("Resource not found");
    else if (err.status === 500) toast.error("Server error");

    if (typeof err.data === "object") {
      toast.error((err.data as any)?.message ?? "An error occurred");
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: () => ({}),
});
