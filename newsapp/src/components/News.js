import React, { Component } from 'react'
import Newitem from './Newitem'

export default class News extends Component {

    constructor() {
        super();
        console.log("Hello i am constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    //Display content API with this method :----
    async componentDidMount() {
        console.log("CDM")
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a924b902923447fdb68207df99a8f2fc&page=1&pageSize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePrevClick = async () => {
        console.log("Previous");

        console.log("CDM")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a924b902923447fdb68207df99a8f2fc&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        console.log("Next");

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        } else {

            console.log("CDM")
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a924b902923447fdb68207df99a8f2fc&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }


    render() {
        console.log("Render")
        return (
            <div>
                <div className="container my-3">
                    <h2>NewzWorld - Top HeadLines</h2>
                    <div className="row my-5">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Newitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
                </div>
            </div>
        )
    }
}
