import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import StatsCounter from "@/components/StatsCounter";
import VideoCard from "@/components/VideoCard";
import FloatingCTA from "@/components/FloatingCTA";
import { 
  ArrowRight, 
  CheckCircle2, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Smartphone,
  Users,
  Eye,
  Zap,
  Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { siteData } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-bg text-brand-text">
      <Navbar />
      <FloatingCTA />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient & Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.1),transparent_70%)]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <Section delay={0.1}>
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full">
              {siteData.hero.badge}
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
              {siteData.hero.titlePrimary} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white text-glow">
                {siteData.hero.titleAccent}
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-text-dim mb-10 leading-relaxed">
              {siteData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href={siteData.hero.ctaPrimary.href} 
                className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-black font-bold rounded-full text-lg hover:bg-white transition-all hover:scale-105 bg-glow"
              >
                {siteData.hero.ctaPrimary.text}
              </Link>
              <Link 
                href={siteData.hero.ctaSecondary.href} 
                className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-full text-lg hover:bg-white/10 transition-all"
              >
                {siteData.hero.ctaSecondary.text}
              </Link>
            </div>
          </Section>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-brand-blue rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section id="stats" className="bg-brand-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {siteData.stats.map((stat, idx) => (
            <StatsCounter key={idx} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </Section>

      {/* Featured Content Section */}
      <Section id="content" className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {siteData.featuredContent.title} <span className="text-brand-blue">{siteData.featuredContent.titleAccent}</span>
            </h2>
            <p className="text-brand-text-dim max-w-md">
              {siteData.featuredContent.description}
            </p>
          </div>
          <Link href={siteData.featuredContent.viewAllLink} className="flex items-center gap-2 text-brand-blue font-bold hover:underline">
            View all on TikTok <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.featuredContent.videos.map((video, idx) => (
            <VideoCard 
              key={idx}
              thumbnail={video.thumbnail}
              views={video.views}
              title={video.title}
            />
          ))}
        </div>
      </Section>

      {/* Collaboration Section */}
      <Section id="services" className="bg-brand-surface/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Brands */}
          <div className="glass-dark p-10 rounded-3xl border-brand-blue/10">
            <div className="w-14 h-14 bg-brand-blue/10 flex items-center justify-center rounded-2xl text-brand-blue mb-8">
              <Zap size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">{siteData.services.brands.title}</h3>
            <p className="text-brand-text-dim mb-8 leading-relaxed">
              {siteData.services.brands.description}
            </p>
            <ul className="space-y-4 mb-10">
              {siteData.services.brands.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={20} className="text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              href="#contact" 
              className="inline-block w-full py-4 text-center rounded-xl bg-white text-black font-bold hover:bg-brand-blue transition-colors"
            >
              {siteData.services.brands.cta}
            </Link>
          </div>

          {/* For Creators */}
          <div className="glass-dark p-10 rounded-3xl border-white/5">
            <div className="w-14 h-14 bg-white/5 flex items-center justify-center rounded-2xl text-white mb-8">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">{siteData.services.creators.title}</h3>
            <p className="text-brand-text-dim mb-8 leading-relaxed">
              {siteData.services.creators.description}
            </p>
            <ul className="space-y-4 mb-10">
              {siteData.services.creators.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white">
                  <CheckCircle2 size={20} className="text-brand-blue" />
                  {item}
                </li>
              ))}
            </ul>
            <Link 
              href="#contact" 
              className="inline-block w-full py-4 text-center rounded-xl glass text-white font-bold hover:bg-white/10 transition-colors"
            >
              {siteData.services.creators.cta}
            </Link>
          </div>
        </div>
      </Section>

      {/* Mentorship Section */}
      <Section id="mentorship" className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-brand-surface to-brand-bg border border-white/5 p-8 md:p-16">
          <div className="absolute top-0 right-0 p-8 text-brand-blue/10">
            <Star size={200} />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {siteData.mentorship.title} <span className="text-brand-blue">{siteData.mentorship.titleAccent}</span>
            </h2>
            <p className="text-brand-text-dim text-lg mb-8 leading-relaxed">
              {siteData.mentorship.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {siteData.mentorship.benefits.map((item, idx) => {
                const icons = [<Zap key="zap" />, <Eye key="eye" />, <Smartphone key="phone" />, <Star key="star" />];
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="text-brand-blue shrink-0">{icons[idx % icons.length]}</div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-brand-text-dim text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link 
              href="#contact" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-blue text-black font-black rounded-full text-lg hover:bg-white transition-all bg-glow"
            >
              Join Mentorship <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials" className="bg-brand-surface/30">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">{siteData.testimonials.title}</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.testimonials.reviews.map((t, i) => (
              <div key={i} className="glass p-8 rounded-2xl flex flex-col justify-between">
                <p className="text-brand-text-dim italic mb-8">&quot;{t.text}&quot;</p>
                <div>
                  <p className="text-white font-bold">{t.author}</p>
                  <p className="text-brand-blue text-sm uppercase tracking-tighter">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="max-w-5xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-black text-white mb-6 uppercase tracking-tight">
              {siteData.contact.title} <br />
              <span className="text-brand-blue">{siteData.contact.titleAccent}</span>
            </h2>
            <p className="text-brand-text-dim text-lg mb-10">
              {siteData.contact.description}
            </p>
            
            <div className="space-y-6">
              <Link href={`mailto:${siteData.contact.email}`} className="flex items-center gap-4 text-white hover:text-brand-blue transition-colors">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-xl">
                  <Mail size={24} />
                </div>
                <span className="text-lg font-medium">{siteData.contact.email}</span>
              </Link>
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 glass flex items-center justify-center rounded-xl">
                  <Smartphone size={24} />
                </div>
                <span className="text-lg font-medium">{siteData.contact.phone}</span>
              </div>
            </div>

            <div className="mt-12 flex gap-6">
              {siteData.contact.socials.map((social, i) => {
                const icons: Record<string, any> = { Instagram, Twitter, Youtube };
                const Icon = icons[social.name] || Star;
                return (
                  <Link key={i} href={social.href} className="w-12 h-12 glass flex items-center justify-center rounded-full hover:bg-brand-blue hover:text-black transition-all">
                    <Icon size={24} />
                  </Link>
                );
              })}
            </div>
          </div>

          <form className="space-y-6 glass p-8 rounded-3xl">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-brand-text-dim">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-brand-text-dim">Email Address</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider text-brand-text-dim">Message</label>
              <textarea placeholder="Tell me about your project..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-brand-blue text-black font-black rounded-xl hover:bg-white transition-all bg-glow">
              Send Message
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-brand-text-dim">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {siteData.creatorName}. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
