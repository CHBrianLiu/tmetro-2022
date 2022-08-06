# TMetro* Group 2 Demo

## Introduction

[TODO]

## Tech stack

* Next.JS
    * TypeScript
    * React
    * Progressive Web App (PWA)
* Hosting
    * Azure Static Web Apps

## Development

### Get started

1. Install dependencies.

    ```shell
    npm install -D
    ```

2. Start the development server.

    ```shell
    npm run dev
    ```

3. Open *http://localhost:3000* in your browser.

### Auto-formatting

```shell
npm run format
```

### Code quality

```shell
npm run lint
npm run check-format
```

### Image processing

Use `webp` format to reduce size of images. Use the following command to generate webp files from png files.

```shell
`for file in **/*.png; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done;`
```

## Deployment

### Generate static website files

```shell
npm run build
```
