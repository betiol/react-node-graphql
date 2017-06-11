import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component {

    renderSongs() {
        let songs = this.props.data.songs;
        return songs.map((song, idx) => {
            return (
                <li key={idx} className="collection-item">
                    {song.title}
                </li>
            );
        });
    }

    render() {
        if (this.props.data.loading) { return <div>Loading...</div>; }
        return (
            <ul className="collection">
                {this.renderSongs()}
            </ul>
        );
    }
}

const query = gql`
 {
    songs {
      title
    }
 }
`;


export default graphql(query)(SongList);