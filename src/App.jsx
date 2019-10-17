import React, { /* useEffect,*/ useState } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";

function App() {
  const [user, setUser] = useState({
    users: [],
    loading: false
  });
  /*
  async function fetchData() {
    setUser({ loading: true });
    const res = await fetch("https://api.github.com/users");
    const json = await res.json();
    setUser({ users: json, loading: false });
  }

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);
*/
  const searchUser = async text => {
    if (text === "") {
      alert("please enter a username!!");
      return setUser({ users: [], loading: false });
    } else {
      const res = await fetch(`https://api.github.com/search/users?q=${text}`);
      const json = await res.json();
      //console.log(json.items);
      json.items.length > 0
        ? setUser({ users: json.items, loading: false })
        : alert("the username is inccorect!");
    }
  };

  const clearSearch = () => {
    setUser({ users: [], loading: false });
  };

  return (
    <div className="App">
      <Navbar title="Github Finder" icon="fab fa-github" />
      <Search
        searchUser={searchUser}
        clearSearch={clearSearch}
        showClear={user.users.length > 0 ? true : false}
      />
      <div className="container">
        {user.users && <Users loading={user.loading} users={user.users} />}
      </div>
    </div>
  );
}

export default App;
