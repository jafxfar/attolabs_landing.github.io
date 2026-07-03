"use client"

import { SectionShell } from "@/components/enterprise/section-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { enterpriseIndustries } from "@/lib/enterprise-content"

export const IndustriesSection = () => (
  <SectionShell
    id="industries"
    tag="INDUSTRIES"
    title={"Specialized expertise\nacross sectors."}
    description="Industry-specific solutions built on deep domain knowledge and proven delivery frameworks."
  >
    <Tabs defaultValue={enterpriseIndustries[0].id} className="w-full">
      <TabsList className="flex flex-wrap h-auto gap-1 bg-black/[0.04] p-1.5 rounded-xl mb-8 w-full justify-start">
        {enterpriseIndustries.map((industry) => (
          <TabsTrigger
            key={industry.id}
            value={industry.id}
            className="rounded-lg px-4 py-2 text-xs tracking-wide data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            {industry.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {enterpriseIndustries.map((industry) => (
        <TabsContent key={industry.id} value={industry.id} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-black/[0.07] bg-white p-8">
              <span className="text-[10px] tracking-widest uppercase text-black/30 block mb-3">
                Industry Challenge
              </span>
              <p className="text-sm text-black/55 leading-relaxed">{industry.problem}</p>
            </div>
            <div className="rounded-2xl border border-black/[0.07] bg-[#F0EEE8] p-8">
              <span className="text-[10px] tracking-widest uppercase text-black/30 block mb-3">
                Our Approach
              </span>
              <p className="text-sm text-black/55 leading-relaxed">{industry.solution}</p>
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  </SectionShell>
)
