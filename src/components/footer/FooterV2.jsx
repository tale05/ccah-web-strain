import React from "react";
import "./FooterV2.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FooterV2() {
  const navigate = useNavigate();
  const handleToLink = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenNewTab = (link) => {
    window.open(link, "blank");
  };
  return (
    <div className="FooterV2">
      <div className="row-1-footer">
        <h2 className="title-row-1">CCAH-Strain</h2>
        <p>
          CCAH-Strain hướng tới mục tiêu trở thành đơn vị hàng đầu trong lĩnh
          vực nghiên cứu các chủng vi sinh. Chúng tôi cung cấp các giải pháp và
          nghiên cứu chuyên sâu, tiên tiến nhất cho doanh nghiệp.
        </p>
        <div className="wrap-all-icon">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaTwitter className="icon" />
          {/* <FaYoutube className="icon" onClick={() => handleOpenNewTab('https://www.youtube.com/channel/UCvmIHpWJ5HFjA3qqOIXaM7A')} /> */}
          <FaYoutube className="icon" />
          <FaGooglePlusSquare className="icon" />
        </div>
        <div className="wrap-all-feature">
          <p className="feature" onClick={() => handleToLink("/AboutUs")}>
            Về chúng tôi
          </p>
          <p className="feature" onClick={() => handleToLink("/Contact")}>
            Liên hệ
          </p>
          <p className="feature" onClick={() => handleToLink("/Newspaper")}>
            Báo khoa học
          </p>
          <p
            className="feature last"
            onClick={() => handleToLink("/Product/1")}
          >
            Sản phẩm
          </p>
        </div>
        {/* Google Map embed fixed */}
        <div className="embed-map-fixed">
          <div className="embed-map-container">
            <iframe
              className="embed-map-frame"
              title="Google Map"
              src="https://maps.google.com/maps?width=600&height=200&hl=en&q=HCMC%20University%20of%20Industry%20and%20Trade%20140%20L%C3%AA%20Tr%E1%BB%8Dng%20T%E1%BA%A5n%2C%20T%C3%A2y%20Th%E1%BA%A1nh%2C%20T%C3%A2n%20Ph%C3%BA%2C%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
            <a
              href="https://sprunkiretake.net"
              style={{
                fontSize: "2px",
                color: "gray",
                position: "absolute",
                bottom: 0,
                left: 0,
                zIndex: 1,
                maxHeight: "1px",
                overflow: "hidden",
              }}
            >
              sprunki retake
            </a>
          </div>
          <style>{`
                .embed-map-fixed{position:relative;text-align:right;width:600px;height:300px;}
                .embed-map-container{overflow:hidden;background:none!important;width:600px;height:300px;}
                .embed-map-frame{width:600px!important;height:300px!important;}`}</style>
        </div>
      </div>
      {/* <div className="row-2-footer">
                <p onClick={() => navigate('/Employee')}>Cổng đăng nhập dành riêng cho nhân viên</p>
            </div> */}
    </div>
  );
}

export default FooterV2;
