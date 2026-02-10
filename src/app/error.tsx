"use client";

import React from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#e5e7eb",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          textAlign: "center",
          backgroundColor: "#0a0a0a",
          borderRadius: "16px",
          padding: "32px 24px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: 700,
            marginBottom: "12px",
          }}
        >
          Something went wrong
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#cbd5e1",
            marginBottom: "20px",
          }}
        >
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 20px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#f97316",
            color: "#111827",
            fontWeight: 600,
            fontSize: "0.95rem",
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </div>
    </div>
  );
}

