import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="prf_bgr">
            <img src="https://img4.thuthuatphanmem.vn/uploads/2020/07/05/background-cong-nghe-full-hd_035953614.jpg" alt="" />
          </div>
          <div className="prf_img">
            <img src="../public/img/387741847_1005671027318575_1815665505677506037_n.jpg" alt="" />
          </div>
        </div>
        <div className="content">
          <p>Họ tên: Trương Thế Hiền</p>
          <p>Ngày sinh: 29/06/2002</p>
          <p>Quê quán: Thanh Hoá</p>
          <p>Định hướng: FullStack Web Developer</p>
          <p>Ngôn ngữ: C, Java, JavaScript, PHP</p>
        </div>
      </div>
    </>
  )
}

export default App
