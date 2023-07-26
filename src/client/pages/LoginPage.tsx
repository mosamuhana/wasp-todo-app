import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "@wasp/auth/forms/Login";

import { AuthContainer } from "../components/AuthContainer";

export default function LoginPage() {
  return (
    <AuthContainer>
      <div>
        <LoginForm
          appearance={{
            colors: {
              brand: "var(--auth-form-brand)",
              brandAccent: "var(--auth-form-brand-accent)",
              submitButtonText: "var(--auth-form-submit-button-text-color)",
            },
          }}
        />
        <div className="mt-4 text-center">
          If you don't have an account go to{" "}
          <Link
            to="/signup"
            className="text-primary-500 hover:text-primary-800 underline"
          >
            Sign Up
          </Link>
          .
        </div>
      </div>
    </AuthContainer>
  );
}
