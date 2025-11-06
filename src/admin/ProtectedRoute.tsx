import React from "react";
import { Navigate } from "react-router-dom";

const AUTH_KEY = "mingo_admin_authed";

export function isAuthed(): boolean {
  try {
    return localStorage.getItem(AUTH_KEY) === "true";
  } catch {
    return false;
  }
}

export function setAuthed(value: boolean) {
  try {
    localStorage.setItem(AUTH_KEY, value ? "true" : "false");
  } catch {
    // ignore
  }
}

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!isAuthed()) return <Navigate to="/admin/login" replace />;
  return <>{children}</>;
}


