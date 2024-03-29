import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
