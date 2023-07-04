import sprite from '../../../../../img/icon/sprite.svg';

function PlayerControls() {
  return (
    <div className="player__controls">
      <div className="player__btn-prev">
        <svg className="player__btn-prev-svg" alt="prev">
          <use xlinkHref={`${sprite}#icon-prev`} />
        </svg>
      </div>
      <div className="player__btn-play _btn">
        <svg className="player__btn-play-svg" alt="play">
          <use xlinkHref={`${sprite}#icon-play`} />
        </svg>
      </div>
      <div className="player__btn-next">
        <svg className="player__btn-next-svg" alt="next">
          <use xlinkHref={`${sprite}#icon-next`} />
        </svg>
      </div>
      <div className="player__btn-repeat _btn-icon">
        <svg className="player__btn-repeat-svg" alt="repeat">
          <use xlinkHref={`${sprite}#icon-repeat`} />
        </svg>
      </div>
      <div className="player__btn-shuffle _btn-icon">
        <svg className="player__btn-shuffle-svg" alt="shuffle">
          <use xlinkHref={`${sprite}#icon-shuffle`} />
        </svg>
      </div>
    </div>
  );
}

export default PlayerControls;
