import { useSpring, animated } from 'react-spring'

interface Props {
  n: number | null | undefined
}

const AnimedCount = ({ n }: Props) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tesion: 20, friction: 10 }
  })
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}
export default AnimedCount
