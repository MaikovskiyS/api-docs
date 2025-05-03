# API Integration Docs

This project contains documentation for API integration with wallet & game provider, powered by [Docusaurus](https://docusaurus.io/).


### Local Development with Docker

1. **Build the Docker image:**
   ```bash
   docker build -t api-docs .
   ```
2. **Run the container:**
   ```bash
   docker run --rm -it -p 3000:3000 api-docs
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Configuration

- Default port: **3000**
- Docs root: `/docs`
- Configuration: `docusaurus.config.js`

### Troubleshooting
- Make sure Node.js 18+ is installed for local development.
- If you change dependencies, rebuild the Docker image.
