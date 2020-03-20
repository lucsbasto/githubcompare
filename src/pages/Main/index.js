import React, { Component } from "react";
import logo from "../../assets/logo.png";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";

import api from "../../services/api";

export default class Main extends Component {
    state = {
        repository_input: "",
        repositories: []
    };

    handleAddRepository = async e => {
        e.preventDefault();
        try {
            const { data: repository } = await api.get(
                `/repos/${this.state.repository_input}`
            );
            this.setState({
                repositories: [...this.state.repositories, repository],
                repository_input: ""
            });
        } catch (error) {
            alert("tem esse repo nao");
        }
    };

    render() {
        return (
            <Container>
                <img src={logo} alt="GitHub Compare" />
                <Form onSubmit={this.handleAddRepository}>
                    <input
                        type="text"
                        placeholder="usuário/repositório"
                        value={this.state.repository_input}
                        onChange={e =>
                            this.setState({ repository_input: e.target.value })
                        }
                    />
                    <button>+</button>
                </Form>
                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}
