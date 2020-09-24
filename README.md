# Oats 🤑

Oats is a slick notes app. ✏️ 👍🏼

<img src="./docs/images/oats_previews.png">

<details>
<br>

<summary><b>Develop</b></summary>

## Cloning and installing dependencies

<br>

```sh
git clone https://github.com/sidiousvic/oats.git
```

```sh
yarn
```

## Setting up the backend

<br>

<a href="https://blog.timescale.com/tutorials/how-to-install-psql-on-mac-ubuntu-debian-windows/">Make sure to have `psql` installed.</a>

Bash into `psql` and create a database called `oats`.

```bash
psql
```

```sql
CREATE DATABASE oats;
```

Create an `.env` file and add your `psql` credentials.

```bash
touch .env
```

```
DB_USER=<yourUsername>
DB_PW=<yourPassword>
```

## Firing up development

<br>

Start the backend server.

```bash
yarn serve
```

Start the frontend server.

```bash
yarn dev
```

Hack away! 👽👍🏼🔥

</details>

<br>

Questions? 👉🏼 `sidiousvic@gmail.dev`
