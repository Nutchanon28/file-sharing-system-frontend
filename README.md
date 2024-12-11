# Docs

github.com/Nutchanon28/file-sharing-system

User Story: As a professor in a department in a certain university, I want a file sharing system with permission, so that I can share my files with people in my department only.

## Tech Stack and Why?

### Classic Next.js, Tailwind

- Popular, convinient and used in many real industry projects
- Handle most things you needed, ex: routing, caching, server/client components etc.

### Shad/cn - UI Component

- Modern, popular, and easy to used
- Require less setup than MUI (probably)
- Alternatives: MUI and others

### React Hook Form - Input Validation

- Popular, made validation easy
- I don't even know the alternatives yet

### Zod - Additional Input Validation

- Validate input for each type (text, long text, files, etc.)
- Easy way to show error messages based on input types
- Alternatives (I don't think it matters much what you pick?): Yup

### GraphQL - API to connect with Backend

- More efficient than REST but maybe a bit overkill
- Somewhat Popular
- Automate everything
- I want to learn it
- Alternatives: REST api

### Apollo Client - GraphQL Library

- Feature-rich, handles file uploads and RBAC with caching
- Has state management features, which I want to learn
- Might be a bit overkill for this project since it's not that large scale
- Alternatives: Urql, GraphQL Request, Axios

## Found Bugs

This sections include bugs that might occurs when installing/making this projects

### Tailwind is not working in modules and shared folders

add this to tailwind.config.ts (your files can't find tailwind unless you add it)

```
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}', // add this
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}', // add this
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
```

## References

How to Fetch Data in React from a GraphQL API
https://www.freecodecamp.org/news/5-ways-to-fetch-data-react-graphql/

Apollo with Next.js 13
https://www.apollographql.com/blog/next-js-getting-started

TypeScript with Apollo Client
https://www.apollographql.com/docs/react/development-testing/static-typing
