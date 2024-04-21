# Next.js 14 - Notion Clone

Notion Clone application, uses TypeScript (StandardJS), Tailwind + Shadcn/UI, Convex, EdgeStore, the application only has basic functionalities. This project is a test one.

- Authentication using clerk/nextjs v4.30.
- Create, edit and delete notes, including a recycle bin.
- Add custom content blocks using BlockNote.
- Search for notes.
- Option to make a public access note.
- Information update in real time thanks to Convex.

## Configure environment variables

Rename the file **.env.template** to **.env.local**

- Clerk: Create an account on https://clerk.com, create an application and then go to Api Keys and copy the values of NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

- Convex: Go to https://convex.dev, create an account, install convex with 'npm install convex', then 'npx convex dev', log in and create a project. That will add the variables CONVEX_DEPLOYMENT and NEXT_PUBLIC_CONVEX_URL along with its values associated with the created project.

```
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
```

- EdgeStore: Go to https://edgestore.dev and sign up. After logging in, create a project then the values for the following variables will be displayed.

```
EDGE_STORE_ACCESS_KEY=
EDGE_STORE_SECRET_KEY=
```

- Rebuild the node modules and build Next

```
npm install
npm run dev
```
