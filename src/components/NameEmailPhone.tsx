"use client"; // Important for client-side libraries

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Confetti from "react-confetti";

function MyForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  enum FORM_STATE {
    unfilled = "unfilled",
    loading = "loading",
    success = "success",
  }

  const [formState, setFormState] = useState<
    FORM_STATE.unfilled | FORM_STATE.loading | FORM_STATE.success
  >(FORM_STATE.unfilled);

  interface FormData {
    name: string;
    email: string;
    phoneNumber: string;
  }

  // Make a server side request here
  const submitForm = async (data: FormData) => {
    const body = {
      formId: "bLpqKfQVDZus",
      submissions: [
        {
          submissionTime: new Date().toString().replace(/\s*\(.*?\)\s*/, ""),
          questions: [
            {
              id: "bgQa",
              value: data.name,
            },
            {
              id: "ekLR",
              value: data.email,
            },
            {
              id: "xuzd",
              value: data.phoneNumber,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setFormState(FORM_STATE.success);
        setTimeout(() => {
          setFormState(FORM_STATE.success);
        }, 2000);
      } else {
        console.error("Form submission failed:", await response.text());
        setFormState(FORM_STATE.unfilled);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState(FORM_STATE.unfilled);
    }
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    setFormState(FORM_STATE.loading);

    submitForm(data);
  };

  return (
    <div
      className={`flex h-auto w-full items-center justify-center ${
        formState === FORM_STATE.unfilled && ""
      }`}
    >
      {formState === FORM_STATE.unfilled && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-md rounded-3xl bg-white/40 backdrop-blur-md p-10 shadow-sm border border-yoga-sand"
          id="form-bLpqKfQVDZus-unfilled"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-medium mb-4 text-yoga-charcoal leading-tight">
              <span className="italic text-yoga-deep-purple">Register</span> for
              the Workshop
            </h2>
            <p className="text-yoga-charcoal/70">
              Fill in your details below and we'll get back to you shortly.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              {/* <label
                htmlFor="name"
                className="text-yoga-charcoal font-display font-medium block mb-2"
              >
                Enter your Name*
              </label> */}
              <Controller
                name="name"
                control={control}
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="name"
                    type="text"
                    className="w-full rounded-xl border-yoga-sand bg-white p-3 text-yoga-charcoal placeholder:text-yoga-charcoal/50 focus:border-yoga-deep-purple focus:outline-none focus:ring-1 focus:ring-yoga-deep-purple"
                    placeholder="Enter your Name*"
                    value={field.value || ""}
                  />
                )}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">
                  {typeof errors.name?.message === "string"
                    ? errors.name.message
                    : ""}
                </p>
              )}
            </div>

            <div>
              {/* <label
                htmlFor="email"
                className="text-yoga-charcoal font-display font-medium block mb-2"
              >
                Enter your Email*
              </label> */}
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    id="email"
                    type="email"
                    className="w-full rounded-xl border-yoga-sand bg-white p-3 text-yoga-charcoal placeholder:text-yoga-charcoal/50 focus:border-yoga-deep-purple focus:outline-none focus:ring-1 focus:ring-yoga-deep-purple"
                    placeholder="Enter your Email*"
                    value={field.value || ""}
                  />
                )}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">
                  {typeof errors.email?.message === "string"
                    ? errors.email.message
                    : ""}
                </p>
              )}
            </div>

            <div>
              {/* <label
                htmlFor="phoneNumber"
                className="text-yoga-charcoal font-display font-medium block mb-2"
              >
                Enter your Phone Number*
              </label> */}
              <Controller
                name="phoneNumber"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <div className="[&>.PhoneInput]:w-full [&>.PhoneInput]:rounded-xl [&>.PhoneInput]:border [&>.PhoneInput]:border-yoga-sand [&>.PhoneInput]:bg-white [&>.PhoneInput]:p-2 [&>.PhoneInput]:focus-within:border-yoga-deep-purple [&>.PhoneInput]:focus-within:ring-1 [&>.PhoneInput]:focus-within:ring-yoga-deep-purple ">
                    <PhoneInput
                      value={field.value || ""}
                      onChange={field.onChange}
                      className="!bg-white"
                      defaultCountry="IN"
                      placeholder="Enter your Phone Number*"
                    />
                  </div>
                )}
              />
              {errors.phoneNumber && (
                <p className="mt-2 text-sm text-red-500">
                  {typeof errors.phoneNumber?.message === "string"
                    ? errors.phoneNumber.message
                    : ""}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-yoga-deep-purple px-6 py-4 font-display font-medium text-white hover:bg-yoga-deep-purple/90 transition-all mt-4"
            >
              Sign up for the Workshop
            </button>
          </div>
        </form>
      )}
      {formState === FORM_STATE.loading && (
        <div className="relative flex h-full w-full items-center justify-center">
          <div
            className="mx-auto max-w-md rounded-3xl p-10 bg-white/80 backdrop-blur-md shadow-sm border border-yoga-sand"
            id="form-bLpqKfQVDZus-loading"
          >
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-6 h-6 text-yoga-deep-purple animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-medium text-yoga-charcoal">
                Submitting Your Information
              </h3>
              <p className="text-yoga-charcoal/70 mt-2">
                Please wait while we process your request...
              </p>
            </div>
          </div>
        </div>
      )}
      {formState === FORM_STATE.success && (
        <div className="relative flex h-full w-full items-center justify-center">
          <Confetti className="h-full w-full" />
          <div
            className="mx-auto max-w-md rounded-3xl p-10 bg-white/80 backdrop-blur-md shadow-sm border border-yoga-sand"
            id="form-bLpqKfQVDZus-success"
          >
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-display font-medium mb-6 text-yoga-charcoal leading-tight">
                <span className="italic text-yoga-deep-purple">Thank You</span>{" "}
                for Signing Up!
              </h1>
              <div className="space-y-8 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-yoga-deep-purple"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                      Check Your Email
                    </h3>
                    <p className="text-yoga-charcoal/70">
                      We've sent you a confirmation email with all the details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yoga-deep-purple/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-yoga-deep-purple"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-medium text-yoga-charcoal mb-2">
                      Next Steps
                    </h3>
                    <p className="text-yoga-charcoal/70">
                      Our team will get in touch with you soon with further
                      details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyForm;
