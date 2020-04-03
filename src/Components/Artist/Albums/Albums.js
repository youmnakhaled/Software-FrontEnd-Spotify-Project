import React, { Fragment, useState, Component } from "react";
import axios from "axios";
import "../SideBar/ArtistSidebar";
import "../UploadFile/uploadfile.css";
import "../../WebPlayer/WebplayerHome.css";
import ArtistSidebar from "../SideBar/ArtistSidebar";
import { Link } from "react-router-dom";

class Albums extends Component {
  constructor() {
    super();
    this.state = {
      artistAlbums: []
    };
  }

  componentDidMount() {
    axios.get("http://www.mocky.io/v2/5e74bc56300000d331a5f62f").then(res => {
      this.setState({
        artistAlbums: res.data.map(album => ({
          id: album.id,
          title: album.name,
          imageUrl: album.images
        }))
      });
    });
  }
  render() {
    return (
      <div className="artist-body" id="webplayer-home">
        <div className="full-page container albums-page">
          <ArtistSidebar />
          <div className="albums-section">
            <div className="header-button-container">
              <h2 className="section-title albums">Albums</h2>
              <Link to="/artist/create-album"><button className="btn-primary-outline add-album">Add Album</button></Link>
            </div>
            <div className="card-group">
              {this.state.artistAlbums.map(album => (
                <Link to="/artist/album-page">
                  <div className="card">
                    <img
                      src={album.imageUrl[0]}
                      className="card-img-top"
                      alt="..."
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{album.title}</h5>
                      <p className="card-text">{album.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Albums;