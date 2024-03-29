import React from 'react'
import styled from 'styled-components'
import { IoWalletOutline } from "react-icons/io5";
import { IoIosArrowDown, IoMdArrowUp } from "react-icons/io";
import { MdOutlineArrowDownward } from "react-icons/md";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import Transactiontable from './Transactiontable';
import Withdrawalcard from './Withdrawalcard';

const Wallet = () => {
  const data = [
  {
    name: "Mon",
    cl: 3000,
    c2: 2400,
    c3: 1400,
  },
  {
    name: "Tue",
    cl: 2000,
    c2: 1000,
    c3: 2210,
  },
  {
    name: "Wed",
    cl: 1400,
    c2: 10100,
    c3: 1290,
  },
  {
    name: "Thu",
    cl: 3120,
    c2: 4400,
    c3: 1000,
  },
  {
    name: "Fri",
    cl: 2200,
    c2: 1840,
    c3: 2210,
  },
  {
    name: "Sat",
    cl: 4480,
    c2: 2220,
    c3: 1110,
  },
  {
    name: "Sun",
    cl: 2220,
    c2: 1230,
    c3: 2569,
  },
]
  return (
    <Container>
      <Wrapper>
        <Right>
          <Top>
            <Balancehold>
              <Balance>
                <Icon1 cl="#0030AD" fs="20px" ml=""><IoWalletOutline /></Icon1>
                <h3>Balance</h3>
              </Balance>
              <Kao>
                <h3>KAO</h3>
                <p>NGN</p>
              </Kao>
            </Balancehold>
            <Amount><h2>KAO 54,000.00</h2></Amount>
            <Profithold mt="23px">
              <p>Profit today <Icon1 cl="#0030AD" fs="" ml="5px"><IoIosArrowDown /></Icon1></p>
              <Balancehold>
                <h2>KAO 5,000</h2>
                <h4><Icon1 cl="#008348" fs="" ml=""><IoMdArrowUp /></Icon1>1.27%</h4>
              </Balancehold>
            </Profithold>
          </Top>

          <Exchange>
            <Profithold mt="">
              <p>Exchange rate</p>
              <Balancehold>
                <h2>KAO 1.01 = NGN 5.00</h2>
                <h4><Icon1 cl="#008348" fs="" ml=""><IoMdArrowUp /></Icon1>3.27%</h4>
              </Balancehold>
            </Profithold>
          </Exchange>

          <Charthold>
            <h3>Income</h3>
            <Since>
              <Icon1 cl="#FF0000" fs="" ml=""><MdOutlineArrowDownward /></Icon1>
              <h5>16.21%</h5>
              <p>SInce last week</p>
            </Since>

            <Holder>
            <LineChart
            style={{marginLeft: "-20px"}}
            width={400} height={220}
            data={data}
            margin={{
              top: 5,
              right: 50,
              bottom: 5
            }}>
            <CartesianGrid strokeDasharray='3 ' />
            <XAxis dataKey='name' tick={{ fontSize: 12 }}/>
            <YAxis tick={{ fontSize: 12 }}/>
            <Tooltip />
            <Legend />
                <Line type="monotone" dataKey="c3" stroke="#0030AD" />
          </LineChart>
          </Holder>
          </Charthold>
        </Right>
        <Left>
          <Transactionhold>
            <Balancehold>
              <Balance>
                <h3>Transactions</h3>
              </Balance>
              <Kao>
                <h3 style={{color: "#797979"}}>This Year</h3>
                <Icon1 cl="#0030AD" fs="" ml="5px"><IoIosArrowDown /></Icon1>
              </Kao>
            </Balancehold>

            <Transactiontable />
          </Transactionhold>

          <Withdrawalcard />
        </Left>
      </Wrapper>
    </Container>
  )
}

export default Wallet
const Transactionhold = styled.div`
  width: 100%;
  padding: 10px 10px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Holder = styled.div`
  width: 100%;
  margin-top: 10px;
`
const Since = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  p{
    color: #797979;
    font-size: 12px;
    margin-left: 7px;
  }
  h5{
    color: #FF0000;
    font-size: 13px;
    margin-left: 7px;
  }
`
const Charthold = styled.div`
  width: 100%;
  padding: 10px 10px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 20px;
  h3{
    color: #797979;
    font-size: 15px;
  }
`
const Exchange = styled.div`
  width: 100%;
  padding: 10px 10px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 20px;
`
const Profithold = styled.div<{mt: string}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: ${({mt}) => mt};
  p{
    color: #797979;
    font-size: 10px;
    display: flex;
    align-items: center;
  }
`
const Amount = styled.div`
  margin-top: 22px;
  h2{
    font-size: 20px;
    color: #000;
    font-weight: 500;
  }
`
const Kao = styled.div`
  display: flex;
  align-items: center;
  h3{
    color: #0030AD;
    font-size: 15px;
  }
  p{
    color: #C7C7C7;
    font-size: 13px;
    font-weight: 600;
    margin-left: 5px;
  }
`
const Icon1 = styled.div<{ cl: string; fs: string;  ml: string}>`
  color: ${({cl}) => cl};
  font-size: ${({fs}) => fs};
  margin-left: ${({ml}) => ml};
`
const Balance = styled.div`
  display: flex;
  align-items: center;
  h3{
    color: #797979;
    font-size: 15px;
    margin-left: 7px;
  }
`
const Balancehold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4{
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #008348;
  }
  h2{
    color: #008348;
    font-size: 13px;
  }
`
const Top = styled.div`
  width: 100%;
  padding: 10px 10px;
  flex-direction: column;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Left = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  background-color: #fff;
  justify-content: space-between;
  padding: 13px 13px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
`