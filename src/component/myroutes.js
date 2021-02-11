export default function Myroute() {
  return (
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
  );
}

// component switch
// -> il doit regarder si l'url actuel correspond a une de ses routes
// -> Si oui : Afficher le component de cette route
// -> Si non : Afficher un message d'erreur

// component route
// -> Il prend un props et un component 
// -> Si oui : Afficher le component de cette route
// -> Si non : Afficher un message d'erreur

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
