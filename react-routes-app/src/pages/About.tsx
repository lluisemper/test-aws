import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()

  return (
    <div>
      <p>This is the About page.</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}
