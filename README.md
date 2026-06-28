# ✦ SkyConnect Airlines — React Demo App

A flight dashboard built with **React 19 + Vite**, demonstrating core React concepts including component creation, props, state management, reusability, and CSS Modules.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```bash
# 1. Clone or unzip the project
cd skyconnect-app

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** (or the next available port).

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Build the app for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the linter (oxlint) |

---

## 🗂️ Project Structure

```
skyconnect-app/
├── public/                   # Static assets
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation bar with tab switching
│   │   ├── Header.module.css
│   │   ├── FlightCard.jsx    # Reusable flight info card
│   │   ├── FlightCard.module.css
│   │   ├── StatsPanel.jsx    # Airline network statistics grid
│   │   ├── StatsPanel.module.css
│   │   ├── Footer.jsx        # App footer with links
│   │   └── Footer.module.css
│   ├── App.jsx               # Root component — renders all components
│   ├── index.css             # Global styles & CSS variables
│   └── main.jsx              # React DOM entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🧩 Components

### `<Header />`
The top navigation bar with the airline brand and tab menu.

**Props:**
| Prop | Type | Description |
|---|---|---|
| `airlineName` | `string` | Name displayed in the brand area |
| `tagline` | `string` | Subtitle shown below the airline name |
| `activeTab` | `string` | Currently selected tab |
| `onTabChange` | `function` | Callback fired when a tab is clicked |

---

### `<FlightCard />` *(Reusable)*
Displays information for a single flight. Used multiple times in the app with different props — demonstrating component reusability.

**Props:**
| Prop | Type | Description |
|---|---|---|
| `flightNumber` | `string` | e.g. `"SC 6E-201"` |
| `origin` | `string` | IATA code of departure airport |
| `destination` | `string` | IATA code of arrival airport |
| `dep` | `string` | Departure time (e.g. `"07:30"`) |
| `arr` | `string` | Arrival time (e.g. `"09:45"`) |
| `gate` | `string` | Boarding gate number |
| `status` | `string` | `"On Time"` \| `"Boarding"` \| `"Delayed"` \| `"Cancelled"` |
| `aircraft` | `string` | Aircraft type (e.g. `"A320neo"`) |

---

### `<StatsPanel />`
Displays a 2×2 grid of airline network metrics for the day.

**Props:**
| Prop | Type | Description |
|---|---|---|
| `stats` | `array` | Array of `{ label, value, accent? }` objects |

---

### `<Footer />`
Simple footer bar with app version and navigation links.

**Props:**
| Prop | Type | Description |
|---|---|---|
| `version` | `string` | Version string displayed in the footer |

---

## ⚛️ React Concepts Demonstrated

| Concept | Where |
|---|---|
| **Component creation** | All 4 components in `src/components/` |
| **Props** | Every component receives and uses props |
| **State (`useState`)** | `activeTab` state lives in `App.jsx` |
| **State lifting** | `activeTab` lifted to `App` so all tabs can respond |
| **Reusability** | `<FlightCard />` rendered multiple times with different data |
| **Conditional rendering** | `renderContent()` in `App.jsx` switches content per tab |
| **List rendering** | `flights.map(f => <FlightCard ... />)` |
| **CSS Modules** | Each component has its own `.module.css` — no style leaks |

---

## 🎨 Tabs & Features

| Tab | Content |
|---|---|
| **Flights** | Live departures list + network stats panel |
| **My Bookings** | Personal upcoming flight cards |
| **Check-In** | Booking reference input form |
| **Support** | Clickable help topics list |

---

## 🛠️ Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vitejs.dev/)
- CSS Modules (scoped component styles)
- [oxlint](https://oxc.rs/docs/guide/usage/linter) (fast JS/JSX linter)

---

## 📄 License

This project was created for educational purposes to demonstrate React component architecture.
