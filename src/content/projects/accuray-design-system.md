---
title: "Accuray Design System"
description: "Built from scratch: tokens, Figma UI Kit, Storybook integration, and an AI-assisted documentation pipeline."
company: "Accuray (via Gorilla Logic)"
role: "Senior Product Designer · Design System Lead"
industry: "Healthcare · Design Systems"
timeframe: "Dec 2021 – Mar 2026"
skills: ["Design Systems at Scale", "Design Tokens", "Storybook", "Accessibility (WCAG)", "AI-Assisted Workflows"]
thumbnail: "/images/projects/accuray-design-system/design-system-thumbnail.png"
thumbnailVertical: "/images/projects/accuray-design-system/design-system-thumbnail.png"
thumbnailLandscape: "/images/projects/accuray-design-system/design-system-thumbnail.png"
thumbnailFit: "contain"
thumbnailAspect: "1912/1758"
heroImage: "/images/projects/accuray-design-system/design-system-thumbnail.png"
type: "professional"
sortOrder: 2
draft: false
---

When I joined Accuray, three designers were working on the same Figma file with no shared components, no shared library, and no consistent patterns. Every decision was being made from scratch, every time. I proposed, sold, and built a design system that changed that, without any extra resources or dedicated time to do it.

## The Starting Point

The design assets when I arrived were a basic color guide and screenshots from two legacy desktop systems. Nothing was reusable. Nothing was documented. And the team was under pressure to deliver high-priority flows to development at the same time.

It was clear a design system was needed. It was equally clear nobody was going to hand me time or budget to build one.

## Getting Buy-In Without Extra Resources

Before touching a single component I wrote a structured proposal and presented it to the development team and the general manager. I outlined the business case, a realistic roadmap, and what the long-term savings in development time and maintenance would look like.

No extra resources were approved. But I got something more useful: trust, and the room to allocate my own time to it alongside my other responsibilities.

## Understanding What the Company Actually Needed

I met with three development managers responsible for nine different systems across the company. I wanted to understand their experience with design systems, their concerns, and their technical constraints before building anything.

That research shaped everything. The existing systems were built on outdated technology, and the new product was being developed in Angular. That meant we couldn't migrate existing assets. We had to build a modern, reusable framework from scratch.

## Building It

I started with the most frequently used components in Figma, applying proper structure, variants, and reusability from the beginning. Introducing a shared library gave the team a foundation to work from consistently for the first time.

But a design system only works if it lives in both design and code. I worked closely with developers to make sure UI components were implemented in the codebase, and defined a workflow that kept designers and developers aligned throughout. Together with the Frontend Lead and DevOps, we integrated Storybook as a development environment for component testing, so components could be validated in isolation before deployment.

## The Reference Site, Built Without Extra Tooling Costs

Rather than adding new tools to the budget, I built the system's reference site entirely in Figma Sites. That gave me complete control over the documentation and kept costs down.

To generate the documentation itself I built an AI-assisted workflow using Make and Claude to synthesize design token data from JSON into clear, structured guidelines. I set this up entirely on my own. What would have taken weeks of manual documentation work became a repeatable, scalable process.

## Growing Beyond One Product

When another application within the company expressed interest in adopting the design definitions, I worked to position the system as a company-wide resource rather than a single-product tool.

A patient enrollment application, which allows doctors to adjust treatment settings before a patient is ready for radiotherapy, became the second product to adopt it. A third is currently in the process of doing the same.

## Results

- Saved approximately 5 weeks of development time through component reuse across a parallel application
- Unified design patterns across Product A for the first time
- Established a framework now being adopted by multiple applications across the company
- Built the entire reference site and AI-assisted documentation pipeline independently, with no additional tooling budget

## The Bigger Picture

This wasn't just a Figma library. It was the first time Accuray had a shared language between design and development. The components, the documentation, the Storybook integration, the reference site, all of it was built while I was still delivering UX work on the main product. That's the part I'm most proud of.
