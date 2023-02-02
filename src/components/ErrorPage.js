import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Oops! You are seem to be lost!</h1>
      <p>Here are some helpful links:</p>
      <Link to="/">Home</Link>
    </div>
  );
}
