import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Track from '../Track/Track';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
        playlistName: 'Playlist Name',
        playlistTracks: [],
        searchResults: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => 
      savedTrack.id === track.id)) {
      return;
    }
    // this.setState({
    //   playlistTracks: []
    // });
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.find(track.id)
    });
  }

  updatePlaylistName(name) {
    this.setState({
      name: name
    });
  }

  render() { 
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} 
              onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} 
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
