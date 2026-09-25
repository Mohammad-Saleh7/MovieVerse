"use client";

import { useAuth } from "@/components/auth/AuthProvider";

export default function ProfileInfo({ labels }) {
  const { user } = useAuth();

  return (
    <div className="space-y-4">
      <div>
        <p className="text-sm text-muted-foreground">{labels.name}</p>
        <p className="font-medium">{user?.name || "—"}</p>
      </div>

      <div>
        <p className="text-sm text-muted-foreground">{labels.email}</p>
        <p className="font-medium">{user?.email || "—"}</p>
      </div>
    </div>
  );
}
