"use client";

import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

// import signup from '@/lib/auth/signup';
import { cn } from "@/lib/utils";
import { SignupSchema } from "@/lib/validation/auth";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import Label from "./ui/label";
import { toast } from "./ui/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const SignupFrom = ({ className, ...props }: UserAuthFormProps) => {
    const router = useRouter();
    const user = window.location.href.includes("agent") ? "agent" : "customer";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupSchema>({
        resolver: classValidatorResolver(SignupSchema),
    });

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data: SignupSchema) => {
        setIsLoading(true);
        const res = await fetch(`/api/${user}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!res?.ok) {
            const data = await res.json();
            return toast({
                title: "Sign up failed",
                description:
                    res?.status === 401
                        ? "Invalid credentials"
                        : data?.message || "Something went wrong",
                variant: "destructive",
            });
        }

        setIsLoading(false);
        toast({
            title: "Sign up successful",
            description: "Please verify your email after login",
            variant: "default",
        });
        router.push(`/${user}/login`);
    };

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label className="sr-only" htmlFor="tel">
                            Email
                        </Label>
                        <Input
                            id="tel"
                            type="tel"
                            placeholder="john@example.com"
                            autoComplete="email"
                            disabled={isLoading}
                            {...register("email")}
                        />
                        {errors?.email && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                        <div className="relative">
                            <Label className="sr-only" htmlFor="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Abcd@1234"
                                disabled={isLoading}
                                {...register("password")}
                            />
                            {/* EYE toggle to show Password */}
                            <div
                                className="absolute top-0 bottom-0 right-0 flex items-center w-10 px-3 cursor-pointer text-muted-foreground"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <Icons.eyeOff />
                                ) : (
                                    <Icons.eye />
                                )}
                            </div>

                            {errors?.password && (
                                <p className="px-1 text-xs text-red-600">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <Label className="sr-only" htmlFor="password">
                            Confirm Password
                        </Label>
                        <Input
                            id="confirmPassword"
                            type="password"
                            placeholder="Abcd@1234"
                            disabled={isLoading}
                            {...register("confirmPassword")}
                        />
                        {errors?.confirmPassword && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <button
                        className={cn(buttonVariants())}
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Icons.spinner className="w-4 h-4 mr-2 animate-spin" />
                        )}
                        Sign Up
                    </button>
                </div>
            </form>
            {/* <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-2 bg-background text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <button
                type="button"
                className={cn(buttonVariants({ variant: 'outline' }))}
                disabled={isLoading}
            >
                {/* add oauth buttons */}
            {/* </button>  */}
        </div>
    );
};

export default SignupFrom;
