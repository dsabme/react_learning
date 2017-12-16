import React from 'react';
import ReactDom from 'react-dom';
// import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
// import SearchBar from '/components/search_bar'
const API_KEY = 'AIzaSyBDqjVl0ocQbHAaRKE4ODqoxP8sYm0iOds'	;

// YTsearch({ key: API_KEY, term: 'surfboards' }, function(data){
//   console.log(data);
// });

//creating a component
const App = () => {
  return (
    <div>
        <SearchBar />
    </div>
  );
}

// put the component in dom
ReactDom.render(<App />, document.querySelector('.container'));
