# Daniele's Personal Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcases projects, skills, and contact information for Daniele, a fullstack developer based in Florence, Italy.

---

## Features

- **Project Showcase**: Highlights featured and recent projects, with dynamic GitHub integration.
- **Skills Overview**: Categorized technical skills with proficiency levels.
- **Contact Form**: Secure, anti-spam contact form with email delivery via Nodemailer.
- **Responsive Design**: Mobile-friendly and accessible UI.
- **Dark/Light Theme**: Theme toggle with system preference support.

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Nodemailer](https://nodemailer.com/) (for contact form)
- [Jest](https://jestjs.io/) (for testing)

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

### Installation

```sh
pnpm install
# or
npm install
```

### Development

```sh
pnpm dev
# or
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build & Production

```sh
pnpm build
pnpm start
# or
npm run build && npm start
```

---

## Contact Form Email Setup

To enable email delivery for the contact form, configure a Gmail account and set the following environment variables in a `.env` file:

```env
CONTACT_MAIL_TO=destination_email@gmail.com
CONTACT_MAIL_HOST=smtp.gmail.com
CONTACT_MAIL_PORT=465
CONTACT_MAIL_USER=your_gmail_address@gmail.com
CONTACT_MAIL_PASS=your_gmail_app_password
CONTACT_MAIL_NAME=Your Name
```

See [`docs/email-setup.md`](docs/email-setup.md) for detailed instructions.

---

## Project Structure

- `src/app/` - Next.js app directory (pages, layout, API routes)
- `src/components/` - Reusable UI and section components
- `src/data/` - Static data (projects, skills, socials, meta)
- `src/lib/` - Utilities, GitHub API helpers, mail setup
- `src/schemas/` - Zod schemas for form validation
- `src/types/` - TypeScript type definitions
- `__tests__/` - Unit tests
- `docs/` - Project documentation

---

## Scripts

- `pnpm dev` / `npm run dev` - Start development server
- `pnpm build` / `npm run build` - Build for production
- `pnpm start` / `npm start` - Start production server
- `pnpm lint` / `npm run lint` - Lint code
- `pnpm test` / `npm test` - Run tests

---

## Contributing

Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

This project is for personal use and demonstration purposes. See [LICENSE](LICENSE) if present.

---

## Author

- **Daniele**  
  [GitHub](https://github.com/dinghino) | [LinkedIn](https://linkedin.com/in/daniele-calcinai/) | [Twitter](https://twitter.com/dinghino)
