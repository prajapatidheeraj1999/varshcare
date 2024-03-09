"use client";
import { ErrorMessage, Field, useFormikContext } from "formik";
import {
  ComponentProps,
  FC,
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  useState,
} from "react";

import IonIcon from "@reacticons/ionicons";
import classNames from "classnames";

export interface InputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  name: Extract<keyof T, string>;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  placeholder?: string;
  autoFocus?: boolean;
  type?: HTMLInputTypeAttribute;
  Icon?: FC<ComponentProps<"svg">>;
  as?: "input" | "select" | "textarea";
  label?: string;
}

const Input = <T,>({
  className,
  name,
  Icon,
  as = "input",
  label,
  containerProps,
  type,
  placeholder,
  ...props
}: InputProps<T>) => {
  const { errors, touched } = useFormikContext<T>();
  const [isPassVisible, setIsPassVisible] = useState<boolean>(false);

  return name ? (
    <>
      <div
        className={classNames(
          "relative  w-full items-center",
          containerProps?.className,
        )}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <div
          className={classNames(
            "bg-light-bg-3  flex items-center gap-4 overflow-hidden rounded-md border",
            "focus-within:border-primary focus-within:shadow focus-within:shadow-primary-100",
            props?.disabled
              ? ""
              : touched[name]
              ? errors[name]
                ? "border-error shadow shadow-error-100"
                : "border-primary shadow shadow-primary-100"
              : "border-background-4",
          )}
        >
          {Icon && <Icon className="h-6 w-6" />}
          <Field
            className={classNames(
              "relative bg-light-bg-3 flex-1 p-3  outline-none placeholder:text-text-2 w-full",
              className,
              as === "textarea" && "h-32",
            )}
            as={as}
            name={name}
            rows={5}
            placeholder={placeholder}
            type={
              type === "password" ? (isPassVisible ? "text" : "password") : type
            }
            {...props}
          />
          {type === "password" && (
            <IonIcon
              name={isPassVisible ? "eye-off" : "eye"}
              className="absolute right-4 cursor-pointer"
              onClick={() => setIsPassVisible(!isPassVisible)}
            />
          )}
        </div>
        <ErrorMessage
          name={name}
          render={(message) => (
            <div className="absolute mt-1 w-0 min-w-full text-xs text-error">
              {message}
            </div>
          )}
        />
      </div>
    </>
  ) : null;
};

export default Input;
