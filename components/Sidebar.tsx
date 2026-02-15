"use client";

import { useState } from "react";
import { Home, PenSquare, BookOpen, Compass, Bell, User, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home Feed", icon: Home, href: "/" },
  { name: "Write Article", icon: PenSquare, href: "/write" },
  { name: "My Articles", icon: BookOpen, href: "/my-articles" },
  { name: "Explore", icon: Compass, href: "/explore" },
  { name: "Notifications", icon: Bell, href: "/notifications" },
  { name: "Profile", icon: User, href: "/profile" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const SidebarContent = () => (
    <div className="flex flex-col h-full py-6 px-4">
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="w-8 h-8 rounded bg-primary glow-mint flex items-center justify-center text-background font-bold">H</div>
        <span className="text-xl font-bold tracking-tight">HypeBook <span className="text-muted text-sm font-normal">Insights</span></span>
      </div>

      <nav className="space-y-2 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group",
                isActive ? "bg-primary/10 text-primary glow-mint" : "text-muted hover:text-foreground hover:bg-white/5"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-muted group-hover:text-accent")} />
              <span className="font-medium">{item.name}</span>
              {isActive && <motion.div layoutId="active" className="ml-auto w-1 h-4 bg-primary rounded-full glow-mint" />}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 fixed inset-y-0 left-0 bg-card border-r border-border">
        <SidebarContent />
      </aside>

      {/* Mobile Trigger */}
      <button 
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-primary text-background rounded-full glow-mint shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-card border-r border-border z-50 lg:hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-4 text-muted hover:text-foreground"
              >
                <X className="w-6 h-6" />
              </button>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
