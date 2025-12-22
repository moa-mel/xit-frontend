import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .max(50, "Must be 50 characters or less")
        .min(6, "Must be above 6 characters")
})

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
        .required("Password is required")
        .max(50, "Must be 50 characters or less")
        .min(6, "Must be above 6 characters")
});

export const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required")
});

export const verifyEmailSchema = Yup.object({
  otp: Yup.string()
    .required("OTP code is required")
    .length(6, "OTP must be 6 characters"),
});


export const resetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .required("Password is required")
        .matches(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_-])[A-Za-z\d!@#$%^&*()]{6,50}$/,
            "Password must contain at least one uppercase letter, one number, one special character, and be 6 to 50 characters long"
        ),
    confirmPassword: Yup.string()
        .required("Confirm password is required")
        .test("password-match", "Passwords must match", function (value) {
            return this.parent.new_password1 === value;
        })
});