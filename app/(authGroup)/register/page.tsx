import React from 'react';
import RegisterForm from '../_components/registerFrom';
import {User } from "lucide-react";

const RegisterPage = () => {
    return (
            <div className="relative flex min-h-screen items-center justify-center bg-slate-50/50 p-4 font-sans text-slate-900 antialiased selection:bg-slate-900 selection:text-slate-50">
      {/* Background Soft Subtle Elements */}
      <div className="absolute top-1/3 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-200/50 blur-[120px]" />

      {/* Modern Clean White Card Wrapper */}
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all hover:shadow-2xl hover:shadow-slate-200/60">
        
        {/* Header Section */}
        <div className="mb-8 space-y-2 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 border border-slate-200 text-slate-900 shadow-sm">
            <User className="h-5 w-5 text-slate-700" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Create an account
          </h1>
          <p className="text-sm text-slate-500">
            Enter your information to get started
          </p>
        </div>


        <RegisterForm></RegisterForm>

      </div>
    </div>
    );
};

export default RegisterPage;