---
# Superseded by accuray.md, which merges this and accuray-radiotherapy.md
# into one case study. Kept in draft for reference.
title: "Design system from zero, at enterprise scale"
description: "Building Accuray's first design system from scratch — tokens, components, and AI-assisted documentation for nine satellite products."
company: "Accuray (via Gorilla Logic)"
companyUrl: "https://www.accuray.com/"
role: "Design System Lead"
industry: "HealthTech · Radiotherapy Planning Software"
timeframe: "2022 – 2026"
skills: ["Design Systems at Scale", "Design Tokens", "Storybook", "Accessibility (WCAG)", "AI-Assisted Workflows"]
thumbnail: "/images/projects/accuray-design-system/design-system-thumbnail.png"
thumbnailVertical: "/images/projects/accuray-design-system/design-system-thumbnail.png"
thumbnailLandscape: "/images/projects/accuray-design-system/design-system-thumbnail.png"
thumbnailFit: "contain"
thumbnailAspect: "1912/1758"
heroImage: "/images/projects/accuray-design-system/design-system-thumbnail.png"
heroLogo: "/images/projects/accuray-design-system/logo.png"
cardTag: "Design Systems"
cardDescription: "A healthtech company had no shared foundation and teams were duplicating work, so I pitched, led, and shipped the first design system across the platform, covering 90% of general components in the first year."
cardHighlight: "Built from scratch"
cardImpact: "~10 weeks dev time saved"
problem:
  intro: "Accuray was migrating a legacy radiotherapy planning system to web, with nine satellite products expected to consume the same foundation. When I joined the pilot, three designers shared one Adobe XD file, no components, no patterns, no documentation, and Material Angular was fighting the product on every release."
  closing: "As the sole designer, my challenge was to build a system that could serve the pilot first and scale into nine products, without a dedicated budget and without pausing feature work."
approachItems:
  - icon: "star"
    title: "Built the case for it myself"
    description: "I decided the design system was mine to push. Stakeholder mapping, phased roadmap, technical allies aligned early, so the pitch would land as a business initiative, not a designer's wish."
  - icon: "search"
    title: "Mapped patterns with OOUX"
    description: "I used Object-Oriented UX to figure out which components mattered most across the pilot and the satellite products, so the roadmap was informed by real reuse."
  - icon: "users"
    title: "Scoped it against real releases"
    description: "No fantasy roadmap. Every foundation, component, and pattern tied to a specific product release, so the work stayed defensible in prioritization meetings."
  - icon: "message-square"
    title: "Committed to tokens from day one"
    description: "Tokens as the contract between design and engineering, chosen early so theming and platform expansion were possible later without a rewrite."
solutionSections:
  - heading: "Making the case, and getting the go ahead"
    body: "Everyone agreed the fragmentation was a problem. No one was going to fix it. I decided it was mine to lead: mapped stakeholders, aligned the Frontend Lead and DevOps early, and prepared a phased roadmap tied to real product releases. When the business decided the pilot would become the template for the rest of the company, I pitched it. It got approved without a budget, and I had planned for that. What I got was influence and permission to allocate my own time. That was enough to start."
    imagePosition: "right"
    visual: "ppt-carousel"
  - heading: "AI assisted workflow"
    body: "I designed and operate the entire documentation layer with an AI assisted pipeline: tokens exported from Figma to JSON, Claude drafting component docs, and the reference site itself built in Figma Sites with Claude scaffolding pages and copy. Without the AI layer, the reference site would have taken months I did not have. This is what let a working documentation site ship in parallel with the components it documented."
    images:
      [
        "/images/projects/accuray-design-system/pipeline01.png",
        "/images/projects/accuray-design-system/pipeline02.png",
        "/images/projects/accuray-design-system/pipeline03.png",
      ]
    imagePosition: "right"
  - heading: "How the system works"
    body: "Figma is where tokens and components live. Claude turns that source into documentation and scaffolds the reference site in Figma Sites. Storybook is the shared workshop where design and engineering run visual QA together. Consuming products pull tokens as CSS variables and components as code, so parity is enforced by structure, not by discipline."
    imagePosition: "right"
    visual: "diagram"
  - heading: "Adoption model"
    body: "The system was not going to adopt itself. I partnered with the Scrum Master and Product Owner to protect dedicated frontend capacity in every sprint. Before every PI, my UX Lead and I prioritized the backlog so tickets were always ready when engineers had capacity. Adoption was not a launch. It was a rhythm I designed and maintained."
    imagePosition: "right"
    visual: "pills"
highlights:
  - "*2 satellite products* adopted the system, with a third in progress when I rolled off."
  - "*~90% of general purpose components* migrated into the shared library."
  - "*~10 weeks* of repetitive frontend work saved in the first three months across the pilot and the first adopting product."
  - "*Survived two ramp downs* — when two designers were laid off and priorities shifted, our design capacity did not drop proportionally, because the system was already absorbing repetitive work."
  - "Shifted how the company thinks about design systems, from a design deliverable to a *shared responsibility with engineering*. That mindset shift is what made adopting AI workflows feel natural when they came."
ctaHeading: "Contact me for the full case-study"
type: "professional"
sortOrder: 2
draft: true
---
