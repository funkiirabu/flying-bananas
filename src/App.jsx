import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

function Box({ z }) {
  const ref = useRef()
  const { viewport } = useThree()
  
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(viewport.height),
  })

  useFrame((state) => {
    ref.current.position.set(data.x * viewport.width, (data.y += 0.1), z)
    if (data.y > viewport.height / 1.5) {
      data.y = -viewport.height / 1.5
    }
  })

  return (
    <mesh ref={ref} onClick={() => setClicked(!clicked)}>
      <boxGeometry />
      <meshBasicMaterial color="orange" />
    </mesh>
  )
}

export default function App({ count = 100}) {
  return (
    <Canvas>
      {Array.from({ length: count }, (_, i) => (<Box key={i} z={-i} />))}
    </Canvas>
  )
}
