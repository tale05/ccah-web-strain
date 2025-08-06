import React from "react";
import './AboutUs.scss'
import { images } from "../../constants";
import { Helmet } from "react-helmet";

function AboutUs() {
    return (
        <>
            <Helmet>
                <title>Về chúng tôi | CCAH</title>
            </Helmet>
            <div className="AboutUs">
                <div className="row-banner">
                    <img className="banner" src={images.bannerintro} />
                </div>
                <div className="row-content">
                    <div className="col-1">
                        <div className="content-1">
                            <h2 className="title">VỀ CHÚNG TÔI</h2>
                            <p>
                                Chúng tôi là đơn vị nghiên cứu chuyên sâu trong lĩnh vực đa dạng sinh học và công nghệ sinh học, đặc biệt là nghiên cứu hệ vi tảo tại Khu Dự trữ Sinh quyển Rừng ngập mặn Cần Giờ (KDTSQRNMCG). Với đội ngũ chuyên gia nhiều kinh nghiệm và hệ thống trang thiết bị hiện đại, công ty tập trung phát triển các cơ sở dữ liệu di truyền, phân lập chủng thuần, và đánh giá tiềm năng ứng dụng của các loài vi tảo bằng các công nghệ tiên tiến và phân tích mã vạch DNA. Chúng tôi không chỉ góp phần vào việc bảo tồn hệ sinh thái mà còn tìm kiếm giá trị ứng dụng tiềm năng phục vụ cho ngành thực phẩm, dược phẩm và nông nghiệp.
                            </p>
                        </div>
                        <div className="content-1">
                            <h2 className="title">TẦM NHÌN</h2>
                            <p>
                            Chúng tôi hướng tới trở thành đơn vị tiên phong trong lĩnh vực nghiên cứu vi tảo và ứng dụng công nghệ sinh học hiện đại tại Việt Nam, đóng vai trò chủ chốt trong việc bảo tồn đa dạng sinh học và phát triển nguồn tài nguyên sinh học nội địa. Trong tương lai, chúng tôi mong muốn mở rộng hợp tác quốc tế, thúc đẩy chuyển giao công nghệ và đưa các sản phẩm từ vi tảo vào đời sống, góp phần xây dựng nền kinh tế xanh và bền vững.
                            </p>
                        </div>
                        <div className="content-1">
                            <h2 className="title">SỨ MỆNH</h2>
                            <p>
                            Sứ mệnh của chúng tôi là nghiên cứu, phân lập và định danh các chủng vi tảo đặc hữu và tiềm năng tại khu vực Khu Dự trữ Sinh quyển Rừng ngập mặn Cần Giờ, xây dựng cơ sở dữ liệu di truyền và đánh giá giá trị ứng dụng của chúng một cách khoa học, chính xác và toàn diện. Qua đó, công ty góp phần thúc đẩy bảo tồn tài nguyên sinh học, phát triển các dòng sản phẩm thân thiện với môi trường và phục vụ cho các mục tiêu phát triển bền vững của quốc gia.
                            </p>
                        </div>
                    </div>
                    <div className="col-2">
                        <img src={images.illustration6} />
                    </div>
                </div>

                <div className="row-value">
                    <h2 className="title-value">GIÁ TRỊ CỐT LÕI</h2>
                    <div className="wrap-all-value">

                        <div className="wrap-value">
                            <img src={images.illustration2} />
                            <p>XỬ LÝ CHUYÊN NGHIỆP</p>
                        </div>

                        <div className="wrap-value">
                            <img src={images.illustration3} />
                            <p>CỐNG HIẾN HẾT MÌNH</p>
                        </div>

                        <div className="wrap-value">
                            <img src={images.illustration4} />
                            <p>SÁNG TẠO ĐỔI MỚI</p>
                        </div>

                        <div className="wrap-value">
                            <img src={images.illustration5} />
                            <p>TINH THẦN TRÁCH NHIỆM</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutUs