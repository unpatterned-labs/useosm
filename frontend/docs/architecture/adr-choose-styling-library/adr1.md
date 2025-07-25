# Architecture Decision Record 1: Tailwind CSS for Styling Library

**Date:** 01/09/2024

## Context

We are building the **Use OSM** platform—a modern, lightweight website that introduces users to OpenStreetMap (OSM), showcases impactful use cases, and provides curated tools to support global contributions. The site will include clear content, video explanations, real-world examples, and community-editable sections. It is developed using **Astro** for performance and deployed via GitHub Pages and Actions.

## Decision Drivers

* **Ease of Use**: The framework should be simple to learn and integrate smoothly into our development workflow.

* **Customizability**: It must support full customization to reflect the UseOSM brand identity and design preferences.

* **Performance & Size**: The framework should deliver minimal CSS for fast load times and avoid unnecessary bloat.

* **Efficiency**: It should accelerate the UI development process, reducing the time and effort spent on styling.

* **Community Support**: A strong developer community with rich documentation, tools, and ongoing support is essential.

* **Open Source License**: The framework must be open source to ensure transparency and long-term adaptability.

## Considered Options

* **Tailwind CSS**: A utility-first CSS framework focused on speed, flexibility, and customization

## Decision

We chose **Tailwind CSS** as the styling solution for Use OSM due to its lightweight footprint, seamless Astro compatibility, and utility-first approach, which accelerates development and enforces design consistency. Tailwind supports atomic design, has strong community backing, and allows for extensive customization without introducing unnecessary complexity.

## Status

Accepted

## Consequences

* May introduce a slight learning curve for contributors new to utility-first CSS.

* Supports rapid development and seamless iteration using Tailwind’s utility classes, theming, and prebuilt templates.

* Ensures lightweight performance with less than 10KB of CSS shipped to the client.

* Establishes a scalable and maintainable styling approach suitable for community-driven content and localization efforts.
