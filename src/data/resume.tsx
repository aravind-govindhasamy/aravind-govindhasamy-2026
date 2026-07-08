import { Icons } from "@/components/icons";
import {
  Award,
  BriefcaseIcon,
  CpuIcon,
  FileTextIcon,
  FolderGit2Icon,
  HomeIcon,
  MailIcon,
  NotebookIcon,
  UserIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Csharp } from "@/components/ui/svgs/csharp";

type HackathonLink = { title: string; icon: ReactNode; href: string };

export const DATA = {
  name: "Aravind Govindhasamy",
  initials: "AG",
  url: "https://aravind-govindhasamy.github.io",
  location: "Coimbatore, Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/Coimbatore",
  role: "Full Stack & IoT Platform Developer",
  tagline:
    "Building reliable web platforms, device integrations, and intelligent automation systems.",
  description:
    "Full Stack & IoT Platform Developer with around four years of experience - FastAPI and React platforms, MQTT device integrations, RFID and ERPNext systems, and AI-powered automation, built and operated in production.",
  summary:
    "I'm a full-stack developer with around four years of experience shipping production software - web platforms, backend APIs, and IoT systems that talk to real hardware. Right now I'm at [Semicon Media](https://www.circuitdigest.cloud/), building a cloud IoT platform end to end: FastAPI services over MQTT, React dashboards, GPS tracking with geofencing, payment and SIM-lifecycle integrations, and computer-vision APIs - deployed on DigitalOcean and monitored with Sentry. Before that, I built enterprise systems at PSGR Krishnammal College (RFID gate software, GLPI asset tracking across 1800+ systems, an OJS journal platform) and RFID-driven library and jewellery ERP software at 2CQR Automation. I like owning a problem end to end - database schema to device firmware to UI - and I'm as comfortable reading an ESP32 serial log as tuning a Next.js build. More: [education](/#education), [certifications](/#certifications), or [download my resume](/resume.pdf).",
  avatarUrl: "/me.jpg",
  skills: [
    {
      category: "Backend & APIs",
      items: [
        { name: "Python", icon: Python },
        { name: "FastAPI", icon: undefined },
        { name: "Node.js", icon: Nodejs },
        { name: "C# / .NET", icon: Csharp },
        { name: "REST APIs", icon: undefined },
        { name: "WebSockets / WebRTC", icon: undefined },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "TypeScript", icon: Typescript },
        { name: "Tailwind CSS", icon: Icons.tailwindcss },
        { name: "shadcn/ui", icon: undefined },
        { name: "Flutter", icon: undefined },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "PostgreSQL", icon: Postgresql },
        { name: "Supabase", icon: undefined },
        { name: "MySQL / MariaDB", icon: undefined },
        { name: "MS SQL Server", icon: undefined },
      ],
    },
    {
      category: "IoT & Hardware Integration",
      items: [
        { name: "MQTT", icon: undefined },
        { name: "ESP32", icon: undefined },
        { name: "RFID Readers", icon: undefined },
        { name: "GPS / Geofencing", icon: undefined },
        { name: "Raspberry Pi", icon: undefined },
      ],
    },
    {
      category: "Cloud, DevOps & Deployment",
      items: [
        { name: "Ubuntu Servers", icon: undefined },
        { name: "DigitalOcean", icon: undefined },
        { name: "Cloudflare", icon: undefined },
        { name: "GitHub Actions", icon: undefined },
        { name: "Sentry", icon: undefined },
      ],
    },
    {
      category: "ERP & Enterprise Systems",
      items: [
        { name: "ERPNext / Frappe", icon: undefined },
        { name: "GLPI", icon: undefined },
        { name: "OJS", icon: undefined },
        { name: "WPF Desktop Apps", icon: undefined },
      ],
    },
    {
      category: "AI & Automation",
      items: [
        { name: "Gemini API", icon: undefined },
        { name: "Computer Vision APIs", icon: undefined },
        { name: "MCP Servers", icon: undefined },
        { name: "Local LLMs", icon: undefined },
      ],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home", hideOnMobile: false },
    { href: "/#about", icon: UserIcon, label: "About", hideOnMobile: true },
    { href: "/#work", icon: BriefcaseIcon, label: "Experience", hideOnMobile: true },
    { href: "/#projects", icon: FolderGit2Icon, label: "Projects", hideOnMobile: false },
    { href: "/#skills", icon: CpuIcon, label: "Skills", hideOnMobile: true },
    { href: "/#contact", icon: MailIcon, label: "Contact", hideOnMobile: false },
    { href: "/blog", icon: NotebookIcon, label: "Blog", hideOnMobile: true },
    { href: "/credentials", icon: Award, label: "Credentials", hideOnMobile: false },
    { href: "/resume.pdf", icon: FileTextIcon, label: "Resume", hideOnMobile: false },
  ],
  contact: {
    email: "aravindapg06@gmail.com",
    tel: "+91 93616 21891",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aravind-govindhasamy",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aravind-govindhasamy",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://twitter.com/aravindapg06",
        icon: Icons.x,
        navbar: false,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://api.whatsapp.com/send?phone=919361621891",
        icon: Icons.whatsapp,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:aravindapg06@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Semicon Media Pvt Ltd",
      href: "https://www.circuitdigest.cloud/",
      badges: [],
      location: "Coimbatore, India",
      title: "Full Stack Developer",
      logoUrl: "",
      start: "Dec 2025",
      end: "Present",
      description:
        "Building a cloud IoT platform (in the spirit of Blynk / ThingsBoard) end to end. Architected FastAPI services around an MCP-based microservice design to process asynchronous MQTT device data, drive template-based SMS/Email/WhatsApp alerting, and serve REST APIs tuned for low-latency real-time use. Shipped GeoLinker - GPS tracking with geofencing, route history, and a live React map - plus computer-vision APIs (license plate, object, helmet, face detection), WebRTC streaming, Google Home integration over OAuth 2.0, and Razorpay + Airtel M2M SIM lifecycle automation. Own deployment and production operations: Supabase (PostgreSQL), DigitalOcean hosting, Sentry error tracking, and GitHub-based release workflows.",
    },
    {
      company: "PSGR Krishnammal College for Women",
      href: "https://www.psgrkcw.ac.in/",
      badges: [],
      location: "Coimbatore, India",
      title: "ERP Assistant Programmer",
      logoUrl: "",
      start: "Oct 2024",
      end: "Nov 2025",
      description:
        "Worked in the Systems Department designing, developing, customizing, and maintaining enterprise software across the full SDLC. Developed an RFID-based Gate Software Ecosystem with real-time monitoring and camera integration serving 5000+ users, an ID Card Tagging module supporting HF, UHF, and QR cards with duplicate detection, and SQL-driven reporting for user movement analysis. Customized GLPI for IT asset tracking across 1800+ systems with real-time inventory, implemented a Journal Management System with full editorial workflow and peer review, conducted R&D for a Blood Bank Management System, and built analytics dashboards with automated daily email reports.",
    },
    {
      company: "2CQR Automation Private Limited",
      href: "https://2cqr.com/",
      badges: [],
      location: "Coimbatore, India",
      title: "Junior Software Developer",
      logoUrl: "",
      start: "May 2024",
      end: "Oct 2024",
      description:
        "Developed and maintained Library and Jewellery ERP Automation systems integrated with RFID for real-time inventory and transaction tracking, along with Retail, Customer Feedback, and CRM applications using Node.js APIs and C#. Integrated external RFID reader hardware for end-to-end inventory operations, delivered multiple high-priority projects in under 3 months, and collaborated with cross-functional teams to meet tight client deadlines.",
    },
    {
      company: "2CQR Automation Private Limited",
      href: "https://2cqr.com/",
      badges: [],
      location: "Coimbatore, India",
      title: ".NET Developer Intern",
      logoUrl: "",
      start: "Jan 2024",
      end: "May 2024",
      description:
        "Developed C# desktop applications for library automation systems with RFID reader integration, working on API development, database management, and hardware integration. Implemented GitHub workflow automation for the company, improving team collaboration, and gained hands-on experience with .NET Core, C#, Python, and SQL.",
    },
  ],
  education: [
    {
      school: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science, Coimbatore",
      href: "https://www.srmvcas.ac.in/",
      degree: "Master of Computer Application - First Class with Distinction, CGPA 8.0",
      logoUrl: "",
      start: "2022",
      end: "2024",
    },
    {
      school: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science, Coimbatore",
      href: "https://www.srmvcas.ac.in/",
      degree: "Bachelor of Computer Science - First Class, CGPA 7.46",
      logoUrl: "",
      start: "2019",
      end: "2022",
    },
    {
      school: "Govt Hr Sec School, Periyampatti",
      href: "https://www.tn.gov.in/",
      degree: "Higher Secondary Certificate (State Board) - 74.9%",
      logoUrl: "",
      start: "2016",
      end: "2017",
    },
    {
      school: "Govt Hr Sec School, Periyampatti",
      href: "https://www.tn.gov.in/",
      degree: "Secondary School Certificate (State Board) - 86%",
      logoUrl: "",
      start: "2014",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "Circuit Digest Cloud - IoT Platform",
      href: "https://www.circuitdigest.cloud/",
      dates: "Dec 2025 - Present",
      active: true,
      featured: true,
      // TODO(aravind): add verified metrics (device count, users, uptime) when available
      role: "Full-stack developer - backend services, dashboards, CV APIs, deployment",
      description:
        "A cloud-based IoT platform (similar to Blynk / Arduino Cloud / ThingsBoard) enabling real-time device communication, monitoring, alerting, GPS tracking (GeoLinker), cellular connectivity management, Razorpay payments, Google Home integration, and AI-powered computer vision APIs for license plate, object, helmet, and face detection.",
      technologies: [
        "FastAPI",
        "MQTT",
        "Supabase (PostgreSQL)",
        "React",
        "WebRTC",
        "DigitalOcean",
        "Sentry",
        "Razorpay",
        "OAuth 2.0",
        "Airtel M2M SIM APIs",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.circuitdigest.cloud/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "BUDE RFID Inventory",
      href: "https://github.com/BUDEGlobalEnterprise/bude-rfid-inventory",
      dates: "Jun 2026 - Present",
      active: true,
      featured: true,
      role: "Architect & developer - ERPNext/Frappe customization, Flutter app",
      description:
        "Currently building an enterprise inventory management platform on ERPNext, Frappe, and Flutter, delivering barcode and RFID-driven inventory visibility through standard ERPNext workflows.",
      technologies: ["ERPNext", "Frappe", "Flutter", "Dart", "Python", "RFID", "Barcode"],
      links: [
        {
          type: "Source",
          href: "https://github.com/BUDEGlobalEnterprise/bude-rfid-inventory",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Daily Tech News Buddy",
      href: "https://github.com/aravind-govindhasamy/Daily-Tech-News-Buddy",
      dates: "Apr 2026 - Present",
      active: true,
      description:
        "AI-powered daily tech news companion built with Google AI Studio - fetches and summarizes the day's tech headlines using the Gemini API.",
      technologies: ["TypeScript", "Gemini API", "Google AI Studio"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aravind-govindhasamy/Daily-Tech-News-Buddy",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Gemini ESP32-S3 Box Companion",
      href: "https://github.com/aravind-govindhasamy/Gemini-esp32",
      dates: "Jan 2026 - Feb 2026",
      active: false,
      featured: true,
      role: "Firmware developer - display UI, prompt design, WiFi management",
      description:
        "Embedded AI voice companion bringing Google Gemini 2.0 to the ESP32-S3 Box - an age-aware companion for children (4-14 years) with a custom master prompt, personalized on-boot setup (name and age), a 2.4\" LCD display interface via TFT_eSPI, and WiFi network management over Serial.",
      technologies: [
        "ESP32-S3",
        "Arduino",
        "C/C++",
        "Gemini 2.0 Flash",
        "TFT_eSPI",
        "ArduinoJson",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aravind-govindhasamy/Gemini-esp32",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Bude Global Neuro-Chain",
      href: "https://invent.budeglobal.in/",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "Interactive visualization of human innovation as a non-linear network, showing how technologies build upon each other from fire to AGI. Built a dynamic node-link graph with a responsive React UI for exploring technology evolution and dependencies. Powered by Bude Global.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Graph Visualization"],
      links: [
        {
          type: "Website",
          href: "https://invent.budeglobal.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/BUDEGlobalEnterprise/bude-global-neuro-chain-react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "BUDE Global - Tech Presentations",
      href: "https://github.com/BUDEGlobalEnterprise/bude-global-tech-presentations",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "A curated, version-controlled collection of technical presentations and slide decks covering enterprise tech topics, architecture patterns, and product walkthroughs maintained for the BUDE Global Enterprise team.",
      technologies: ["Markdown", "Slide Frameworks", "GitHub Pages"],
      links: [
        {
          type: "Source",
          href: "https://github.com/BUDEGlobalEnterprise/bude-global-tech-presentations",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Journal Management System - AAR PSGRKCW",
      href: "https://journalpaper.psgrkcw.ac.in/index.php/aar-psgrkcw",
      dates: "Oct 2024 - Nov 2025",
      active: true,
      featured: true,
      role: "Implementation & administration - OJS deployment, editorial workflow",
      description:
        "Implemented a complete Journal Management System for PSGR Krishnammal College for Women (Annals of Arts Research) supporting the full editorial workflow - submission, peer review, editorial decisions, and publication with author/reviewer/editor role-based access. Deployed end-to-end on a secure Linux server and trained editorial staff.",
      technologies: ["OJS (Open Journal Systems)", "PHP", "MySQL", "Linux"],
      links: [
        {
          type: "Website",
          href: "https://journalpaper.psgrkcw.ac.in/index.php/aar-psgrkcw",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "GLPI - IT Asset Tracking System",
      href: "http://glpi.grgeducation.com/",
      dates: "Oct 2024 - Nov 2025",
      active: true,
      featured: true,
      role: "Implementation & customization - deployment, agents, dashboards",
      description:
        "Customized and deployed GLPI (open-source IT asset management) to automate inventory tracking across 1800+ systems with real-time updates, FusionInventory auto-discovery across departments, helpdesk ticketing integrated with asset records, and custom dashboards for institutional reporting at GRG Education.",
      technologies: ["GLPI", "PHP", "MySQL", "Linux", "FusionInventory Agent"],
      links: [
        {
          type: "Website",
          href: "http://glpi.grgeducation.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "BulkDBBackup NodeJS MySQL",
      href: "https://github.com/aravind-govindhasamy/BulkDBBackup_NodeJS_MySQL",
      dates: "Jun 2024 - Sep 2024",
      active: false,
      description:
        "MySQL backup script that backs up all user databases from a MySQL server with scheduling, error handling for backup integrity, and detailed logging of backup activities.",
      technologies: ["Node.js", "MySQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aravind-govindhasamy/BulkDBBackup_NodeJS_MySQL",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AWS-SW01-PROJ-0001 - Jewellery RFID Management",
      href: "",
      dates: "May 2024 - Oct 2024",
      active: false,
      featured: true,
      // Proprietary employer work - anonymized description, no public source
      role: "Developer - WPF client, RFID Reader SDK integration",
      description:
        "WPF desktop application for end-to-end jewellery management using RFID - real-time tag scanning, tracking, inventory, transfers, filtering, and anti-theft. Integrates RFID reader hardware via the RFID Reader SDK with a Material Design UI, secure login, and configurable reader settings (port selection, baud rate).",
      technologies: [
        "C#",
        "WPF",
        ".NET Framework 4.7.2",
        "Material Design in XAML",
        "RFID Reader SDK",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Stock Control Inventory Management",
      href: "https://github.com/aravind-govindhasamy/Stock-Control-Inventory-Management",
      dates: "Jan 2024 - May 2024",
      active: false,
      description:
        "Inventory management application using RFID to track and manage stock levels in real-time. Developed backend REST APIs and MSSQL stored procedures for inventory data and reporting, with optimized queries for faster response times.",
      technologies: ["C#", "ASP.NET", "RFID", "MSSQL", "REST API"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aravind-govindhasamy/Stock-Control-Inventory-Management",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AES Encryption and Decryption Using CryptoJS",
      href: "https://github.com/aravind-govindhasamy/AES-Encryption-Decryption",
      dates: "Mar 2024 - Apr 2024",
      active: false,
      description:
        "Demonstrates AES encryption and decryption using CryptoJS in HTML/JavaScript with a user-friendly interface and cryptographic best practices for secure data transmission.",
      technologies: ["JavaScript", "HTML", "CryptoJS"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aravind-govindhasamy/AES-Encryption-Decryption",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Library Fine Collection Kiosk",
      href: "https://github.com/aravind-govindhasamy/Library-Fine-Collection-Kiosk",
      dates: "Aug 2023 - Dec 2023",
      active: false,
      description:
        "Desktop kiosk application that automates library fine collection using RFID technology, with the Razor payment gateway integrated for secure real-time fine payments and MSSQL for transactions and user details.",
      technologies: ["C#", ".NET", "RFID", "Razor Payment Gateway", "MSSQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aravind-govindhasamy/Library-Fine-Collection-Kiosk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "IoT-Based Smart Library System using RFID",
      href: "https://github.com/aravind-govindhasamy/IoT-Based-Smart-Library-System-using-RFID",
      dates: "Jan 2023 - May 2023",
      active: false,
      description:
        "Smart library system using RFID and IoT to automate book check-in and check-out with real-time monitoring of book inventory and patron transactions, backed by SQL Server.",
      technologies: ["C#", "ASP.NET", "SQL Server", "RFID", "IoT"],
      links: [
        {
          type: "Source",
          href: "https://github.com/aravind-govindhasamy/IoT-Based-Smart-Library-System-using-RFID",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Bitcoin Mining Setup using Raspberry Pi and Kali Linux",
      href: "",
      dates: "Jan 2022 - Apr 2022",
      active: false,
      description:
        "UG project: developed a low-cost Bitcoin mining system using Raspberry Pi and open-source software, exploring the feasibility of mining cryptocurrencies with energy-efficient hardware and tuning configurations to maximize efficiency.",
      technologies: ["Raspberry Pi", "Kali Linux", "Python"],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Inter-College Coding Hackathon",
      dates: "2023",
      location: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science, Coimbatore",
      description:
        "Competed in an inter-college coding hackathon during my MCA, building a working solution under tight deadlines and securing an overall 2nd place finish.",
      image: "",
      links: [] as HackathonLink[],
    },
    {
      title: "Inter-College PyGame Development Hackathon",
      dates: "2022",
      location: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science, Coimbatore",
      description:
        "Designed and built a playable game with Python and PyGame during my undergraduate studies, competing against teams from colleges across the region.",
      image: "",
      links: [] as HackathonLink[],
    },
    {
      title: "Inter-College PyGame Development Hackathon",
      dates: "2021",
      location: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science, Coimbatore",
      description:
        "My first inter-college hackathon - developed a game prototype in PyGame as an undergraduate, learning rapid prototyping and teamwork under time pressure.",
      image: "",
      links: [] as HackathonLink[],
    },
  ],
  certifications: [
    {
      title: "NCC - B & C Certificates",
      issuer: "NCC India",
      date: "2019 - 2022",
      image: "/certificates/ncc.png",
      href: "",
    },
    {
      title: "ChatGPT for Everyone",
      issuer: "GUVI",
      date: "Dec 2023",
      image: "/certificates/chatgpt.png",
      href: "",
    },
    {
      title: "Programming Using Python",
      issuer: "GUVI",
      date: "Dec 2023",
      image: "/certificates/python.png",
      href: "",
    },
    {
      title: "Game Development using PyGame",
      issuer: "GUVI",
      date: "Mar 2024",
      image: "/certificates/PyGame.png",
      href: "",
    },
  ],
  credentials: [
    {
      title: "Business Analysis: Process Modeling & Requirements Gathering",
      issuer: "Coursera",
      date: "Oct 2025",
      credentialId: "CGIKMZS8MHJ6",
      href: "https://coursera.org/verify/CGIKMZS8MHJ6",
      skills: ["Business Analysis", "Process Modeling", "Requirements Gathering"],
      highlights: [
        "Analyze business processes and capture functional and non-functional requirements",
        "Define process flows, workflows, and organizational context maps",
        "Break down business challenges into structured technical requirements"
      ]
    },
    {
      title: "Build a Full Website using WordPress",
      issuer: "Coursera",
      date: "Jun 2025",
      credentialId: "RVG4A9WMXIVH",
      href: "https://coursera.org/verify/RVG4A9WMXIVH",
      skills: ["WordPress", "Web Development", "Content Management System (CMS)"],
      highlights: [
        "Create a new website for development in WordPress",
        "Edit webpage content, links, and images",
        "Add and organize widgets to a webpage"
      ]
    },
    {
      title: "Introduction to CRM with HubSpot",
      issuer: "Coursera",
      date: "Jun 2025",
      credentialId: "ES9TISSOMI6E",
      href: "https://coursera.org/verify/ES9TISSOMI6E",
      skills: ["HubSpot", "CRM", "Sales Operations", "Marketing Automation"],
      highlights: [
        "Create and edit new and existing contacts",
        "Create a deal and move contacts through the sales pipeline",
        "Create a marketing email and customize a report dashboard"
      ]
    },
    {
      title: "Getting started with Azure IoT Hub",
      issuer: "Coursera",
      date: "Jun 2025",
      credentialId: "57YSIWNPM83P",
      href: "https://coursera.org/verify/57YSIWNPM83P",
      skills: ["Azure IoT Hub", "Cloud Telemetry", "Stream Analytics", "Data Visualization"],
      highlights: [
        "Create an IoT hub & IoT device in Azure and use a Raspberry Pi web simulator to send telemetry data to the IoT hub",
        "Create an Azure Cloud storage account to store the telemetry data and also a Stream Analytics job to fetch the data in a CSV file",
        "Analyze and Visualize the data using Line charts and Area charts in Microsoft Excel online"
      ]
    },
    {
      title: "Build your business brand using Canva",
      issuer: "Coursera",
      date: "Jun 2025",
      credentialId: "HAJHMVLCCLQ8",
      href: "https://coursera.org/verify/HAJHMVLCCLQ8",
      skills: ["Brand Strategy", "Canva", "Graphic Design"],
      highlights: [
        "Find out why it's important to build a brand and learn how you can do it using Canva",
        "Create your logo and learn how to reach the right audience"
      ]
    },
    {
      title: "Get Started with HubSpot",
      issuer: "Coursera",
      date: "Jun 2025",
      credentialId: "PFNFPRLC3234",
      href: "https://coursera.org/verify/PFNFPRLC3234",
      skills: ["HubSpot", "Sales Integrations", "Customer Communication"],
      highlights: [
        "Set up a contact and learn about the email and phone integrations with HubSpot",
        "Learn about the conversations and Marketing options on HubSpot",
        "View reports and use the top icon choices in HubSpot"
      ]
    },
    {
      title: "Automate tasks and processes with Jira",
      issuer: "Coursera",
      date: "Jun 2025",
      credentialId: "53UUAQA153X0",
      href: "https://coursera.org/verify/53UUAQA153X0",
      skills: ["Jira", "Process Automation", "Agile Project Management"],
      highlights: [
        "Create automation rules with Jira using triggers, conditions and events",
        "Automate business processes and completion tracking by adding sub-tasks and updating field values",
        "Use branches and smart values to manage dependencies and email communication"
      ]
    },
    {
      title: "Improve your productivity and performance with Canva",
      issuer: "Coursera",
      date: "Jul 2025",
      credentialId: "1RXR00BAKOET",
      href: "https://coursera.org/verify/1RXR00BAKOET",
      skills: ["Canva", "Productivity Design", "Workflow Optimization"],
      highlights: [
        "Create and design a digital bullet journal page with Canva",
        "Edit a template in Canva to create digital daily routine page",
        "Share, save and organize your Canva projects"
      ]
    },
    {
      title: "Use Canva to Design Digital Course Collateral",
      issuer: "Coursera",
      date: "Aug 2025",
      credentialId: "59NP1YHOLYL7",
      href: "https://coursera.org/verify/59NP1YHOLYL7",
      skills: ["Canva", "Educational Collateral", "Interactive PDFs"],
      highlights: [
        "Use features in Canva",
        "Use design tools to create digital course collateral",
        "Create a fillable PDF"
      ]
    },
    {
      title: "Small Business Marketing Using YouTube",
      issuer: "Coursera",
      date: "Aug 2025",
      credentialId: "01ITGDQNDW7U",
      href: "https://coursera.org/verify/01ITGDQNDW7U",
      skills: ["YouTube Marketing", "Digital Branding", "Content Creation"],
      highlights: [
        "How to create a YouTube channel",
        "How to use YouTube to promote your small business"
      ]
    },
    {
      title: "Google Ads for Beginners",
      issuer: "Coursera",
      date: "Aug 2025",
      credentialId: "PA7E77KFJXBJ",
      href: "https://coursera.org/verify/PA7E77KFJXBJ",
      skills: ["Google Ads", "Search Engine Marketing (SEM)", "Campaign Optimization"],
      highlights: [
        "Create a Google Ads account and set up first campaign structure",
        "Create ad groups, do keyword research, set up audience targeting, and write ads",
        "Learn how to use the tools and settings available to optimize campaigns and make them profitable"
      ]
    },
    {
      title: "Organic Marketing: Facebook Groups For Small Businesses",
      issuer: "Coursera",
      date: "Aug 2025",
      credentialId: "52GUBUMFX432",
      href: "https://coursera.org/verify/52GUBUMFX432",
      skills: ["Facebook Marketing", "Organic Outreach", "Community Management"],
      highlights: [
        "Create a client profile & Develop an attractive Facebook account",
        "Target and Leverage Facebook groups & their netiquette",
        "Construct an action plan"
      ]
    },
    {
      title: "Introduction to Project Management with ClickUp",
      issuer: "Coursera",
      date: "Aug 2025",
      credentialId: "VA45QR2U5QR9",
      href: "https://coursera.org/verify/VA45QR2U5QR9",
      skills: ["ClickUp", "Project Management", "Team Collaboration"],
      highlights: [
        "Create a ClickUp account and familiarize yourself with the layout and organization of ClickUp",
        "Edit and explore lists and tasks and create new spaces, folders, and tasks",
        "Create reminders, notes, documents, and audio clips and learn how to utilize the communication features of ClickUp"
      ]
    },
    {
      title: "Getting Started with Microsoft PowerPoint",
      issuer: "Coursera",
      date: "Aug 2025",
      credentialId: "3K2FC4091FVI",
      href: "https://coursera.org/verify/3K2FC4091FVI",
      skills: ["Presentation Design", "Microsoft PowerPoint"],
      highlights: [
        "Set up a slideshow presentation utilizing the tools and commands in PowerPoint"
      ]
    },
    {
      title: "Create Animated Social Media Posts using Canva",
      issuer: "Coursera",
      date: "Aug 2025",
      credentialId: "TOAT80G5R4XB",
      href: "https://coursera.org/verify/TOAT80G5R4XB",
      skills: ["Canva", "Social Media Design", "Animation Concepts"],
      highlights: [
        "Develop a new animated social media post using Canva",
        "Utilize the elements tool to create a background for a social media post",
        "Prepare an animated social media post using the text tool in Canva"
      ]
    },
    {
      title: "Business Analysis & Process Management",
      issuer: "Coursera",
      date: "Aug 2025",
      credentialId: "LXGZVW3AII3C",
      href: "https://coursera.org/verify/LXGZVW3AII3C",
      skills: ["Business Analysis", "Process Management", "Problem Solving"],
      highlights: [
        "Analyze business processes and find solutions to existing business problems",
        "Define your business processes, their objectives and how they flow within the organizational context",
        "Evaluate the current business from a process view, break down the problems, and find an applicable business solution"
      ]
    },
    {
      title: "ChatGPT for Everyone",
      issuer: "HCL GUVI",
      date: "Dec 2023",
      credentialId: "C15iU93s57202Jp0R7",
      href: "https://www.guvi.in/certificate?id=C15iU93s57202Jp0R7",
      skills: ["Problem Solving", "AI Prompting", "ChatGPT"],
      highlights: [
        "Learned how to leverage large language models and prompt design to automate daily tasks and solve complex engineering problems."
      ]
    },
    {
      title: "Introduction to Programming Using Python",
      issuer: "HCL GUVI",
      date: "Feb 2022",
      credentialId: "tX169wI1182540ZO18",
      href: "https://www.guvi.in/certificate?id=tX169wI1182540ZO18",
      skills: ["Problem Solving", "Python (Programming Language)"],
      highlights: [
        "Mastered core Python programming constructs, data structures, control flow, and clean code principles."
      ]
    },
    {
      title: "Game development using PyGame",
      issuer: "HCL GUVI",
      date: "Sep 2020",
      credentialId: "3147S04P11NIn404h6",
      href: "https://www.guvi.in/certificate?id=3147S04P11NIn404h6",
      skills: ["Problem Solving", "Python (Programming Language)", "PyGame", "Game Architecture"],
      highlights: [
        "Developed structured interactive game loops, handled collision detection, frame rate rendering, and asset state management."
      ]
    }
  ],
} as const;
