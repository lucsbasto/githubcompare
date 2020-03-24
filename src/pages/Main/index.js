import React, { Component } from "react";
import moment from "moment";
import logo from "../../assets/logo.png";
import { Container, Form, ContainerList } from "./styles";
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

    verifyRepository = () => {};

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

    handleClick = async e => {
        const { index, action } = e;
        if (action === "delete") {
            let repos_copy = Array.from(this.state.repositories);
            repos_copy.splice(index, 1);
            this.setState({ repositories: repos_copy });
        } else {
            let repos_copy = Array.from(this.state.repositories);
            let repo = repos_copy.splice(index, 1);
            console.log("repo", repo[0].full_name);

            const { data: repository } = await api.get(
                `/repos/${repo[0].full_name}`
            );
            repository.last_commit = moment(repository.pushed_at).fromNow();
            this.setState({
                repositories: [...repos_copy, repository],
                repository_input: "",
                notFound: false
            });
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
                            <i className="fa fa-plus"></i>
                        )}
                    </button>
                </Form>
                <ContainerList>
                    {this.state.repositories.map((repository, index) => (
                        <CompareList
                            key={repository.id}
                            repository={repository}
                            index={index}
                            onClick={this.handleClick}
                        />
                    ))}
                </ContainerList>
            </Container>
        );
    }
}

// fa fa-spinner fa-pulse
