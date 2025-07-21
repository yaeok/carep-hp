const BubbleAnimation = () => {
  // 生成する泡の数
  const bubbleCount = 25
  const bubbles = Array.from({ length: bubbleCount })

  return (
    <div className='bubbles-container' aria-hidden='true'>
      {bubbles.map((_, index) => {
        // 泡のスタイルをランダムに設定
        const size = 10 + Math.random() * 80 // サイズ: 10pxから90px
        const style = {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`, // 水平位置
          animationDuration: `${8 + Math.random() * 10}s`, // アニメーション時間: 8秒から18秒
          animationDelay: `${Math.random() * 8}s`, // アニメーション開始の遅延: 0秒から8秒
        }
        return <div key={index} className='bubble' style={style}></div>
      })}
    </div>
  )
}

export default BubbleAnimation
