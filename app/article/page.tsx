"use client";

import React from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  DollarSign, 
  Bookmark,
  ArrowLeft,
  Copy,
  Twitter,
  ExternalLink
} from "lucide-react";
import Link from "next/link";

export default function ArticleReadPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 lg:pl-64">
        <Header />
        <main className="p-6">
          <div className="max-w-3xl mx-auto py-12">
            {/* Back Button */}
            <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-10 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to feed
            </Link>

            {/* Article Header */}
            <header className="space-y-6 mb-12">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary px-2 py-1 bg-primary/10 rounded">Engineering</span>
                <span className="text-muted text-sm">Feb 14, 2026 • 8 min read</span>
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-white leading-tight">
                How to Deploy a Smart Contract on HyperEVM Testnet
              </h1>

              <div className="flex items-center justify-between py-6 border-y border-border/30">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold border border-accent/30">H</div>
                  <div>
                    <div className="font-bold flex items-center gap-2">
                      HL_Builder
                      <button className="text-[10px] text-primary hover:underline">Follow</button>
                    </div>
                    <div className="text-muted text-sm">Decentralized Infra Engineer</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <SocialButton icon={Twitter} />
                  <SocialButton icon={Copy} />
                  <SocialButton icon={Bookmark} />
                </div>
              </div>
            </header>

            {/* Content Area */}
            <article className="prose prose-invert prose-mint max-w-none space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p>
                HyperEVM is the first purpose-built L1 for high-performance DeFi. Unlike generic blockchains, it is optimized at the binary level for high-throughput orderbook operations. In this guide, we walk through setting up your environment, compiling Solidity, and deploying your first contract.
              </p>

              <h2 className="text-2xl font-bold text-white pt-4">Why HyperEVM?</h2>
              <p>
                The primary bottleneck for DeFi has always been latency. On-chain trading often feels sluggish compared to CEXs. HyperEVM solves this by achieving sub-second finality through its custom BFT consensus engine.
              </p>

              <div className="bg-card border border-border p-8 rounded-2xl space-y-4">
                <h3 className="text-xl font-bold text-white">Environment Prerequisites</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>Node.js v18 or higher</li>
                  <li>Foundry (recommended for speed)</li>
                  <li>Testnet PURR tokens (available at the faucet)</li>
                </ul>
              </div>

              <p>
                Deployment is straightforward. Since HyperEVM is fully EVM-compatible, you can use your existing Hardhat or Foundry scripts. Simply point your RPC to <code className="text-primary bg-primary/5 px-2 rounded">https://rpc.hyperliquid-testnet.xyz/evm</code>.
              </p>
            </article>

            {/* Interaction Bar */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 lg:left-[calc(50%+128px)] bg-card/90 backdrop-blur-xl border border-border rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl z-50">
              <InteractionButton icon={Heart} count="124" hoverColor="text-destructive" />
              <InteractionButton icon={MessageCircle} count="42" hoverColor="text-accent" />
              <button className="flex items-center gap-2 bg-primary text-background px-5 py-2 rounded-full font-bold text-sm glow-mint hover:bg-primary/90 transition-all active:scale-95">
                <DollarSign className="w-4 h-4" />
                Tip this writer
              </button>
              <div className="w-px h-6 bg-border" />
              <button className="text-muted hover:text-foreground transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SocialButton({ icon: Icon }: { icon: any }) {
  return (
    <button className="p-2 rounded-lg hover:bg-white/5 text-muted hover:text-foreground transition-all">
      <Icon className="w-4 h-4" />
    </button>
  );
}

function InteractionButton({ icon: Icon, count, hoverColor }: { icon: any, count: string, hoverColor: string }) {
  return (
    <button className={`flex items-center gap-2 text-muted hover:${hoverColor} transition-all group`}>
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
      <span className="text-sm font-medium">{count}</span>
    </button>
  );
}
