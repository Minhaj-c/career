export const weeklyContent = {
    "Frontend Developer": {
      weeks: [
        {
          title: "HTML & CSS Basics",
          description: "Learn the fundamentals of web development",
          tasks: [
            "Learn HTML document structure",
            "Understand basic CSS styling",
            "Practice with CSS selectors",
            "Create responsive layouts"
          ],
          quiz: {
            questions: [
              {
                question: "What does HTML stand for?",
                options: [
                  "Hyper Text Markup Language",
                  "High Tech Modern Language",
                  "Hybrid Text Making Language",
                  "Home Tool Markup Language"
                ],
                correctAnswer: 0
              },
              {
                question: "Which CSS property changes text color?",
                options: ["text-color", "color", "font-color", "text-style"],
                correctAnswer: 1
              },
              {
                question: "What is the correct HTML element for the largest heading?",
                options: ["heading", "h6", "head", "h1"],
                correctAnswer: 3
              },
              {
                question: "Which property is used to change the background color?",
                options: ["bgcolor", "background-color", "color-background", "bg-color"],
                correctAnswer: 1
              },
              {
                question: "What does CSS stand for?",
                options: [
                  "Cascading Style Sheets",
                  "Computer Style Sheets",
                  "Colorful Style Sheets",
                  "Creative Style Sheets"
                ],
                correctAnswer: 0
              },
              {
                question: "Which HTML attribute is used to define inline styles?",
                options: ["class", "style", "font", "styles"],
                correctAnswer: 1
              },
              {
                question: "Which HTML tag is used to create a hyperlink?",
                options: ["a", "link", "href", "hyperlink"],
                correctAnswer: 0
              },
              {
                question: "Which CSS property is used to control the text size?",
                options: ["font-size", "text-size", "font-style", "text-style"],
                correctAnswer: 0
              }
            ]
          }
        },
        {
          title: "JavaScript Fundamentals",
          description: "Master core JavaScript concepts",
          tasks: [
            "Learn variables and data types",
            "Understand control structures",
            "Practice with functions",
            "Explore DOM manipulation"
          ],
          quiz: {
            questions: [
              {
                question: "Which keyword declares a variable in JavaScript?",
                options: ["var", "variable", "v", "vel"],
                correctAnswer: 0
              },
              {
                question: "What is the correct way to write a JavaScript array?",
                options: [
                  "[1,2,3,4]",
                  "array(1,2,3,4)",
                  "1,2,3,4",
                  "{1,2,3,4}"
                ],
                correctAnswer: 0
              },
              {
                question: "Which operator is used for strict equality comparison?",
                options: ["==", "===", "=", "!="],
                correctAnswer: 1
              },
              {
                question: "What is the correct way to write a function in JavaScript?",
                options: [
                  "function:myFunction()",
                  "function = myFunction()",
                  "function myFunction()",
                  "myFunction(): function"
                ],
                correctAnswer: 2
              },
              {
                question: "Which method is used to add an element to the end of an array?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correctAnswer: 0
              },
              {
                question: "What is the output of `typeof null` in JavaScript?",
                options: ["null", "undefined", "object", "string"],
                correctAnswer: 2
              },
              {
                question: "Which method is used to remove the last element from an array?",
                options: ["push()", "pop()", "shift()", "unshift()"],
                correctAnswer: 1
              },
              {
                question: "What is the purpose of the `this` keyword in JavaScript?",
                options: [
                  "Refers to the current object",
                  "Refers to the previous object",
                  "Refers to the global object",
                  "Refers to the parent object"
                ],
                correctAnswer: 0
              }
            ]
          }
        }
      ]
    },
    "Security Analyst": {
      weeks: [
        {
          title: "Introduction to Cybersecurity",
          description: "Foundation concepts and terminology in cybersecurity",
          tasks: [
            "Learn basic cybersecurity terminology",
            "Understand the CIA triad (Confidentiality, Integrity, Availability)",
            "Explore common cyber threats and attacks",
            "Study security governance frameworks"
          ],
          quiz: {
            questions: [
              {
                question: "What does the 'A' in CIA triad stand for?",
                options: ["Authentication", "Authorization", "Accountability", "Availability"],
                correctAnswer: 3
              },
              {
                question: "Which of the following is NOT considered a common cyber threat vector?",
                options: ["Phishing emails", "Software vulnerabilities", "Strong passwords", "Unsecured networks"],
                correctAnswer: 2
              },
              {
                question: "What type of attack attempts to overwhelm a system with traffic?",
                options: ["Man-in-the-Middle", "SQL Injection", "Denial of Service", "Cross-Site Scripting"],
                correctAnswer: 2
              },
              {
                question: "Which principle focuses on granting users only the access necessary to perform their job?",
                options: ["Defense in Depth", "Least Privilege", "Separation of Duties", "Need to Know"],
                correctAnswer: 1
              },
              {
                question: "What is the primary goal of information security?",
                options: [
                  "Maximize system performance",
                  "Protect information assets",
                  "Create complex passwords",
                  "Eliminate all vulnerabilities"
                ],
                correctAnswer: 1
              },
              {
                question: "Which framework provides guidelines for information security management systems?",
                options: ["ISO 27001", "PCI DSS", "HIPAA", "GDPR"],
                correctAnswer: 0
              },
              {
                question: "What does APT stand for in cybersecurity?",
                options: [
                  "Advanced Persistent Threat",
                  "Automated Protection Technology",
                  "Application Programming Tool",
                  "Authorized Protection Team"
                ],
                correctAnswer: 0
              },
              {
                question: "Which concept describes protecting data while in storage, in transit, and in use?",
                options: ["Data lifecycle protection", "Encryption standards", "Data loss prevention", "Security posture"],
                correctAnswer: 0
              },
              {
                question: "What is a zero-day vulnerability?",
                options: [
                  "A vulnerability that has existed for less than 24 hours",
                  "A vulnerability that requires zero clicks to exploit",
                  "A vulnerability unknown to the software vendor",
                  "A vulnerability with zero possible mitigations"
                ],
                correctAnswer: 2
              },
              {
                question: "Which security principle involves implementing multiple layers of security controls?",
                options: ["Least privilege", "Defense in depth", "Separation of duties", "Need to know"],
                correctAnswer: 1
              }
            ]
          }
        },
        {
          title: "Network Security Fundamentals",
          description: "Understanding networks and their security implications",
          tasks: [
            "Learn network protocols and architecture",
            "Understand TCP/IP and OSI models",
            "Study common network vulnerabilities",
            "Practice with network security tools"
          ],
          quiz: {
            questions: [
              {
                question: "Which network device operates at Layer 3 of the OSI model?",
                options: ["Hub", "Switch", "Router", "Bridge"],
                correctAnswer: 2
              },
              {
                question: "What protocol is used to securely connect to remote servers?",
                options: ["FTP", "HTTP", "Telnet", "SSH"],
                correctAnswer: 3
              },
              {
                question: "Which of the following is NOT a private IP address range?",
                options: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "8.8.8.0/24"],
                correctAnswer: 3
              },
              {
                question: "What type of device is specifically designed to prevent unauthorized access to a network?",
                options: ["Router", "Firewall", "Switch", "Hub"],
                correctAnswer: 1
              },
              {
                question: "Which protocol is used to dynamically assign IP addresses?",
                options: ["ARP", "DHCP", "DNS", "ICMP"],
                correctAnswer: 1
              },
              {
                question: "What does NAT stand for in networking?",
                options: [
                  "Network Address Translation",
                  "Native Address Transfer",
                  "Network Authentication Technology",
                  "New Access Technology"
                ],
                correctAnswer: 0
              },
              {
                question: "Which layer of the OSI model is responsible for routing?",
                options: ["Data Link Layer", "Network Layer", "Transport Layer", "Session Layer"],
                correctAnswer: 1
              },
              {
                question: "What is the purpose of a VLAN in a network?",
                options: [
                  "To increase network speed",
                  "To segment a network into logical groups",
                  "To connect to the internet",
                  "To encrypt network traffic"
                ],
                correctAnswer: 1
              },
              {
                question: "Which protocol resolves IP addresses to MAC addresses?",
                options: ["DNS", "DHCP", "ARP", "HTTP"],
                correctAnswer: 2
              },
              {
                question: "What is a DMZ in network security?",
                options: [
                  "Dynamic Management Zone",
                  "Digital Monitoring Zone",
                  "Demilitarized Zone",
                  "Data Management Zone"
                ],
                correctAnswer: 2
              }
            ]
          }
        },
        {
          title: "Security Controls and Hardening",
          description: "Implementing preventive security measures",
          tasks: [
            "Learn system hardening techniques",
            "Study security controls classification",
            "Understand patch management",
            "Practice security configuration"
          ],
          quiz: {
            questions: [
              {
                question: "Which of the following is an example of a technical control?",
                options: ["Security policy", "Security awareness training", "Firewall", "Background checks"],
                correctAnswer: 2
              },
              {
                question: "What does system hardening primarily aim to achieve?",
                options: [
                  "Increase system performance",
                  "Reduce security vulnerabilities",
                  "Add more features",
                  "Improve user experience"
                ],
                correctAnswer: 1
              },
              {
                question: "Which practice involves removing unnecessary services and applications?",
                options: ["Patching", "Monitoring", "Asset management", "Attack surface reduction"],
                correctAnswer: 3
              },
              {
                question: "What is the purpose of patch management?",
                options: [
                  "To develop new software features",
                  "To update systems with security fixes",
                  "To monitor system performance",
                  "To backup critical data"
                ],
                correctAnswer: 1
              },
              {
                question: "Which control type is designed to detect security incidents after they occur?",
                options: ["Preventive", "Detective", "Corrective", "Compensating"],
                correctAnswer: 1
              },
              {
                question: "What is the primary purpose of implementing account lockout policies?",
                options: [
                  "To prevent brute force attacks",
                  "To reduce system resources",
                  "To simplify password management",
                  "To improve login speed"
                ],
                correctAnswer: 0
              },
              {
                question: "Which of the following is considered a best practice for password policies?",
                options: [
                  "Requiring frequent password changes",
                  "Using complex character requirements",
                  "Implementing longer passwords or passphrases",
                  "Sharing passwords among team members"
                ],
                correctAnswer: 2
              },
              {
                question: "What is the principle of 'defense in depth' in system hardening?",
                options: [
                  "Using only one strong security control",
                  "Implementing multiple layers of security",
                  "Focusing only on perimeter security",
                  "Hardening only critical systems"
                ],
                correctAnswer: 1
              },
              {
                question: "Which Windows tool is used to configure local security policies?",
                options: ["Task Manager", "Registry Editor", "Group Policy Editor", "Device Manager"],
                correctAnswer: 2
              },
              {
                question: "What file permission setting in Linux allows only the owner to read and write a file?",
                options: ["777", "755", "644", "600"],
                correctAnswer: 3
              }
            ]
          }
        },
        {
          title: "Threat Intelligence",
          description: "Understanding and utilizing cyber threat intelligence",
          tasks: [
            "Learn threat intelligence concepts",
            "Understand intelligence sources and types",
            "Study threat indicators and IOCs",
            "Practice using threat intelligence platforms"
          ],
          quiz: {
            questions: [
              {
                question: "What does IoC stand for in threat intelligence?",
                options: [
                  "Internet of Connections",
                  "Indicators of Compromise",
                  "Infrastructure of Concern",
                  "Intelligence on Cybercrime"
                ],
                correctAnswer: 1
              },
              {
                question: "Which type of threat intelligence focuses on the motivations and methods of threat actors?",
                options: ["Strategic", "Tactical", "Operational", "Technical"],
                correctAnswer: 0
              },
              {
                question: "What is a threat feed?",
                options: [
                  "A social media account posting about threats",
                  "A continuously updated stream of threat intelligence",
                  "A database of historical attacks",
                  "A report on system vulnerabilities"
                ],
                correctAnswer: 1
              },
              {
                question: "Which of the following is an example of a technical IoC?",
                options: ["Phishing email content", "Malware hash value", "Attacker motivation", "Target industry"],
                correctAnswer: 1
              },
              {
                question: "What framework is commonly used for sharing threat intelligence information?",
                options: ["ISO 27001", "NIST CSF", "STIX/TAXII", "COBIT"],
                correctAnswer: 2
              },
              {
                question: "What is the Diamond Model in threat intelligence?",
                options: [
                  "A rating system for threat severity",
                  "A framework analyzing adversary, capability, infrastructure, and victim",
                  "A method for evaluating intelligence sources",
                  "A visualization tool for attack patterns"
                ],
                correctAnswer: 1
              },
              {
                question: "Which threat intelligence type is most useful for immediate defense actions?",
                options: ["Strategic", "Tactical", "Operational", "Historical"],
                correctAnswer: 1
              },
              {
                question: "What does TTP stand for in threat intelligence?",
                options: [
                  "Tactics, Techniques, and Procedures",
                  "Technical Threat Protection",
                  "Threat Tracking Protocol",
                  "Targeted Threat Prevention"
                ],
                correctAnswer: 0
              },
              {
                question: "What is OSINT in the context of threat intelligence?",
                options: [
                  "Open Source Intelligence",
                  "Operational Security Intelligence Network",
                  "Online Security Information Technology",
                  "Organized Security Intelligence Team"
                ],
                correctAnswer: 0
              },
              {
                question: "Which factor is most important when evaluating the quality of a threat intelligence source?",
                options: ["Volume of data", "Cost", "Reliability", "Age of the source"],
                correctAnswer: 2
              }
            ]
          }
        },
        {
          title: "Vulnerability Management",
          description: "Identifying, assessing, and remediating security vulnerabilities",
          tasks: [
            "Learn vulnerability scanning techniques",
            "Understand vulnerability assessment methodology",
            "Study vulnerability prioritization",
            "Practice vulnerability remediation workflow"
          ],
          quiz: {
            questions: [
              {
                question: "What is the CVSS used for?",
                options: [
                  "Categorizing types of malware",
                  "Scoring vulnerability severity",
                  "Certifying security professionals",
                  "Detecting network intrusions"
                ],
                correctAnswer: 1
              },
              {
                question: "Which phase of vulnerability management comes after identification?",
                options: ["Remediation", "Verification", "Prioritization", "Reporting"],
                correctAnswer: 2
              },
              {
                question: "What type of vulnerability scanning can potentially disrupt systems?",
                options: ["Passive scanning", "Credentialed scanning", "Active scanning", "Authenticated scanning"],
                correctAnswer: 2
              },
              {
                question: "What is a false positive in vulnerability scanning?",
                options: [
                  "A vulnerability that exists but wasn't detected",
                  "A detected vulnerability that doesn't actually exist",
                  "A vulnerability that can't be exploited",
                  "A vulnerability found on a test system"
                ],
                correctAnswer: 1
              },
              {
                question: "Which vulnerability database is maintained by MITRE?",
                options: ["OSVDB", "CVE", "NVD", "Bugtraq"],
                correctAnswer: 1
              },
              {
                question: "What is the primary purpose of a penetration test in vulnerability management?",
                options: [
                  "To find all vulnerabilities",
                  "To validate vulnerability exploitability",
                  "To patch systems automatically",
                  "To assign CVSS scores"
                ],
                correctAnswer: 1
              },
              {
                question: "What is vulnerability prioritization based on?",
                options: [
                  "Solely the CVSS score",
                  "When the vulnerability was discovered",
                  "Risk factors including threat, impact, and exploitability",
                  "The number of affected systems"
                ],
                correctAnswer: 2
              },
              {
                question: "Which of the following is NOT typically included in a vulnerability assessment report?",
                options: [
                  "Executive summary",
                  "Detailed findings",
                  "Recommendations",
                  "Employee performance evaluations"
                ],
                correctAnswer: 3
              },
              {
                question: "What is the primary difference between a vulnerability assessment and a penetration test?",
                options: [
                  "Vulnerability assessments identify weaknesses, penetration tests exploit them",
                  "Vulnerability assessments are automated, penetration tests are always manual",
                  "Vulnerability assessments are external, penetration tests are internal",
                  "Vulnerability assessments are cheaper, penetration tests are more expensive"
                ],
                correctAnswer: 0
              },
              {
                question: "What is meant by 'attack surface' in vulnerability management?",
                options: [
                  "The physical area of a building that can be attacked",
                  "All the potential points where an attacker could enter a system",
                  "The severity of a potential attack",
                  "The number of previous attacks on a system"
                ],
                correctAnswer: 1
              }
            ]
          }
        },
        {
          title: "Security Monitoring and SIEM",
          description: "Implementing and using security monitoring solutions",
          tasks: [
            "Learn SIEM architecture and components",
            "Understand log collection and aggregation",
            "Study correlation rules and alerts",
            "Practice security monitoring workflows"
          ],
          quiz: {
            questions: [
              {
                question: "What does SIEM stand for?",
                options: [
                  "Security Information and Event Management",
                  "System Integration and Enterprise Monitoring",
                  "Security Incident Emergency Management",
                  "System Information and Event Metrics"
                ],
                correctAnswer: 0
              },
              {
                question: "Which component of SIEM is responsible for collecting log data?",
                options: ["Correlation engine", "Dashboard", "Connector/Agent", "Database"],
                correctAnswer: 2
              },
              {
                question: "What is the purpose of log normalization in a SIEM?",
                options: [
                  "To reduce the size of logs",
                  "To convert logs into a standard format",
                  "To encrypt sensitive log data",
                  "To verify log accuracy"
                ],
                correctAnswer: 1
              },
              {
                question: "What is a correlation rule in SIEM?",
                options: [
                  "A method for connecting to log sources",
                  "A formula for calculating alert severity",
                  "A logic pattern for identifying security events across multiple logs",
                  "A procedure for backing up log data"
                ],
                correctAnswer: 2
              },
              {
                question: "Which type of alert is most likely to be investigated immediately?",
                options: ["Informational", "Low", "Medium", "High"],
                correctAnswer: 3
              },
              {
                question: "What is the main purpose of a SIEM dashboard?",
                options: [
                  "To create correlation rules",
                  "To visualize security data and metrics",
                  "To collect logs from endpoints",
                  "To automatically respond to incidents"
                ],
                correctAnswer: 1
              },
              {
                question: "What is a common challenge with SIEM implementations?",
                options: [
                  "Too few alerts",
                  "Excessive false positives",
                  "Insufficient processing power",
                  "Overly simplified user interface"
                ],
                correctAnswer: 1
              },
              {
                question: "Which of the following is an example of a SIEM use case?",
                options: [
                  "Password reset procedure",
                  "Backup retention policy",
                  "Detection of brute force login attempts",
                  "Software development lifecycle"
                ],
                correctAnswer: 2
              },
              {
                question: "What is the purpose of log retention in SIEM?",
                options: [
                  "To meet compliance requirements",
                  "To reduce system load",
                  "To improve system performance",
                  "To prevent log collection"
                ],
                correctAnswer: 0
              },
              {
                question: "Which of the following is NOT a common SIEM deployment model?",
                options: ["On-premises", "Cloud-based", "Hybrid", "Manual"],
                correctAnswer: 3
              }
            ]
          }
        },
        {
          title: "Incident Response",
          description: "Detecting, investigating, and responding to security incidents",
          tasks: [
            "Learn incident response lifecycle",
            "Understand incident classification and prioritization",
            "Study incident handling procedures",
            "Practice incident response scenarios"
          ],
          quiz: {
            questions: [
              {
                question: "What is the first phase in the NIST incident response lifecycle?",
                options: ["Detection", "Preparation", "Containment", "Eradication"],
                correctAnswer: 1
              },
              {
                question: "Which document outlines the organization's incident response procedures?",
                options: ["Security policy", "Incident response plan", "Business continuity plan", "Disaster recovery plan"],
                correctAnswer: 1
              },
              {
                question: "What is the primary goal of the containment phase?",
                options: [
                  "To identify the attacker",
                  "To document the incident",
                  "To prevent the incident from spreading",
                  "To restore affected systems"
                ],
                correctAnswer: 2
              },
              {
                question: "Which term describes the collection, preservation, and analysis of evidence?",
                options: ["Incident triage", "Forensic investigation", "Root cause analysis", "Remediation"],
                correctAnswer: 1
              },
              {
                question: "What is an incident response playbook?",
                options: [
                  "A record of past incidents",
                  "A list of security tools",
                  "A step-by-step guide for specific incident types",
                  "A team roster for incident handlers"
                ],
                correctAnswer: 2
              },
              {
                question: "Which of the following is NOT typically included in post-incident activities?",
                options: [
                  "Lessons learned",
                  "Documentation updates",
                  "Firing responsible employees",
                  "Process improvements"
                ],
                correctAnswer: 2
              },
              {
                question: "What is meant by 'incident triage'?",
                options: [
                  "The process of prioritizing incidents based on severity",
                  "The restoration of affected systems",
                  "The identification of the attacker",
                  "The documentation of incident details"
                ],
                correctAnswer: 0
              },
              {
                question: "Which role typically leads an incident response team?",
                options: ["Security analyst", "Incident commander", "Network administrator", "CISO"],
                correctAnswer: 1
              },
              {
                question: "What does 'chain of custody' refer to in incident response?",
                options: [
                  "The hierarchy of incident response team members",
                  "The sequence of attack techniques used",
                  "The documentation showing who handled evidence and when",
                  "The communication chain during an incident"
                ],
                correctAnswer: 2
              },
              {
                question: "What is the purpose of a tabletop exercise in incident response?",
                options: [
                  "To physically secure computer hardware",
                  "To practice incident response procedures in a simulated environment",
                  "To identify vulnerabilities in the network",
                  "To monitor logs in real-time"
                ],
                correctAnswer: 1
              }
            ]
          }
        },
        {
          title: "Digital Forensics",
          description: "Collecting, analyzing, and preserving digital evidence",
          tasks: [
            "Learn forensic investigation methodology",
            "Understand evidence handling procedures",
            "Study forensic tools and techniques",
            "Practice forensic analysis scenarios"
          ],
          quiz: {
            questions: [
              {
                question: "What is the primary goal of digital forensics?",
                options: [
                  "To recover deleted files",
                  "To collect and preserve evidence for legal proceedings",
                  "To improve system performance",
                  "To identify vulnerabilities"
                ],
                correctAnswer: 1
              },
              {
                question: "Which principle states that digital evidence should remain unchanged?",
                options: ["Chain of custody", "Legal hold", "Non-repudiation", "Evidence integrity"],
                correctAnswer: 3
              },
              {
                question: "What is a write blocker used for?",
                options: [
                  "Preventing malware from writing to disk",
                  "Preventing investigators from accidentally modifying evidence",
                  "Blocking unauthorized network connections",
                  "Blocking specific users from accessing data"
                ],
                correctAnswer: 1
              },
              {
                question: "What does hashing evidence accomplish in digital forensics?",
                options: [
                  "Encrypts the evidence",
                  "Compresses the evidence",
                  "Verifies evidence hasn't been altered",
                  "Categorizes the evidence"
                ],
                correctAnswer: 2
              },
              {
                question: "Which of the following is NOT a common phase in the digital forensics process?",
                options: ["Collection", "Examination", "Analysis", "Encryption"],
                correctAnswer: 3
              },
              {
                question: "What type of evidence includes timestamps, log entries, and metadata?",
                options: ["Direct evidence", "Testimonial evidence", "Circumstantial evidence", "Documentary evidence"],
                correctAnswer: 2
              },
              {
                question: "Which forensic technique is used to recover deleted files?",
                options: ["Log analysis", "Memory dumping", "File carving", "Network traffic analysis"],
                correctAnswer: 2
              },
              {
                question: "What does 'live forensics' refer to?",
                options: [
                  "Analyzing a system while it's still running",
                  "Real-time monitoring of network traffic",
                  "Examining evidence during court proceedings",
                  "Using the latest forensic tools"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the purpose of an evidence custody form?",
                options: [
                  "To calculate the cost of the investigation",
                  "To document who handled the evidence and when",
                  "To categorize types of evidence",
                  "To establish admissibility in court"
                ],
                correctAnswer: 1
              },
              {
                question: "Which area of forensics deals with extracting data from mobile devices?",
                options: ["Network forensics", "Database forensics", "Mobile forensics", "Cloud forensics"],
                correctAnswer: 2
              }
            ]
          }
        },
        {
          title: "Malware Analysis",
          description: "Analyzing and understanding malicious software",
          tasks: [
            "Learn malware types and behaviors",
            "Understand analysis methodologies",
            "Study analysis tools and environments",
            "Practice analyzing malware samples"
          ],
          quiz: {
            questions: [
              {
                question: "What is the difference between static and dynamic malware analysis?",
                options: [
                  "Static analyzes code, dynamic observes behavior",
                  "Static is faster, dynamic is more thorough",
                  "Static is automated, dynamic is manual",
                  "Static is newer, dynamic is older"
                ],
                correctAnswer: 0
              },
              {
                question: "What type of environment is typically used for safe malware analysis?",
                options: ["Production environment", "Sandbox", "Cloud server", "Development environment"],
                correctAnswer: 1
              },
              {
                question: "What is a malware signature?",
                options: [
                  "A digital certificate used by malware",
                  "The creator's name hidden in the code",
                  "A unique pattern or characteristic that identifies malware",
                  "The damage caused by the malware"
                ],
                correctAnswer: 2
              },
              {
                question: "Which type of malware encrypts files and demands payment for decryption?",
                options: ["Worm", "Trojan", "Ransomware", "Rootkit"],
                correctAnswer: 2
              },
              {
                question: "What does a disassembler do in malware analysis?",
                options: [
                  "Removes malware from infected systems",
                  "Converts machine code to assembly language",
                  "Executes malware in a controlled environment",
                  "Encrypts malware samples for safe storage"
                ],
                correctAnswer: 1
              },
              {
                question: "What is a malware's C2 server?",
                options: [
                  "The second computer infected by the malware",
                  "A server that provides control commands to the malware",
                  "A backup server storing malware code",
                  "A server that classifies malware types"
                ],
                correctAnswer: 1
              },
              {
                question: "Which technique do malware authors use to make analysis more difficult?",
                options: ["Documentation", "Obfuscation", "Standardization", "Open sourcing"],
                correctAnswer: 1
              },
              {
                question: "What is the purpose of API hooking in dynamic malware analysis?",
                options: [
                  "To connect to the malware author's server",
                  "To intercept function calls made by the malware",
                  "To remove the malware's harmful components",
                  "To add additional malware for comparison"
                ],
                correctAnswer: 1
              },
              {
                question: "Which tool category monitors changes to the registry, files, and network during analysis?",
                options: ["Debuggers", "Disassemblers", "System monitoring tools", "Packet analyzers"],
                correctAnswer: 2
              },
              {
                question: "What is polymorphic malware?",
                options: [
                  "Malware that damages multiple systems",
                  "Malware that changes its code to avoid detection",
                  "Malware that serves multiple purposes",
                  "Malware that affects multiple operating systems"
                ],
                correctAnswer: 1
              }
            ]
          }
        },
        {
          title : " Identity and Access Management (IAM)",
          description : "Managing user identities and controlling access to resources.",
          tasks : [
            "Learn IAM concepts and principles.",
            "Understand authentication and authorization mechanisms.",
            "Study role-based access control (RBAC).",
            "Practice implementing IAM policies."
          ],
          quiz : {
            
              questions: [
                {
                  question: "What is the primary purpose of IAM?",
                  options: [
                    "To monitor network traffic",
                    "To manage user identities and access permissions",
                    "To encrypt sensitive data",
                    "To detect malware"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "Which authentication method uses something you know, something you have, and something you are?",
                  options: ["Single Sign-On", "Multi-Factor Authentication", "Passwordless Authentication", "Biometric Authentication"],
                  correctAnswer: 1
                },
                {
                  question: "What does RBAC stand for?",
                  options: [
                    "Role-Based Access Control",
                    "Rule-Based Authentication Control",
                    "Resource-Based Access Configuration",
                    "Risk-Based Access Control"
                  ],
                  correctAnswer: 0
                },
                {
                  question: "Which protocol is commonly used for single sign-on (SSO)?",
                  options: ["LDAP", "OAuth", "SAML", "RADIUS"],
                  correctAnswer: 2
                },
                {
                  question: "What is the principle of least privilege in IAM?",
                  options: [
                    "Granting users only the access they need to perform their job",
                    "Allowing users to access all resources",
                    "Requiring frequent password changes",
                    "Using biometric authentication for all users"
                  ],
                  correctAnswer: 0
                },
                {
                  question: "Which of the following is NOT a common IAM tool?",
                  options: ["Okta", "Azure AD", "Splunk", "Ping Identity"],
                  correctAnswer: 2
                },
                {
                  question: "What is the purpose of privileged access management (PAM)?",
                  options: [
                    "To manage access for regular users",
                    "To secure and monitor access for administrative accounts",
                    "To encrypt user passwords",
                    "To detect phishing attempts"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "Which of the following is an example of biometric authentication?",
                  options: ["Password", "Smart card", "Fingerprint scan", "Security token"],
                  correctAnswer: 2
                },
                {
                  question: "What is the main risk of using shared accounts in IAM?",
                  options: [
                    "Increased cost",
                    "Difficulty in tracking individual user actions",
                    "Slower authentication",
                    "Incompatibility with multi-factor authentication"
                  ],
                  correctAnswer: 1
                },
                {
                  question: "What is the purpose of identity federation in IAM?",
                  options: [
                    "To create multiple identities for a single user",
                    "To allow users to access multiple systems with a single identity",
                    "To encrypt user credentials",
                    "To monitor user activity"
                  ],
                  correctAnswer: 1
                }
              ]
            

          }
        },
        {
          title : " Encryption and Cryptography",
          description : "Understanding encryption techniques and cryptographic principles",
          tasks : [
            "Learn symmetric and asymmetric encryption.",
            "Understand cryptographic algorithms.",
            "Study encryption key management.",
            "Practice implementing encryption in applications."
          ],
          quiz :
          {
            questions: [
              {
                question: "What is the primary purpose of encryption?",
                options: [
                  "To compress data",
                  "To protect data confidentiality",
                  "To improve data transmission speed",
                  "To authenticate users"
                ],
                correctAnswer: 1
              },
              {
                question: "Which encryption method uses the same key for encryption and decryption?",
                options: ["Asymmetric encryption", "Symmetric encryption", "Hashing", "Digital signatures"],
                correctAnswer: 1
              },
              {
                question: "What is the most common symmetric encryption algorithm?",
                options: ["RSA", "AES", "ECC", "SHA-256"],
                correctAnswer: 1
              },
              {
                question: "What is the main advantage of asymmetric encryption?",
                options: [
                  "Faster processing speed",
                  "No need for key exchange",
                  "Ability to securely share keys over public channels",
                  "Smaller key sizes"
                ],
                correctAnswer: 2
              },
              {
                question: "What is a digital certificate used for?",
                options: [
                  "Encrypting data",
                  "Verifying the identity of a user or system",
                  "Compressing files",
                  "Storing passwords"
                ],
                correctAnswer: 1
              },
              {
                question: "Which of the following is a hashing algorithm?",
                options: ["AES", "RSA", "SHA-256", "ECC"],
                correctAnswer: 2
              },
              {
                question: "What is the purpose of a certificate authority (CA)?",
                options: [
                  "To encrypt data",
                  "To issue and manage digital certificates",
                  "To store private keys",
                  "To create symmetric keys"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the main risk of using weak encryption algorithms?",
                options: [
                  "Increased data size",
                  "Slower processing speed",
                  "Vulnerability to brute force attacks",
                  "Incompatibility with modern systems"
                ],
                correctAnswer: 2
              },
              {
                question: "What is the purpose of a nonce in cryptography?",
                options: [
                  "To encrypt data",
                  "To ensure a unique value for each encryption operation",
                  "To compress data",
                  "To authenticate users"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the main difference between encryption and hashing?",
                options: [
                  "Encryption is reversible, hashing is not",
                  "Hashing is faster than encryption",
                  "Encryption uses keys, hashing does not",
                  "Hashing is used for authentication, encryption is not"
                ],
                correctAnswer: 0
              }
            ]
          }


        },
        {
          title : "Compliance and Regulations",
          description : "Understanding cybersecurity compliance frameworks and regulations.",
          tasks : [
            "Learn about GDPR, HIPAA, and PCI DSS.",
            "Understand compliance auditing processes.",
            "Study data protection laws.",
            "Practice implementing compliance controls."
          ],
          quiz : 
          {
            questions: [
              {
                question: "What does GDPR stand for?",
                options: [
                  "General Data Protection Regulation",
                  "Global Data Privacy Rules",
                  "Government Data Protection Requirements",
                  "General Data Privacy Rules"
                ],
                correctAnswer: 0
              },
              {
                question: "Which regulation applies to healthcare data in the United States?",
                options: ["GDPR", "HIPAA", "PCI DSS", "SOX"],
                correctAnswer: 1
              },
              {
                question: "What is the primary purpose of PCI DSS?",
                options: [
                  "To protect healthcare data",
                  "To secure credit card transactions",
                  "To regulate data privacy in the EU",
                  "To enforce corporate governance"
                ],
                correctAnswer: 1
              },
              {
                question: "What is a common penalty for non-compliance with GDPR?",
                options: [
                  "Public apology",
                  "Fines up to 4% of global revenue",
                  "Suspension of business operations",
                  "Mandatory employee training"
                ],
                correctAnswer: 1
              },
              {
                question: "Which of the following is NOT a principle of GDPR?",
                options: [
                  "Data minimization",
                  "Right to be forgotten",
                  "Data encryption",
                  "Right to data portability"
                ],
                correctAnswer: 2
              },
              {
                question: "What is the purpose of a compliance audit?",
                options: [
                  "To identify vulnerabilities",
                  "To ensure adherence to regulations and standards",
                  "To improve system performance",
                  "To detect malware"
                ],
                correctAnswer: 1
              },
              {
                question: "Which regulation applies to publicly traded companies in the United States?",
                options: ["GDPR", "HIPAA", "SOX", "PCI DSS"],
                correctAnswer: 2
              },
              {
                question: "What is the main focus of the NIST Cybersecurity Framework?",
                options: [
                  "Protecting healthcare data",
                  "Improving credit card security",
                  "Managing cybersecurity risks",
                  "Regulating data privacy"
                ],
                correctAnswer: 2
              },
              {
                question: "What is the purpose of a data protection impact assessment (DPIA)?",
                options: [
                  "To identify risks to personal data",
                  "To encrypt sensitive data",
                  "To monitor network traffic",
                  "To detect malware"
                ],
                correctAnswer: 0
              },
              {
                question: "Which of the following is a common compliance certification?",
                options: ["ISO 27001", "CISSP", "CEH", "CompTIA Security+"],
                correctAnswer: 0
              }
            ]
          }
        },
        {
          title : "Emerging Threats and Trends",
          description : "Understanding new and evolving cybersecurity threats.",
          tasks : [
            "Learn about zero-day vulnerabilities.",
            "Study advanced persistent threats (APTs).",
            "Explore ransomware and IoT threats.",
            "Practice threat hunting techniques."

          ],
          quiz : 
          {
            questions: [
              {
                question: "What is a zero-day vulnerability?",
                options: [
                  "A vulnerability that has existed for less than 24 hours",
                  "A vulnerability unknown to the software vendor",
                  "A vulnerability that requires zero clicks to exploit",
                  "A vulnerability with zero possible mitigations"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the primary characteristic of an APT?",
                options: [
                  "It is a fast-moving attack",
                  "It is highly targeted and persistent",
                  "It uses only known vulnerabilities",
                  "It is easy to detect"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the main goal of ransomware?",
                options: [
                  "To steal sensitive data",
                  "To encrypt files and demand payment",
                  "To disrupt network services",
                  "To spy on users"
                ],
                correctAnswer: 1
              },
              {
                question: "Which of the following is a common IoT security risk?",
                options: [
                  "Weak authentication",
                  "Excessive encryption",
                  "High cost of devices",
                  "Limited functionality"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the purpose of threat hunting?",
                options: [
                  "To wait for alerts from security tools",
                  "To proactively search for threats in the environment",
                  "To analyze past incidents",
                  "To monitor network traffic"
                ],
                correctAnswer: 1
              },
              {
                question: "What is a fileless malware attack?",
                options: [
                  "An attack that uses no files",
                  "An attack that deletes files",
                  "An attack that encrypts files",
                  "An attack that hides files"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the primary risk of using outdated software?",
                options: [
                  "Increased cost",
                  "Compatibility issues",
                  "Exposure to known vulnerabilities",
                  "Slower performance"
                ],
                correctAnswer: 2
              },
              {
                question: "What is the main challenge of securing IoT devices?",
                options: [
                  "Lack of processing power",
                  "Diversity of devices and protocols",
                  "High cost of security tools",
                  "Limited use cases"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the purpose of a honeypot in cybersecurity?",
                options: [
                  "To store sensitive data",
                  "To attract and analyze attackers",
                  "To encrypt network traffic",
                  "To monitor user activity"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the primary goal of a supply chain attack?",
                options: [
                  "To disrupt manufacturing processes",
                  "To compromise a target through third-party vulnerabilities",
                  "To steal intellectual property",
                  "To encrypt sensitive data"
                ],
                correctAnswer: 1
              }
            ]
          }
        },
        {
          title : " Security Operations Center (SOC)",
          description : "Managing and operating a Security Operations Center.",
          tasks : [
            "Learn SOC roles and responsibilities.",
            "Understand incident detection and response workflows.",
            "Study SOC tools and technologies.",
            "Practice SOC monitoring and reporting."
          ],
          quiz :
          {
            questions: [
              {
                question: "What is the primary function of a SOC?",
                options: [
                  "To develop software",
                  "To monitor and respond to security incidents",
                  "To manage user identities",
                  "To conduct compliance audits"
                ],
                correctAnswer: 1
              },
              {
                question: "Which role is responsible for analyzing security alerts in a SOC?",
                options: ["SOC Manager", "Security Analyst", "Incident Responder", "Threat Hunter"],
                correctAnswer: 1
              },
              {
                question: "What is the purpose of a playbook in a SOC?",
                options: [
                  "To document past incidents",
                  "To provide step-by-step guidance for handling incidents",
                  "To monitor network traffic",
                  "To store evidence"
                ],
                correctAnswer: 1
              },
              {
                question: "Which tool is commonly used for log management in a SOC?",
                options: ["SIEM", "Firewall", "Antivirus", "VPN"],
                correctAnswer: 0
              },
              {
                question: "What is the primary goal of a SOC's incident response process?",
                options: [
                  "To identify the attacker",
                  "To minimize damage and restore normal operations",
                  "To document the incident",
                  "To improve system performance"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the purpose of a runbook in a SOC?",
                options: [
                  "To document standard operating procedures",
                  "To store evidence",
                  "To monitor network traffic",
                  "To analyze malware"
                ],
                correctAnswer: 0
              },
              {
                question: "Which metric is most important for measuring SOC performance?",
                options: [
                  "Number of alerts generated",
                  "Mean time to detect (MTTD)",
                  "Number of employees",
                  "Cost of tools"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the purpose of threat intelligence in a SOC?",
                options: [
                  "To monitor user activity",
                  "To provide context for security alerts",
                  "To encrypt sensitive data",
                  "To manage user identities"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the primary responsibility of a SOC manager?",
                options: [
                  "To analyze security alerts",
                  "To oversee SOC operations and personnel",
                  "To conduct forensic investigations",
                  "To develop security policies"
                ],
                correctAnswer: 1
              },
              {
                question: "What is the purpose of a SOC's escalation process?",
                options: [
                  "To increase the number of alerts",
                  "To ensure incidents are handled by the appropriate personnel",
                  "To monitor network traffic",
                  "To document incidents"
                ],
                correctAnswer: 1
              }
            ]
          }
        },
        {
          title : "Capstone Project",
          description : "Apply all learned skills in a comprehensive security project",
          tasks : [
            "Perform a full security assessment.",
            "Develop an incident response plan.",
            "Implement security controls.",
            "Present findings and recommendations."
          ],
          quiz : {
            questions: [
              {
                question: "What is the first step in a security assessment?",
                options: [
                  "Identify assets and risks",
                  "Implement security controls",
                  "Conduct a penetration test",
                  "Document findings"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the primary goal of an incident response plan?",
                options: [
                  "To identify attackers",
                  "To minimize damage and restore operations",
                  "To document incidents",
                  "To improve system performance"
                ],
                correctAnswer: 1
              },
              {
                question: "Which of the following is NOT a common security control?",
                options: ["Firewall", "Antivirus", "Patch management", "Data backup"],
                correctAnswer: 3
              },
              {
                question: "What is the purpose of a risk assessment?",
                options: [
                  "To identify vulnerabilities and threats",
                  "To implement security controls",
                  "To monitor network traffic",
                  "To analyze malware"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the primary purpose of a security policy?",
                options: [
                  "To define acceptable use of resources",
                  "To monitor user activity",
                  "To encrypt sensitive data",
                  "To detect malware"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the main goal of a penetration test?",
                options: [
                  "To identify vulnerabilities and exploit them",
                  "To monitor network traffic",
                  "To document incidents",
                  "To improve system performance"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the purpose of a security awareness program?",
                options: [
                  "To train employees on security best practices",
                  "To monitor user activity",
                  "To encrypt sensitive data",
                  "To detect malware"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the primary purpose of a disaster recovery plan?",
                options: [
                  "To restore operations after a disruption",
                  "To identify vulnerabilities",
                  "To monitor network traffic",
                  "To analyze malware"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the main goal of a vulnerability scan?",
                options: [
                  "To identify and report vulnerabilities",
                  "To exploit vulnerabilities",
                  "To monitor network traffic",
                  "To document incidents"
                ],
                correctAnswer: 0
              },
              {
                question: "What is the purpose of a security audit?",
                options: [
                  "To assess compliance with policies and standards",
                  "To monitor network traffic",
                  "To encrypt sensitive data",
                  "To detect malware"
                ],
                correctAnswer: 0
              }
            ]
          }
        }
      ]
    }
  };