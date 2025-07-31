import React from 'react';
import '../App.css';
import TelegramButton from '../components/TelegramButton';
import Header from '../components/Header';
import Background from '../components/Background';
import TabSection from '../components/TabSection';

const CategoryPage = ({ category }) => {
  // Map category to tab index
  const categoryToIndex = {
    'sports': 0,     // Thể Thao
    'movies': 1,     // Phim Ảnh  
    'anime': 2,      // Anime
    'tv': 3,         // Truyền hình
    'adult': 4,      // 18+
    'comics': 5      // Truyện tranh
  };

  // Map category to highlight class
  const categoryToHighlight = {
    'sports': 'hl_1',    // Thể Thao - Xanh lá
    'movies': 'hl_2',    // Phim Ảnh - Xanh dương
    'anime': 'hl_3',     // Anime - Đỏ
    'tv': 'hl_4',        // Truyền hình - Vàng
    'adult': 'hl_5',     // 18+ - Tím (cần thêm)
    'comics': 'hl_6'     // Truyện tranh - Cam
  };

  const selectedIndex = categoryToIndex[category] || 0;
  const highlightClass = categoryToHighlight[category] || 'hl_1';

  return (
    <div className="App">
      <TelegramButton />
      <div className={`Landing ${highlightClass}`}>
        <div className="Landing-Wrapper">
          <Background />
          <Header />
          <div className="Body">
            <TabSection initialSelectedIndex={selectedIndex} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
