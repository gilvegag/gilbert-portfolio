---
title: "Evolving a radiotherapy planning system into web"
description: "Merging two legacy desktop radiotherapy planning systems into one FDA-regulated web platform for Accuray."
company: "Accuray"
companyUrl: "https://www.accuray.com/"
role: "Senior Product Designer"
industry: "Healthcare · Radiotherapy"
timeframe: "Dec 2022 – Mar 2026"
skills: ["Complex SaaS Workflows", "Product Discovery", "Accessibility (WCAG)", "UX Research", "Data-Dense UI"]
thumbnail: "/images/projects/accuray-radiotherapy/accuray_main_thumbnail.png"
thumbnailVertical: "/images/projects/accuray-radiotherapy/accuray_main_thumbnail.png"
thumbnailLandscape: "/images/projects/accuray-radiotherapy/accuray_main_thumbnail.png"
thumbnailFit: "cover-right"
thumbnailAspect: "3840/2148"
heroImage: "/images/projects/accuray-radiotherapy/hero.png"
heroImageRounded: false
heroLogo: "/images/projects/accuray-radiotherapy/logo.png"
cardTag: "Healthcare"
cardHighlight: "2 legacy systems → 1 platform"
cardImpact: "Presented at ASTRO & ESTRO"
problem:
  intro: "Accuray builds software that helps doctors and therapists plan radiation treatments for cancer patients. They use it to mark the tumor and organs on a scan, decide how much radiation to deliver and where, and review the plan before treatment. These tools had grown as separate desktop applications over many years, and the business needed to bring parts of the two main ones into a single web platform:"
  points:
    - "So clinicians could adjust plans faster, sometimes the same day of treatment"
    - "So doctors could work remotely instead of being tied to the clinic"
    - "So two independently grown systems could finally feel like one product"
  closing: "Started on a design team of three. After a round of layoffs I became the only product designer left, working alongside the usability lead. No dedicated researcher and no budget for research tools, so we leaned on interviews and validation sessions with the doctors and therapists who use the product every day. FDA regulated, so every change had to justify itself against compliance."
  challenges:
    - "No cohesive structure across the migrated tabs"
    - "The image viewer, where clinicians actually spend their time, was cramped and hard to work in"
    - "Error handling that pulled clinicians out of the workflow at the worst possible moment"
solutionSections:
  - heading: "A shared foundation, before touching the specifics"
    body: "The obvious move was to fix the most visibly broken screens first. I made a different call: fix the foundation once, and every specific fix on top would compound. I ran walkthroughs with the doctors and therapists who had years of shortcuts in their heads and turned it into a journey map. Then I designed one structure for how any tab is organized: where navigation lives, where controls live, where the clinical content lives. Same mental model across the whole plan. That sequencing decision is what everything downstream sits on."
    image: "/images/projects/accuray-radiotherapy/shared-found.png"
    imagePosition: "right"
  - heading: "The image viewer as protagonist"
    body: "The viewer is where clinicians actually look at the patient's scan and mark what they see. Around it were permanent side panels listing every organ at once, even though therapists focus on one or two at a time. I made the panels hideable and pushed the viewer to lead. One decision paid off three ways: more working space for the scan, easier comparison between scans across treatment days, and a responsive behavior that finally held up when doctors opened sessions from home."
    image: "/images/projects/accuray-radiotherapy/image-view.png"
    imagePosition: "right"
    beforeAfter:
      before: "/images/projects/accuray-radiotherapy/before.png"
      after: "/images/projects/accuray-radiotherapy/after.png"
  - heading: "Error handling as a system"
    body: "Nearly every error routed the user to customer service via a full screen modal. In a product where a plan can change the day of treatment, that breaks the workflow at the worst moment. I documented every error type, mapped each to a severity level, and defined the response per category: inline for validation, toasts for recoverable system errors, modals only for what genuinely must stop the user. Support became the exception, not the default."
    image: "/images/projects/accuray-radiotherapy/error.png"
    imagePosition: "right"
  - heading: "The system underneath"
    body: "Running in parallel with the product work was a design system I built from scratch, and an AI assisted documentation pipeline that grew out of it. Both became their own company initiative and their own story."
    image: "/images/projects/accuray-radiotherapy/design-system.png"
    imagePosition: "right"
    link:
      label: "Read the design system case study"
      href: "/work/accuray-design-system"
highlights:
  - "Merged two legacy desktop systems into *one FDA regulated web platform*, sequenced from a shared foundation up."
  - "Reframed error handling into a *severity based system* where support became the exception, not the default."
  - "Recovered *a couple of minutes per treatment session* on setup and review, multiplied across a busy center."
  - "Presented at *ASTRO and ESTRO*, two international radiotherapy conferences, with positive usability feedback from clinicians."
testimonial:
  quote: "What stood out most about Gil was his ability to turn complexity into clarity. He quickly understood nuanced clinical workflows and translated them into thoughtful designs, interactive prototypes, and clear workflow diagrams that aligned stakeholders and accelerated decision-making. He asked great questions, surfaced edge cases early, and delivered on time with minimal oversight. He raised the bar for our UX practice. I'd gladly work with him again and recommend him without hesitation."
  author: "Cristina Negrut"
  role: "Staff Engineer, Usability and UX Lead"
  avatar: "/images/projects/accuray-radiotherapy/cristina.jpeg"
  linkedin: "https://www.linkedin.com/in/cristina-negrut-30b7511/"
ctaHeading: "Contact me for the full case-study"
type: "professional"
sortOrder: 3
draft: false
---
