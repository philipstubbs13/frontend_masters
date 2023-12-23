# Enterprise TypeScript

* <https://frontendmasters.com/courses/enterprise-typescript/>
* course notes: <https://www.typescript-training.com/course/enterprise-v2>
* course code: <https://github.com/mike-north/typescript-courses>
* <https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/chai>

```bash
// Create .gitingore file for node project
npx gitignore node
```

```bash
// Create package.json file
yarn --init --yes
```

```bash
volta pin node@lts yarn@^3.0.0
```

```bash
yarn add -D typescript@5.3.0-beta
```

```bash
yarn tsc --init
```

```bash
yarn add -D eslint
```

```bash
yarn eslint --init
```

```bash
yarn lint
```

```bash
yarn add -D jest @babel/core @babel/preset-env @babel/preset-typescript
```

```bash
yarn tsc -p src/utils
```

```bash
export function isTypedArray<T>(arg: unknown[], guard: (toTest: unknown) => toTest is T): arg is T[] {
    return Array.isArray(arg) && arg.every(guard)
}

export function isTeam(arg: unknown): arg is ITeam {
    return (
        typeof arg === "object"
        && 'iconUrl' in arg
        && typeof arg.iconUrl !== 'undefined'
        && 'name' in arg
        && typeof arg.name !== 'undefined'
        && 'id' in arg
        && typeof arg.id !== 'undefined'
        && 'channels' in arg
        && typeof arg.channels !== 'undefined'
        && Array.isArray(arg.channels)
    )
}

const teamArr: unknown[] = []

if (isTypedArray(teamArr, isTeam)) {
    teamArr
}

let cachedAllTeamsList
export async function getAllTeams(): Promise<ITeam[]> {
  if (typeof cachedAllTeamsList === 'undefined')
    cachedAllTeamsList = apiCall('teams').then((responseData) => {
      if (isTypedArray(responseData, isTeam)) return responseData;
      else throw new Error('Bad API response for /teams')
    })

  return await cachedAllTeamsList
}
```