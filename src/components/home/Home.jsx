import React from "react";
import './Home.scss'
import { useNavigate } from "react-router-dom";
import { removeDataLocalStorage } from "../../utils/Utils";
import { icons, images } from '../../constants'
import { Helmet } from "react-helmet";

function Home() {
    const navigate = useNavigate()

    return (
        <>
            <Helmet>
                <title>Trang chủ | CCAH</title>
            </Helmet>
            <div className="Home">
                <img className="banner" src={images.bannerstrain} />
                <div className="wrap-content">
                    <div className="col-1">
                        <h1>🔬 CHỦNG VI SINH – NỀN TẢNG CHO SỰ SỐNG VÀ PHÁT TRIỂN</h1>
                        <h1 style={{ fontSize: '30px' }}>🌱 Đồng hành cùng bạn trong hành trình tìm kiếm và phát triển các chủng tảo tối ưu.</h1>
                        <p>CCAH-Strain là đơn vị tiên phong trong nghiên cứu và quản lý chủng vi sinh, đặc biệt là các chủng tảo phục vụ nghiên cứu và ứng dụng công nghệ sinh học.
                            Chúng tôi cung cấp: Giải pháp quản trị chủng tối ưu, hệ thống vận hành phòng thí nghiệm chuyên nghiệp, hỗ trợ nghiên cứu chuyên sâu cho tổ chức và doanh nghiệp trong và ngoài nước
                        </p>

                        <button onClick={() => {
                            removeDataLocalStorage('node')
                            navigate('/Product/1')
                        }}>
                            Xem các chủng tảo của chúng tôi
                        </button>
                    </div>
                    <div className="col-2">
                        <img className="img-circle" src={icons.logo_new} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home