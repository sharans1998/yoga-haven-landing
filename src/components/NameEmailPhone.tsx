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
      className={`flex h-[450px] w-full items-center justify-center md:h-[400px] ${
        formState === FORM_STATE.unfilled && "lg:h-96"
      }`}
    >
      {formState === FORM_STATE.unfilled && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-md rounded-md bg-[#fff] p-8 shadow-lg"
          id="form-bLpqKfQVDZus-unfilled"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="text-gray-700 block text-sm font-medium"
            >
              Enter your Name*
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  id="name"
                  type="text"
                  className="mt-1 w-full rounded-md border p-2"
                  value={field.value || ""}
                />
              )}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500">
                {typeof errors.name?.message === "string"
                  ? errors.name.message
                  : ""}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-gray-700 block text-sm font-medium"
            >
              Enter your Email*
            </label>
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
                  className="mt-1 w-full rounded-md border border-lightGray p-2"
                  value={field.value || ""}
                />
              )}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {typeof errors.email?.message === "string"
                  ? errors.email.message
                  : ""}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="text-gray-700 block text-sm font-medium"
            >
              Enter your Phone Number*
            </label>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <PhoneInput
                  value={field.value || ""}
                  onChange={field.onChange}
                  className="mt-1 w-full rounded-md border border-lightGray !bg-[#fff] p-2"
                  defaultCountry="IN"
                />
              )}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-500">
                {typeof errors.phoneNumber?.message === "string"
                  ? errors.phoneNumber.message
                  : ""}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded bg-primary px-4 py-2 font-bold text-white hover:shadow-lg"
          >
            Sign up for the Workshop
          </button>
        </form>
      )}
      {formState === FORM_STATE.loading && (
        <div className="relative flex h-full w-full items-center justify-center">
          <div
            className="mx-auto max-w-md rounded-md p-8 shadow-lg"
            id="form-bLpqKfQVDZus-loading"
          >
            <p className="text-center">Submitting...</p>
          </div>
        </div>
      )}
      {formState === FORM_STATE.success && (
        <div className="relative flex h-full w-full items-center justify-center">
          <Confetti className="h-full w-full" />
          <div
            className="mx-auto max-w-md rounded-md p-8 shadow-lg"
            id="form-bLpqKfQVDZus-success"
          >
            <p className="text-center">Form submitted successfully!</p>
            <p className="text-center">
              {" "}
              Our team will get in touch with you soon.{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyForm;
