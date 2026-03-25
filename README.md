# Unit Conversion

A comprehensive and user-friendly Unit Conversion application built with Next.js. This tool allows users to easily convert between various units of measurement across multiple categories, including a feature for batch processing via CSV uploads.

## Features

*   **Wide Range of Categories**: Support for extensive unit categories such as Area, Length, Temperature, Volume, Weight, and specialized fields like Engineering, Healthcare, and Logistics.
*   **Real-time Conversion**: Instant conversion results as you type.
*   **Batch Conversion**: Upload a CSV file to perform multiple conversions simultaneously, saving time and effort.
*   **Responsive Design**: A clean and intuitive interface that works seamlessly on desktop and mobile devices.
*   **Modern Tech Stack**: Built using the latest web technologies for performance and maintainability.

## Getting Started

### Prerequisites

Ensure you have the following installed:
*   Node.js
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd unit-conversion
    ```

2.  Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Single Conversion
1.  Select the category of units you wish to convert (e.g., Length, Weight).
2.  Choose the source unit and the target unit.
3.  Enter the value you want to convert.
4.  The converted value will appear instantly.

### Batch Conversion
1.  Navigate to the Batch Conversion section.
2.  Prepare a CSV file with your data.
3.  Upload the file.
4.  View or download the converted results.

## Available Conversion Categories

*   Area
*   Chemical
*   Construction
*   Cooking
*   Data
*   Engineering
*   Healthcare
*   Length
*   Logistics
*   Speed
*   Temperature
*   Time
*   Volume
*   Weight

## License

This project is licensed under the MIT License.

## Authentication & Local Dev (Prisma + SQLite)

This project includes a simple credential-based auth system using Prisma + SQLite for local development.

- Environment: copy `.env.example` to `.env` and set `JWT_SECRET`.
- Initialize the database and generate Prisma client:

If you want to run a local PostgreSQL (open-source) instance with Docker, do:

```bash
# start local postgres
docker-compose up -d db

# set DATABASE_URL in .env (see .env.example)
npx prisma migrate dev --name init --schema=prisma/schema.prisma
```

Or, to use the npm helper scripts added to this project:

```bash
npm run db:up       # starts postgres container
npm run db:migrate  # runs prisma migrate dev
```

- Install dependencies (if not already):

```bash
npm install
```

- Start the Next.js dev server:

```bash
npm run dev
```

Endpoints you can use during development:

- `POST /api/auth/signup` — creates a user and sets an httpOnly auth cookie
- `POST /api/auth/login` — authenticates and sets an httpOnly auth cookie
- `POST /api/auth/logout` — clears the auth cookie
- `GET /api/auth/me` — returns current user based on cookie
- `GET/POST/DELETE /api/converters` — CRUD for user saved converters (protected)

Notes:
- For local development we use SQLite (`prisma/dev.db`). Do not use this DB in production.
- Set a strong `JWT_SECRET` in production environment variables.
