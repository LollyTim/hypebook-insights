"use client";

import { Search, Bell, Settings } from "lucide-react";
import { motion } from "framer-motion";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border py-3 px-6 lg:pl-72">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted group-focus-within:text-accent transition-colors" />
          <input 
            type="text" 
            placeholder="Search articles, tags, authors..."
            className="w-full bg-card border border-border rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
          />
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <button className="text-muted hover:text-accent transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full glow-mint" />
          </button>
          
          <button className="hidden sm:block text-muted hover:text-accent transition-colors">
            <Settings className="w-5 h-5" />
          </button>

          <button className="bg-primary hover:bg-primary/90 text-background px-5 py-2 rounded-full font-bold text-sm transition-all glow-mint active:scale-95">
            Connect Wallet
          </button>
        </div>
      </div>
    </header>
  );
}
