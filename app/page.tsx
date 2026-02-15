import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ArticleCard } from "@/components/ArticleCard";

const articles = [
  {
    title: "How to Deploy a Smart Contract on HyperEVM Testnet",
    excerpt: "HyperEVM is the first purpose-built L1 for high-performance DeFi. In this guide, we walk through setting up your environment, compiling Solidity, and deploying...",
    author: "HL_Builder",
    date: "Feb 14, 2026",
    readTime: "8 min"
  },
  {
    title: "Understanding Hyperliquid's Native Gas Mechanics",
    excerpt: "Gas on Hyperliquid works differently than your typical Ethereum fork. We dive into the optimization layers that allow for sub-second finality and near-zero fees...",
    author: "QuantumHype",
    date: "Feb 13, 2026",
    readTime: "5 min"
  },
  {
    title: "Building the Future of Perpetual DEXs on L1",
    excerpt: "Perpetual DEXs have long struggled with latency. By building a custom L1, Hyperliquid eliminates the middleman and provides a CEX-like experience on-chain...",
    author: "LollyTech",
    date: "Feb 12, 2026",
    readTime: "12 min"
  }
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 lg:pl-64">
        <Header />
        <main className="p-6">
          <div className="max-w-3xl mx-auto py-8">
            <div className="flex items-center justify-between mb-10">
              <h1 className="text-3xl font-bold tracking-tight">Home Feed</h1>
              <div className="flex gap-2">
                <button className="text-sm px-4 py-1.5 rounded-full bg-white/5 border border-border hover:bg-white/10 transition-colors">Latest</button>
                <button className="text-sm px-4 py-1.5 rounded-full text-primary border border-primary/20 bg-primary/5">Trending</button>
              </div>
            </div>

            <div className="space-y-6">
              {articles.map((article, i) => (
                <ArticleCard key={i} {...article} />
              ))}
            </div>

            {/* Newsletter Section */}
            <section className="mt-20 p-8 rounded-2xl bg-card border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all" />
              <div className="relative z-10 text-center space-y-4">
                <h3 className="text-2xl font-bold">Stay Updated</h3>
                <p className="text-muted text-sm max-w-md mx-auto">Receive the latest articles and Hyperliquid ecosystem updates directly in your inbox.</p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto pt-4">
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="flex-1 bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-primary/50 transition-all"
                  />
                  <button className="bg-primary text-background px-6 py-2 rounded-lg font-bold glow-mint hover:bg-primary/90 transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
