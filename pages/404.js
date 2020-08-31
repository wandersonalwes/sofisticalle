import React from 'react'
import Link from 'next/link'

const Error = () => {
  return (
    <div className="error-404">
      <h1>Essa página não foi encontrada!</h1>

      <Link href="/">
        <a>Voltar para a home</a>
      </Link>
    </div>
  )
}

export default Error
