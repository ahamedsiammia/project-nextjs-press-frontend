"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail, User, Image as ImageIcon } from "lucide-react";
import { registerAction } from "../_actions/registerAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    avatarUrl: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const [state,action,pending] = useActionState(registerAction,false)
  const router = useRouter()

  useEffect(()=>{
    if(!state) return
    if(!state.success){

      toast.error(state.message || "Sign Up Failed!")
    }
    if(state.success){
      toast.success(state.message || "Account Create Successfully");
      router.push("/dashboard")
    }
  },[state])
  return (
    <div>
      {/* Form Body */}
      <form action={action} className="space-y-4">
        {/* Full Name Field */}
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Full Name
          </Label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400 transition-all rounded-lg"
              required
            />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              id="email"
              type="email"
            name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400 transition-all rounded-lg"
              required
            />
          </div>
        </div>

        {/* Profile Photo URL Field */}
        <div className="space-y-1.5">
          <Label htmlFor="avatarUrl" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Profile Photo URL
          </Label>
          <div className="relative">
            <ImageIcon className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              id="avatarUrl"
              type="url"
              name="profilePhoto"
              placeholder="https://example.com/photo.jpg"
              value={formData.avatarUrl}
              onChange={handleChange}
              className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400 transition-all rounded-lg"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-1.5">
          <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Password
          </Label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              className="pl-10 pr-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400 transition-all rounded-lg"
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              <span className="sr-only">Toggle password visibility</span>
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.99] mt-2"
        >
          {
            pending ? "processing..." : "Create Account"
          }
        </Button>

        {/* Footer */}
        <div className="pt-2 text-center text-xs text-slate-500">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-slate-900 hover:underline transition-colors">
            Sign in
          </a>
        </div>
      </form>
    </div>
  );
}