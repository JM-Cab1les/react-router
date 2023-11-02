import { Outlet } from "react-router-dom"

const CareerLayouts = () => {
  return (
        <div className="careers-layout">
            <h2>Careers</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste repudiandae accusantium exercitationem aliquid in illo.</p>

            <Outlet/>
        </div>
        
  )
}

export default CareerLayouts