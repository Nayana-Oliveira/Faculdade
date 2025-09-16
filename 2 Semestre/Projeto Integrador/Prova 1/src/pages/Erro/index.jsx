import { Link } from 'react-router-dom'
import './index.css'

export default function Erro() {
return (
    <div className="error-page-container">
      
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Página Não Encontrada</h2>
      <p className="error-message">
        Oops! A página que você está procurando não existe. 
      </p>

      <div className="error-actions">
        <Link to='/' className="btn btn-primary">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}