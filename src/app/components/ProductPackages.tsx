'use client';

import React, { useState, useEffect } from 'react';
import '../styles/product-packages.css';
import TimelineProgress from './TimelineProgress';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/outline';

const packages = [
  {
    title: "Free Consultation & Strategic Blueprint",
    price: "Free",
    timeline: "3–5 Business Days",
    deployment: "Immediate booking available",
    timelineEvents: [
      {
        title: "Booking Your Consultation",
        description: "Schedule your strategic session",
        duration: "Same Day"
      },
      {
        title: "45-Minute Consultation Call",
        description: "Deep dive into business challenges and goals",
        duration: "45 Minutes"
      },
      {
        title: "AI/Automation Roadmap",
        description: "Receive your personalized action plan PDF",
        duration: "2 Days"
      },
      {
        title: "Optional Follow-Up",
        description: "Q&A session for next steps",
        duration: "30 Minutes"
      }
    ],
    features: [
      "45-Minute Strategic Consultation – Real expert review of how AI and automation can best serve your business goals.",
      "Custom AI/Automation Roadmap – A tailored step-by-step plan to integrate AI into your operations.",
      "\"Next Steps After Consultation\" PDF – Actionable advice delivered immediately post-meeting.",
      "Strategic Best Practices Advice – Insights into how top businesses are using AI today.",
      "Private Community Access – Join an exclusive group of future-forward business owners.",
      "Follow-up Strategic Summary Report – Documented key recommendations for future growth."
    ]
  },
  {
    title: "Simple Automation Build & Optimization",
    price: "$500 – $5,000 initial + Retainer ($500+/month)",
    timeline: "1–3 weeks",
    deployment: "Full support with your IT team or we can handle everything",
    timelineEvents: [
      {
        title: "Discovery and Scoping",
        description: "Define automation processes",
        duration: "2-3 Days"
      },
      {
        title: "Access Setup",
        description: "API keys and integrations setup",
        duration: "1-2 Days"
      },
      {
        title: "Automation Development",
        description: "Building and testing workflows",
        duration: "1-2 Weeks"
      },
      {
        title: "Internal Testing",
        description: "Ensuring reliability and accuracy",
        duration: "2-3 Days"
      },
      {
        title: "Client Walkthrough",
        description: "Review and feedback",
        duration: "1 Day"
      },
      {
        title: "Deployment",
        description: "Launch into production",
        duration: "1 Day"
      },
      {
        title: "3-Month Review",
        description: "Optimization and expansion",
        duration: "After 3 Months"
      }
    ],
    features: [
      "Prebuilt Automations – Fast-track operational efficiency with preconfigured AI workflows.",
      "Real-Time Workflow Automation – Ensure tasks happen instantly with automated triggers and responses.",
      "3-Month Strategic Optimization Review – Post-deployment performance audit with optimization recommendations.",
      "Automation Monday Reports – Weekly summaries of all completed automations to show visible progress.",
      "Full Documentation + Visual Workflow Maps – Easy-to-understand maps showing how each system operates.",
      "Private Community Access – Ongoing connection with other automation-forward businesses.",
      "Newsletter Access (AI Insider Updates) – Regular insights into emerging AI trends and opportunities.",
      "Basic Workflow Health Dashboard – A real-time status board for your active automations."
    ]
  },
  {
    title: "Custom AI-Powered Applications",
    price: "$10,000 – $75,000 initial + Custom Retainer",
    timeline: "4–10 weeks",
    deployment: "Full support with your IT team or we can handle everything",
    timelineEvents: [
      {
        title: "Initial Consultation",
        description: "Define project scope and requirements",
        duration: "1 Week"
      },
      {
        title: "System Design",
        description: "Architecture planning and design approval",
        duration: "1-2 Weeks"
      },
      {
        title: "Development Phase",
        description: "Building core functionality and features",
        duration: "2-4 Weeks"
      },
      {
        title: "Testing & QA",
        description: "Thorough testing and refinement",
        duration: "1-2 Weeks"
      },
      {
        title: "Deployment Prep",
        description: "Final adjustments and documentation",
        duration: "3-5 Days"
      },
      {
        title: "Launch",
        description: "System deployment and monitoring",
        duration: "1-2 Days"
      }
    ],
    features: [
      "Full Custom Web or Backend Application – Purpose-built systems designed specifically around your workflows.",
      "Centralized Smart Data Infrastructure – One unified source of truth across your business operations.",
      "API-Ready System Design – Systems designed to easily integrate future tools and services.",
      "User Roles + Permissions Systems – Secure and controlled access to sensitive business data.",
      "Mobile Responsive Design – Accessible and functional across all devices.",
      "Hosting Flexibility (Self/Cloud) – Your choice of self-hosted control or fully managed cloud hosting.",
      "Private AI Consultant Access – Dedicated expert guidance as your systems grow.",
      "Usage-Based Pricing Option – Flexible pricing for apps scaling across thousands of users.",
      "Quarterly Innovation Opportunity Briefs – Strategic suggestions for new system capabilities.",
      "Access to 4Runr AI Tools Marketplace (Early Access) – Exclusive beta access to new automation modules.",
      "Small Welcome Kit – A personalized 4Runr thank-you package for new partners."
    ]
  },
  {
    title: "AI Brain Integration (LLM Interface Add-On)",
    price: "$5,000 – $30,000 initial + Custom Retainer",
    timeline: "2–5 weeks",
    deployment: "Full support with your IT team or we can handle everything",
    timelineEvents: [
      {
        title: "Requirements Analysis",
        description: "Define AI integration needs",
        duration: "2-3 Days"
      },
      {
        title: "AI Model Selection",
        description: "Choose and configure AI models",
        duration: "3-5 Days"
      },
      {
        title: "Integration Development",
        description: "Implement AI interfaces",
        duration: "1-2 Weeks"
      },
      {
        title: "Training & Fine-tuning",
        description: "Optimize AI responses",
        duration: "1 Week"
      },
      {
        title: "Testing Phase",
        description: "Validate AI performance",
        duration: "3-5 Days"
      },
      {
        title: "Deployment",
        description: "Launch and monitor",
        duration: "1-2 Days"
      }
    ],
    features: [
      "AI Interface Embedded Into Custom Apps – Add powerful conversational AI directly into your internal platforms.",
      "Centralized Data-Connected Intelligence – Ensure the AI delivers contextually relevant, accurate responses.",
      "Personalized Prompt Library (50+ Examples) – Custom prompt templates for common tasks and queries.",
      "Employee AI Interaction Training Guide – Equip your team to maximize their use of the AI brain effectively.",
      "Full Technical Support + Regular Prompt Updates – Continuous tuning for optimal AI performance.",
      "5-Month Strategic AI Brain Review – System analysis to optimize AI functionality based on usage data.",
      "Self/Cloud Hosting Flexibility – Choose the hosting strategy that fits your infrastructure.",
      "Private AI Consultant Access – Dedicated ongoing support for your AI system's evolution."
    ]
  },
  {
    title: "Full Custom AI Brain Ecosystem",
    price: "$45,000 – $100,000 initial + Custom Retainer",
    timeline: "8–16 weeks",
    deployment: "Full support with your IT team or we can handle everything",
    timelineEvents: [
      {
        title: "Ecosystem Planning",
        description: "Design multi-brain architecture",
        duration: "2-3 Weeks"
      },
      {
        title: "Department Analysis",
        description: "Map department-specific needs",
        duration: "2 Weeks"
      },
      {
        title: "Core Brain Development",
        description: "Build central AI system",
        duration: "3-4 Weeks"
      },
      {
        title: "Sub-brain Development",
        description: "Create department AI systems",
        duration: "4-5 Weeks"
      },
      {
        title: "Integration & Testing",
        description: "Connect and validate all systems",
        duration: "2 Weeks"
      },
      {
        title: "Training & Deployment",
        description: "Roll out across organization",
        duration: "1-2 Weeks"
      }
    ],
    features: [
      "Central AI Brain + Department-Specific Sub-Brains – Each department operates with its own customized intelligent assistant.",
      "Departmental Intelligence Reports (Quarterly) – Performance data on how each department's AI is supporting workflows.",
      "Automation ROI Reports (Quarterly) – Concrete calculation of time and money saved through automation.",
      "Departmental Adoption Reports – Insight into which teams are excelling and where improvements are needed.",
      "Dynamic Automation Heatmaps – Live visualization of system usage across your organization.",
      "Backup Automation Scripts for Critical Tasks – Disaster recovery automations ensuring business continuity.",
      "Quarterly Strategic Innovation Calls – Strategy sessions to unlock new efficiencies and capabilities.",
      "Annual Automation Strategy Workshops – Half-day deep dives into scaling your intelligent systems.",
      "Employee AI Champions Program – Internal AI leaders trained to maintain high adoption rates.",
      "Access to 4Runr AI Tools Marketplace (Early Access) – Test and use cutting-edge tools first.",
      "Certification: AI-Enhanced Company (Digital Badge) – Showcase your leadership in intelligent business operations."
    ]
  },
  {
    title: "Full Business Automation (A–Z Operational Transformation)",
    price: "$50,000 – $300,000 initial + Custom Retainer",
    timeline: "12–24 weeks",
    deployment: "Full support with your IT team or we can handle everything",
    timelineEvents: [
      {
        title: "Business Analysis",
        description: "Complete operational assessment",
        duration: "2-3 Weeks"
      },
      {
        title: "Process Mapping",
        description: "Document all workflows",
        duration: "3-4 Weeks"
      },
      {
        title: "Automation Design",
        description: "Plan automation architecture",
        duration: "4-6 Weeks"
      },
      {
        title: "Development Phase",
        description: "Build automation systems",
        duration: "6-8 Weeks"
      },
      {
        title: "Testing & Validation",
        description: "Ensure system reliability",
        duration: "3-4 Weeks"
      },
      {
        title: "Deployment",
        description: "Phased implementation",
        duration: "2-3 Weeks"
      }
    ],
    features: [
      "End-to-End Process Automation Across Departments – Complete coverage of all eligible operational tasks.",
      "Change Management Planning + Support – Smooth employee transition into AI-driven workflows.",
      "SLA-Backed Full Technical Support – Guaranteed response times and issue resolution.",
      "Quarterly Bottleneck Analysis – Identify and eliminate system slowdowns.",
      "AI Drift Monitoring Reports – Ensure continued AI accuracy and relevance over time.",
      "Self-Diagnostic Dashboards for Operations – Instantly visualize system health without external support.",
      "Cross-Process Automation Expansion Maps – Opportunities to expand automation into new areas.",
      "Future Threat Radar Reports – Early warnings about tech, legal, or market disruptions.",
      "Department-Level Strategy Memos – Specific action plans tailored for each business unit.",
      "Scalability Readiness Reports – Alerts when infrastructure upgrades are needed to sustain growth.",
      "Annual Efficiency Delta Reports (time/cost saved) – Hard data on how automation transforms your bottom line."
    ]
  },
  {
    title: "Full Business Automation + Integrated AI Brain Ecosystem",
    price: "$100,000 – $500,000 initial + Custom Retainer",
    timeline: "16–32 weeks",
    deployment: "Full support with your IT team or we can handle everything",
    timelineEvents: [
      {
        title: "Strategic Planning",
        description: "Comprehensive system design",
        duration: "3-4 Weeks"
      },
      {
        title: "Infrastructure Setup",
        description: "Build core systems",
        duration: "4-6 Weeks"
      },
      {
        title: "AI Integration",
        description: "Implement AI capabilities",
        duration: "6-8 Weeks"
      },
      {
        title: "Automation Development",
        description: "Create automation workflows",
        duration: "8-10 Weeks"
      },
      {
        title: "Testing & Optimization",
        description: "Validate entire ecosystem",
        duration: "4-5 Weeks"
      },
      {
        title: "Full Deployment",
        description: "Organization-wide rollout",
        duration: "2-3 Weeks"
      }
    ],
    features: [
      "Full A–Z Automation + Company-Wide AI Brains – Your business runs on an integrated, intelligent infrastructure.",
      "Executive Intelligence Dashboards – Leadership sees critical system data in real-time for faster decisions.",
      "Revenue Automation Analysis Reports – Track revenue growth directly driven by your AI systems.",
      "AI-Driven Market Expansion Forecast Modeling – Uncover new markets and verticals using AI insights.",
      "Partner Technology Integrations – Seamless plug-ins with third-party platforms and services.",
      "Annual Future-Proofing Report (Strategic Roadmap) – Plan years ahead for tech disruption and innovation.",
      "Innovation Partnership Program Access – Early access to beta tools and private strategic events.",
      "Access to Private 4Runr Events + Strategy Summits – Invitation-only leadership networking with other AI-first businesses."
    ]
  }
];

export default function ProductPackages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);

  useEffect(() => {
    let timelineInterval: NodeJS.Timeout;
    if (!isTransitioning && autoAdvance && packages[currentIndex]?.timelineEvents) {
      timelineInterval = setInterval(() => {
        setTimelineIndex((prev) => {
          const nextIndex = (prev + 1) % (packages[currentIndex]?.timelineEvents?.length || 1);
          if (nextIndex === 0) {
            setAutoAdvance(false);
            setTimeout(() => {
              setAutoAdvance(true);
            }, 3000); // Reduced pause time at the end from 5000 to 3000
          }
          return nextIndex;
        });
      }, 2000); // Reduced from 3000 to 2000 for faster cycling
    }
    return () => clearInterval(timelineInterval);
  }, [currentIndex, isTransitioning, autoAdvance]);

  const handleTimelineClick = (index: number) => {
    setTimelineIndex(index);
    setAutoAdvance(false);
    setTimeout(() => {
      setAutoAdvance(true);
    }, 3000); // Reduced from 5000 to 3000 to match the cycle timing
  };

  const handlePrevious = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
      setTimelineIndex(0);
      setAutoAdvance(true);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % packages.length);
      setTimelineIndex(0);
      setAutoAdvance(true);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const handleDotClick = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimelineIndex(0);
      setAutoAdvance(true);
      setTimeout(() => setIsTransitioning(false), 800);
    }
  };

  const currentPackage = packages[currentIndex];

  return (
    <section className="product-packages">
      <div className="container">
        <div className="section-header">
          <h2>The 4Runr Vision</h2>
          <p>At 4Runr, we build custom AI infrastructures—not off-the-shelf solutions. Each package below represents a template framework to help guide our discovery and planning process. Every system we build is tailored to your needs and can be expanded over time as your business grows.</p>
          <p className="estimate-disclaimer">* All timelines and pricing are estimates and may vary based on your specific requirements, project complexity, and scope. Final quotes will be provided after detailed consultation.</p>
        </div>

        <div className="package-container">
          <button
            className="nav-button prev"
            onClick={handlePrevious}
            aria-label="Previous package"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <div className="package-card">
            <div className="package-content">
              <div className="package-header">
                <h2>{currentPackage.title}</h2>
                <div className="package-price">
                  <span className="currency">$</span>
                  <span className="amount">{currentPackage.price}</span>
                  <span className="timeline">/{currentPackage.timeline}</span>
                </div>
              </div>

              <div className="package-features">
                {currentPackage.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <CheckIcon className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="package-footer">
                <div className="timeline-dots">
                  {packages.map((_, index) => (
                    <button
                      key={index}
                      className={`timeline-dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => handleDotClick(index)}
                      aria-label={`Go to package ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button
            className="nav-button next"
            onClick={handleNext}
            aria-label="Next package"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="post-deployment">
          <h3>Post-Deployment Flexibility</h3>
          <p>All 4Runr systems are modular and scalable. After initial deployment, you can:</p>
          <ul>
            <li>Add new workflows, departments, or AI brains</li>
            <li>Expand system capacity for scaling teams</li>
            <li>Upgrade AI models and data intelligence layers</li>
            <li>Integrate additional platforms and APIs</li>
            <li>Scope new projects based on future goals</li>
          </ul>
          <p>Every addition is properly scoped, quoted, and aligned with your evolving needs. We ensure you continue scaling intelligently without technical debt. These packages are just the starting point. Your 4Runr System is always built for evolution.</p>
        </div>
      </div>
    </section>
  );
} 