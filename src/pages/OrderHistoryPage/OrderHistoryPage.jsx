import { Link } from 'react-router-dom';
import './OrderHistoryPage.css';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';
import * as ordersAPI from '../../utilities/orders-api';
import { useState, useEffect } from 'react';

export default function OrderHistoryPage({ user, setUser }) {

  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(orders[0]);

  useEffect(function() {
    async function getPastOrders() {
      const orders = await ordersAPI.getOrders();
      setOrders(orders);
      setActiveOrder(orders[0]);
    }
    getPastOrders();
  }, []);

  function handleActiveOrder(id) {
    setActiveOrder(orders.find(o => o._id === id));
  }

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      < OrderList orders={orders} activeOrder={activeOrder} handleActiveOrder={handleActiveOrder}/>
      < OrderDetail order={activeOrder}/>
    </main>
  );
}