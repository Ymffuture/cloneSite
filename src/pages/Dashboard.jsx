import React from "react";
import ProductList from "../components/products/ProductList";
import Sidebag from "../components/sidebag/Sidebag";
import Sidebar from "../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="container m">
        <Sidebar />
        <div className="row ms-3">
          <div className="col-9">
            <ProductList />
          </div>
          <div className="col-3 me-0">
            <Sidebag caption="  View Bag" link="/check-bag" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
