import { useState } from 'react';
import Header     from './components/Header';
import FlightCard from './components/FlightCard';
import StatsPanel from './components/StatsPanel';
import Footer     from './components/Footer';
import './index.css';

const FLIGHTS = [
  { flightNumber:'SC 6E-201', origin:'DEL', destination:'BOM', dep:'07:30', arr:'09:45', gate:'A4',  status:'On Time',  aircraft:'A320neo' },
  { flightNumber:'SC 6E-405', origin:'BOM', destination:'BLR', dep:'10:15', arr:'11:30', gate:'B12', status:'Boarding', aircraft:'A321'    },
  { flightNumber:'SC 6E-872', origin:'BLR', destination:'HYD', dep:'12:00', arr:'13:05', gate:'C7',  status:'Delayed',  aircraft:'ATR 72'  },
];

const MY_BOOKINGS = [
  { flightNumber:'SC 6E-201', origin:'DEL', destination:'BOM', dep:'07:30', arr:'09:45', gate:'A4', status:'On Time', aircraft:'A320neo' },
  { flightNumber:'SC 6E-910', origin:'BOM', destination:'GOI', dep:'15:45', arr:'17:00', gate:'D3', status:'On Time', aircraft:'A320'    },
];

const STATS = [
  { label:'Departures today', value:'284', accent:'#185fa5' },
  { label:'On-time rate',     value:'91%', accent:'#0f6e56' },
  { label:'Active aircraft',  value:'178' },
  { label:'Destinations',     value:'96'  },
];

const card = {
  background:'#fff', border:'1px solid #e4e4e8', borderRadius:12,
  padding:'2rem', textAlign:'center',
};

function CheckInPanel() {
  return (
    <div style={card}>
      <p style={{fontSize:32,marginBottom:12}}>🪪</p>
      <p style={{fontWeight:600,fontSize:16,marginBottom:6}}>Online Check-In</p>
      <p style={{fontSize:13,color:'#8888a0',marginBottom:16}}>Check-in opens 48 hours before departure.</p>
      <input type="text" placeholder="Enter booking reference (e.g. SC1234)"
        style={{width:'100%',padding:'10px 14px',borderRadius:8,border:'1px solid #e4e4e8',fontSize:13,outline:'none',marginBottom:10}} />
      <button style={{width:'100%',padding:'10px',borderRadius:8,background:'#1a1d6e',color:'#fff',border:'none',fontSize:13,fontWeight:500,cursor:'pointer'}}>
        Find my booking
      </button>
    </div>
  );
}

function SupportPanel() {
  const topics = ['Baggage policy','Flight cancellation','Seat upgrade','Special assistance','Refund status'];
  return (
    <div style={card}>
      <p style={{fontSize:32,marginBottom:12}}>🎧</p>
      <p style={{fontWeight:600,fontSize:16,marginBottom:16}}>How can we help?</p>
      <div style={{display:'flex',flexDirection:'column',gap:8,textAlign:'left'}}>
        {topics.map(t => (
          <button key={t} style={{background:'#f6f6f8',border:'1px solid #e4e4e8',borderRadius:8,padding:'10px 14px',fontSize:13,color:'#1a1a2e',cursor:'pointer',textAlign:'left',display:'flex',justifyContent:'space-between'}}>
            {t} <span style={{color:'#aaaabc'}}>→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('Flights');

  const renderContent = () => {
    switch (activeTab) {
      case 'Flights':
        return (
          <>
            <p style={{fontSize:13,fontWeight:500,color:'#555570',padding:'4px 0'}}>Live departures</p>
            {FLIGHTS.map(f => <FlightCard key={f.flightNumber} {...f} />)}
            <StatsPanel stats={STATS} />
          </>
        );
      case 'My Bookings':
        return (
          <>
            <p style={{fontSize:13,fontWeight:500,color:'#555570',padding:'4px 0'}}>Your upcoming flights</p>
            {MY_BOOKINGS.map(f => <FlightCard key={f.flightNumber} {...f} />)}
          </>
        );
      case 'Check-In':
        return <CheckInPanel />;
      case 'Support':
        return <SupportPanel />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header
        airlineName="SkyConnect Airlines"
        tagline="Fly smarter, fly further"
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main style={{padding:'1rem',display:'flex',flexDirection:'column',gap:'12px',background:'#f0f0f6'}}>
        {renderContent()}
      </main>
      <Footer version="v1.0.0" />
    </div>
  );
}
