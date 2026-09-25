"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const t = useTranslations("auth.login");
  const router = useRouter();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const result = login(data.email, data.password);

    if (!result.success) {
      if (result.error === "USER_NOT_FOUND") {
        toast.error(t("errors.userNotFound"));

        router.push("/register");
        return;
      }

      if (result.error === "INVALID_CREDENTIALS") {
        setError("password", {
          type: "manual",
          message: t("errors.invalidCredentials"),
        });

        return;
      }
    }

    const storedUser = JSON.parse(
      localStorage.getItem("movieverse-user") || "null",
    );

    toast.success(t("welcome", { name: storedUser?.name || "" }));

    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          {t("email")}
        </label>

        <Input
          id="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            required: t("validation.emailRequired"),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t("validation.emailInvalid"),
            },
          })}
        />

        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          {t("password")}
        </label>

        <Input
          id="password"
          type="password"
          placeholder={t("passwordPlaceholder")}
          aria-invalid={errors.password ? "true" : "false"}
          {...register("password", {
            required: t("validation.passwordRequired"),
            minLength: {
              value: 6,
              message: t("validation.passwordMinLength"),
            },
          })}
        />

        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full">
        {t("submit")}
      </Button>
    </form>
  );
}
