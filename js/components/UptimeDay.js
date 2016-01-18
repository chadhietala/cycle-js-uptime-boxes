import {h} from '@cycle/dom';

const UptimeDay = (day) => {
  const style = day.up ? 'good' : 'bad';
  const memo = day.up ? 'Servers operational!' : 'Red alert!';
  return h('uptime-day', [
    h(`span.uptime-day.${style}`),
    h('span.hover', `${day.number}: ${memo}`)
  ]);
};

export default UptimeDay;