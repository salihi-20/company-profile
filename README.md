# Nabi Dental Company Profile

A responsive, single-page company profile built with React, Vite, Tailwind CSS v4, Framer Motion and Lucide React.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production website is generated in the `dist` folder.

## Deploy to Netlify

- Push this project to a GitHub repository.
- Import the repository in Netlify.
- Build command: `npm run build`
- Publish directory: `dist`

All sections are on one page. Navigation links scroll to sections rather than opening separate pages.

## Replace or edit content

- Company contact details, product categories, services and partner logos: `src/data/company.js`
- Main layout and page sections: `src/App.jsx`
- Styling: `src/index.css`
- Company logo and partner logos: `public/logos/`
- Store photos: `public/images/`

The supplied Nabi Dental logo is used as the company's own logo. The other supplied logos are shown separately as international brand/partner logos.
