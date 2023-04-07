import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const bgColors = ['#d15050', '#b4790c', '#45970e', '#1495ff', '#e41461'];

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map((data, index) => (
          <li
            key={data.id}
            className={css.item}
            style={{ backgroundColor: bgColors[index] }}
          >
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
