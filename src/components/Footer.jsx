import React from "react";

export default function Footer() {
  return (
    <footer className="border-top pt-3 text-center text-muted">
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/settings/profile"
          target="_blank"
          rel="noreferrer"
        >
          Ogechi Uzoma
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/sylviacool"
          target="_blank"
          rel="noreferrer"
        >
          on GitHub
        </a>{" "}
        and{" "}
        <a
          href="netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
    </footer>
  );
}
