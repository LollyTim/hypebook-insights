"use client";

import { motion } from "framer-motion";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import { 
  Type, 
  Bold, 
  Italic, 
  List, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  Code,
  Save,
  Send
} from "lucide-react";

export default function WritePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 lg:pl-64">
        <Header />
        <main className="p-6">
          <div className="max-w-4xl mx-auto py-8">
            {/* Editor Toolbar */}
            <div className="sticky top-[73px] z-30 mb-8 bg-card/80 backdrop-blur-md border border-border rounded-xl p-2 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-1 border-r border-border pr-2">
                <ToolbarButton icon={Type} label="Text" active />
                <ToolbarButton icon={Bold} label="Bold" />
                <ToolbarButton icon={Italic} label="Italic" />
              </div>
              <div className="flex items-center gap-1 px-2 border-r border-border">
                <ToolbarButton icon={List} label="List" />
                <ToolbarButton icon={Code} label="Code" />
              </div>
              <div className="flex items-center gap-1 px-2">
                <ToolbarButton icon={LinkIcon} label="Link" />
                <ToolbarButton icon={ImageIcon} label="Image" />
              </div>
              
              <div className="flex items-center gap-3 ml-auto pl-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-accent hover:bg-accent/10 transition-all text-sm font-medium">
                  <Save className="w-4 h-4" />
                  Save Draft
                </button>
                <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-background font-bold text-sm glow-mint hover:bg-primary/90 transition-all">
                  <Send className="w-4 h-4" />
                  Publish
                </button>
              </div>
            </div>

            {/* Editor Content */}
            <div className="space-y-6">
              <input 
                type="text" 
                placeholder="Article Title"
                className="w-full bg-transparent text-5xl font-bold placeholder:text-muted/30 focus:outline-none"
              />
              
              <div className="flex items-center gap-4 py-4 border-y border-border/30">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-border" />
                <div className="text-sm">
                  <div className="font-medium">LollyTech</div>
                  <div className="text-muted">Drafting...</div>
                </div>
              </div>

              <textarea 
                placeholder="Start writing your story..."
                className="w-full min-h-[500px] bg-transparent text-xl leading-relaxed placeholder:text-muted/20 focus:outline-none resize-none"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ToolbarButton({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <button 
      className={cn(
        "p-2 rounded-lg transition-all group",
        active ? "bg-primary/10 text-primary" : "text-muted hover:text-foreground hover:bg-white/5"
      )}
      title={label}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
