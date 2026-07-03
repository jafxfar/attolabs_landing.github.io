"use client"

import { StackingCards } from "@/components/stacking-cards"

const AGENTS = [
  {
    label: "RESEARCHER",
    title: "Web & data research",
    desc: "Autonomously browses the web, extracts structured data, synthesizes reports from multiple sources with citations.",
    stats: [{ v: "2.4M", l: "tasks run" }, { v: "98.2%", l: "accuracy" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/researcher-CvhqOuV6irGwBOnJoTGFlXdbyYBRjb.png",
  },
  {
    label: "CODER",
    title: "Code generation & review",
    desc: "Writes, refactors, and reviews code across 40+ languages. Runs tests, fixes bugs, opens pull requests automatically.",
    stats: [{ v: "1.1M", l: "PRs merged" }, { v: "3.2s", l: "avg response" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coder-9bItvCegU6TXUqbX3tUXGBAtvkBkXp.png",
  },
  {
    label: "ANALYST",
    title: "Data analysis & insights",
    desc: "Connects to your databases, runs queries, visualizes trends, and surfaces anomalies before they become problems.",
    stats: [{ v: "880K", l: "reports" }, { v: "12x", l: "faster" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/analyst-Ysxnqg7Fpy2cfA56PiIttv1KximMhT.png",
  },
  {
    label: "EXECUTOR",
    title: "Workflow automation",
    desc: "Takes actions across APIs: sends messages, creates calendar events, triggers webhooks, and manages third-party apps.",
    stats: [{ v: "5.6M", l: "executions" }, { v: "99.9%", l: "uptime" }],
    img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/executor-o1q6509qMLXMtpBIGo49vcgOu34sI1.png",
  },
]

export const StackingAgentCards = () => <StackingCards items={AGENTS} />
