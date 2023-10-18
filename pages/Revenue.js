import { useEffect, useState } from 'react';
import { getOrders } from '../Api/OrderCalls';
import { getAllItems } from '../Api/ItemCalls';

export default function Revenue() {
  const [totRevenue, setTotRevenue] = useState('');
  const [callIn, setCallIn] = useState('');
  const [online, setOnline] = useState('');
  const [tips, setTips] = useState('');
  const [cashPay, setCashPay] = useState('');
  const [creditPay, setCreditPay] = useState('');
  const [mobilePay, setMobilePay] = useState('');

  const totalRevenue = () => {
    getAllItems().then((items) => {
      const totalPrices = items.filter((item) => item.price);
      const ordersTotal = totalPrices.reduce((a, b) => a + b.price, 0);
      getOrders().then((orders) => {
        const allTips = orders.filter((order) => order.tip_amount);
        const tipsTotal = allTips.reduce((a, b) => a + b.tip_amount, 0);
        const totalRev = ordersTotal + tipsTotal;
        const finalTotal = totalRev.toFixed(2);
        setTotRevenue(finalTotal);
      });
    });
  };

  const totalTips = () => {
    getOrders().then((orders) => {
      const tipsClosed = orders.filter((order) => order.tip);
      const tipsTotalAmount = tipsClosed.reduce((a, b) => a + b.tip, 0);
      const finalTip = tipsTotalAmount.toFixed(2);
      setTips(finalTip);
    });
  };
  const totalCallinOrders = () => {
    getOrders().then((orders) => {
      const callinOrders = orders.filter((order) => order.orderType === 'Phone');
      setCallIn(callinOrders.length);
    });
  };

  const totalOnlineOrders = () => {
    getOrders().then((orders) => {
      const onlineOrders = orders.filter((order) => order.orderType === 'Online');
      setOnline(onlineOrders.length);
    });
  };

  const totalCashOrders = () => {
    getOrders().then((orders) => {
      const cashOrders = orders.filter((order) => order.paymentId === 2);
      setCashPay(cashOrders.length);
    });
  };

  const totalCreditOrders = () => {
    getOrders().then((orders) => {
      const creditOrders = orders.filter((order) => order.paymentId === 1);
      setCreditPay(creditOrders.length);
    });
  };

  const totalMobileOrders = () => {
    getOrders().then((orders) => {
      const mobileOrders = orders.filter((order) => order.paymentId === 3);
      setMobilePay(mobileOrders.length);
    });
  };
  useEffect(() => {
    totalRevenue();
    totalTips();
    totalCallinOrders();
    totalOnlineOrders();
    totalMobileOrders();
    totalCreditOrders();
    totalCashOrders();
  }, []);
  return (
    <div className="revenuePage">
      <div className="revenueHeader">
        <br />
        <h1 id="welcome-title">REVENUE</h1>
      </div>
      <br />
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 my-3" />
      <div className="card-list">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card blue">
              <div className="title">Total Revenue</div>
              <i className="zmdi zmdi-upload" />
              <h5 className="value" id="totalRev">${totRevenue}</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card green">
              <div className="title">Total Tips</div>
              <i className="zmdi zmdi-upload" />
              <h5 className="value" id="totalTips">${tips}</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card orange">
              <div className="title">Call In Orders</div>
              <i className="zmdi zmdi-download" />
              <h5 className="value" id="phoneOrders">{callIn}</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card red">
              <div className="title">Online Orders</div>
              <i className="zmdi zmdi-download" />
              <h5 className="value" id="phoneOrders">{online}</h5>
            </div>
          </div>
          <br />
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card black">
              <div className="title">Cash Payment</div>
              <i className="zmdi zmdi-download" />
              <h5 className="value" id="phoneOrders">{cashPay} Orders</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card black">
              <div className="title">Credit Payment</div>
              <i className="zmdi zmdi-download" />
              <h5 className="value" id="phoneOrders">{creditPay} Orders</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card black">
              <div className="title">Mobile Payment</div>
              <i className="zmdi zmdi-download" />
              <h5 className="value" id="phoneOrders">{mobilePay} Orders</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
