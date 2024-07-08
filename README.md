# DineSmart - Server

## Setup

### Create a Database

1. Open your SQL client and run the following command to create a database:

```sql
CREATE DATABASE restaurant;
```

### Create a .env file

1. In the root directory of your project, create a .env file.
2. Add the following content to the .env file:

```shell
# Server Settings
LISTENING_PORT=8080

# Database Settings
DATABASE_HOST=127.0.0.1
DATABASE_NAME=restaurant
DATABASE_USER=root
DATABASE_PASSWORD=rootroot
```

- The variables should match those in the .env.sample file.
- Ensure you update DATABASE_HOST, DATABASE_NAME, DATABASE_USER, and DATABASE_PASSWORD according to your database configuration.

### Install Dependencies

To install all the required packages, run the following command:

```bash
npm install
```

### Create Table Schemes

To create the database tables, run:

```bash
npm run migrate
```

### Seed the Database

To seed the database with initial data, run:

```bash
npm run seed
```

### Note: Delete Table Schemes

To delete the database tables, run:

```bash
npm run rollback
```

### Run the Program

To start the application, run:

```bash
npm run start
```

This will start the server on the port specified in the .env file.
