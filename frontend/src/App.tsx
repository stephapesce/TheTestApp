import React from 'react';
import './App.css';
import teamData from './CollegeBasketballTeams.json';
// Define the TypeScript
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

// Requiremnt #1: Heading
function Header() {
  return <h1>Welcome to the NCAA Basketball Team List</h1>;
}

// Requiremnt #2: TeamCard
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

// Requiremnt #3: List of TeamCards
function TeamList() {
  return (
    <div className="team-list">
      {teamData.teams.map((team: Team) => (
        <TeamCard key={team.school} team={team} />
      ))}
    </div>
  );
}

// The main App
function App() {
  return (
    <div className="App">
      <Header />
      <TeamList />
    </div>
  );
}

export default App;
