import './style/App.css'
import Header from './components/Header'
import MyList from './components/list'
import Author from './components/author'
import Advertise from './components/advertisement'
import Footer from './components/footer'
// import Todo from './components/todo'
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
function App() {
  return (
    <div className="App">
      <Header />
      {/* <Todo/> */}
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18}
          xl={14}>
          <MyList />
        </Col>
        <Col className="comm-left" xs={0} sm={0} md={7} lg={5}
          xl={4}>
          <Author />
          <Advertise />
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default App;
