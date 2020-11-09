import React from 'react'
import {Row , Table , Col ,Skeleton , Input ,Button , Space} from 'antd'
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import MyContext from '../Context/MyContext'

class Country extends React.Component{
    constructor(){
        super()
        this.state = {
            Columns : [
                {
                    title : 'Ngay' ,
                    dataIndex : "Date" ,
                    key : "Date",
                    ...this.getColumnSearchProps('Date'),
                },
                {
                    title : 'Quoc gia' ,
                    dataIndex : "Country" ,
                    key : "Country",
                    ...this.getColumnSearchProps('Country'),
                },
                {
                    title : "moi nhiem" ,
                    dataIndex :"NewConfirmed" ,
                    key : "NewConfirmed",
                    ...this.getColumnSearchProps('name'),
                },
                {
                    title : "tong so ca nhiem" ,
                    dataIndex : "TotalConfirmed" ,
                    key :"TotalConfirmed",
                    ...this.getColumnSearchProps('TotalConfirmed'),
                },
                {
                    title : "moi tu vong" ,
                    dataIndex :"NewDeaths" ,
                    key : "NewDeaths",
                    ...this.getColumnSearchProps('NewDeaths'),
                },
                {
                    title : "tong so tu vong" ,
                    dataIndex :"TotalDeaths" ,
                    key : "TotalDeaths",
                    ...this.getColumnSearchProps('TotalDeaths'),
                },
                {
                    title : "moi khoi benh " ,
                    dataIndex :"NewRecovered" ,
                    key : "NewRecovered",
                    ...this.getColumnSearchProps('NewRecovered'),
                },
                {
                    title : "tong ca khoi benh " ,
                    dataIndex :"TotalRecovered" ,
                    key : "TotalRecovered",
                    ...this.getColumnSearchProps('TotalRecovered'),
                },
            ],
            searchText: '',
            searchedColumn: '',

        }
    }
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex]
            ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
            : '',
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select(), 100);
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text ? text.toString() : ''}
            />
          ) : (
            text
          ),
    });
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
    };
    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    render() {

        return (
            <MyContext.Consumer>
                {context => {
                    if(context.isLoading || context.virust.Countries === undefined){
                        return <Skeleton active />
                    }
                    return(
                        <Row >
                            <Col>
                                <Table dataSource={context.virust.Countries} columns={this.state.Columns}  pagination={{ pageSize: 50 }} scroll={{ y: 540 }} rowKey="CountryCode"/>
                            </Col>
                        </Row>
                    )
                }}
            </MyContext.Consumer>




        )
    }
}
export default Country