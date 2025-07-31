import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import TabContent from './TabContent'

const TabSection = ({ initialSelectedIndex = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex)

  const tabData = [
    {
      icon: "/images/mini-tab1.png",
      alt: "Thể Thao",
      title: "Thể Thao",
      description: "Tổng hợp trận đấu từ các trang xoilac, thapcam,...",
      backgroundImage: "/images/bg-hl1.png",
      services: [
        {
          name: "XoiLac TV",
          url: "https://xoilac.tv",
          icon: "/images/gp.png",
          description: "Xem bóng đá trực tiếp chất lượng cao, cập nhật liên tục các trận đấu hấp dẫn",
          link: "https://xoilac.tv"
        },
        {
          name: "ThapcamTV",
          url: "https://thapcam.com",
          icon: "/images/gp.png",
          description: "Bạn có thể dễ dàng tìm thấy thông tin và thưởng thức các trận đấu hấp dẫn từ ThapcamTV",
          link: "https://thapcam.com"
        },
        {
          name: "VeboTV",
          url: "https://vebo.tv",
          icon: "/images/gp.png",
          description: "Xem thể thao trực tuyến chất lượng cao từ VeboTV",
          link: "https://vebo.tv"
        }
      ]
    },
    {
      icon: "/images/mini-tab2.png",
      alt: "Phim Ảnh",
      title: "Phim Ảnh",
      description: "Tổng hợp phim từ các trang như rophim, phimmoi,...",
      backgroundImage: "/images/bg-hl2.png",
      services: [
        {
          name: "Rophim",
          url: "https://iptv.rophim.dev",
          icon: "/images/gp.png",
          description: "Bạn có thể dễ dàng tìm thấy và thưởng thức các bộ phim siêu hot từ RoPhim",
          link: "https://iptv.rophim.dev"
        },
        {
          name: "Ophim",
          url: "https://op-pvd.moviedb.dev",
          icon: "/images/gp.png",
          description: "Bạn có thể dễ dàng tìm thấy và thưởng thức các bộ phim siêu hot từ Ophim",
          link: "https://op-pvd.moviedb.dev"
        },
        {
          name: "Kkphim",
          url: "https://kk-pvd.moviedb.dev",
          icon: "/images/gp.png",
          description: "Bạn có thể dễ dàng tìm thấy và thưởng thức các bộ phim siêu hot từ Kkphim",
          link: "https://kk-pvd.moviedb.dev"
        },
        {
          name: "Vipphim",
          url: "https://vp-pvd.moviedb.dev",
          icon: "/images/gp.png",
          description: "Bạn có thể dễ dàng tìm thấy và thưởng thức các bộ phim siêu hot từ VipPhim",
          link: "https://vp-pvd.moviedb.dev"
        },
        {
          name: "TVPHIM",
          url: "https://tv-pvd.moviedb.dev",
          icon: "/images/gp.png",
          description: "Bạn có thể dễ dàng tìm thấy và thưởng thức các bộ phim siêu hot từ TVPhim",
          link: "https://tv-pvd.moviedb.dev"
        }
      ]
    },
    {
      icon: "/images/mini-tab3.png",
      alt: "Anime",
      title: "Anime",
      description: "Tổng hợp các bộ Anime mới nhất, hot nhất",
      backgroundImage: "/images/bg-hl3.png",
      services: [
        {
          name: "AnimeVsub",
          url: "https://animevsub.tv",
          icon: "/images/gp.png",
          description: "Xem anime vietsub online chất lượng cao, cập nhật nhanh nhất",
          link: "https://animevsub.tv"
        },
        {
          name: "AnimeHay",
          url: "https://animehay.tv",
          icon: "/images/gp.png",
          description: "Thư viện anime đa dạng với chất lượng HD",
          link: "https://animehay.tv"
        },
        {
          name: "AnimeVietsub",
          url: "https://animevietsub.tv",
          icon: "/images/gp.png",
          description: "Xem anime với phụ đề tiếng Việt chất lượng cao",
          link: "https://animevietsub.tv"
        }
      ]
    },
    {
      icon: "/images/mini-tab4.png",
      alt: "Truyền hình",
      title: "Truyền Hình",
      description: "Tổng hợp kênh truyền hình từ các trang như FPT, K+...",
      backgroundImage: "/images/bg-hl4.png",
      services: [
        {
          name: "FPT Play",
          url: "https://fptplay.vn",
          icon: "/images/gp.png",
          description: "Xem các kênh truyền hình trực tuyến chất lượng cao",
          link: "https://fptplay.vn"
        },
        {
          name: "K+ Sport",
          url: "https://kplus.vn",
          icon: "/images/gp.png",
          description: "Kênh thể thao hàng đầu Việt Nam",
          link: "https://kplus.vn"
        },
        {
          name: "VTVGo",
          url: "https://vtvgo.vn",
          icon: "/images/gp.png",
          description: "Xem truyền hình VTV trực tuyến miễn phí",
          link: "https://vtvgo.vn"
        },
        {
          name: "TV360",
          url: "https://tv360.vn",
          icon: "/images/gp.png",
          description: "Kho tàng nội dung giải trí đa dạng",
          link: "https://tv360.vn"
        }
      ]
    },
    {
      icon: "/images/mini-tab5.png",
      alt: "18+",
      title: "18+",
      description: "Tổng hợp video, truyện 18+ từ các trang hot như nangcuc, vlxx,...",
      backgroundImage: "/images/bg-hl5.png",
      services: [
        {
          name: "NangCuc",
          url: "Chỉ dành cho 18+",
          icon: "/images/gp.png",
          description: "Nội dung dành riêng cho người trưởng thành",
          link: "#adult-content"
        },
        {
          name: "VLXX",
          url: "Chỉ dành cho 18+",
          icon: "/images/gp.png",
          description: "Video chất lượng cao dành cho người lớn",
          link: "#adult-content"
        },
        {
          name: "SexTop1",
          url: "Chỉ dành cho 18+",
          icon: "/images/gp.png",
          description: "Nội dung giải trí người lớn chất lượng cao",
          link: "#adult-content"
        }
      ]
    },
    {
      icon: "/images/mini-tab6.png",
      alt: "Truyện tranh",
      title: "Truyện Tranh",
      description: "Tổng hợp truyện tranh từ các trang như hangtruyen,...",
      backgroundImage: "/images/bg-hl6.png",
      services: [
        {
          name: "HangTruyen",
          url: "https://hangtruyen.com",
          icon: "/images/gp.png",
          description: "Đọc truyện tranh online miễn phí, cập nhật liên tục",
          link: "https://hangtruyen.com"
        },
        {
          name: "TruyenQQ",
          url: "https://truyenqq.com",
          icon: "/images/gp.png",
          description: "Thư viện truyện tranh đa dạng thể loại",
          link: "https://truyenqq.com"
        },
        {
          name: "NetTruyen",
          url: "https://nettruyen.com",
          icon: "/images/gp.png",
          description: "Kho truyện tranh khổng lồ với nhiều thể loại",
          link: "https://nettruyen.com"
        },
        {
          name: "TruyenTranh24",
          url: "https://truyentranh24.com",
          icon: "/images/gp.png",
          description: "Đọc truyện tranh online 24/7 không giới hạn",
          link: "https://truyentranh24.com"
        }
      ]
    }
  ]

  return (
    <div className="TablistSelected">
      <Tabs 
        selectedIndex={selectedIndex} 
        onSelect={(index) => setSelectedIndex(index)}
        className="react-tabs"
        data-rttabs="true"
      >
        <TabList className="react-tabs__tab-list" role="tablist">
          {tabData.map((tab, index) => (
            <Tab
              key={index}
              className="react-tabs__tab"
              selectedClassName="react-tabs__tab--selected"
              role="tab"
              aria-selected={selectedIndex === index}
              aria-disabled="false"
              data-rttab="true"
              tabIndex={selectedIndex === index ? "0" : "-1"}
            >
              <img alt={tab.alt} src={tab.icon} />
            </Tab>
          ))}
        </TabList>

        <div className="TabItem fade-in">
          {tabData.map((tab, index) => (
            <TabPanel
              key={index}
              className="react-tabs__tab-panel"
              selectedClassName="react-tabs__tab-panel--selected"
              role="tabpanel"
            >
              <TabContent data={tab} />
            </TabPanel>
          ))}
        </div>
      </Tabs>
    </div>
  )
}

export default TabSection
