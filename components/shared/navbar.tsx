"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Code2,
  User,
  Settings,
  CreditCard,
  LogOut,
  Bell,
  Sparkles,
  Menu,
} from "lucide-react";

// Nav items array for organized link management
const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "Analytics", href: "/analytics" },
  { label: "Documentation", href: "/docs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Section: Mobile Menu Button + Logo & Desktop Links */}
        <div className="flex items-center gap-4 md:gap-8">
          
          {/* Mobile Menu (Sheet Component) */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-700 hover:bg-slate-100">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className=" width:300px bg-white p-6">
                <SheetHeader className="mb-6 text-left">
                  <SheetTitle className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">
                      <Code2 className="h-4 w-4" />
                    </div>
                    <span className="text-lg font-bold text-slate-900">Prisma Press</span>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Bottom Quick Links for Mobile */}
                <div className="absolute bottom-6 left-6 right-6 border-t border-slate-100 pt-4">
                  <Link
                    href="/profile"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
                  >
                    <User className="h-4 w-4" /> Profile
                  </Link>
                  <button
                    onClick={() => {
                      setOpen(false);
                      console.log("Logging out...");
                    }}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-rose-600 hover:bg-rose-50"
                  >
                    <LogOut className="h-4 w-4" /> Log out
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white shadow-md shadow-slate-900/10">
              <Code2 className="h-5 w-5 text-slate-100" />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Prisma Press
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section: Action Buttons & User Dropdown */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Notification Button */}
          <Button
            variant="ghost"
            size="icon"
            className="text-slate-600 cursor-pointer hover:text-slate-900 hover:bg-slate-100 rounded-lg"
          >
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div 
                className="cursor-pointer"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                  <AvatarFallback className="bg-slate-100 font-semibold text-slate-700">
                    JD
                  </AvatarFallback>
                </Avatar>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl shadow-slate-200/50" align="end" forceMount>
              <DropdownMenuLabel className="font-normal p-2">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-semibold leading-none text-slate-900">John Doe</p>
                  <p className="text-xs leading-none text-slate-500">john@example.com</p>
                </div>
              </DropdownMenuLabel>
              
              <DropdownMenuSeparator className="-mx-1 my-1 bg-slate-100" />

              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 focus:bg-slate-100">
                    <User className="h-4 w-4 text-slate-500" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/billing" className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 focus:bg-slate-100">
                    <CreditCard className="h-4 w-4 text-slate-500" />
                    <span>Billing</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings" className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-700 focus:bg-slate-100">
                    <Settings className="h-4 w-4 text-slate-500" />
                    <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator className="-mx-1 my-1 bg-slate-100" />

              <DropdownMenuItem asChild>
                <Link href="/upgrade" className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-amber-600 hover:text-amber-700 focus:bg-amber-50">
                  <Sparkles className="h-4 w-4 text-amber-500" />
                  <span>Upgrade to Pro</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator className="-mx-1 my-1 bg-slate-100" />

              <DropdownMenuItem
                className="flex cursor-pointer items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium text-rose-600 focus:bg-rose-50 focus:text-rose-700"
                onClick={() => console.log("Logging out...")}
              >
                <LogOut className="h-4 w-4 text-rose-500" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  );
}