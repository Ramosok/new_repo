import React from "react";
import { Counter } from "./Counter";
import ErrorsBoundary from "../../components/ErrorBoundary";

export const PageCounter = () => {
  return (
    <ErrorsBoundary>
      <Counter />
    </ErrorsBoundary>
  );
};
