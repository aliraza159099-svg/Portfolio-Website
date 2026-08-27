/**
 * resume-data.js
 * ----------------------------------------------------------------
 * Single source of truth for resume.html.
 * Update this file when your portfolio information changes and the
 * resume will stay in sync automatically — no need to edit HTML.
 * Only real information from the portfolio is included here.
 * ----------------------------------------------------------------
 */

window.resumeData = {
    name: "Ali Raza",
    title: "Computer Science Student · Aspiring Cloud & DevOps Engineer",
    location: "Islamabad, Pakistan",
    // Reuses the same photo already in your portfolio (assets/profile.jpg).
    // Set to null / delete this line if you'd rather keep the resume photo-free.
    photo: "assets/profile.jpg",
    contact: {
        email: "aliraza159099@gmail.com",
        linkedin: "https://www.linkedin.com/in/ali-raza-395927386",
        linkedinLabel: "linkedin.com/in/ali-raza-395927386",
        github: "https://github.com/aliraza159099-svg",
        githubLabel: "github.com/aliraza159099-svg"
    },

    summary: "Computer and Information Sciences student at PIEAS with a 3.86 CGPA, building strong foundations in programming, web development, and Linux while progressing toward Cloud and DevOps engineering. Comfortable across C++, Python, and Java, currently extending into full-stack development with the MERN stack and Linux/Bash systems administration. Long-term goal: working as a Cloud and DevOps engineer across globe.",

    education: [
        {
            degree: "BS Computer and Information Sciences",
            institution: "Pakistan Institute of Engineering and Applied Sciences (PIEAS), Islamabad",
            period: "Sep 2025 - Present",
            detail: "CGPA: 3.86 (after 2 semesters)"
        },
        {
            degree: "FSc Pre-Engineering",
            institution: "Uswa College Islamabad · Board: FBISE",
            period: "2023 - 2025",
            detail: "91.90% · 1st Position at College"
        },
        {
            degree: "Matriculation (SSC)",
            institution: "Uswa College Islamabad · Board: FBISE",
            period: "2021 - 2023",
            detail: "93%"
        }
    ],

    skills: [
        { category: "Programming", items: ["C++", "Python", "Java"] },
        { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "MERN Stack (Learning)"] },
        { category: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Linux", "Bash"] },
        { category: "Cloud & DevOps (Learning)", items: ["Docker", "AWS", "Cloud Computing", "DevOps Engineering"] },
        { category: "Professional", items: ["Communication", "Teamwork"] }
    ],

    projects: [
        {
            name: "Hostel Management System",
            meta: "Academic Project · Java, Java AWT, OOP",
            description: "Comprehensive hostel management application with admin and student portals for room requests, mess menu management, visitor management, complaints, and student profiles.",
            note: "Built with M. Huzaifa Amin",
            link: null
        },
        {
            name: "Arif Bikes & Oil Depot",
            meta: "Personal Web Project · HTML5, CSS3, JavaScript",
            description: "Static business website for a motorcycle sales and fuel shop, featuring a product showcase and business information.",
            note: null,
            link: "https://aliraza159099-svg.github.io/Arif-Bikes-and-Oil-Depot-/"
        },
        {
            name: "Linux & Bash Scripts",
            meta: "Learning Projects · Linux, Bash, Shell Scripting",
            description: "Collection of practical Linux administration and Bash scripting projects for system automation and utilities.",
            note: null,
            link: "https://github.com/aliraza159099-svg"
        }
    ],

    certifications: [
        {
            name: "Artificial Intelligence Using Python",
            org: "DigiSkills Training Program (DSTP3.0 - Batch 03)",
            date: "Issued 20/07/2026"
        },
        {
            name: "Communication and Soft Skills",
            org: "DigiSkills Training Program (DSTP3.0 - Batch 03)",
            date: "Issued 20/07/2026"
        },
        {
            name: "Code Alpha Internship — Certificate of Completion",
            org: "Code Alpha",
            date: "Issued 11/03/2026"
        }
    ],

    activities: [
        {
            name: "IEEE PIEAS",
            org: "Certificate of Appreciation — General Member & Management Team",
            date: "2025-26"
        },
        {
            name: "PIEAS Sportic Society",
            org: "Football — Runner-up",
            date: "May 2026"
        }
    ],

    achievements: [
        "1st Position at College — FBISE HSSC Annual Exam (Pre-Engineering), Uswa College Islamabad"
    ]
};