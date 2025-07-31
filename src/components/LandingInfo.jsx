import React from 'react';

const LandingInfo = () => {
  const guaranteeItems = [
    "Cung cấp link an toàn.",
    "Xem miễn phí.",
    "Thao tác copy và điền link dễ dàng.",
    "Cá nhân hoá không gian xem.",
    "Các nền tảng nổi tiếng"
  ];

  return (
    <div className="landing-info">
      <div className="info-title">
        NƠI CUNG CẤP
        <span className="info-highlight"> MỌI NỘI DUNG GIẢI TRÍ </span>
        CHO BẠN !
      </div>
      <div className="info-content">
        " Chúng tôi mang đến cho bạn một nền tảng giải trí đa dạng với các nội dung hấp dẫn, 
        bao gồm phim điện ảnh nổi tiếng, phim 18+ và các môn thể thao sôi động. Tất cả đều được 
        cập nhật nhanh chóng để đảm bảo bạn không bỏ lỡ bất kỳ khoảnh khắc thú vị nào.  "
      </div>
      <div className="info-guarantee">
        {guaranteeItems.map((item, index) => (
          <div key={index} className="guarantee-box">
            <img alt="Guarantee" src="/images/tick-circle.png" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingInfo;
