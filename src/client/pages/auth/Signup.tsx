import React from "react";
import { Link } from "react-router-dom";
import { SignupForm } from "@wasp/auth/forms/Signup";

import { AuthContainer } from "../../components/AuthContainer";

export default function SignupPage() {
  return (
    <AuthContainer>
      <div>
        <SignupForm
          appearance={{
            colors: {
              brand: "var(--auth-form-brand)",
              brandAccent: "var(--auth-form-brand-accent)",
              submitButtonText: "var(--auth-form-submit-button-text-color)",
            },
          }}
        />
        <div className="mt-4 text-center">
          If you already have an account go to{" "}
          <Link
            to="/login"
            className="text-primary-500 hover:text-primary-800 underline"
          >
            Login
          </Link>
          .
        </div>
      </div>
    </AuthContainer>
  );
}
