import './App.css';
import Header from './components/Header';
import Category from './components/Category';
import Article from './components/Article';
import Footer from './components/Footer';
import Like from './components/Like';
import Item from './components/Item';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [topics, setTopics] = useState([
    {id: 1, image:'notebook.jpg', title:'노트북', price:'500,000', location: '천안시 동남구', body:'노트북 고장나서 부품용으로 팔아요. 연락주세요.', like: false, category: '전자제품', status: '새상품', delCost: '5000'},
    {id: 2, image:'ipad7.jpg', title:'아이패드', price:'300,000', location: '천안시 서북구', body:'아이패드 17세대 구매해서 팔아요. 연락주세요.', like: false, category: '전자제품', status: '사용감 많음', delCost: '7000'},
    {id: 3, image:'iphone.jpg', title:'아이폰12pro', price:'1,200,000', location: '서울시 구로구', body:'갤럭시로 기변해서 팔아요. 연락주세요.', like: false, category: '전자제품', status: '사용감 있음', delCost: '9000'},
    {id: 4, image:'bed.jpg', title:'침대', price:'200,000', location: '서울시 양천구', body:'침대 새로 구매해서 팔아요. 연락주세요.', like: false, category: '가구 | 인테리어', status: '새상품', delCost: '3000'},
    {id: 5, image:'desk.jpg', title:'책상', price:'100,000', location: '서울시 영등포구', body:'아들이 공부 안해서 책상 팔아요. 연락주세요.', like: false, category: '가구 | 인테리어', status: '사용감 많음', delCost: '6000'},
    {id: 6, image:'jeans.jpg', title:'청바지', price:'50,000', location: '서울시 강남구', body:'청바지 살쪄서 팔아요. 연락주세요.', like: false, category: '패션', status: '사용감 적음', delCost: '4000'},
    {id: 7, image:'polo.jpg', title:'폴로셔츠', price:'30,000', location: '서울시 종로구', body:'폴로 셔츠 한번 입은거 팔아요. 연락주세요.', like: false, category: '패션', status: '새상품', delCost: '8000'},
    {id: 8, image:'tefal.jpg', title:'테팔 팬', price:'20,000', location: '서울시 강동구', body:'집에서 요리를 안해서 팔아요. 연락주세요.', like: false, category: '생활 | 주방', status: '사용감 있음', delCost: '2000'},
    {id: 9, image:'rnr.jpg', title:'락앤락 통', price:'15,000', location: '서울시 송파구', body:'락앤락통 사용안해서 팝니다. 연락주세요.', like: false, category: '생활 | 주방', status: '사용감 많음', delCost: '5000'},
    {id: 10, image:'ramen.jpg', title:'신라면', price:'3,000', location: '서울시 서초구', body:'신라면 안매워서 급처분 합니다.. 연락주세요.', like: false, category: '가공식품', status: '새상품', delCost: '9000'},
    {id: 11, image:'spam.jpg', title:'스팸', price:'5,000', location: '서울시 관악구', body:'스팸 몸에 나빠서 팔아요. 연락주세요.', like: false, category: '가공식품', status: '사용감 적음', delCost: '7000'},
    {id: 12, image:'ball.jpg', title:'축구공', price:'10,000', location: '서울시 동작구', body:'축구공 3번 사용한 제품 싸게 팝니다. 연락주세요.', like: false, category: '취미 | 게임 | 음반', status: '사용감 있음', delCost: '4000'}
  ])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Category />
        <Routes>
          <Route path="/" element={<Article topics={topics} setTopics={setTopics}/>} />
          <Route path="/:topicTitle" element={<Item topics={topics}/>} />
          <Route path="/category/:id" element={<Article />} />
          <Route path="/wishList" element={<Like topics={topics} setTopics={setTopics}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;