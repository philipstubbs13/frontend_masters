import React, { Suspense, lazy } from 'react'

const Button = lazy(() => import('femds/button'))

function App() {
  return (
    <Suspense>
      <div>
        <Button>Hello</Button>
      </div>
    </Suspense>
  )
}

export default App
