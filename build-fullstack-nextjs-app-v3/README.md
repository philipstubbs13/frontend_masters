# Build an AI-Powered Fullstack Next.js App, v3

- <https://frontendmasters.com/courses/fullstack-app-next-v3/>

* <https://github.com/Hendrixer/fullstack-ai-nextjs>
* <https://gist.github.com/Hendrixer/df5477d10388fb2815018f375a19cf42>
* <https://clerk.com/?utm_source=frontendmasters.com&utm_medium=referral&utm_campaign=none>
* <https://clerk.com/docs/quickstarts/nextjs>
* clerk middleware: <https://clerk.com/docs/references/nextjs/auth-middleware>
* <https://planetscale.com/>
* <https://www.prisma.io/>
* <https://github.com/planetscale/cli#installation>
* <https://app.planetscale.com/philipstubbs13/mood/dev>
* <https://next-auth.js.org/>
* <https://arxiv.org/abs/1706.03762>
* <https://js.langchain.com/docs/get_started/introduction>
* <https://platform.openai.com/apps>
* <https://openai.com/blog/introducing-text-and-code-embeddings>

```bash
npx create-next-app@13.4.5 mood
```

```bash
brew install planetscale/tap/pscale
```

```bash
pscale auth login
```

```bash
pscale org switch philipstubbs13
```

```bash
pscale branch create mood dev
```

```bash
 pscale connect mood dev --port 3309
```

```bash
npm install @prisma/client
npm install prisma --save-dev
npx prisma init
npx prisma db push
npx prisma format
npx prisma studio
```
