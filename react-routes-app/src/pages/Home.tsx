import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <p>This is the Home page.</p>
      <button onClick={() => navigate('/about')}>Go to About</button>
    </div>
  )
}
