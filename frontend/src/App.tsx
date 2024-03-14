import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json';
// Define the TypeScript interface for the team
interface Team {
  school: string;
  name: string; // Assuming this is the mascot's name
  city: string;
  state: string;
  // Include any other properties you need from the team object
}

// Component #1: Heading
function Header() {
  return <h1>Welcome to the NCAA Basketball Team List</h1>;
}

// Component #2: TeamCard
function TeamCard({ team }: { team: Team }) {
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p>Mascot: {team.name}</p>
      <p>
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
}

// Component #3: List of TeamCards
function TeamList() {
  return (
    <div className="team-list">
      {teamData.teams.map((team: Team) => (
        <TeamCard key={team.school} team={team} />
      ))}
    </div>
  );
}

// The main App component that uses the above components
function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
