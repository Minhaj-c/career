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