# WebRTC Video Conference

This is a simple WebRTC-based video conferencing web application built with Node.js. It enables peer-to-peer video communication directly between browsers without requiring plugins.

## Features

- Peer-to-peer video conferencing using WebRTC
- Room-based video call setup
- Simple frontend UI
- Express server setup for signaling

## Project Structure

```
.
├── public/
│   ├── index.html          # Main frontend HTML
│   ├── css/
│   │   └── main.css        # Styles for the UI
│   └── js/
│       ├── main.js         # Room handling logic
│       └── webrtc.js       # WebRTC connection logic
├── server.js               # Express server (signaling server)
├── package.json            # Node.js dependencies
├── .env                    # Environment config (optional)
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/webrtc-video-conference.git
   cd webrtc-video-conference
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Set up a `.env` file if needed for environment configuration.

4. Start the server:
   ```bash
   node server.js
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Deployment

To deploy on platforms like Heroku, Glitch, or Vercel, ensure ports and environment configurations are set accordingly.

## License

MIT License

## Acknowledgments

- [WebRTC.org](https://webrtc.org/)
- [MDN WebRTC Guide](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
