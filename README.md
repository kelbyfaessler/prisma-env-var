## Duplicating the bug with edge client

On main branch, the app is already setup with the edge client and all that's necessary to see the bug is to run the following commands:

```bash
npm install
npx prisma generate --data-proxy
npm run dev
```

Then visit the homepage of the running dev server and you'll see the env var not found error.

## Duplicating absence of bug with normal client

If you want to see the same code and the same env setup working with the non-edge prisma client, do the following:

1. In src/lib/server/prisma.ts, import `import { PrismaClient } from '@prisma/client';` instead of `import { PrismaClient } from '@prisma/client/edge';` (or in other words, delete the trailing `/edge` from the import)
2. In src/app.d.ts, import `import { PrismaClient } from '@prisma/client';` instead of `import { PrismaClient } from '@prisma/client/edge';` (or in other words, delete the trailing `/edge` from the import)
3. Run the following commands

```bash
npx prisma generate
npm run dev
```

(note that env vars are set in the .env file and you can change the db urls if you want. You can actually provide a real db with real data and it'll show on page. If you just use dummy invalid db urls then you'll still see it tries to read from the db and the error is different from the 'env var not found' error, because it gets past that point)
