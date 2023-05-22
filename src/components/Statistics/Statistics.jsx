import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function Statistics({ title, stats }) {
  return (
    
    <section className={css.statistics}>
      {title.length > 0 && (
        <h2 className={css.title}>{title}</h2>
      )}
      <ul className={css.statlist}>
        {stats.map(data => (
          <li
            key={data.id}
            className={css.item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
export default Statistics;
