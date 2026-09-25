"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterForm() {
  const t = useTranslations("auth.register");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          {t("name")}
        </label>

        <Input
          id="name"
          type="text"
          placeholder={t("namePlaceholder")}
          aria-invalid={errors.name ? "true" : "false"}
          {...register("name", {
            required: t("validation.nameRequired"),
            minLength: {
              value: 2,
              message: t("validation.nameMinLength"),
            },
          })}
        />

        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

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
