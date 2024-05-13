import React, { useEffect, useState } from 'react';
import '../../styles/my/MyOrderDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const MyOrderDetailPage = ({ orderId }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchOrderDetails() {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/purchase/detail/${orderId}`);
        const data = await response.json();
        setOrderDetails(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch order details');
        setOrderDetails(null);
      } finally {
        setLoading(false);
      }
    }
    fetchOrderDetails();
  }, [orderId]);
  return (
    <div className="app">
      <div className="order-detail-page">
        <div className="button-container">
          <button onClick={() => window.history.back()} className="close-button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        {loading ? <p>Loading order details...</p> : error ? <p>{error}</p> : (
          <div className="order-info">
            {/* Display order details here */}
          </div>
        )}
      </div>
    </div>
  );
};
export default MyOrderDetailPage;