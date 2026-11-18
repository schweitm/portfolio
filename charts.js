const chart = document.getElementById('market-chart');
const stockButtons = [...document.querySelectorAll('[data-stock]')];

if (chart && window.marketData && chart.getContext('2d')) {
  const { dates, series } = window.marketData;
  const names = { KO: 'Coca-Cola', TRI: 'Thomson Reuters', XOM: 'Exxon Mobil' };
  const chartContext = chart.getContext('2d');
  const summary = document.getElementById('market-summary');
  const formatIndex = new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 });
  let selectedStock = 'KO';

  function drawMarketChart() {
    const { width, height } = chart.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    chart.width = Math.round(width * ratio);
    chart.height = Math.round(height * ratio);
    chartContext.setTransform(ratio, 0, 0, ratio, 0, 0);

    const left = 30;
    const right = width - 7;
    const bottom = height - 23;
    const top = 11;
    const benchmark = series['S&P 500'];
    const stock = series[selectedStock];
    const min = 75;
    const max = 25 * Math.ceil(Math.max(...benchmark, ...stock) / 25);
    const x = index => left + (right - left) * index / (dates.length - 1);
    const y = value => bottom - (bottom - top) * (value - min) / (max - min);

    chartContext.font = '11px ui-monospace, monospace';
    chartContext.fillStyle = '#c8dbd1';
    chartContext.textAlign = 'left';
    chartContext.strokeStyle = '#78978765';
    chartContext.lineWidth = 1;
    for (let value = 80; value <= max; value += 40) {
      chartContext.beginPath();
      chartContext.moveTo(left, y(value));
      chartContext.lineTo(right, y(value));
      chartContext.stroke();
      chartContext.fillText(String(value), 0, y(value) + 3);
    }

    for (const [index, label, alignment] of [[0, '2021', 'left'], [24, '2023', 'center'], [59, '2025', 'right']]) {
      chartContext.textAlign = alignment;
      chartContext.fillText(label, x(index), height - 5);
    }

    for (const [values, color] of [[benchmark, '#f2c988'], [stock, '#bdf0c9']]) {
      chartContext.beginPath();
      chartContext.strokeStyle = color;
      chartContext.lineWidth = 2;
      chartContext.lineJoin = 'round';
      chartContext.lineCap = 'round';
      values.forEach((value, index) => {
        if (index === 0) chartContext.moveTo(x(index), y(value));
        else chartContext.lineTo(x(index), y(value));
      });
      chartContext.stroke();
    }
  }

  function selectStock(ticker) {
    selectedStock = ticker;
    for (const button of stockButtons) {
      button.setAttribute('aria-pressed', String(button.dataset.stock === ticker));
    }

    const finalStock = formatIndex.format(series[ticker].at(-1));
    const finalBenchmark = formatIndex.format(series['S&P 500'].at(-1));
    const finalDate = dates.at(-1);
    summary.textContent = `${finalDate} index · ${names[ticker]} ${finalStock} · S&P 500 ${finalBenchmark}`;
    chart.setAttribute('aria-label', `Indexed monthly closing prices for ${names[ticker]} and the S&P 500, from ${dates[0]} to ${finalDate}. ${summary.textContent}.`);
    drawMarketChart();
  }

  for (const button of stockButtons) {
    button.addEventListener('click', () => selectStock(button.dataset.stock));
  }
  document.querySelector('.market-controls').hidden = false;
  selectStock(selectedStock);
  new ResizeObserver(drawMarketChart).observe(chart);
}

const eventSelect = document.getElementById('budget-event');
if (eventSelect) {
  const examples = {
    dinner: { planned: 2500, spent: 2160 },
    workshop: { planned: 800, spent: 925 },
    welcome: { planned: 1200, spent: 1045 }
  };
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const plannedValue = document.getElementById('planned-value');
  const spentValue = document.getElementById('spent-value');
  const balanceValue = document.getElementById('balance-value');
  const balanceLabel = document.getElementById('balance-label');
  const plannedMeter = document.getElementById('planned-meter');
  const spentMeter = document.getElementById('spent-meter');

  eventSelect.closest('.budget-select').hidden = false;
  eventSelect.addEventListener('change', () => {
    const { planned, spent } = examples[eventSelect.value];
    const balance = planned - spent;
    const scale = Math.max(planned, spent);
    plannedValue.textContent = currency.format(planned);
    spentValue.textContent = currency.format(spent);
    balanceLabel.textContent = balance < 0 ? 'Over budget' : 'Remaining';
    balanceValue.textContent = currency.format(Math.abs(balance));
    plannedMeter.style.width = `${100 * planned / scale}%`;
    spentMeter.style.width = `${100 * spent / scale}%`;
  });
}
