# Mission Management App

The Mission Management App is a web application for tracking and managing space missions.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Running the App](#running-the-app)
- [JSON Server Setup](#json-server-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.
- Git (optional, for version control).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mission-management-app.git
   ```

2. Change to the project directory:
   ```sh
   cd mission-management-app
   ```

3. Install project dependencies:
   ```sh
   npm install
   ```

## Project Structure

The project is structured as follows:

- `src/`: Contains the source code for the web application.
  - `Entities/`: Defines TypeScript interfaces for mission-related data.
  - `Infrastructure/`: Contains services for data operations (e.g., CRUD operations).
  - `Logic/`: Houses custom hooks and context for state management.
  - `Presentation/`: Includes React components and screens.
  - `App.tsx`: Main application entry point.
- `json-server/`: Contains configuration for the JSON server used to simulate a backend.
- `public/`: Static assets and HTML template.

## Running the App

To start the development server and run the app:

```sh
npm start
```

The app will be available at `http://localhost:3000/`.

## JSON Server Setup

The app uses JSON Server to simulate a backend for mission data. To start the JSON Server:

1. Change to the `json-server/` directory:
   ```sh
   cd json-server
   ```

2. Install JSON Server globally (if not already installed):
   ```sh
   npm install -g json-server
   ```

3. Start JSON Server:
   ```sh
   json-server --watch db.json --port 4000
   ```

The JSON Server will run at `http://localhost:4000/` and provide endpoints for mission data.

## Usage

- Add, edit, and delete missions.
- Search for missions by name.
- View a list of missions.
- Simulated mission data is provided by the JSON Server.

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

Make sure to replace placeholders like `https://github.com/your-username/mission-management-app.git` with the actual URL of your repository and customize any other details to match your project's structure and requirements.