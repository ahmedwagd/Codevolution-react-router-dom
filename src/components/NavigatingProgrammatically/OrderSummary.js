import { useNavigate } from 'react-router-dom';


export const OrderSummary = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>Order confirmed!</div>
      <button onClick={() => navigate(-1)}>Go back</button>{/* pass (-1) to useNavigate hook to go back programmatically*/}
    </>
  )
}
