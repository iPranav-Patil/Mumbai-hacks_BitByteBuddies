import React from "react";

const RegistrationForm = ({ onToggleForm }) => {
  return (
    <div class="bg-grey-lighter h-full flex flex-col">
      <div class="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div class="bg-white px-6 py-8 rounded  text-black w-full">
          <h1 class="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            class="block border border-green-700 w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            class="block border border-green-700 w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            class="block border border-green-700 w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            class="block border border-green-700 w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            class="w-full text-center py-3 rounded bg-gradient-to-r from-green-500 via-teal-600 to-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Create Account
          </button>

          <div class="text-center text-md text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              class="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div class="text-grey-dark mt-6">
          Already have an account? &nbsp;
          <a
            onClick={onToggleForm}
            class="no-underline font-semibold border-b border-blue text-green-600 hover:cursor-pointer"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
