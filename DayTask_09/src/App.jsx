import React from "react";
import { UserInfo } from "./Components/UserInfo/UserInfo";
import { ProductDetails } from "./Components/ProductsDetails/ProductsDetails";
import ProductsData from "./assets/ProductsData/Products_01.json";
import Products from "./assets/ProductsData/Products_02.json";

const App = () => {
  return (
    <div>
      <UserInfo Name="Madhari TarunSai" Age="24" Location="Hyderabad" />
      <hr />
      <br />
      <br />
      <ProductDetails Details={ProductsData} data="Top 10 deal products" />
      <ProductDetails Details={Products} data_1="50% Offer Products"/>
    </div>
  );
};

export default App;
