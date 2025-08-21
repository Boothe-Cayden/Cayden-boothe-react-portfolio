import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "../portfolio/portfolio-item";

export default class PortfolioManager extends Component {

    constructor() {
        super();

        this.state= {
            PortfolioItems: []
        }
    }

    getPortfolioItems() {
        axios.get("https://caydenboothe.devcamp.space/portfolio/portfolio_items", { withCredentials: true })
        .then(response => {
            this.setState({
                PortfolioItems: [...response.data.portfolio_items]
            })
        }).catch(error => {
            console.log("error in getPortfolioItems", error)
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }
    render () {
        return (
            <div className="portfolio-manager-wrapper">
                
                <div className="left-column">
                    <h1>Portfolio form</h1>
                </div>

                <div className="right-column">
                    <h1>portfolio sidebar...</h1>
                </div>
            </div>
        );
    }
}