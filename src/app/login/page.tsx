"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/useUserStore";

type AuthStep = 'login' | 'signup' | 'otp';

export default function LoginPage() {
    const [authStep, setAuthStep] = useState<AuthStep>('login');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const login = useUserStore((state) => state.login);

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setAuthStep('otp');
        }, 1500);
    };

    const handleVerifyOtp = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            login({
                id: "u1",
                name: "John Doe",
                email: "john@example.com",
                phone: "+1 234 567 890",
                addresses: []
            });
            router.push("/");
        }, 1500);
    };

    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 bg-slate-50">
            <div className="w-full max-w-md">
                <AnimatePresence mode="wait">
                    {authStep !== 'otp' ? (
                        <motion.div
                            key="auth"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12 space-y-8"
                        >
                            <div className="text-center space-y-2">
                                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent font-bold text-3xl mx-auto mb-6">F</div>
                                <h1 className="text-3xl font-black text-primary">
                                    {authStep === 'login' ? 'Welcome Back' : 'Create Account'}
                                </h1>
                                <p className="text-slate-500">
                                    {authStep === 'login'
                                        ? 'Enter your details to access your account'
                                        : 'Join us and start ordering delicious food'}
                                </p>
                            </div>

                            <form onSubmit={handleAuth} className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary ml-1">Email or Phone Number</label>
                                    <Input
                                        placeholder="example@mail.com"
                                        className="h-14 rounded-2xl border-slate-200 focus-visible:ring-accent"
                                        required
                                    />
                                </div>

                                {authStep === 'signup' && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                                        <Input
                                            placeholder="John Doe"
                                            className="h-14 rounded-2xl border-slate-200 focus-visible:ring-accent"
                                            required
                                        />
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg group"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Processing...' : (authStep === 'login' ? 'Continue' : 'Sign Up')}
                                    {!isLoading && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                </Button>
                            </form>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                                <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400">Or continue with</span></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Button variant="outline" className="h-12 rounded-xl border-slate-200 gap-2">
                                    <Github className="w-5 h-5" /> Google
                                </Button>
                                <Button variant="outline" className="h-12 rounded-xl border-slate-200 gap-2">
                                    <Mail className="w-5 h-5" /> Apple
                                </Button>
                            </div>

                            <p className="text-center text-sm text-slate-500">
                                {authStep === 'login' ? "Don't have an account?" : "Already have an account?"}{" "}
                                <button
                                    onClick={() => setAuthStep(authStep === 'login' ? 'signup' : 'login')}
                                    className="text-accent font-bold hover:underline"
                                >
                                    {authStep === 'login' ? 'Sign up' : 'Login'}
                                </button>
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="otp"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12 text-center space-y-8"
                        >
                            <div className="space-y-2">
                                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center text-accent mx-auto mb-6">
                                    <Phone className="w-10 h-10" />
                                </div>
                                <h1 className="text-3xl font-black text-primary">Verify Identity</h1>
                                <p className="text-slate-500">We&apos;ve sent a 4-digit code to your phone</p>
                            </div>

                            <div className="flex justify-center gap-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <input
                                        key={i}
                                        type="text"
                                        maxLength={1}
                                        className="w-14 h-16 text-center text-2xl font-black text-primary bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-accent focus:bg-white focus:outline-none transition-all"
                                    />
                                ))}
                            </div>

                            <div className="space-y-4">
                                <Button
                                    onClick={handleVerifyOtp}
                                    className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Verifying...' : 'Verify & Continue'}
                                </Button>
                                <p className="text-sm text-slate-400">
                                    Didn&apos;t receive the code?{" "}
                                    <button className="text-accent font-bold hover:underline">Resend Code</button>
                                </p>
                            </div>

                            <Button
                                variant="ghost"
                                onClick={() => setAuthStep('login')}
                                className="text-slate-400"
                            >
                                Change details
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
