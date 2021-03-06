import React from "react";
import { Container, Repository } from "./styles";
import PropTypes from "prop-types";
function CompareList({ repository, index, onClick }) {
    function apagar(e) {
        e.preventDefault();
        onClick({ action: "delete", index: index });
    }
    function refresh(e) {
        e.preventDefault();
        console.log("aq");
        onClick({ action: "refresh", index: index });
    }
    return (
        <Container>
            <Repository>
                <header>
                    <button id="apagar" onClick={apagar}>
                        Apagar
                    </button>
                    <div className="content">
                        <img src={repository.owner.avatar_url} alt="facebook" />
                        <strong>{repository.name}</strong>
                        <small>{repository.owner.login}</small>
                    </div>
                    <button id="refresh" onClick={refresh}>
                        Refresh
                    </button>
                </header>
                <ul>
                    <li>
                        {repository.stargazers_count} <small>stars</small>
                    </li>
                    <li>
                        {repository.forks_count} <small>forks</small>
                    </li>
                    <li>
                        {repository.open_issues_count}{" "}
                        <small>open issues</small>
                    </li>
                    <li>
                        {repository.last_commit} <small>last commit</small>
                    </li>
                </ul>
            </Repository>
        </Container>
    );
}

CompareList.propTypes = {
    repository: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        owner: PropTypes.shape({
            login: PropTypes.string,
            avatar_url: PropTypes.string
        }),
        stargazers_count: PropTypes.number,
        forks_count: PropTypes.number,
        open_issues_count: PropTypes.number,
        pushed_at: PropTypes.string
    })
};

export default CompareList;
