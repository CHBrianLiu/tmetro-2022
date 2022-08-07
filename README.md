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

## Accelerate development speed

### Install PWA app from dev server

It's time wasting if we can only verify changes after deployment, even if deployment is done by the Continuous
Deployment system. By establishing a secure connection between our laptop and mobile phone, we can install the app under
development.

*Example environment*

* Laptop: 192.168.31.100
* Mobile: 192.168.31.XXX

1. Run the containers on your laptop. It will start 1) Nginx and 2) Next.JS dev server containers.

    ```shell
    docker compose up -d
    ```

    ```mermaid
    flowchart LR
        mobile-->|HTTPS|nginx
        nginx-->|HTTP|NextDevServer
    ```
2. From your mobile phone's default browser, go to `https://<LAPTOP_IP>`. For the example above,
   it's `https://192.168.31.100`.
3. Install the PWA app.
4. Because the underlying dev server supports hot reloading, you can update codes, then observe the changes from your
   phone immediately.
