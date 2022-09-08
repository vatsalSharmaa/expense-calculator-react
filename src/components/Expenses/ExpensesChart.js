import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    const chartDatapoints = [
{label : 'Jan', value:0},
{label : 'feb', value:0},
{label : 'mar', value:0},
{label : 'apr', value:0},
{label : 'may', value:0},
{label : 'Jun', value:0},
{label : 'Jul', value:0},
{label : 'aug', value:0},
{label : 'sep', value:0},
{label : 'oct', value:0},
{label : 'nov', value:0},
{label : 'dec', value:0},
    ];

    for(const expense of props.expenses){    // for of loop since props expenses is array not object
        const expenseMonth = expense.date.getMonth(); //starting at 0 => so jan=> 0 
        chartDatapoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints = {chartDatapoints}/> ;

}

export default ExpensesChart;