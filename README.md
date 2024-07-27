# Welcome to Next FireStarter!

## 🚧 Work In Progress 🚧

FireStarter is a starter project for your Firebase projects. It prioritizes code reusability so that pages for managing database entities can be easily replicated. FireStarter is based on a [Saas Starter Kit](https://www.saasstarterkit.com/) but with a much smaller scope and code structure changes based on my personal preferences.

It currently relies heavily on Firebase's real-time updates, so it misses out on a lot of server-side functionalities that Next.js provides. Server actions and API handlers will be added soon.

The code for Authentication, Realtime Database, and Firestore is inspired by [Reactfire](https://github.com/FirebaseExtended/reactfire). I have some personal issues with React Providers so I wrote a few lightweight hooks.

## Tech Stack

Reactjs, Nextjs, Typescript, Tailwind, Shadcn, Firebase, Playwright.

## Code structure

The project is organized following recommendations from the [Saas Starter Kit's Blog](https://www.saasstarterkit.com/blog/codebase-org), with minor changes in name casing and code organisation.

## Next steps

- [ ] Allow database queries
- [ ] Write Firestore hooks
- [ ] Add steps to get started to this README
- [ ] Improve loadings states (add skeleton loaders)
- [ ] Improve error handling (better Toast notifications)
- [ ] Allow Email/Password authentication
- [ ] Improve landing page
- [ ] Add server actions (handle Firebase Auth Custom Claims)
- [ ] Add API handlers
- [ ] Add basic unit tests
- [ ] Add basic e2e tests

## Contributing

Feedback, Pull requests and ⭐️ are welcome.
