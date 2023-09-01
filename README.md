# Mission Control App

Welcome to the Mission Control App! This React and TypeScript project allows users to manage space missions.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Git installed on your machine.
- GitHub Desktop installed for easier version control.

### Installation

1. Clone the repository to your local machine using GitHub Desktop or by running the following command in your terminal:

   ```bash
   git clone https://github.com/theaarc/spatiales-mission-controller.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mission-control-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Running the App

To run the app locally, use the following command:

```bash
npm start
```

This will start the development server, and you can view the app in your web browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project is organized as follows:

- `src/`: Contains the source code for the React components and Redux setup.
  - `components/`: Contains React components.
  - `redux/`: Contains Redux reducers, actions, and store configuration.
  - `utiles/`: Contains reusable components such as Datepickers.
  - `Models/`: Contains Models for the good implementation such as Mission model.
- `public/`: Contains static assets and the HTML template.

## Usage

- The app allows you to manage space missions, add new missions, delete missions, and search for missions by name.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request to the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```