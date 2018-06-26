import React, {Component} from 'react'
import './index.css'
import { Button, Icon, Cascader, Checkbox, DatePicker, Table }from 'antd'
const ButtonGroup = Button.Group;
const CheckboxGroup = Checkbox.Group;

const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    disabled: true,
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
      }],
    }],
  }];

  const plainOptions = ['Apple', 'Pear', 'Orange'];
const optionCheck = [
  { label: '苹果', value: 'Apple' },
  { label: '梨', value: 'Pear' },
  { label: '橘', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: '苹果', value: 'Apple' },
  { label: '梨', value: 'Pear' },
  { label: '橘', value: 'Orange', disabled: false },
];
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <span>
        <a href="#">操作一{record.name}</a>
        <span className="ant-divider"></span>
        <a href="#">操作二</a>
        <span className="ant-divider"></span>
        <a href="#" className="ant-dropdown-link">
          更多 <Icon type="down" />
        </a>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  }, {
    key: '3',
    name: '李大嘴',
    age: 32,
    address: '西湖区湖底公园1号',
  }];

class Student extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="test-container">
                <p style={{fontSize: '24px', fontWeight: 'bold'}}>Button</p>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="ghost">Ghost</Button>
                    <Button type="dashed">Dashed</Button>
                </div>
                <div>
                    <Button type="primary" shape="circle" icon="search" />
                    <Button type="primary" icon="search">搜索</Button>
                    <br />
                    <Button type="ghost" shape="circle-outline" icon="search" />
                    <Button type="ghost" icon="search">Search</Button>
                </div>
                <div>
                    <Button type="primary" size="large">Large</Button>
                    <Button type="primary">Default</Button>
                    <Button type="primary" size="small">Small</Button>
                </div>
                <div>
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>Primary(disabled)</Button>
                    <br />
                    <Button>Default</Button>
                    <Button disabled>Default(disabled)</Button>
                    <br />
                    <Button type="ghost">Ghost</Button>
                    <Button type="ghost" disabled>Ghost(disabled)</Button>
                    <br />
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>Dashed(disabled)</Button>
                    <Button type="primary" loading>Loading</Button>
                </div>
                <div>
                    <h4>Basic</h4>
                    <ButtonGroup>
                    <Button>Cancel</Button>
                    <Button type="primary">OK</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                    <Button disabled>L</Button>
                    <Button disabled>M</Button>
                    <Button disabled>R</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                    <Button type="primary">L</Button>
                    <Button>M</Button>
                    <Button type="ghost">M</Button>
                    <Button type="dashed">R</Button>
                    </ButtonGroup>

                    <h4>With Icon</h4>
                    <ButtonGroup>
                    <Button type="primary">
                        <Icon type="left" />Go back
                    </Button>
                    <Button type="primary">
                        Go forward<Icon type="right" />
                    </Button>
                    </ButtonGroup>
                    <ButtonGroup>
                    <Button type="primary" icon="cloud" />
                    <Button type="primary" icon="cloud-download" />
                    </ButtonGroup>

                    <h4>Size</h4>
                    <ButtonGroup size="large">
                    <Button type="ghost">Large</Button>
                    <Button type="ghost">Large</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                    <Button type="ghost">Default</Button>
                    <Button type="ghost">Default</Button>
                    </ButtonGroup>
                    <ButtonGroup size="small">
                    <Button type="ghost">Small</Button>
                    <Button type="ghost">Small</Button>
                    </ButtonGroup>
                </div>
                <p>级联</p>
                <div>
                    <Cascader options={options} placeholder="请选择地区" />
                    <Cascader options={options} >
                        <a href="#">切换城市</a>
                    </Cascader>
                </div>
                <p>多选框</p>
                <div>
                    <Checkbox>Checkbox</Checkbox>
                    <br />
                    <CheckboxGroup options={plainOptions} defaultValue={['Apple']}  />
                    <br />
                    <CheckboxGroup options={optionCheck} defaultValue={['Pear']}  />
                    <br />
                    <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} />
                </div>
                <p>时间选择框</p>
                <div>
                    <DatePicker showTime/>
                    <DatePicker defaultValue="2015-01-01" format="yyyy-MM-dd" />
                </div>
                <p>表格</p>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default Student