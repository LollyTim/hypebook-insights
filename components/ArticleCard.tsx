"use client";

import { Heart, MessageCircle, Share2, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

interface ArticleProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

export function ArticleCard({ title, excerpt, author, date, readTime }: ArticleProps) {
  return (
    <motion.article 
      whileHover={{ y: -4 }}
      className="bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-primary/40 group relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-all duration-300" />
      
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-full bg-white/5 border border-border flex items-center justify-center text-xs font-bold text-accent">
          {author[0].toUpperCase()}
        </div>
        <div className="text-sm">
          <span className="text-foreground font-medium hover:text-accent transition-colors cursor-pointer">{author}</span>
          <span className="text-muted mx-2">•</span>
          <span className="text-muted">{date}</span>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
        {title}
      </h2>
      
      <p className="text-muted text-sm line-clamp-2 mb-6 leading-relaxed">
        {excerpt}
      </p>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1.5 text-muted hover:text-destructive transition-colors text-xs">
            <Heart className="w-4 h-4" />
            <span>24</span>
          </button>
          <button className="flex items-center gap-1.5 text-muted hover:text-accent transition-colors text-xs">
            <MessageCircle className="w-4 h-4" />
            <span>8</span>
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="text-muted hover:text-accent transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 px-2 py-1 rounded bg-accent/10 text-accent hover:bg-accent/20 transition-all text-xs font-bold">
            <DollarSign className="w-3 h-3" />
            Tip
          </button>
        </div>
      </div>
    </motion.article>
  );
}
