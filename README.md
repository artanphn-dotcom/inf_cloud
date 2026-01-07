# Infrastructure & Cloud Networking Command Knowledge Portal

This project is a static, web-based technical knowledge portal that serves as a centralized command reference for infrastructure, cloud networking, and automation technologies. It's designed to be a practical engineering knowledge base, providing actionable, real-world examples for network engineers, cloud engineers, DevOps professionals, and SRE teams.

## Features

*   **Detailed Command References**: Provides in-depth coverage of Google Cloud Platform (Networking), Terraform (Google Cloud-focused), and GitHub commands, including syntax, descriptions, use cases, and practical examples.
*   **Copy-to-Clipboard**: Easily copy command syntax and examples with dedicated buttons.
*   **Theme Switching**: Toggle between light and dark mode for a personalized viewing experience.

## Technologies

*   Google Cloud Platform (Networking)
*   Terraform (Google Cloud-focused)
*   GitHub
*   HTML5
*   CSS3
*   JavaScript

## UI/UX Design

The portal features a documentation-style layout with a clear typography hierarchy. It includes a dark mode option for enhanced readability in different environments.

### Dark/Light Mode

The portal supports theme switching between light and dark modes. You can toggle the theme using the "Toggle Theme" button located in the header. Your preference will be saved locally.

## Project Structure

```
knowledge-portal/
│
├── index.html                 # Home page
├── assets/
│   ├── css/
│   │   ├── main.css           # Main styling, includes light mode and shared styles
│   │   ├── theme-dark.css     # Dark mode specific styles
│   ├── js/
│   │   ├── navigation.js      # Handles dynamic header/footer loading and theme switching
│   │   ├── search.js          # (Future: client-side search and filtering)
│
├── pages/
│   ├── gcp-networking.html    # Google Cloud Platform (Networking) commands
│   ├── terraform-gcp.html     # Terraform (Google Cloud-focused) commands
│   ├── github.html            # GitHub commands
│
├── data/
│   ├── gcp-networking.json    # Data for GCP Networking commands
│   ├── terraform.json         # Data for Terraform commands
│   ├── github.json            # Data for GitHub commands
│
├── components/
│   ├── header.html            # Reusable header component
│   ├── footer.html            # Reusable footer component
│
├── README.md                  # Project README and documentation
```
# inf_cloud
