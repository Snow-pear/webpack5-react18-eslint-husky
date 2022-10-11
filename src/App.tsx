import React, { lazy, Suspense, useState } from 'react'
const b = 3
// prefetch
const PreFetchDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreFetchDemo" */
      /*webpackPrefetch: true*/
      '@/components/PreFetchDemo'
    )
)
// preload
const PreloadDemo = lazy(
  () =>
    import(
      /* webpackChunkName: "PreloadDemo" */
      /*webpackPreload: true*/
      '@/components/PreloadDemo'
    )
)

function App() {
  const [show, setShow] = useState(false)

  const onClick = () => {
    setShow(true)
  }
  return (
    <>
      <h2 onClick={onClick}>展示</h2>
      {/* show为true时加载组件 */}
      {show && (
        <>
          <Suspense fallback={null}>
            <PreloadDemo />
          </Suspense>
          <Suspense fallback={null}>
            <PreFetchDemo />
          </Suspense>
        </>
      )}

      <h2>940589</h2>
      {[1, 2, 3, 4].map(item => (
        <h1 key={item}>{item}</h1>
      ))}
    </>
  )
}
export default App
