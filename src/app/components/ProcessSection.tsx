'use client'

import '../styles/process-section.css'

interface ProcessStep {
  title: string;
  subtitle: string;
  description: string;
}

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
}

export default function ProcessSection({
  title = "Built on Partnership, Driven by Your Success",
  subtitle = "Our commitment to building long-term relationships that deliver lasting results",
  steps = [
    {
      title: "Clarity Through Collaboration",
      subtitle: "Building the right foundation",
      description: "We start by understanding your business goals and challenges. Together, we identify the highest-impact AI opportunities and create a clear implementation roadmap that aligns with your objectives."
    },
    {
      title: "Design with Purpose",
      subtitle: "Creating your custom solution",
      description: "We architect AI solutions specifically for your needs, focusing on practical implementation and measurable outcomes. Every feature is designed with your future growth in mind."
    },
    {
      title: "Seamless Integration, Real Impact",
      subtitle: "Bring your systems to life",
      description: "We integrate AI solutions smoothly into your existing workflows, with minimal disruption. Your team receives comprehensive training to ensure they can confidently use and manage the new systems."
    },
    {
      title: "Committed to Growth and Innovation",
      subtitle: "Growing together",
      description: "We continuously monitor, optimize, and enhance your AI solutions. As your business evolves and AI technology advances, we ensure your systems stay cutting-edge and effective."
    }
  ]
}: ProcessSectionProps) {
  return (
    <div className="our-process-section">
      <div className="section-header">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>

      <div className="process-steps">
        {steps.map((step, index) => (
          <div key={index} className="process-step">
            <h3>{step.title}</h3>
            <p className="subtitle">{step.subtitle}</p>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 