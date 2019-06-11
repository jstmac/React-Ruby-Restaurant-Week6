import React from "react";
import { Header, Button, Icon } from "semantic-ui-react";

const Menu = ({ id, name, deleteMenu, updateMenu }) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <ul>
        <Header as='h2' style={{ marginLeft: "15px" }}>
          <li> {name}</li>
        </Header>
      </ul>
    </div>
    <Button
      icon
      color='red'
      size='tiny'
      onClick={() => deleteMenu(id)}
      style={{ marginLeft: "15px" }}
    >
      <Icon name='trash' />
    </Button>
  </div>
);

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey"
  },
  pointer: {
    cursor: "pointer"
  },
  flex: {
    display: "flex",
    alignItems: "center"
  }
};

export default Menu;
