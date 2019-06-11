import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import MenuForm from "./components/MenuForm";
import MenuList from "./components/MenuList";

class App extends Component {
  state = { menus: [] };

  componentDidMount() {
    axios
      .get("/api/menus")
      .then(res => {
        this.setState({ menus: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addMenu = name => {
    axios.post("/api/menus", { name }).then(res => {
      const { menus } = this.state;
      this.setState(
        { menus: [...menus, res.data] }
        //TODO make api call to rails server to add menu
        //TODO update state
      );
    });
  };

  updateMenu = id => {
    axios.put(`/api/menus/${id}`).then(res => {
      //TODO make api call to update menu
      //TODO update state
      const menus = this.state.menus.map(m => {
        if (m.id === id) return res.data;
        return m;
      });
      this.setState({ menus });
    });
  };

  deleteMenu = id => {
    debugger;
    axios
      .delete(`api/menus/${id}`)
      //TODO make api call to delete menu
      //TODO remove it from state
      .then(res => {
        const { menus } = this.state;
        this.setState({ menus: menus.filter(m => m.id !== id) });
      });
  };

  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <h1>React - Rails - Restaurant</h1>

        <MenuForm addMenu={this.addMenu} />
        <br />
        <br />
        <MenuList
          menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
      </Container>
    );
  }
}

export default App;
