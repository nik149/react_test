import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyC4CLhXijY2LjvOnJSxMz0qE3J1Prwe_Ao";

//Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos : [],
      selectedVideo : null
    };

    this.videoSearch("Surfboard");
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={searchKey => this.videoSearch(searchKey)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    );
  }

  videoSearch(searchKey) {
   YTSearch({key : API_KEY, term : searchKey}, (videos) => {
     //setState calls render method again.
     this.setState({
       videos : videos,
       selectedVideo : videos[0]
     });
   });
 }

}
//Take this component's generated HTML and put it on the page. (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
