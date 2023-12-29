import Layout from './global/layout'
import HomePage from './pages/homePage';
import { Route, Router, Routes } from "react-router-dom";
import BlogListing from './pages/blogListing';
import SinglePost from './pages/singlePost';
import AuthorPage from './pages/authorPage';
function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
          <Route path='/' exact element= {<HomePage/>}/>
          <Route path='/blogListing' exact element= {<BlogListing/>}/>
          <Route path='/singlePost' exact element= {<SinglePost/>}/>
          <Route path='/authorPage' exact element= {<AuthorPage/>}/>
        </Routes>
        {/* <HomePage/> */}
        </Layout>
    </div>
  );
}

export default App;
