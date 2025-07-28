// Technology Roadmap Data
const technologies = [
    {
        id: 1,
        name: "React",
        category: "web",
        icon: "fab fa-react",
        description: "A JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "React 19 Release",
                        description: "Official release of React 19 with new compiler, actions, and improved server components. Focus on simplifying data fetching and state management."
                    },
                    {
                        year: "2025",
                        milestone: "Widespread Adoption of Server Components",
                        description: "Server Components become the standard pattern for new React applications, reducing client-side JavaScript bundle sizes significantly."
                    }
                ]
            },
            {
                title: "Near Near Future (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Enhanced React Compiler",
                        description: "The React Compiler reaches maturity, automatically optimizing re-renders and eliminating the need for manual memoization in most cases."
                    },
                    {
                        year: "2026",
                        milestone: "Improved Concurrency Patterns",
                        description: "New patterns emerge for handling complex asynchronous operations with simpler syntax and better performance."
                    },
                    {
                        year: "2027",
                        milestone: "AI-Assisted Development",
                        description: "Integration AI tools integrate deeply with React, providing intelligent code completion and automatic component optimization suggestions."
                    }
                ]
            },
            {
                title: "Long Term Vision (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Universal Component Framework",
                        description: "React evolves into a truly universal framework that seamlessly works across web, mobile, desktop, and AR/VR environments with minimal adaptation."
                    },
                    {
                        year: "2029",
                        milestone: "Self-Optimizing Applications",
                        description: "Applications applications can dynamically optimize their own performance based on usage patterns and device capabilities."
                    },
                    {
                        year: "2030",
                        milestone: "Direct Brain-Computer Interface Prototypes",
                        description: "Early research into direct neural interfaces for React development, allowing developers to create interfaces through thought patterns."
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Node.js",
        category: "web",
        icon: "fab fa-node-js",
        description: "A JavaScript runtime built on Chrome's V8 JavaScript engine that enables developers to create server-side and networking applications.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "Node.js 24 LTS Release",
                        description: "Long-term support version with improved V8 engine, better diagnostics handling, and enhanced security features."
                    },
                    {
                        year: "2025",
                        milestone: "Native TypeScript Support",
                        description: "Official TypeScript support without transpilation, improving performance and developer experience."
                    }
                ]
            },
            {
                title: "Short Term (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Improved Deno Integration",
                        description: "Better compatibility layers emerge, allowing seamless code sharing between Node.js and Deno ecosystems."
                    },
                    {
                        year: "2026",
                        milestone: "Edge Computing Optimization",
                        description: "Node.js becomes the preferred runtime for edge functions due to its lightweight nature and vast ecosystem."
                    },
                    {
                        year: "2027",
                        milestone: "AI-Powered Performance Tuning",
                        description: "Built AI analyzes runtime performance and automatically suggests or implements optimizations for specific workloads."
                    }
                ]
            },
            {
                title: "Future Horizons (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Quantum Computing Integration",
                        description: "Early experimental support for quantum algorithms within Node.js applications for specific computational processing tasks."
                    },
                    {
                        year: "2029",
                        milestone: "Self-Healing Applications",
                        description: "Node.js applications can detect and automatically修复 common issues without human intervention."
                    },
                    {
                        year: "2030",
                        milestone: "Neuromorphic Computing Support",
                        description: "Node.js adapts to run on brain-inspired computer architectures, enabling ultra-efficient processing for AI workloads."
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Python",
        category: "data",
        icon: "fab fa-python",
        description: "A high-level, interpreted programming language known for its readability and vast ecosystem of libraries for data science, machine learning, and web development.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "Python 3.14 Release",
                        description: "Focus on performance improvements with the ongoing implementation of the 'Faster CPython' project, delivering significant speed boosts."
                    },
                    {
                        year: "2025",
                        milestone: "Widespread Adoption of Pattern Matching",
                        description: "Structural pattern matching becomes a standard feature in Python applications, simplifying complex conditional logic."
                    }
                ]
            },
            {
                title: "Near Future (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Native Async/Await Everywhere",
                        description: "Python's async capabilities become more deeply integrated, allowing for truly concurrent execution across all library functions."
                    },
                    {
                        year: "2026",
                        milestone: "Enhanced Type Hints System",
                        description: "New type system features enable more sophisticated static analysis and better IDE support."
                    },
                    {
                        year: "2027",
                        milestone: "AI-Assisted Code Generation",
                        description: "Python IDEs integrate advanced AI that can generate entire functions or classes based on docstring descriptions."
                    }
                ]
            },
            {
                title: "Long Term Vision (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Seamless Multi-Language Integration",
                        description: "Python becomes the 'glue' language that effortlessly integrates with Rust, Go, and other systems languages at the syntax level."
                    },
                    {
                        year: "2029",
                        milestone: "Quantum Python Libraries",
                        description: "Specialized Python libraries emerge for quantum algorithm development, making quantum computing accessible to mainstream developers."
                    },
                    {
                        year: "2030",
                        milestone: "Self-Documenting Code",
                        description: "Python evolves to automatically generate comprehensive documentation and API references from code structure and patterns."
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Artificial Intelligence",
        category: "ai",
        icon: "fas fa-brain",
        description: "The simulation of human intelligence processes by machines, especially computer systems, including learning, reasoning, and self-correction.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "Foundation Model Standardization",
                        description: "Industry standards emerge for foundation models, improving interoperability and reducing vendor lock-in."
                    },
                    {
                        year: "2025",
                        milestone: "AI Ethics Regulation Frameworks",
                        description: "Comprehensive governments implement comprehensive AI regulation frameworks focusing on transparency, accountability, and ethical use."
                    }
                ]
            },
            {
                title: "Near Future (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Artificial General Intelligence (AGI) Prototypes",
                        description: "First experimental systems demonstrate narrow AGI capabilities in specific domains like scientific research and complex problem solving."
                    },
                    {
                        year: "2026",
                        milestone: "AI-Human Collaboration Platforms",
                        description: "New platforms emerge that seamlessly integrate human and AI capabilities, augmenting human creativity and decision-making."
                    },
                    {
                        year: "2027",
                        milestone: "Emotionally Intelligent AI",
                        description: "AI systems develop sophisticated emotional intelligence, enabling more natural and empathetic human-machine interactions."
                    }
                ]
            },
            {
                title: "Future Horizons (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "AI-Driven Scientific Discovery",
                        description: "AI systems independently discover new scientific principles and technologies, accelerating the pace of human innovation."
                    },
                    {
                        year: "2029",
                        milestone: "Conscious Machines Debate",
                        description: "The scientific community engages in serious debate about machine consciousness and rights as AI systems become increasingly sophisticated."
                    },
                    {
                        year: "2030",
                        milestone: "Human-AI Symbiosis",
                        description: "Advanced neural interfaces enable true symbiosis between human and artificial intelligence, enhancing human cognitive capabilities."
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Cloud Computing",
        category: "cloud",
        icon: "fas fa-cloud",
        description: "The delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "Multi-Cloud Dominance",
                        description: "Most enterprises adopt multi-cloud strategies, leveraging services from multiple providers to avoid vendor lock-in and optimize costs."
                    },
                    {
                        year: "2025",
                        milestone: "Serverless Maturity",
                        description: "Serverless architectures become the default choice for new applications, with improved tooling and debugging capabilities."
                    }
                ]
            },
            {
                title: "Short Term (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Edge-Cloud Continuum",
                        description: "Clear distinction between cloud and edge computing blurs as seamless continuum architectures emerge, optimizing data processing location."
                    },
                    {
                        year: "2026",
                        milestone: "AI-Optimized Infrastructure",
                        description: "Cloud providers offer AI-specialized hardware and software stacks optimized for machine learning workloads."
                    },
                    {
                        year: "2027",
                        milestone: "Carbon-Negative Cloud Regions",
                        description: "Major cloud providers establish regions that are carbon-negative, actively removing more carbon from the atmosphere than they emit."
                    }
                ]
            },
            {
                title: "Long Term Vision (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Space-Based Cloud Infrastructure",
                        description: "First commercial space-based data centers launch, providing ultra-low latency for interplanetary communication and computation."
                    },
                    {
                        year: "2029",
                        milestone: "Self-Organizing Cloud Networks",
                        description: "Cloud infrastructure can dynamically reconfigure itself based on workload, security threats, and performance requirements without human intervention."
                    },
                    {
                        year: "2030",
                        milestone: "Quantum Cloud Computing",
                        description: "Commercially available quantum cloud computing services enable businesses to solve problems intractable for classical computers."
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Blockchain",
        category: "data",
        icon: "fas fa-link",
        description: "A decentralized, distributed ledger technology that records transactions across many computers in a way that the registered transactions cannot be altered retroactively.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "Enterprise Blockchain Adoption",
                        description: "Widespread adoption of private and consortium blockchains for supply chain management, identity verification, and financial transactions."
                    },
                    {
                        year: "2025",
                        milestone: "Regulatory Clarity",
                        description: "Comprehensive regulatory frameworks for blockchain and cryptocurrencies provide clarity for businesses and investors."
                    }
                ]
            },
            {
                title: "Short Term (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Interoperability Standards",
                        description: "Industry-wide standards emerge for blockchain interoperability, enabling seamless asset and data transfer between different blockchain networks."
                    },
                    {
                        year: "2026",
                        milestone: "Zero-Knowledge Proofs in Mainstream Applications",
                        description: "Zero-knowledge proof technology becomes widely adopted for privacy-preserving applications beyond cryptocurrency."
                    },
                    {
                        year: "2027",
                        milestone: "AI-Blockchain Integration",
                        description: "AI systems leverage blockchain for secure, transparent, and auditable decision-making processes."
                    }
                ]
            },
            {
                title: "Future Horizons (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Decentralized Identity Ecosystem",
                        description: "Blockchain-based digital identities become the standard for online authentication, giving users full control over their personal data."
                    },
                    {
                        year: "2029",
                        milestone: "Quantum-Resistant Blockchains",
                        description: "Widespread adoption of quantum-resistant cryptographic algorithms in blockchain networks to protect against future quantum computing threats."
                    },
                    {
                        year: "2030",
                        milestone: "Global Decentralized Governance",
                        description: "Blockchain-enabled enable new forms of decentralized governance for organizations, cities, and even nations."
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Machine Learning",
        category: "ai",
        icon: "fas fa-cogs",
        description: "A subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "Foundation Model Democratization",
                        description: "Smaller, more efficient foundation models become accessible to individual developers and small businesses."
                    },
                    {
                        year: "2025",
                        milestone: "Automated Machine Learning (AutoML) Maturity",
                        description: "AutoML tools can automatically select, train, and optimize models for specific datasets with minimal human intervention."
                    }
                ]
            },
            {
                title: "Short Term (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Federated Learning at Scale",
                        description: "Federated learning becomes the standard approach for training models on sensitive data across distributed devices."
                    },
                    {
                        year: "2026",
                        milestone: "Causal Inference Integration",
                        description: "Machine learning models incorporate causal inference techniques, moving beyond correlation to understand cause-and-effect relationships."
                    },
                    {
                        year: "2027",
                        milestone: "Self-Improving Models",
                        description: "Models can identify their own limitations and automatically request additional training data or architecture modifications."
                    }
                ]
            },
            {
                title: "Long Term Vision (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Continuous Learning Systems",
                        description: "Machine learning systems learn continuously from real-world interactions without catastrophic catastrophic or catastrophic degradation."
                    },
                    {
                        year: "2029",
                        milestone: "Embodied AI",
                        description: "Machine learning models are integrated into physical robots and devices, enabling sophisticated real-world interaction and adaptation."
                    },
                    {
                        year: "2030",
                        milestone: "Creativity-Augmenting AI",
                        description: "AI systems collaborate human creativity in art, music, and scientific discovery, becoming true creative partners."
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "DevOps",
        category: "cloud",
        icon: "fas fa-cogs",
        description: "A set of practices that combines software development and IT operations to shorten the development lifecycle and provide continuous delivery with high quality.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "GitOps as Standard Practice",
                        description: "GitOps becomes the de facto standard for infrastructure as code and application deployment across organizations."
                    },
                    {
                        year: "2025",
                        milestone: "AI-Powered Monitoring Monitoring",
                        description: "AI tools predict and prevent system failures by analyzing historical data and real-time metrics."
                    }
                ]
            },
            {
                title: "Short Term (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "No-Code/Low-Code DevOps",
                        description: "Visual interfaces and natural language interfaces make DevOps practices accessible to non-technical team members."
                    },
                    {
                        year: "2026",
                        milestone: "Self-Healing Infrastructure",
                        description: "Systems automatically detect and修复 infrastructure issues without human intervention."
                    },
                    {
                        year: "2027",
                        milestone: "Sustainable DevOps",
                        description: "DevOps practices incorporate energy efficiency and carbon footprint reduction as key metrics."
                    }
                ]
            },
            {
                title: "Future Horizons (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Autonomous Operations",
                        description: "AI systems manage entire technology stacks with minimal human oversight, making autonomous decisions about scaling, optimization, and security."
                    },
                    {
                        year: "2029",
                        milestone: "Quantum DevOps",
                        description: "DevOps practices adapt to manage hybrid classical-quantum computing environments."
                    },
                    {
                        year: "2030",
                        milestone: "Conscious Infrastructure",
                        description: "Advanced AI systems managing infrastructure develop emergent properties resembling consciousness and self-preservation."
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        name: "Cy Computing",
        category: "cloud",
        icon: "fas fa-bolt",
        description: "A distributed computing paradigm that brings computation and data storage closer to the locations where it is needed to improve response times and save bandwidth.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "5G-Enabled Edge Computing",
                        description: "Widespread 5G deployment enables low-latency edge computing for applications like autonomous vehicles and industrial IoT."
                    },
                    {
                        year: "2025",
                        milestone: "Edge AI Chips",
                        description: "Specialized AI chips are integrated into edge devices, enabling sophisticated on-device machine learning."
                    }
                ]
            },
            {
                title: "Short Term (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Federated Edge Learning",
                        description: "Edge devices collaborate learn from local data and share insights without transmitting sensitive information to central servers."
                    },
                    {
                        year: "2026",
                        milestone: "Autonomous Edge Networks",
                        description: "Edge computing networks can autonomously reconfigure based on traffic patterns and device availability."
                    },
                    {
                        year: "2027",
                        milestone: "Holographic Edge Applications",
                        description: "Edge computing enables real-time holographic communication and collaboration across distances."
                    }
                ]
            },
            {
                title: "Long Term Vision (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Brain-Edge Interfaces",
                        description: "Direct neural interfaces with edge devices enable thought-controlled smart environments."
                    },
                    {
                        year: "2029",
                        milestone: "Quantum Edge Computing",
                        description: "Mini quantum processors are deployed at the edge for specific high-complexity tasks."
                    },
                    {
                        year: "2030",
                        milestone: "Planetary-Scale Edge Network",
                        description: "A seamless edge computing network spans Earth and extends to lunar and lunar colonies."
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        name: "Data Science",
        category: "data",
        icon: "fas fa-chart-line",
        description: "An interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "Automated Data Science Platforms",
                        description: "Platforms can automatically clean, preprocess, and analyze data with minimal human intervention."
                    },
                    {
                        year: "2025",
                        milestone: "Ethical AI Frameworks",
                        description: "Comprehensive frameworks ensure data science projects adhere to ethical standards regarding bias, privacy, and fairness."
                    }
                ]
            },
            {
                title: "Short Term (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Causal Inference Tools",
                        description: "New tools enable data scientists to move beyond correlation to identify true cause-and-effect relationships in complex systems."
                    },
                    {
                        year: "2026",
                        milestone: "Federated Data Analysis",
                        description: "Analyze analyze data across multiple organizations without sharing the underlying data, preserving privacy and confidentiality."
                    },
                    {
                        year: "2027",
                        milestone: "AI-Augmented Hypothesis Generation",
                        description: "AI systems suggest novel hypotheses and research directions based on analysis of vast scientific literature and datasets."
                    }
                ]
            },
            {
                title: "Future Horizons (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Real-Time World Modeling",
                        description: "Data science creates dynamic, real-time digital twins of entire cities, ecosystems, and economic systems."
                    },
                    {
                        year: "2029",
                        milestone: "Predict Time Machine",
                        description: "Advanced predictive models can accurately simulate future scenarios decades ahead, informing policy and strategic planning."
                    },
                    {
                        year: "2030",
                        milestone: "Conscious Data Systems",
                        description: "Data systems develop emergent properties that resemble consciousness, raising philosophical and ethical questions."
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        name: "Mobile Development",
        category: "web",
        icon: "fas fa-mobile-alt",
        description: "The process of creating applications for mobile devices such as smartphones and tablets, focusing on touch interfaces and mobile-specific features.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "Foldable Device Optimization",
                        description: "Mobile applications are designed to seamlessly adapt to foldable and rollable screen technologies."
                    },
                    {
                        year: "2025",
                        milestone: "5G-Optimized Applications",
                        description: "Applications applications leverage 5G capabilities for high-bandwidth, low-latency experiences like cloud gaming and real-time collaboration."
                    }
                ]
            },
            {
                title: "Short Term (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "AR-First Applications",
                        description: "Applications applications are designed primarily for augmented reality interfaces, with 2D screens as secondary displays."
                    },
                    {
                        year: "2026",
                        milestone: "AI-Powered Personalization",
                        description: "Mobile apps use on-device AI to provide hyper-personalized experiences that adapt to user behavior and context."
                    },
                    {
                        year: "2027",
                        milestone: "Brain-Computer Interface Prototypes",
                        description: "Early commercial applications support basic brain-computer interfaces for hands-free control."
                    }
                ]
            },
            {
                title: "Future Horizons (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Holographic Mobile Interfaces",
                        description: "Mobile devices project interactive holograms into physical space, eliminating the need for physical screens."
                    },
                    {
                        year: "2029",
                        milestone: "Emotion-Sensing Applications",
                        description: "Mobile apps can detect user emotions through biometric data and adapt their behavior accordingly."
                    },
                    {
                        year: "2030",
                        milestone: "Neural Integration",
                        description: "Mobile technology is integrated directly with the nervous system, providing seamless access to digital information and services."
                    }
                ]
            }
        ]
    },
    {
        id: 12,
        name: "Cy Security",
        category: "security",
        icon: "fas fa-shield-alt",
        description: "The practice of protecting systems, networks, and programs from digital attacks that aim to access, change, or destroy sensitive information.",
        roadmap: [
            {
                title: "Current State (2025)",
                items: [
                    {
                        year: "2025",
                        milestone: "Zero Trust Architecture Adoption",
                        description: "Zero trust security models become the standard, requiring continuous verification for every user and device."
                    },
                    {
                        year: "2025",
                        milestone: "AI-Powered Threat Detection",
                        description: "AI systems can detect and respond to sophisticated cyber threats in real-time with high accuracy."
                    }
                ]
            },
            {
                title: "Short Term (2026-2027)",
                items: [
                    {
                        year: "2026",
                        milestone: "Post-Quantum Cryptography Implementation",
                        description: "Organizations begin implementing post-quantum cryptographic algorithms to prepare for future quantum computing threats."
                    },
                    {
                        year: "2026",
                        milestone: "Autonomous Security Operations",
                        description: "Security operations centers are increasingly automated, with AI handling the majority of threat detection and response."
                    },
                    {
                        year: "2027",
                        milestone: "Decentralized Identity Security",
                        description: "Blockchain-based digital identities reduce reliance and improve authentication security across services."
                    }
                ]
            },
            {
                title: "Future Horizons (2028-2030)",
                items: [
                    {
                        year: "2028",
                        milestone: "Self-Healing Systems",
                        description: "Systems can automatically detect, isolate, and修复 security vulnerabilities without human intervention."
                    },
                    {
                        year: "2029",
                        milestone: "Quantum-Secure Networks",
                        description: "Quantum key distribution becomes commercially for securing critical infrastructure and communications."
                    },
                    {
                        year: "2030",
                        milestone: "AI vs AI Security Battles",
                        description: "Advanced AI systems engage in autonomous cyber warfare, requiring equally sophisticated AI defenses."
                    }
                ]
            }
        ]
    }
];