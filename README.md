# CampusTask — University Lab & Assignment Portal

## Project Overview
CampusTask is a streamlined web application designed for university environments to manage lab assignments, project submissions, and grading workflows. It provides a clean, responsive interface for students to submit coursework and for faculty to evaluate submissions efficiently.

## Problem Statement
Traditional learning management systems are often bloated, slow, and overly complex for everyday lab submissions. Students face confusing submission interfaces, while faculty struggle with fragmented assignment tracking and delayed feedback loops.

## Target User Personas
1. **The Student (e.g., Alex - Computer Science Major)**
   - **Goal:** Submit lab assignments quickly, track deadlines, and view instructor feedback/grades in one place.
   - **Pain Point:** Confusing navigation, missing file size feedback, and lack of clarity on submission status.
2. **The Faculty / Evaluator (e.g., Dr. Sharma - Lab Instructor)**
   - **Goal:** Create assignment prompts, review student submissions, and assign grades seamlessly.
   - **Pain Point:** Managing hundreds of email attachments and manually tracking submission timestamps.

## Vision Statement
To deliver a lightweight, high-speed, and intuitive assignment portal that eliminates friction in university coursework management through standardized containerized delivery.

## Key Features & Goals
- **Role-Based Authentication:** Secure login tailored for Student and Faculty dashboards.
- **Assignment Submission Pipeline:** Drag-and-drop submission system with timestamp validation.
- **Faculty Evaluation Hub:** Integrated viewer for reviewing student work and publishing grades.
- **Containerized Deployment:** Dockerized local development environment for instant setup.

## Success Metrics
- **Performance:** Sub-150ms API response times for fetching dashboard assignments.
- **Usability:** Zero-overhead submission process completed in under 3 clicks from the dashboard.
- **Reliability:** 100% environment parity between local development and production Docker containers.

## Assumptions & Constraints
- **Assumptions:** Users access the platform using standard WebGL/HTML5 desktop browsers.
- **Constraints:** Storage for local development is capped by container volume allocations; basic REST architecture without external third-party integrations.

---
---

## UI/UX Figma Wireframes
[Click here to view Interactive Figma Prototype](https://www.figma.com/design/ZT3MxxnWpjrVg8UOVY7WgU/Untitled?node-id=0-1&t=4XYy31koofx7Xvbb-1)

---
## MoSCoW Prioritization

| Category | Features Included |
| :--- | :--- |
| **Must Have** | Role-Based Authentication (Student/Faculty), Student Dashboard, File Upload / Submission Page, Faculty Grading Interface, Dockerized Backend Setup. |
| **Should Have** | Deadline Countdown Indicators, Submission Timestamping, Grade Summary View, Filter Assignments by Status (Pending/Submitted). |
| **Could Have** | Dark Mode Toggle, Drag-and-Drop File Preview, Toast Notifications on Successful Submission. |
| **Won't Have (for Review 1)** | Real-Time Live Chat between Student and Instructor, Push Notifications, Plagiarism Scanner Integration. |

---
---

## Workload Division

| PERSON A: DevOps, Architecture & Backend | PERSON B: UI/UX & Agile Docs |
| :--- | :--- |
| • Project Repo & Docker Configuration | • Vision Document & README.md |
| • Backend Server Code (Node.js/Express) | • 25 GitHub User Story Issues |
| • Architecture Diagram (Draw.io Landscape) | • 6 Figma Wireframe Screens |
| • Execution Screenshots (Terminal/Browser) | • MoSCoW Prioritization Table |

---

## Dev Setup & Local Development Strategy

### Branching Strategy (GitHub Flow)
We strictly adhere to **GitHub Flow**:
- `main`: Production-ready, stable codebase.
- `feature/*`: Dedicated branches created for isolated development tasks (e.g., `feature/user-auth`, `feature/docker-setup`).
- All changes merge back to `main` via Pull Requests.

### Quick Start – Local Development
1. Clone repository: `git clone https://github.com/YOUR_USERNAME/campustask.git`
2. Run Docker containers: `docker-compose up --build`
3. Access UI: `http://localhost:3000`
