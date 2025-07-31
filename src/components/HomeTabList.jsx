import React from 'react';
import { Link } from 'react-router-dom';

const HomeTabList = () => {
  const tabItems = [
    {
      href: "/the-thao",
      title: "Thể Thao",
      description: "Tổng hợp trận đấu từ các trang xoilac, thapcam,... ",
      tabImage: "/images/Tab1.png",
      innerImage: "/images/Tab1_inner.png",
      className: "tab1"
    },
    {
      href: "/phim-dien-anh",
      title: "Phim Ảnh",
      description: "Tổng hợp phim từ các trang như rophim, phimmoi,...",
      tabImage: "/images/Tab2.png",
      innerImage: "/images/Tab2_inner.png",
      className: "tab2"
    },
    {
      href: "/anime",
      title: "Anime",
      description: "Tổng hợp các bộ Anime mới nhất, hot nhất",
      tabImage: "/images/Tab3.png",
      innerImage: "/images/Tab3_inner.png",
      className: "tab3"
    },
    {
      href: "/truyen-hinh",
      title: "truyền hình",
      description: "Tổng hợp kênh truyền hình từ các trang như FPT, K+...",
      tabImage: "/images/Tab4.png",
      innerImage: "/images/Tab4_inner.png",
      className: "tab4"
    },
    {
      href: "/18-plus",
      title: "18+",
      description: "Tổng hợp video, truyện 18+ từ các trang hot như nangcuc, vlxx,...",
      tabImage: "/images/Tab5.png",
      innerImage: "/images/Tab5_inner.png",
      className: "tab5"
    },
    {
      href: "/manga",
      title: "Truyện tranh",
      description: "Tổng hợp truyện tranh từ các trang như hangtruyen,...",
      tabImage: "/images/Tab6.png",
      innerImage: "/images/Tab6_inner.png",
      className: "tab6"
    }
  ];

  return (
    <div className="Tablist fade-in">
      {tabItems.map((item, index) => (
        <Link key={index} className="Tablist_Item" to={item.href} data-discover="true">
          <div className={`Tablist_Item_Image ${item.className}`}>
            <img alt={`Tab${index + 1}`} src={item.tabImage} />
            <img className="Tablist_Item_Image_Inner" alt={`Tab${index + 1}`} src={item.innerImage} />
          </div>
          <div className="Tablist_Item_Text">
            <div className="Text_Left">
              <div className="Text_Left_Title">{item.title}</div>
              <div className="Text_Left_Description">{item.description}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeTabList;
