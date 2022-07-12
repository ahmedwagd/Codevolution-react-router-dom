import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary')}>Place order</button>{/* if i want to change the history add a second parameter {replace: true}*/}
    </>
  )
}

export default Home