import React, { Component } from 'react'

export default class Newitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="card" style={{ width: "18rem" }}>
                <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}...</h5>
                  <p className="card-text">{description}...</p>
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
