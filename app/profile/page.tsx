"use client";

import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { 
  FileText, 
  TrendingUp, 
  Users, 
  ArrowUpRight, 
  Wallet,
  Globe,
  Github,
  Twitter
} from "lucide-react";

export default function ProfilePage() {
  const stats = [
    { label: "Articles Published", value: "14", icon: FileText },
    { label: "Total Tips Received", value: "1,240 $HL", icon: TrendingUp },
    { label: "Followers", value: "842", icon: Users },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 lg:pl-64">
        <Header />
        <main className="p-6">
          <div className="max-w-4xl mx-auto py-8">
            {/* Profile Header */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden mb-8">
              <div className="h-32 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
              <div className="px-8 pb-8">
                <div className="relative -mt-12 flex items-end justify-between gap-6">
                  <div className="flex items-end gap-6">
                    <div className="w-24 h-24 rounded-2xl bg-background border-4 border-card glow-mint overflow-hidden">
                      <div className="w-full h-full bg-accent/20 flex items-center justify-center text-accent text-3xl font-bold">LT</div>
                    </div>
                    <div className="pb-2">
                      <h1 className="text-3xl font-bold">LollyTech</h1>
                      <p className="text-muted text-sm">@lollytech • 0x1234...abcd</p>
                    </div>
                  </div>
                  <button className="bg-white/5 border border-border px-6 py-2 rounded-xl text-sm font-bold hover:bg-white/10 transition-all active:scale-95">
                    Edit Profile
                  </button>
                </div>
                
                <p className="mt-8 text-foreground max-w-2xl leading-relaxed">
                  Builder and visionary in the Hyperliquid ecosystem. Focused on creating decentralized solutions that bridge the gap between complex tech and human intuition.
                </p>

                <div className="flex gap-4 mt-6">
                  <SocialLink icon={Globe} />
                  <SocialLink icon={Twitter} />
                  <SocialLink icon={Github} />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="bg-card border border-border p-6 rounded-2xl group hover:border-primary/30 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:glow-mint transition-all">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Settings Sections */}
            <div className="space-y-4">
              <SettingsCard title="Wallet Management" icon={Wallet} description="Manage your linked wallets and primary payout address." />
              <SettingsCard title="Email Subscriptions" icon={Globe} description="Configure how you receive notifications and newsletter updates." />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SocialLink({ icon: Icon }: { icon: any }) {
  return (
    <button className="p-2 rounded-lg bg-white/5 border border-border text-muted hover:text-accent hover:border-accent/30 transition-all">
      <Icon className="w-4 h-4" />
    </button>
  );
}

function SettingsCard({ title, icon: Icon, description }: { title: string, icon: any, description: string }) {
  return (
    <div className="flex items-center justify-between p-6 bg-card border border-border rounded-2xl hover:border-white/20 transition-all cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-white/5 text-muted group-hover:text-foreground transition-all">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className="text-muted text-sm">{description}</p>
        </div>
      </div>
      <button className="text-muted group-hover:text-primary transition-colors">
        <ArrowUpRight className="w-5 h-5" />
      </button>
    </div>
  );
}
