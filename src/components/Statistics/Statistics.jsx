import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {

    const bgColors = ['#d15050', '#b4790c', '#45970e', '#1495ff', '#e41461'];
    return(
        <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
  
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