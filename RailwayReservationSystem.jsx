import { useState } from "react";

export default function RailwayReservationSystem() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    setResults([
      { id: 1001, name: "ExpressOne", departure: "08:00", arrival: "12:00", seats: 200, fare: 50 },
      { id: 1002, name: "FastTrack", departure: "09:30", arrival: "14:00", seats: 150, fare: 60 },
    ]);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', textAlign: 'center' }}>Railway Reservation System</h1>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <input placeholder="Source Station" value={source} onChange={(e) => setSource(e.target.value)} />
        <input placeholder="Destination Station" value={destination} onChange={(e) => setDestination(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <button onClick={handleSearch} style={{ marginTop: '1rem' }}>Search Trains</button>
      {results.length > 0 && results.map(train => (
        <div key={train.id} style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
          <strong>{train.name}</strong><br />
          Departs: {train.departure} | Arrives: {train.arrival}<br />
          Seats: {train.seats} | Fare: ${train.fare}
        </div>
      ))}
    </div>
  );
}