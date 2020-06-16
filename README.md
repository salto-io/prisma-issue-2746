# Reproduction of prisma webpack issue 2746

[Link to issue](https://github.com/prisma/prisma/issues/2746)

## To reproduce

```bash
yarn               # installs packages, prisma generate
yarn build         # runs webpack
yarn docker:build  # builds image
yarn docker:run    # runs image
```
