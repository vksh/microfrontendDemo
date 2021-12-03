import React from "react";
import { BarGraph } from "./BarGraph";
import { LineChart } from "./LineChart";
import { PieChart } from "./pieChart";
import Widgets from "./Widgets";
import {  CRow, CCol } from '@coreui/react';


const AnalyticsDashboard = () => {
  return (
    <div>
      <Widgets />
      <CRow>
        <CCol sm={6}>
          <LineChart />
        </CCol>
        <CCol sm={6}>
          <BarGraph />
        </CCol>
        {/* <CCol sm={6}>
          <PieChart />
        </CCol> */}
        <CCol sm={6}>
          <BarGraph />
        </CCol>
      </CRow>
    </div>
  );
};

export default AnalyticsDashboard;
