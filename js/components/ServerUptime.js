import {h} from '@cycle/dom';
import UptimeDay from './UptimeDay';

const ServerUptime = ({name, days}) => {
  const updays = days.reduce((upDays, day) => {
      return upDays += (day.up ? 1 : 0);
  }, 0);
  
  const streak = () => {
    const [m] = days.reduce(([max, streak], day) => {
      if (day.up && streak + 1 > max) {
        return [streak + 1, streak + 1];
      } else if (day.up) {
        return [max, streak + 1];
      } else {
        return [max, 0];
      }
    }, [0, 0]);

    return m;
  }

  return h('server-uptime', [
    h('h1', name),
    h('h2', updays + ' days up'),
    h('h2', `Biggest Streak: ${streak()}`),
    h('div.days', days.map(UptimeDay))
  ])
};

export default ServerUptime;