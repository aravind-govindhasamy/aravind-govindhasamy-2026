"use client";

import { useState, useMemo } from "react";
import { DATA } from "@/data/resume";
import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Award,
  ExternalLink,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function CredentialsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"all" | "coursera" | "guvi">("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredCredentials = useMemo(() => {
    return DATA.credentials.filter((cred) => {
      const matchesSearch =
        cred.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cred.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (cred.skills && cred.skills.some((skill: string) => skill.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        (cred.highlights && cred.highlights.some((h: string) => h.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchesTab =
        activeTab === "all" ||
        (activeTab === "coursera" && cred.issuer.toLowerCase() === "coursera") ||
        (activeTab === "guvi" && cred.issuer.toLowerCase().includes("guvi"));

      return matchesSearch && matchesTab;
    });
  }, [searchQuery, activeTab]);

  return (
    <section className="container mx-auto px-4 py-8 max-w-4xl min-h-screen pb-24">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-widest uppercase">
            <Sparkles className="size-4 animate-pulse" />
            <span>Learning & Growth</span>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground bg-clip-text text-transparent">
            Credentials & Certifications
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <p className="text-muted-foreground text-md max-w-2xl leading-relaxed">
            A comprehensive record of my professional courses, guided projects, and technical certifications. Use the search bar to filter by skill, technology, or credential title.
          </p>
        </BlurFade>
      </div>

      {/* Controls */}
      <BlurFade delay={BLUR_FADE_DELAY * 4} className="relative z-20">
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by title, skill, or issuer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 w-full h-10 px-3 py-2 text-sm bg-background/50 border border-border/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground"
            />
          </div>

          {/* Custom Platform Dropdown */}
          <div className="relative w-full md:w-56 shrink-0">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full h-10 px-4 flex items-center justify-between text-xs font-semibold bg-card/60 backdrop-blur-md border border-border/85 rounded-xl hover:bg-accent/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer text-foreground shadow-sm"
            >
              <span>{activeTab === "all" ? "All Platforms" : activeTab === "coursera" ? "Coursera" : "HCL GUVI"}</span>
              <svg className={`fill-current h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </button>
            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute right-0 top-12 z-40 w-full p-1 bg-card/90 backdrop-blur-xl border border-border/80 rounded-xl shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                  {(["all", "coursera", "guvi"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold rounded-lg hover:bg-accent/50 transition-colors cursor-pointer ${
                        activeTab === tab ? "bg-accent/70 text-foreground" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab === "all" ? "All Platforms" : tab === "coursera" ? "Coursera" : "HCL GUVI"}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </BlurFade>

      {/* Grid of Credentials */}
      <div className="grid grid-cols-1 gap-6">
        {filteredCredentials.length > 0 ? (
          filteredCredentials.map((cred, index) => (
            <BlurFade
              key={cred.title + cred.credentialId}
              delay={BLUR_FADE_DELAY * 5 + index * 0.03}
            >
              <div className="group relative flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border/80 bg-card hover:bg-accent/10 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
                {/* Glow Accent */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Left Side: Badge and Info */}
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-2xs uppercase font-mono px-2 py-0.5 rounded-full border ${
                        cred.issuer.toLowerCase() === "coursera"
                          ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                          : "bg-green-500/10 text-green-500 border-green-500/20"
                      }`}>
                        {cred.issuer}
                      </span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {cred.date}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-200">
                      {cred.title}
                    </h3>
                  </div>

                  {/* Highlights/Learnings */}
                  {cred.highlights && cred.highlights.length > 0 && (
                    <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                      {cred.highlights.map((highlight: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="size-4 text-primary/70 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills tags */}
                  {cred.skills && cred.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cred.skills.map((skill: string) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-2xs bg-muted/60 text-muted-foreground border-none font-medium px-2 py-0.5 rounded-md"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side: Credential Link */}
                <div className="flex flex-col justify-between items-start md:items-end shrink-0 gap-4 md:border-l md:border-border/60 md:pl-6 md:w-48">
                  {cred.credentialId && (
                    <div className="text-left md:text-right space-y-1">
                      <p className="text-3xs uppercase font-mono tracking-wider text-muted-foreground">
                        Credential ID
                      </p>
                      <p className="text-xs font-mono font-medium text-foreground select-all break-all">
                        {cred.credentialId}
                      </p>
                    </div>
                  )}

                  {cred.href ? (
                    <a
                      href={cred.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 border border-border/80 rounded-xl hover:bg-foreground hover:text-background transition-colors duration-200 group/btn shadow-sm"
                    >
                      <span>Show credential</span>
                      <ExternalLink className="size-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  ) : (
                    <div className="h-8" />
                  )}
                </div>
              </div>
            </BlurFade>
          ))
        ) : (
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center py-16 px-4 border border-dashed border-border rounded-2xl bg-card/50">
              <Award className="size-12 text-muted-foreground/40 mb-3" />
              <p className="text-muted-foreground text-center font-sans">
                No credentials found matching your search criteria.
              </p>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
