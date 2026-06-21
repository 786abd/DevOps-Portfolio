import { createFileRoute } from "@tanstack/react-router";
import {
  Cloud,
  Container,
  GitBranch,
  Terminal,
  Server,
  Activity,
  Mail,
  Linkedin,
  Phone,
  ArrowUpRight,
  Lock,
  Workflow,
  Check,
  Zap,
  Rocket,
  Shield,
  Clock,
  MessageSquare,
  Star,
  Quote,
  Calendar,
  DollarSign,
} from "lucide-react";
import {
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiHelm,
  SiPython,
  SiGnubash,
  SiLinux,
  SiNginx,
  SiGit,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Database, HardDrive, Zap as ZapIcon, Server as ServerIcon } from "lucide-react";
import heroInfra from "@/assets/hero-infra.jpg";
import projectPipeline from "@/assets/project-pipeline.jpg";
import projectMonitoring from "@/assets/project-monitoring.jpg";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const skills = [
  {
    icon: Cloud,
    title: "AWS Cloud",
    tools: [
      { name: "AWS", Icon: FaAws },
      { name: "EC2", Icon: ServerIcon },
      { name: "S3", Icon: HardDrive },
      { name: "RDS", Icon: Database },
      { name: "Lambda", Icon: ZapIcon },
    ],
  },
  {
    icon: Workflow,
    title: "Infrastructure as Code",
    tools: [{ name: "Terraform", Icon: SiTerraform }],
  },
  {
    icon: Container,
    title: "Containers and Orchestration",
    tools: [
      { name: "Docker", Icon: SiDocker },
      { name: "Kubernetes", Icon: SiKubernetes },
      { name: "Helm", Icon: SiHelm },
    ],
  },
  {
    icon: GitBranch,
    title: "CI/CD Automation",
    tools: [
      { name: "GitHub Actions", Icon: SiGithubactions },
      { name: "Git", Icon: SiGit },
    ],
  },
  {
    icon: Activity,
    title: "Monitoring and Reliability",
    tools: [
      { name: "Prometheus", Icon: SiPrometheus },
      { name: "Grafana", Icon: SiGrafana },
    ],
  },
  {
    icon: Terminal,
    title: "Scripting and Systems",
    tools: [
      { name: "Python", Icon: SiPython },
      { name: "Bash", Icon: SiGnubash },
      { name: "Linux", Icon: SiLinux },
      { name: "Nginx", Icon: SiNginx },
    ],
  },
];

const experience = [
  {
    role: "DevOps Engineer",
    company: "IQ Infinite Technologies",
    period: "Jan 2026 to Present",
    points: [
      "Build and operate AWS infrastructure across EC2, IAM, S3 and VPC with strong security baselines.",
      "Create reusable Terraform modules to provision scalable and repeatable cloud environments.",
      "Run GitHub Actions pipelines that deploy applications and infrastructure end to end.",
      "Work closely with engineering teams to ship releases safely across dev, staging and production.",
    ],
  },
  {
    role: "Junior DevOps Engineer",
    company: "NextGenSoft LLP",
    period: "Jan 2024 to Dec 2025",
    points: [
      "Managed core AWS services like EC2, IAM, S3, VPC along with day to day Linux server operations.",
      "Containerized applications with Docker to make deployments consistent across environments.",
      "Built and maintained CI/CD pipelines using GitHub Actions.",
      "Wrote clear deployment runbooks and documentation for cloud resources.",
    ],
  },
];

const projects = [
  {
    name: "Serverless Image Processing Pipeline",
    stack: ["AWS Lambda", "S3", "Python"],
    description:
      "An event driven image pipeline that automatically generates thumbnails the moment a file lands in S3. No servers to manage and it scales as your traffic grows.",
    image: projectPipeline,
    metric: "Scales to 10K images a day",
  },
  {
    name: "System Monitoring Application",
    stack: ["Python", "Flask", "Docker", "AWS ECR", "Boto3"],
    description:
      "A real time monitoring service packaged with Docker and shipped to AWS ECR. Uses Boto3 to pull live telemetry from your cloud resources.",
    image: projectMonitoring,
    metric: "Sub second metrics",
  },
];

const marquee = [
  "AWS", "Terraform", "Kubernetes", "Docker", "GitHub Actions",
  "Helm", "Python", "Bash", "Linux", "Nginx", "CloudWatch", "Lambda",
];

const packages = [
  {
    name: "Launchpad",
    price: "$800",
    tagline: "For startups going live for the first time",
    duration: "1 to 2 weeks",
    icon: Rocket,
    features: [
      "AWS account setup and hardening",
      "VPC, networking and IAM baseline",
      "Infrastructure managed with Terraform",
      "Single environment CI/CD pipeline",
      "Deployment runbook and full handoff",
    ],
    highlight: false,
  },
  {
    name: "Scale Up",
    price: "$2,400",
    tagline: "Most popular choice for production ready infra",
    duration: "3 to 4 weeks",
    icon: Zap,
    features: [
      "Everything in Launchpad",
      "Separate dev, staging and production",
      "Dockerize and deploy to EKS or ECS",
      "Dashboards and alerts in CloudWatch",
      "Auto scaling and zero downtime deploys",
      "30 days of post launch support",
    ],
    highlight: true,
  },
  {
    name: "On Call Partner",
    price: "$1,200 a month",
    tagline: "Ongoing DevOps support as a service",
    duration: "Monthly retainer",
    icon: Shield,
    features: [
      "Infrastructure monitoring and incident response",
      "Pipeline improvements and new environments",
      "Regular cost optimization reviews",
      "Security patching and audits",
      "Slack and email with a 24 hour response time",
    ],
    highlight: false,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    body: "A 30 minute call where we talk about your stack, your pain points and what you want to achieve. Free and no pressure.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Proposal and Scope",
    body: "Within 48 hours you get a clear scope, timeline and fixed price so you know exactly what you are paying for.",
    icon: Calendar,
  },
  {
    step: "03",
    title: "Build and Ship",
    body: "Weekly demos, version controlled infrastructure and no surprises. You see real progress every Friday.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Handoff and Support",
    body: "Complete documentation, recorded walkthroughs and 30 days of email support included with every project.",
    icon: Shield,
  },
];

const testimonials = [
  {
    quote:
      "Abdullah rebuilt our entire AWS setup and saved us hours of manual work every week. One of the best engineering decisions we made this year.",
    name: "Engineering Lead",
    role: "SaaS startup, Bengaluru",
  },
  {
    quote:
      "He shipped a CI/CD pipeline that our team actually trusts. Deploys went from a scary Friday night ritual to a single click.",
    name: "CTO",
    role: "Fintech, remote",
  },
  {
    quote:
      "Clear communicator, fast turnaround and the documentation he left behind made onboarding new engineers painless.",
    name: "Product Manager",
    role: "Healthtech client",
  },
];

const guarantees = [
  { icon: Clock, label: "Reply in 24 hours", body: "Every inquiry gets a response within one business day." },
  { icon: DollarSign, label: "Fixed pricing", body: "No hourly surprises. Scope and price are agreed up front." },
  { icon: Shield, label: "30 day support", body: "Free bug fixes and questions after every project ships." },
];

const services = [
  { icon: Cloud, title: "Cloud Infrastructure", body: "Clean AWS architecture built from the ground up including networking, compute and storage, all version controlled." },
  { icon: Workflow, title: "CI/CD Pipelines", body: "Reliable workflows that build, test and deploy your app and infrastructure safely on every push." },
  { icon: Container, title: "Containers and Kubernetes", body: "Move legacy apps into Docker, deploy to Kubernetes with rolling updates and auto scaling baked in." },
  { icon: Lock, title: "Security and IAM", body: "Least privilege access, VPC hardening and secrets management so you can pass audits with confidence." },
  { icon: Activity, title: "Monitoring and Alerts", body: "Dashboards, alerts and runbooks that tell you about problems before your users ever notice." },
  { icon: Server, title: "Linux and Server Ops", body: "Server hardening, web server tuning, troubleshooting and ongoing maintenance you can rely on." },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-base flex items-center gap-2 font-semibold">
            <span className="text-primary">▲</span>
            <span className="text-foreground">Abdullah Sheikh</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#skills" className="hover:text-primary transition">Skills</a>
            <a href="#work" className="hover:text-primary transition">Experience</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#pricing" className="hover:text-primary transition">Pricing</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition font-medium"
          >
            Hire me <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full border border-border bg-card/50 text-muted-foreground mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
              </span>
              Available for 2 new clients this quarter
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
              Cloud and DevOps you
              <br />
              <span className="text-primary text-glow">can rely on.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Hi, I am <span className="text-foreground font-medium">Abdullah Sheikh</span>, a DevOps engineer who
              helps founders and teams set up dependable cloud infrastructure on AWS, automate the boring parts
              and ship new releases without the late night fire drills.
              <span className="text-foreground"> If you want your product to feel fast, safe and ready to scale, I can help.</span>
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition border-glow"
              >
                Book a free discovery call <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border bg-card/40 text-foreground font-medium hover:border-primary/50 transition"
              >
                See packages and pricing
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-xs text-muted-foreground">
              {guarantees.map((g) => {
                const Icon = g.icon;
                return (
                  <div key={g.label} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-secondary" />
                    <span>{g.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border terminal-card">
              <img
                src={heroInfra}
                alt="Cloud infrastructure visualization with a glowing network of AWS services"
                width={1536}
                height={1024}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-background/80 backdrop-blur border border-border">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                  <span className="text-foreground">Production cluster online</span>
                </div>
                <div className="px-2.5 py-1.5 rounded-md bg-background/80 backdrop-blur border border-border text-primary">
                  99.98% uptime
                </div>
              </div>
            </div>
            {/* Floating mini-card */}
            <div className="hidden md:block absolute -bottom-8 -left-8 terminal-card rounded-lg p-4 text-xs w-64 shadow-2xl">
              <div className="text-secondary font-medium">Deployment successful</div>
              <div className="text-muted-foreground mt-1">12 resources updated, zero downtime.</div>
              <div className="text-primary mt-1">All systems healthy.</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-card/30 overflow-hidden py-6">
        <div className="flex scroll-x whitespace-nowrap">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="text-sm text-muted-foreground mx-8 inline-flex items-center gap-8">
              {t}
              <span className="text-primary">/</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[auto_1fr] gap-12 items-start">
          <div className="md:w-72">
            <div className="relative rounded-2xl overflow-hidden border border-border terminal-card">
              <img
                src={portrait}
                alt="Abdullah Sheikh, DevOps Engineer"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs">
                <div className="text-primary font-medium">Abdullah Sheikh</div>
                <div className="text-muted-foreground">DevOps Engineer, India</div>
              </div>
            </div>
          </div>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
            <p className="text-xs text-primary uppercase tracking-wider font-medium">About me</p>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground">
              The engineer behind the deploy button.
            </h2>
            <p>
              I design and run cloud setups that are{" "}
              <span className="text-foreground">scalable, secure and always available</span>, all the way from
              the network layer up to the application. Most of my work lives on AWS and is fully automated so
              your team can move faster without worrying about what might break.
            </p>
            <p>
              For freelance clients I take on fresh cloud builds, CI/CD overhauls, container migrations and
              projects where deployments feel a little too risky. If you have an app that needs to live on the
              cloud the right way, let us have a chat.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <div className="font-display text-3xl text-primary font-semibold">2+</div>
                <div className="text-xs text-muted-foreground mt-1">Years of experience</div>
              </div>
              <div>
                <div className="font-display text-3xl text-primary font-semibold">100%</div>
                <div className="text-xs text-muted-foreground mt-1">Automated infrastructure</div>
              </div>
              <div>
                <div className="font-display text-3xl text-primary font-semibold">24h</div>
                <div className="text-xs text-muted-foreground mt-1">Reply time guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-28 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">My toolkit</p>
              <h2 className="font-display text-4xl font-semibold tracking-tight">Tools I work with every day.</h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Each of these has been used in real production systems, not just demos or side projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
            {skills.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-card p-7 hover:bg-accent/50 transition group">
                  <Icon className="h-7 w-7 text-primary mb-5 group-hover:scale-110 transition" />
                  <h3 className="font-display text-xl font-semibold mb-4">{s.title}</h3>
                  <div className="flex flex-wrap gap-3">
                    {s.tools.map(({ name, Icon: BrandIcon }) => (
                      <div
                        key={name}
                        title={name}
                        className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-muted/60 border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition"
                      >
                        <BrandIcon className="h-4 w-4" />
                        <span className="text-xs">{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="work" className="py-28 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">Experience</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-14">Where I have been shipping.</h2>

          <div className="space-y-6">
            {experience.map((e) => (
              <div
                key={e.role + e.company}
                className="terminal-card rounded-xl p-7 md:p-9 hover:border-primary/40 transition"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3 mb-5">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{e.role}</h3>
                    <p className="text-muted-foreground mt-1">
                      <span className="text-primary">at</span> {e.company}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground px-3 py-1 rounded-full border border-border">
                    {e.period}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3 text-muted-foreground">
                      <span className="text-secondary mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">Projects</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-14">A few things I have built.</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article
                key={p.name}
                className="terminal-card rounded-xl overflow-hidden hover:border-primary/40 transition group"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={1280}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-md bg-background/80 backdrop-blur border border-border text-primary">
                    {p.metric}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                  </div>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground border border-border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">Services</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-14">What I can build for you.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="p-7 rounded-xl border border-border bg-card/40 hover:bg-card hover:border-primary/30 transition">
                  <Icon className="h-6 w-6 text-secondary mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 border-t border-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">Process</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-3">How we will work together.</h2>
          <p className="text-muted-foreground mb-14 max-w-2xl text-lg">
            No vague timelines, no scope creep. Here is exactly what happens once you reach out.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.step} className="terminal-card rounded-xl p-6 relative hover:border-primary/40 transition">
                  <div className="text-xs text-primary mb-4 font-medium">Step {p.step}</div>
                  <Icon className="h-6 w-6 text-secondary mb-4" />
                  <h3 className="font-display text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-28 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">Pricing</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-3">
            Simple, fixed price packages.
          </h2>
          <p className="text-muted-foreground mb-14 max-w-2xl text-lg">
            Transparent pricing that fits where you are today. Need something different? Send a note and we can scope a custom plan.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.name}
                  className={`relative rounded-2xl p-7 border transition ${
                    pkg.highlight
                      ? "border-primary/60 bg-card terminal-card border-glow"
                      : "border-border bg-card/40 hover:border-primary/30"
                  }`}
                >
                  {pkg.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      Most popular
                    </div>
                  )}
                  <Icon className={`h-7 w-7 mb-5 ${pkg.highlight ? "text-primary" : "text-secondary"}`} />
                  <h3 className="font-display text-2xl font-semibold">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1 mb-5">{pkg.tagline}</p>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display text-4xl font-semibold text-foreground">{pkg.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-6">{pkg.duration}</p>
                  <a
                    href="#contact"
                    className={`block text-center w-full py-2.5 rounded-md font-medium text-sm mb-6 transition ${
                      pkg.highlight
                        ? "bg-primary text-primary-foreground hover:opacity-90"
                        : "border border-border bg-background/40 hover:border-primary/50"
                    }`}
                  >
                    Get started
                  </a>
                  <ul className="space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10">
            Need something custom? <a href="#contact" className="text-primary hover:underline">Let us scope it together.</a>
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 border-t border-border bg-card/20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">Kind words</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight mb-14">
            What clients say about working with me.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="terminal-card rounded-xl p-7 flex flex-col hover:border-primary/40 transition"
              >
                <Quote className="h-6 w-6 text-primary mb-4" />
                <blockquote className="text-foreground leading-relaxed flex-1">{t.quote}</blockquote>
                <div className="flex items-center gap-1 mt-5 mb-3">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <figcaption className="text-xs text-muted-foreground">
                  <div className="text-foreground font-medium">{t.name}</div>
                  <div>{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs text-primary uppercase tracking-wider font-medium mb-4">Contact</p>
          <h2 className="font-display text-5xl md:text-6xl font-semibold tracking-tight">
            Have a project in mind?
            <br />
            <span className="text-primary text-glow">Let us talk.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            A free 30 minute discovery call. Tell me about your stack and I will send a clear proposal within 48 hours.
            <span className="text-foreground"> Replies always within 24 hours.</span>
          </p>

          <div className="mt-12 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <a
              href="mailto:abdullahsheikh9289@gmail.com"
              className="group terminal-card rounded-xl p-5 hover:border-primary/50 transition"
            >
              <Mail className="h-5 w-5 text-primary mb-3 mx-auto" />
              <div className="text-xs text-muted-foreground">Email</div>
              <div className="text-sm mt-1 group-hover:text-primary transition break-all">
                abdullahsheikh9289@gmail.com
              </div>
            </a>
            <a
              href="https://linkedin.com/in/abd786"
              target="_blank"
              rel="noreferrer"
              className="group terminal-card rounded-xl p-5 hover:border-primary/50 transition"
            >
              <Linkedin className="h-5 w-5 text-primary mb-3 mx-auto" />
              <div className="text-xs text-muted-foreground">LinkedIn</div>
              <div className="text-sm mt-1 group-hover:text-primary transition">linkedin.com/in/abd786</div>
            </a>
            <a
              href="tel:+919265128347"
              className="group terminal-card rounded-xl p-5 hover:border-primary/50 transition"
            >
              <Phone className="h-5 w-5 text-primary mb-3 mx-auto" />
              <div className="text-xs text-muted-foreground">Phone</div>
              <div className="text-sm mt-1 group-hover:text-primary transition">+91 92651 28347</div>
            </a>
          </div>

          <a
            href="mailto:abdullahsheikh9289@gmail.com?subject=Project%20inquiry"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:opacity-90 transition border-glow"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground">
            {guarantees.map((g) => {
              const Icon = g.icon;
              return (
                <div key={g.label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-secondary" />
                  <span>{g.body}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 Abdullah Sheikh. Built with care.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            All systems running smoothly
          </p>
        </div>
      </footer>
    </div>
  );
}
