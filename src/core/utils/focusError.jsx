import React from "react";
import { useFormikContext } from "formik";

const FocusError = () => {
  const { errors, isSubmitting, isValidating } = useFormikContext();

  React.useEffect(() => {
    if (isSubmitting && !isValidating) {
      const keys = Object.keys(errors);
      if (keys.length > 0) {
        const selector = `[name=${keys[0]}]`;
        const errorElement = document.querySelector(selector);
        if (errorElement) {
          errorElement.scrollIntoView({ behavior: "smooth", inline: "start" });
          errorElement.focus({ preventScroll: true });
        }
      }
    }
  }, [errors, isSubmitting, isValidating]);

  return null;
};

export default FocusError;
