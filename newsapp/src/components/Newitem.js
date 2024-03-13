import React, { Component } from 'react'

export default class Newitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
              <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:"90%"}}>{source}</span>
                <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" style={{height:"170px"}} alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}...</h5>
                  <p className="card-text">{description}...</p>
                  <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                  <a href={newsUrl} target='_blank' className="btn btn-dark">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}