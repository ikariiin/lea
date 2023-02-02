### LEA

This project follows a monorepo structure with the help of `yarn` workspaces.

`packages/frontend` contains the frontend code-base, which is developed using
React Framework.

The entire code is organically written.

### Local Development

```sh
$ git clone https://github.com/ikariiin/lea
$ cd lea
$ yarn
$ yarn workspace frontend start:dev
```

This will start the development server using `webpack-dev-server` with React HMR enabled.
