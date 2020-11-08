import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import SearchInput from "./components/SearchInput";
import styled from "styled-components";
uuidv4();

const Container = styled.div`
  font-family: sans-serif;
  font-size: 16px;
`;

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    if (
      this.state.contacts.some(
        (item) => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
    } else {
      this.setState((prevState) => {
        return { contacts: [...prevState.contacts, contact] };
      });
    }
  };

  filterContacts = (filter) => {
    this.setState({
      filter: filter.target.value,
    });
  };

  getFilteredContacts = () => {
    const { filter } = this.state;
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (searchId) => {
    const newContacts = this.state.contacts.filter(
      (contact) => contact.id !== searchId
    );
    this.setState({ contacts: newContacts });
    localStorage.removeItem(searchId);
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <Form onSubmit={this.addContact} />
        {contacts.length > 1 && (
          <SearchInput
            value={filter}
            onChangeSearchInput={this.filterContacts}
          />
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
      </Container>
    );
  }

  componentDidMount() {
    if (localStorage.getItem("contacts") !== null) {
      const contactsFromStorage = localStorage.getItem("contacts");
      this.setState({ contacts: JSON.parse(contactsFromStorage) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
}
