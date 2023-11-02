import { Link } from "react-router-dom"

const NotFound = () => {
  return (
        <div>
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi sequi unde ipsum alias sit fugit? Iusto nemo magnam hic mollitia?</p>
             
             
             <p>Go to <Link path="/">Homepage</Link></p>
        </div>
  )
}

export default NotFound