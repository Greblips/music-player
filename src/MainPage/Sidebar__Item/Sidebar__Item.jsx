import classes from './Sidebar__Item.module.css';

const Sidebar__Item = ({ img, description }) => {
  return (
    <div className={classes.sidebar__item}>
      <a className="sidebar__link" href="#">
        <img className="sidebar__img" src={img} alt={description} />
      </a>
    </div>
  );
};

export default Sidebar__Item;