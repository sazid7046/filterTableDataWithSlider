import React from "react";
import Table from "antd/lib/table";
import Slider from "antd/lib/slider";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import numeral from "numeral";

const ResultsTable = ({
  resultGroups = [],
  data = [],
  min = 0,
  max = 100,
  defaultValue = [20, 80],
  shouldShowSlider = false,
  sorter,
  onFilterChange = () => alert("onFilterChange is undefined"),
  onFetchCityData = () => alert("onFetchCityData is undefined"),
  onTableChange = () => alert("onTableChange is undefined")
}) => {
  console.log("data: ", data);
  const sliderProps = {
    range: true,
    defaultValue,
    min,
    max,
    onChange: values => onFilterChange(values),
    tipFormatter: value => {
      const currentGroup = resultGroups[value] || [];
      const currentResult = currentGroup[0] || {};
      const population = currentResult.population;
      const formattedPopulation = numeral(population).format("0.0a");
      return formattedPopulation;
    }
  };
  const resultCount = resultGroups.length;
  const minResult = resultCount ? resultGroups[0][0] : 0;
  const maxResult = resultCount ? resultGroups[resultCount - 1][0] : 0;
  const minPopulation = minResult.population;
  const maxPopulation = maxResult.population;
  const formattedMin = numeral(minPopulation).format("0.0a");
  const formattedMax = numeral(maxPopulation).format("0.0a");
  const slider = shouldShowSlider && (
    <div
      className="custom-filter-dropdown ant-table-filter-dropdown"
      style={{ minWidth: "20rem", padding: "0.5rem 1rem" }}
    >
      <Row>
        <Col span={4}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <strong>Min:</strong>
            </div>
            <div>{formattedMin}</div>
          </div>
        </Col>
        <Col span={16}>
          <Slider {...sliderProps} />
        </Col>
        <Col span={4}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <strong>Max:</strong>
            </div>
            <div>{formattedMax}</div>
          </div>
        </Col>
      </Row>
    </div>
  );

  const columns = [
    { title: "City", dataIndex: "name", width: 150 },
    {
      title: "Population",
      dataIndex: "population",
      key: "population",
      width: 150,
      sorter: (a, b) => a.population - b.population,
      sortOrder: sorter.order,
      filterDropdown: slider
    }
  ];

  const tableProps = {
    bordered: true,
    loading: false,
    pagination: { position: "bottom" },
    size: "default",
    title: undefined,
    showHeader: true,
    rowSelection: {},
    scroll: { y: 240 },
    columns,
    dataSource: data,
    onChange: (pagination, filters, sorter) => {
      const { order, columnKey } = sorter;
      onTableChange({ order, columnKey });
    }
  };

  return (
    <div style={{ height: "50vh", border: "1px solid black" }}>
      <button type="button" onClick={onFetchCityData}>
        FETCH
      </button>
      <Table {...tableProps} />
    </div>
  );
};

export default ResultsTable;
