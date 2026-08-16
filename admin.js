/* =========================================================
   PORTFOLIO ADMIN PORTAL
   Stage 2A - Front-End Prototype
   ========================================================= */

const STORAGE_KEY = "aliRazaPortfolioData";
const AUTH_KEY = "aliRazaAdminAuth";
const CREDENTIALS_KEY = "aliRazaAdminCredentials";

/* =========================================================
   DEFAULT DATA
   ========================================================= */

const defaultData = {
    certificates: [
        {
            id: crypto.randomUUID(),
            title: "AI Using Python",
            organization: "DigiSkills",
            date: "April 2026 - July 2026",
            certificateId: "F75ZFBAMK",
            description: "Certificate in Artificial Intelligence using Python.",
            image: "assets/certificates/ai-python.jpg"
        },
        {
            id: crypto.randomUUID(),
            title: "Communication and Soft Skills",
            organization: "DigiSkills",
            date: "2026",
            certificateId: "",
            description: "Certificate in communication and soft skills.",
            image: "assets/certificates/communication-softskills.jpg"
        },
        {
            id: crypto.randomUUID(),
            title: "FBISE Merit Certificate",
            organization: "FBISE",
            date: "2025",
            certificateId: "",
            description: "Academic merit certificate.",
            image: "assets/certificates/fbise-merit.jpg"
        }
    ],

    skills: [
        { id: crypto.randomUUID(), name: "HTML", category: "Web Development" },
        { id: crypto.randomUUID(), name: "CSS", category: "Web Development" },
        { id: crypto.randomUUID(), name: "JavaScript", category: "Web Development" },
        { id: crypto.randomUUID(), name: "C++", category: "Programming" },
        { id: crypto.randomUUID(), name: "Python", category: "Programming" },
        { id: crypto.randomUUID(), name: "Java", category: "Programming" },
        { id: crypto.randomUUID(), name: "Git & GitHub", category: "Tools" },
        { id: crypto.randomUUID(), name: "Linux", category: "DevOps & Cloud" },
        { id: crypto.randomUUID(), name: "Bash", category: "DevOps & Cloud" },
        { id: crypto.randomUUID(), name: "MERN Stack", category: "Web Development" }
    ],

    projects: [
        {
            id: crypto.randomUUID(),
            title: "Hostel Management System",
            type: "Academic Project",
            description:
                "A Java AWT based hostel management system featuring student and admin login, room requests, mess menu, visitors, complaints and profiles.",
            technologies: ["Java", "OOP", "Java AWT"],
            github: "",
            live: "",
            image: ""
        },
        {
            id: crypto.randomUUID(),
            title: "Arif Bikes and Oil Depot",
            type: "Web Project",
            description:
                "A responsive website created for a local bikes and oil business.",
            technologies: ["HTML", "CSS", "JavaScript"],
            github: "",
            live: "",
            image: ""
        },
        {
            id: crypto.randomUUID(),
            title: "Bash Scripts for DevOps",
            type: "Linux / DevOps Project",
            description:
                "A collection of Bash scripting exercises and automation experiments developed while learning Linux and DevOps fundamentals.",
            technologies: ["Linux", "Bash", "Shell"],
            github: "",
            live: "",
            image: ""
        }
    ],

    education: [
        {
            id: crypto.randomUUID(),
            degree: "BS Computer and Information Sciences",
            institution:
                "Pakistan Institute of Engineering and Applied Sciences (PIEAS)",
            location: "Islamabad, Pakistan",
            score: "3.86 CGPA",
            scoreLabel: "After 2 semesters",
            period: "September 8, 2025 - Present"
        },
        {
            id: crypto.randomUUID(),
            degree: "FSc Pre-Engineering",
            institution: "Uswa College Islamabad",
            location: "Board: FBISE",
            score: "91.90%",
            scoreLabel: "",
            period: "2023 - 2025"
        },
        {
            id: crypto.randomUUID(),
            degree: "Matriculation (SSC)",
            institution: "Uswa College Islamabad",
            location: "Board: FBISE",
            score: "93%",
            scoreLabel: "",
            period: "2021 - 2023"
        }
    ]
};

/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeStorage();
    initializeCredentials();

    if (isLoggedIn()) {
        showAdminApp();
    } else {
        showLoginScreen();
    }

    setupLogin();
    setupNavigation();
    setupButtons();
    setupModals();
    setupForms();
    setupSidebar();
});

/* =========================================================
   STORAGE
   ========================================================= */

function initializeStorage() {

    if (!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(defaultData)
        );
    }
}

function getData() {

    try {
        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || structuredClone(defaultData);

    } catch (error) {

        console.error("Could not load portfolio data:", error);

        return structuredClone(defaultData);
    }
}

function saveData(data) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}

/* =========================================================
   CREDENTIALS
   ========================================================= */

function initializeCredentials() {

    if (!localStorage.getItem(CREDENTIALS_KEY)) {

        localStorage.setItem(
            CREDENTIALS_KEY,
            JSON.stringify({
                username: "admin",
                password: "admin123"
            })
        );
    }
}

function getCredentials() {

    return JSON.parse(
        localStorage.getItem(CREDENTIALS_KEY)
    );
}

/* =========================================================
   LOGIN
   ========================================================= */

function isLoggedIn() {

    return localStorage.getItem(AUTH_KEY) === "true";
}

function setupLogin() {

    const form = document.getElementById("loginForm");

    if (!form) return;

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const username =
            document.getElementById("loginUsername").value.trim();

        const password =
            document.getElementById("loginPassword").value;

        const credentials = getCredentials();

        if (
            username === credentials.username &&
            password === credentials.password
        ) {

            localStorage.setItem(AUTH_KEY, "true");

            document.getElementById("loginError").textContent = "";

            showAdminApp();

            showToast("Login successful!", "success");

        } else {

            document.getElementById("loginError").textContent =
                "Invalid username or password.";
        }
    });
}

function showAdminApp() {

    document.getElementById("loginScreen").hidden = true;
    document.getElementById("adminApp").hidden = false;

    renderEverything();
}

function showLoginScreen() {

    document.getElementById("loginScreen").hidden = false;
    document.getElementById("adminApp").hidden = true;
}

function logout() {

    localStorage.removeItem(AUTH_KEY);

    showLoginScreen();

    showToast("Logged out successfully.", "success");
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    document.querySelectorAll(".sidebar-link")
        .forEach(link => {

            link.addEventListener("click", event => {

                event.preventDefault();

                const section =
                    link.dataset.section;

                openSection(section);
            });
        });
}

function openSection(sectionName) {

    document.querySelectorAll(".sidebar-link")
        .forEach(link => {

            link.classList.toggle(
                "active",
                link.dataset.section === sectionName
            );
        });

    document.querySelectorAll(".admin-section")
        .forEach(section => {

            section.classList.remove("active");
        });

    const target =
        document.getElementById(
            `section-${sectionName}`
        );

    if (target) {
        target.classList.add("active");
    }

    const titles = {
        dashboard: "Dashboard",
        certificates: "Certificates",
        skills: "Skills",
        projects: "Projects",
        education: "Education",
        settings: "Settings"
    };

    document.getElementById("pageTitle").textContent =
        titles[sectionName] || "Dashboard";
}

/* =========================================================
   SIDEBAR
   ========================================================= */

function setupSidebar() {

    const toggle =
        document.getElementById("sidebarToggle");

    const sidebar =
        document.querySelector(".sidebar");

    if (!toggle || !sidebar) return;

    toggle.addEventListener("click", () => {

        sidebar.classList.toggle("open");
    });
}

/* =========================================================
   BUTTONS
   ========================================================= */

function setupButtons() {

    document.addEventListener("click", event => {

        const actionElement =
            event.target.closest("[data-action]");

        if (!actionElement) return;

        const action =
            actionElement.dataset.action;

        if (action === "logout") {
            logout();
        }
    });

    const addCertificate =
        document.getElementById("addCertificateBtn");

    if (addCertificate) {

        addCertificate.addEventListener(
            "click",
            () => openCertificateModal()
        );
    }

    const addSkill =
        document.getElementById("addSkillBtn");

    if (addSkill) {

        addSkill.addEventListener(
            "click",
            () => openSkillModal()
        );
    }

    const addProject =
        document.getElementById("addProjectBtn");

    if (addProject) {

        addProject.addEventListener(
            "click",
            () => openProjectModal()
        );
    }

    const addEducation =
        document.getElementById("addEducationBtn");

    if (addEducation) {

        addEducation.addEventListener(
            "click",
            () => openEducationModal()
        );
    }
}

/* =========================================================
   RENDER EVERYTHING
   ========================================================= */

function renderEverything() {

    renderDashboard();
    renderCertificates();
    renderSkills();
    renderProjects();
    renderEducation();
}

/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {

    const data = getData();

    document.getElementById("statCertificates").textContent =
        data.certificates.length;

    document.getElementById("statSkills").textContent =
        data.skills.length;

    document.getElementById("statProjects").textContent =
        data.projects.length;

    document.getElementById("statEducation").textContent =
        data.education.length;
}

/* =========================================================
   CERTIFICATES
   ========================================================= */

function renderCertificates() {

    const container =
        document.getElementById("certificatesList");

    if (!container) return;

    const data = getData();

    container.innerHTML = "";

    if (data.certificates.length === 0) {

        container.innerHTML =
            `<p class="empty-state">No certificates added yet.</p>`;

        return;
    }

    data.certificates.forEach(cert => {

        const card =
            document.createElement("div");

        card.className = "admin-card";

        card.innerHTML = `
            <div class="admin-card-image">
                ${
                    cert.image
                    ? `<img src="${escapeHTML(cert.image)}"
                            alt="${escapeHTML(cert.title)}">`
                    : `<div class="image-placeholder">🎓</div>`
                }
            </div>

            <div class="admin-card-body">

                <h3>${escapeHTML(cert.title)}</h3>

                <p class="admin-card-meta">
                    ${escapeHTML(cert.organization)}
                </p>

                <p>${escapeHTML(cert.date || "")}</p>

                ${
                    cert.certificateId
                    ? `<small>ID: ${escapeHTML(cert.certificateId)}</small>`
                    : ""
                }

                <div class="admin-card-actions">

                    <button
                        class="btn btn-secondary btn-small"
                        onclick="editCertificate('${cert.id}')">
                        Edit
                    </button>

                    <button
                        class="btn btn-danger btn-small"
                        onclick="deleteItem('certificates','${cert.id}')">
                        Delete
                    </button>

                </div>

            </div>
        `;

        container.appendChild(card);
    });
}

/* =========================================================
   SKILLS
   ========================================================= */

function renderSkills() {

    const container =
        document.getElementById("skillsList");

    if (!container) return;

    const data = getData();

    container.innerHTML = "";

    const categories = {};

    data.skills.forEach(skill => {

        if (!categories[skill.category]) {
            categories[skill.category] = [];
        }

        categories[skill.category].push(skill);
    });

    Object.keys(categories).forEach(category => {

        const group =
            document.createElement("div");

        group.className = "skill-admin-group";

        group.innerHTML = `
            <h3>${escapeHTML(category)}</h3>
            <div class="skill-admin-items"></div>
        `;

        const items =
            group.querySelector(".skill-admin-items");

        categories[category].forEach(skill => {

            const item =
                document.createElement("div");

            item.className = "skill-admin-item";

            item.innerHTML = `
                <span>${escapeHTML(skill.name)}</span>

                <div>

                    <button
                        class="btn btn-secondary btn-small"
                        onclick="editSkill('${skill.id}')">
                        Edit
                    </button>

                    <button
                        class="btn btn-danger btn-small"
                        onclick="deleteItem('skills','${skill.id}')">
                        Delete
                    </button>

                </div>
            `;

            items.appendChild(item);
        });

        container.appendChild(group);
    });
}

/* =========================================================
   PROJECTS
   ========================================================= */

function renderProjects() {

    const container =
        document.getElementById("projectsList");

    if (!container) return;

    const data = getData();

    container.innerHTML = "";

    data.projects.forEach(project => {

        const card =
            document.createElement("div");

        card.className = "admin-card";

        card.innerHTML = `

            ${
                project.image
                ? `<div class="admin-card-image">
                       <img src="${escapeHTML(project.image)}"
                            alt="${escapeHTML(project.title)}">
                   </div>`
                : ""
            }

            <div class="admin-card-body">

                <h3>${escapeHTML(project.title)}</h3>

                <p class="admin-card-meta">
                    ${escapeHTML(project.type || "")}
                </p>

                <p>
                    ${escapeHTML(project.description)}
                </p>

                ${
                    project.technologies?.length
                    ? `<p>
                        <strong>Tech:</strong>
                        ${project.technologies.map(
                            tech => escapeHTML(tech)
                        ).join(", ")}
                       </p>`
                    : ""
                }

                <div class="admin-card-actions">

                    <button
                        class="btn btn-secondary btn-small"
                        onclick="editProject('${project.id}')">
                        Edit
                    </button>

                    <button
                        class="btn btn-danger btn-small"
                        onclick="deleteItem('projects','${project.id}')">
                        Delete
                    </button>

                </div>

            </div>
        `;

        container.appendChild(card);
    });
}

/* =========================================================
   EDUCATION
   ========================================================= */

function renderEducation() {

    const container =
        document.getElementById("educationList");

    if (!container) return;

    const data = getData();

    container.innerHTML = "";

    data.education.forEach(edu => {

        const card =
            document.createElement("div");

        card.className = "admin-card";

        card.innerHTML = `

            <div class="admin-card-body">

                <h3>${escapeHTML(edu.degree)}</h3>

                <p class="admin-card-meta">
                    ${escapeHTML(edu.institution)}
                </p>

                <p>${escapeHTML(edu.location || "")}</p>

                <strong>
                    ${escapeHTML(edu.score || "")}
                </strong>

                <p>
                    ${escapeHTML(edu.scoreLabel || "")}
                </p>

                <small>
                    ${escapeHTML(edu.period || "")}
                </small>

                <div class="admin-card-actions">

                    <button
                        class="btn btn-secondary btn-small"
                        onclick="editEducation('${edu.id}')">
                        Edit
                    </button>

                    <button
                        class="btn btn-danger btn-small"
                        onclick="deleteItem('education','${edu.id}')">
                        Delete
                    </button>

                </div>

            </div>
        `;

        container.appendChild(card);
    });
}

/* =========================================================
   MODALS
   ========================================================= */

function setupModals() {

    document.addEventListener("click", event => {

        const closeButton =
            event.target.closest("[data-close-modal]");

        if (!closeButton) return;

        closeModal(
            closeButton.dataset.closeModal
        );
    });

    document.querySelectorAll(".modal-overlay")
        .forEach(modal => {

            modal.addEventListener("click", event => {

                if (event.target === modal) {
                    modal.classList.remove("active");
                }
            });
        });
}

function openModal(id) {

    const modal =
        document.getElementById(id);

    if (modal) {
        modal.classList.add("active");
    }
}

function closeModal(id) {

    const modal =
        document.getElementById(id);

    if (modal) {
        modal.classList.remove("active");
    }
}

/* =========================================================
   CERTIFICATE FORM
   ========================================================= */

let editingCertificateId = null;

function openCertificateModal(id = null) {

    editingCertificateId = id;

    const form =
        document.getElementById("certForm");

    form.reset();

    document.getElementById("certModalTitle").textContent =
        id ? "Edit Certificate" : "Add Certificate";

    if (id) {

        const data = getData();

        const cert =
            data.certificates.find(
                item => item.id === id
            );

        if (!cert) return;

        document.getElementById("certTitle").value =
            cert.title;

        document.getElementById("certOrg").value =
            cert.organization;

        document.getElementById("certDate").value =
            cert.date;

        document.getElementById("certId").value =
            cert.certificateId;

        document.getElementById("certDescription").value =
            cert.description;

        document.getElementById("certImage").value =
            cert.image;
    }

    openModal("certModal");
}

function editCertificate(id) {
    openCertificateModal(id);
}

/* =========================================================
   SKILL FORM
   ========================================================= */

let editingSkillId = null;

function openSkillModal(id = null) {

    editingSkillId = id;

    const form =
        document.getElementById("skillForm");

    form.reset();

    const select =
        document.getElementById("skillCategory");

    select.innerHTML = `
        <option value="Programming">Programming</option>
        <option value="Web Development">Web Development</option>
        <option value="DevOps & Cloud">DevOps & Cloud</option>
        <option value="Tools">Tools</option>
        <option value="Database">Database</option>
        <option value="Other">Other</option>
    `;

    document.getElementById("skillModalTitle").textContent =
        id ? "Edit Skill" : "Add Skill";

    if (id) {

        const data = getData();

        const skill =
            data.skills.find(
                item => item.id === id
            );

        if (!skill) return;

        document.getElementById("skillName").value =
            skill.name;

        select.value =
            skill.category;
    }

    openModal("skillModal");
}

function editSkill(id) {
    openSkillModal(id);
}

/* =========================================================
   PROJECT FORM
   ========================================================= */

let editingProjectId = null;

function openProjectModal(id = null) {

    editingProjectId = id;

    const form =
        document.getElementById("projectForm");

    form.reset();

    document.getElementById("projectModalTitle").textContent =
        id ? "Edit Project" : "Add Project";

    if (id) {

        const data = getData();

        const project =
            data.projects.find(
                item => item.id === id
            );

        if (!project) return;

        document.getElementById("projectTitle").value =
            project.title;

        document.getElementById("projectType").value =
            project.type;

        document.getElementById("projectDescription").value =
            project.description;

        document.getElementById("projectTech").value =
            project.technologies.join(", ");

        document.getElementById("projectGithub").value =
            project.github;

        document.getElementById("projectLive").value =
            project.live;

        document.getElementById("projectImage").value =
            project.image;
    }

    openModal("projectModal");
}

function editProject(id) {
    openProjectModal(id);
}

/* =========================================================
   EDUCATION FORM
   ========================================================= */

let editingEducationId = null;

function openEducationModal(id = null) {

    editingEducationId = id;

    const form =
        document.getElementById("eduForm");

    form.reset();

    document.getElementById("eduModalTitle").textContent =
        id ? "Edit Education Record" : "Add Education Record";

    if (id) {

        const data = getData();

        const edu =
            data.education.find(
                item => item.id === id
            );

        if (!edu) return;

        document.getElementById("eduDegree").value =
            edu.degree;

        document.getElementById("eduInstitution").value =
            edu.institution;

        document.getElementById("eduLocation").value =
            edu.location;

        document.getElementById("eduScore").value =
            edu.score;

        document.getElementById("eduScoreLabel").value =
            edu.scoreLabel;

        document.getElementById("eduPeriod").value =
            edu.period;
    }

    openModal("eduModal");
}

function editEducation(id) {
    openEducationModal(id);
}

/* =========================================================
   FORMS
   ========================================================= */

function setupForms() {

    document.getElementById("certForm")
        ?.addEventListener("submit", saveCertificate);

    document.getElementById("skillForm")
        ?.addEventListener("submit", saveSkill);

    document.getElementById("projectForm")
        ?.addEventListener("submit", saveProject);

    document.getElementById("eduForm")
        ?.addEventListener("submit", saveEducation);

    document.getElementById("credentialsForm")
        ?.addEventListener("submit", updateCredentials);

    document.getElementById("exportDataBtn")
        ?.addEventListener("click", exportData);

    document.getElementById("resetDataBtn")
        ?.addEventListener("click", resetData);
}

/* =========================================================
   SAVE CERTIFICATE
   ========================================================= */

function saveCertificate(event) {

    event.preventDefault();

    const data = getData();

    const certificate = {

        id:
            editingCertificateId ||
            crypto.randomUUID(),

        title:
            document.getElementById("certTitle").value.trim(),

        organization:
            document.getElementById("certOrg").value.trim(),

        date:
            document.getElementById("certDate").value.trim(),

        certificateId:
            document.getElementById("certId").value.trim(),

        description:
            document.getElementById("certDescription").value.trim(),

        image:
            document.getElementById("certImage").value.trim()
    };

    if (editingCertificateId) {

        const index =
            data.certificates.findIndex(
                item => item.id === editingCertificateId
            );

        if (index !== -1) {
            data.certificates[index] = certificate;
        }

    } else {

        data.certificates.push(certificate);
    }

    saveData(data);

    closeModal("certModal");

    renderEverything();

    showToast(
        editingCertificateId
        ? "Certificate updated."
        : "Certificate added.",
        "success"
    );
}

/* =========================================================
   SAVE SKILL
   ========================================================= */

function saveSkill(event) {

    event.preventDefault();

    const data = getData();

    const skill = {

        id:
            editingSkillId ||
            crypto.randomUUID(),

        name:
            document.getElementById("skillName").value.trim(),

        category:
            document.getElementById("skillCategory").value
    };

    if (editingSkillId) {

        const index =
            data.skills.findIndex(
                item => item.id === editingSkillId
            );

        if (index !== -1) {
            data.skills[index] = skill;
        }

    } else {

        data.skills.push(skill);
    }

    saveData(data);

    closeModal("skillModal");

    renderEverything();

    showToast(
        editingSkillId
        ? "Skill updated."
        : "Skill added.",
        "success"
    );
}

/* =========================================================
   SAVE PROJECT
   ========================================================= */

function saveProject(event) {

    event.preventDefault();

    const data = getData();

    const project = {

        id:
            editingProjectId ||
            crypto.randomUUID(),

        title:
            document.getElementById("projectTitle").value.trim(),

        type:
            document.getElementById("projectType").value.trim(),

        description:
            document.getElementById("projectDescription").value.trim(),

        technologies:
            document.getElementById("projectTech").value
                .split(",")
                .map(item => item.trim())
                .filter(Boolean),

        github:
            document.getElementById("projectGithub").value.trim(),

        live:
            document.getElementById("projectLive").value.trim(),

        image:
            document.getElementById("projectImage").value.trim()
    };

    if (editingProjectId) {

        const index =
            data.projects.findIndex(
                item => item.id === editingProjectId
            );

        if (index !== -1) {
            data.projects[index] = project;
        }

    } else {

        data.projects.push(project);
    }

    saveData(data);

    closeModal("projectModal");

    renderEverything();

    showToast(
        editingProjectId
        ? "Project updated."
        : "Project added.",
        "success"
    );
}

/* =========================================================
   SAVE EDUCATION
   ========================================================= */

function saveEducation(event) {

    event.preventDefault();

    const data = getData();

    const education = {

        id:
            editingEducationId ||
            crypto.randomUUID(),

        degree:
            document.getElementById("eduDegree").value.trim(),

        institution:
            document.getElementById("eduInstitution").value.trim(),

        location:
            document.getElementById("eduLocation").value.trim(),

        score:
            document.getElementById("eduScore").value.trim(),

        scoreLabel:
            document.getElementById("eduScoreLabel").value.trim(),

        period:
            document.getElementById("eduPeriod").value.trim()
    };

    if (editingEducationId) {

        const index =
            data.education.findIndex(
                item => item.id === editingEducationId
            );

        if (index !== -1) {
            data.education[index] = education;
        }

    } else {

        data.education.push(education);
    }

    saveData(data);

    closeModal("eduModal");

    renderEverything();

    showToast(
        editingEducationId
        ? "Education updated."
        : "Education record added.",
        "success"
    );
}

/* =========================================================
   DELETE
   ========================================================= */

let deleteCollection = null;
let deleteId = null;

function deleteItem(collection, id) {

    deleteCollection = collection;
    deleteId = id;

    document.getElementById("confirmDeleteText").textContent =
        "Are you sure you want to delete this item?";

    openModal("confirmModal");

    const button =
        document.getElementById("confirmDeleteBtn");

    button.onclick = confirmDelete;
}

function confirmDelete() {

    const data = getData();

    if (
        !data[deleteCollection]
    ) return;

    data[deleteCollection] =
        data[deleteCollection].filter(
            item => item.id !== deleteId
        );

    saveData(data);

    closeModal("confirmModal");

    renderEverything();

    showToast(
        "Item deleted successfully.",
        "success"
    );

    deleteCollection = null;
    deleteId = null;
}

/* =========================================================
   UPDATE CREDENTIALS
   ========================================================= */

function updateCredentials(event) {

    event.preventDefault();

    const username =
        document.getElementById("settingsUsername").value.trim();

    const password =
        document.getElementById("settingsPassword").value;

    if (!username || !password) return;

    localStorage.setItem(
        CREDENTIALS_KEY,
        JSON.stringify({
            username,
            password
        })
    );

    event.target.reset();

    showToast(
        "Credentials updated.",
        "success"
    );
}

/* =========================================================
   EXPORT DATA
   ========================================================= */

function exportData() {

    const data = getData();

    const json =
        JSON.stringify(data, null, 4);

    const blob =
        new Blob(
            [json],
            { type: "application/json" }
        );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "ali-raza-portfolio-data.json";

    document.body.appendChild(link);

    link.click();

    link.remove();

    URL.revokeObjectURL(url);

    showToast(
        "Portfolio data exported.",
        "success"
    );
}

/* =========================================================
   RESET DATA
   ========================================================= */

function resetData() {

    const confirmed =
        confirm(
            "Reset all portfolio data to defaults?"
        );

    if (!confirmed) return;

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
            structuredClone(defaultData)
        )
    );

    renderEverything();

    showToast(
        "Portfolio data reset.",
        "success"
    );
}

/* =========================================================
   TOAST
   ========================================================= */

function showToast(message, type = "success") {

    const container =
        document.getElementById("toastContainer");

    if (!container) return;

    const toast =
        document.createElement("div");

    toast.className =
        `toast toast-${type}`;

    toast.textContent =
        message;

    container.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 10);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => toast.remove(), 300);

    }, 3000);
}

/* =========================================================
   HTML ESCAPING
   ========================================================= */

function escapeHTML(value) {

    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* =========================================================
   KEYBOARD ESCAPE
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document
            .querySelectorAll(".modal-overlay.active")
            .forEach(modal => {
                modal.classList.remove("active");
            });
    }
});