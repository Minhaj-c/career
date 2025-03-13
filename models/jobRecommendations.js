// models/jobRecommendations.js

export const jobRecommendations = {
    'Frontend Developer': {
        certifications: [
            {
                title: "AWS Certified Developer",
                description: "Boost your cloud development skills with official AWS certification",
                link: "https://aws.amazon.com/certification/certified-developer-associate/"
            },
            {
                title: "Full Stack Development Bootcamp",
                description: "Comprehensive training in modern web development stack",
                link: "https://www.coursera.org/specializations/full-stack-development"
            }
        ],
        freeResources: [
            {
                title: "FreeCodeCamp Full Stack Path",
                description: "Free, self-paced curriculum covering web development fundamentals",
                link: "https://www.freecodecamp.org/learn"
            },
            {
                title: "The Odin Project",
                description: "Open-source curriculum for learning full-stack development",
                link: "https://www.theodinproject.com/"
            },
            {
                title: "Bro code",
                description: "Free code learning from youtube",
                link: "https://youtu.be/xTtL8E4LzTQ?si=9VqHZUfjsCenfig3"
            }
        ]
    },
    'Security Analyst': {
        certifications: [
          {
            title: "Certified Information Systems Security Professional (CISSP)",
            description: "Globally recognized certification for advanced cybersecurity professionals.",
            link: "https://www.isc2.org/cissp"
          },
          {
            title: "Certified Ethical Hacker (CEH)",
            description: "Learn ethical hacking techniques and tools to identify vulnerabilities.",
            link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/"
          },
          {
            title: "CompTIA Security+",
            description: "Entry-level certification covering foundational cybersecurity concepts.",
            link: "https://www.comptia.org/certifications/security"
          },
          {
            title: "Certified Information Security Manager (CISM)",
            description: "Focuses on managing and governing enterprise information security programs.",
            link: "https://www.isaca.org/credentialing/cism"
          },
          {
            title: "Offensive Security Certified Professional (OSCP)",
            description: "Hands-on certification for penetration testing and offensive security.",
            link: "https://www.offensive-security.com/pwk-oscp/"
          }
        ],
        freeResources: [
            {
                title:"Know more about security analyst",
                description:"You can know more about security analyst",
                link:"https://youtu.be/kVnvIBNiC58?si=42oy-2kUrhzPvRYx"
            },
          {
            title: "Cybrary - Free Cybersecurity Courses",
            description: "A wide range of free courses covering cybersecurity fundamentals and advanced topics.",
            link: "https://www.cybrary.it/"
          },
          {
            title: "Introduction to Cybersecurity by Cisco Networking Academy",
            description: "Free course to learn the basics of cybersecurity and its importance.",
            link: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity"
          },
          {
            title: "OWASP Web Security Testing Guide",
            description: "Open-source guide to testing web applications for security vulnerabilities.",
            link: "https://owasp.org/www-project-web-security-testing-guide/"
          },
          {
            title: "Khan Academy - Cybersecurity",
            description: "Introductory lessons on cybersecurity concepts and practices.",
            link: "https://www.khanacademy.org/computing/computer-science/cybersecurity"
          },
          {
            title: "SecurityTube - Free Video Tutorials",
            description: "Free video tutorials on ethical hacking, penetration testing, and more.",
            link: "http://www.securitytube.net/"
          },
          {
            title: "TryHackMe",
            description: "Interactive platform to learn cybersecurity through hands-on labs and challenges.",
            link: "https://tryhackme.com/"
          },
          {
            title: "Hack The Box",
            description: "Online platform to practice penetration testing and cybersecurity skills.",
            link: "https://www.hackthebox.com/"
          }
        ]
      },
    'Data Analyst': {
        certifications: [
            {
                title: "Google Data Analytics Certificate",
                description: "Professional certification to become job-ready for data analytics",
                link: "https://www.coursera.org/professional-certificates/google-data-analytics"
            },
            {
                title: "IBM Data Analyst Professional Certificate",
                description: "Develop practical data analytics skills",
                link: "https://www.coursera.org/professional-certificates/ibm-data-analyst"
            }
        ],
        freeResources: [
            {
                title: "Khan Academy Statistics",
                description: "Learn statistics fundamentals for free",
                link: "https://www.khanacademy.org/math/statistics-probability"
            },
            {
                title: "Python for Data Science",
                description: "Free course on using Python for data analysis",
                link: "https://www.edx.org/course/programming-for-data-science-with-python"
            }
        ]
    },
    'Web Developer': {
        certifications: [
            {
                title: "Meta Front-End Developer Certificate",
                description: "Professional certification by Meta for front-end development",
                link: "https://www.coursera.org/professional-certificates/meta-front-end-developer"
            },
            {
                title: "JavaScript Algorithms and Data Structures",
                description: "Master coding interviews and fundamental programming concepts",
                link: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"
            }
        ],
        freeResources: [
            {
                title: "MDN Web Docs",
                description: "Comprehensive web development documentation and tutorials",
                link: "https://developer.mozilla.org/en-US/"
            },
            {
                title: "JavaScript30",
                description: "30 Day Vanilla JS Coding Challenge",
                link: "https://javascript30.com/"
            }
        ]
    },
    'UI/UX Designer': {
        certifications: [
            {
                title: "Google UX Design Certificate",
                description: "Professional UX design certification from Google",
                link: "https://www.coursera.org/professional-certificates/google-ux-design"
            },
            {
                title: "UI/UX Design Specialization",
                description: "Complete design process: from research to final designs",
                link: "https://www.coursera.org/specializations/ui-ux-design"
            }
        ],
        freeResources: [
            {
                title: "Design Principles",
                description: "Learn fundamental design principles and examples",
                link: "https://principles.design/"
            },
            {
                title: "Figma Tutorials",
                description: "Learn the most popular UI design tool",
                link: "https://www.figma.com/resources/learn-design/"
            }
        ]
    },
    'Game Developer': {
  certifications: [
    {
      title: "Unity Certified Programmer",
      description: "Validate your Unity skills and demonstrate your ability to develop interactive 2D/3D games.",
      link: "https://unity.com/products/unity-certifications"
    },
    {
      title: "Unreal Engine Certified Developer",
      description: "Prove your expertise in Unreal Engine and game development with this official certification.",
      link: "https://www.unrealengine.com/en-US/developer"
    },
    {
      title: "Coursera Game Design and Development Specialization",
      description: "Learn game design, development, and programming from Michigan State University.",
      link: "https://www.coursera.org/specializations/game-development"
    },
    {
      title: "Udemy Complete C# Unity Game Developer 3D",
      description: "Master Unity and C# to create professional 3D games.",
      link: "https://www.udemy.com/course/unitycourse2/"
    }
  ],
  freeResources: [
    {
      title: "Unity Learn",
      description: "Free tutorials, projects, and courses for learning Unity game development.",
      link: "https://learn.unity.com/"
    },
    {
      title: "Unreal Engine Online Learning",
      description: "Free resources and tutorials for learning Unreal Engine.",
      link: "https://www.unrealengine.com/en-US/onlinelearning-courses"
    },
    {
      title: "Godot Engine Documentation",
      description: "Official documentation and tutorials for the open-source Godot Engine.",
      link: "https://docs.godotengine.org/en/stable/"
    },
    {
      title: "Brackeys YouTube Channel",
      description: "Free Unity tutorials and game development tips from the Brackeys YouTube channel.",
      link: "https://www.youtube.com/c/Brackeys"
    },
    {
      title: "GameDev.tv Free Resources",
      description: "Free tutorials and resources for learning game development with Unity and Unreal Engine.",
      link: "https://www.gamedev.tv/p/free-resources"
    },
    {
      title: "OpenGameArt",
      description: "Free assets, sprites, and sounds for game development.",
      link: "https://opengameart.org/"
    },
    {
      title: "Kenney.nl",
      description: "Free game assets, including 2D and 3D art, UI elements, and sound effects.",
      link: "https://kenney.nl/assets"
    },
    {
      title: "Itch.io Game Development Tools",
      description: "Free and open-source tools for game development.",
      link: "https://itch.io/game-development/tools/free"
    },
    {
      title: "CS50's Introduction to Game Development (Harvard)",
      description: "Free online course covering the fundamentals of game development.",
      link: "https://cs50.harvard.edu/games/2018/"
    },
    {
      title: "Game Development with Python and Pygame",
      description: "Free tutorial series for building games with Python and Pygame.",
      link: "https://realpython.com/pygame-a-primer/"
    }
  ]
}
};

// Default recommendations for jobs not in the list
export const defaultRecommendations = {
    certifications: [
        {
            title: "Professional Skills Development",
            description: "Enhance your professional skills with industry-recognized certifications",
            link: "https://www.coursera.org/professional-certificates"
        },
        {
            title: "LinkedIn Learning Paths",
            description: "Curated courses to build your professional skills",
            link: "https://www.linkedin.com/learning"
        }
    ],
    freeResources: [
        {
            title: "LinkedIn Learning",
            description: "Access thousands of business, creative, and technology courses",
            link: "https://www.linkedin.com/learning"
        },
        {
            title: "Coursera Free Courses",
            description: "Access free courses from top universities",
            link: "https://www.coursera.org/courses?query=free"
        }
    ]
};