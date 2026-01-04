import { SalesChatWidget } from "@/components/SalesChatWidget";
import { ArrowRight, BarChart3, Globe, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-white/50 dark:bg-black/50 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              R
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Roy's Company
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Products</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Pricing</a>
            <button className="px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-100 dark:border-indigo-800">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Solutions for Your Business</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Transform Your Workflow with <span className="text-indigo-600 dark:text-indigo-500">Intelligent Automation</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Streamline operations, boost productivity, and unlock new insights with our cutting-edge AI tools designed for modern enterprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button className="group px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/25">
                Start Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100 rounded-full text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="container mx-auto px-6 mt-24">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Advanced Analytics", desc: "Real-time insights and predictive modeling to drive easier decision making." },
              { icon: Globe, title: "Global Scale", desc: "Infrastructure designed to support your business wherever you operate." },
              { icon: Sparkles, title: "AI Integration", desc: "Seamlessly integrate power of LLMs into your existing workflows." },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-indigo-500/50 transition-colors group">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Widget Integration */}
      <SalesChatWidget />
    </div>
  );
}
