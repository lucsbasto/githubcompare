import React, { Component } from "react";
import moment from "moment";
import logo from "../../assets/logo.png";
import { Container, Form } from "./styles";
import CompareList from "../../components/CompareList";

import api from "../../services/api";

export default class Main extends Component {
    state = {
        notFound: false,
        loading: false,
        repository_input: "",
        repositories: []
    };
    componentDidMount() {
        let repo = JSON.parse(localStorage.getItem("repositories"));
        if (!repo || repo === []) return;
        this.setState({ repositories: repo });
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.repositories.length !== 0) {
            localStorage.setItem(
                "repositories",
                JSON.stringify(prevState.repositories)
            );
        }
    }

    handleAddRepository = async e => {
        e.preventDefault();
        if (this.state.repository_input === "") return;
        try {
            this.setState({ loading: true });

            const { data: repository } = await api.get(
                `/repos/${this.state.repository_input}`
            );
            repository.last_commit = moment(repository.pushed_at).fromNow();
            this.setState({
                repositories: [...this.state.repositories, repository],
                repository_input: "",
                notFound: false
            });
        } catch (error) {
            this.setState({
                notFound: true,
                repository_input: "Repositório não encontrado !"
            });
            setTimeout(
                function() {
                    this.setState({ repository_input: "", notFound: false });
                }.bind(this),
                1000
            );
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <Container>
                <img src={logo} alt="GitHub Compare" />
                <Form
                    withError={this.state.notFound}
                    onSubmit={this.handleAddRepository}
                >
                    <input
                        type="text"
                        placeholder="usuário/repositório"
                        value={this.state.repository_input}
                        onChange={e =>
                            this.setState({ repository_input: e.target.value })
                        }
                    />
                    <button type="submit">
                        {this.state.loading ? (
                            <i className="fa fa-spinner fa-spin"></i>
                        ) : (
                            "+"
                        )}
                    </button>
                </Form>
                <CompareList repositories={this.state.repositories} />
            </Container>
        );
    }
}

// fa fa-spinner fa-pulse
