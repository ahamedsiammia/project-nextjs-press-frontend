"use client"
import React, { useActionState, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { loginAction } from "../_actions/loginAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function CleanWhiteLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [state,action,pending] =useActionState(loginAction,false);
  const router = useRouter();

  useEffect(()=>{
    if(!state) return
    if(!state.success){

      toast.error(state.message || "LogIn Failed!")
    }
    if(state.success){
      toast.success(state.message || "LogIn Successfully");
      router.push("/dashboard")
    }
  },[state])

  return (
   <div>
        {/* Form Body */}
        <form action={action}  className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400 transition-all rounded-lg"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                Password
              </Label>
              <a
                href="#forgot-password"
                className="text-xs font-medium text-slate-600 hover:text-slate-900 hover:underline transition-colors"
              >
                Forgot?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-slate-900 placeholder:text-slate-400 transition-all rounded-lg"
                placeholder="Enter your password"
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
            className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
          >{
            pending ? "Processing..." : "Sign In" 
          }
          </Button>

          {/* Footer */}
          <div className="pt-2 text-center text-xs text-slate-500">
            Don&apos;t have an account?{" "}
            <a href="/register" className="font-semibold text-slate-900 hover:underline transition-colors">
              Create an account
            </a>
          </div>
        </form>

   </div>
  );
}