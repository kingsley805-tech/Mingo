import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthed } from "./ProtectedRoute";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password gate. Replace with real auth as needed.
    if (password.trim() === "flamingo-admin") {
      setAuthed(true);
      navigate("/admin", { replace: true });
    } else {
      setError("Invalid password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md border-0 shadow-xl">
        <CardContent className="p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              placeholder="Enter admin password"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
            <Button type="submit" className="w-full btn-primary text-white py-3 rounded-md">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


