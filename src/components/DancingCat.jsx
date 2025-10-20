import { useState } from 'react';
import catImage from '../assets/images/cat.svg';
import './DancingCat.css';

function DancingCat() {
  const [animations, setAnimations] = useState({
    dance: true,
    rotate: true,
    jump: true
  });

  const toggleAnimation = (animationType) => {
    setAnimations(prev => ({
      ...prev,
      [animationType]: !prev[animationType]
    }));
  };

  const toggleAll = () => {
    const allActive = animations.dance && animations.rotate && animations.jump;
    setAnimations({
      dance: !allActive,
      rotate: !allActive,
      jump: !allActive
    });
  };

  const getAnimationClass = () => {
    const classes = ['dancing-cat'];
    if (animations.dance) classes.push('dance-active');
    if (animations.rotate) classes.push('rotate-active');
    if (animations.jump) classes.push('jump-active');
    return classes.join(' ');
  };

  const allActive = animations.dance && animations.rotate && animations.jump;

  return (
    <div className="dancing-cat-container">
      <h1 className="title">춤추는 고양이 🐱</h1>

      <div className="cat-wrapper">
        <img
          src={catImage}
          alt="춤추는 고양이"
          className={getAnimationClass()}
        />
      </div>

      <div className="controls">
        <button
          className={`control-button main-button ${allActive ? 'active' : ''}`}
          onClick={toggleAll}
          aria-label={allActive ? '모든 애니메이션 정지' : '모든 애니메이션 시작'}
        >
          {allActive ? '⏸ 모두 정지' : '▶ 모두 시작'}
        </button>

        <div className="individual-controls">
          <button
            className={`control-button small ${animations.dance ? 'active' : ''}`}
            onClick={() => toggleAnimation('dance')}
            aria-label="좌우 흔들기 토글"
          >
            {animations.dance ? '✓' : '✗'} Dance (좌우 흔들기)
          </button>
          <button
            className={`control-button small ${animations.rotate ? 'active' : ''}`}
            onClick={() => toggleAnimation('rotate')}
            aria-label="회전 토글"
          >
            {animations.rotate ? '✓' : '✗'} Rotate (회전)
          </button>
          <button
            className={`control-button small ${animations.jump ? 'active' : ''}`}
            onClick={() => toggleAnimation('jump')}
            aria-label="점프 토글"
          >
            {animations.jump ? '✓' : '✗'} Jump (점프)
          </button>
        </div>
      </div>

      <div className="info">
        <p>각 버튼을 클릭하여 개별 애니메이션을 제어할 수 있습니다!</p>
      </div>
    </div>
  );
}

export default DancingCat;
