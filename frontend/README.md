# UseOSM Frontend

This is the frontend for the **UseOSM** project, built using [Astro](https://astro.build/), a modern web framework. The frontend serves as the user-facing interface for showcasing the UseOSM initiative and its resources.

---

## Project Overview

The UseOSM frontend is designed to:
- Highlight organizations and platforms that use OpenStreetMap (OSM).
- Provide an engaging and user-friendly interface for exploring OSM-related resources.
- Support community engagement through events, webinars, and contributions.

---

## Project Structure

The frontend follows a modular structure:


- **`src/`**: Contains all source code, including:
  - **`components/`**: Reusable UI components organized by feature (e.g., `footer`, `header`, `ui`).
  - **`layouts/`**: Layout templates for pages.
  - **`pages/`**: Individual pages for the website.
  - **`styles/`**: Global and component-specific styles.
  - **`utils/`**: Utility functions for common tasks.
- **`public/`**: Static assets such as images and `robots.txt`.
  - Includes theme-specific logos: `logo_green.svg` (light theme) and `logo_white.svg` (dark theme).
- **`docs/`**: Documentation for the frontend architecture.
  - **`architecture/`**: Contains Architecture Decision Records (ADRs) that document key technical decisions.
- **`astro.config.mjs`**: Configuration file for the Astro framework.
- **`package.json`**: Lists project dependencies and scripts.

---

## Setup Instructions

To set up the frontend locally, follow these steps:

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/unpatterned-labs/useosm.git
   cd frontend
   ```

2. **Install Dependencies**:
   Ensure you have [pnpm](https://pnpm.io/) installed, then run:
   ```sh
   pnpm install
   ```

3. **Start the Development Server**:
   Run:
   ```sh
   pnpm dev
   ```

4. **Build the Production Site**:
   Run:
   ```sh
   pnpm build
   ```

5. **Preview the Build**:
   Run:
   ```sh
   pnpm preview
   ```

---

## Development Workflow

This project uses Husky and lint-staged to enforce code quality and formatting standards. These tools ensure that all code committed to the repository meets the project's guidelines.

- Husky: Manages Git hooks to run checks before commits.
- Lint-Staged: Runs linters and formatters on staged files.

To manually trigger these checks, you can run:

```
pnpm lint
pnpm format:check
```
## Want to Learn More?

Feel free to check the [astro documentation](https://docs.astro.build).
