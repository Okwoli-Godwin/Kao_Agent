import React from 'react'
import styled from 'styled-components'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BarChart, Bar, XAxis } from 'recharts';

const Tableholds = () => {
  const tableItems = [
        {
            name: "Mera mera",
            items: "7,540",
            amount: "N1,898,000",
        },
        {
            name: "Philip Morris International",
            items: "6011",
            amount: "N1,898,000",
        },
        {
            name: "Donna Karan",
            items: "6001",
            amount: "N1,898,000",
        },
        {
            name: "Marco Pollo",
            items: "4500",
            amount: "N1,898,000",
        },
        {
            name: "Dolce  Gabbana",
            items: "3000",
            amount: "N1,898,000",
        },
      ]
  const data = [
    { name: 'Mon', x: 45, y: 12, z: 0 },

        { name: 'Tue', x: 85, y: 15, z: 0 },

        { name: 'Wed', x: 65, y: 30, z: 10 },

        { name: 'Thu', x: 55, y: 40, z: 10 },

        { name: 'Fri', x: 70, y: 45, z: 10 },

        { name: 'Sat', x: 62, y: 25, z: 10 },

        { name: 'Sun', x: 37, y: 17, z: 10 },
  ]
  return (
    <Container>
        <First>
          <Paymentholder>
            <h3>Payment Method</h3>
            <Icon><BsThreeDotsVertical /></Icon>
          </Paymentholder>
          <Chartholder>
            <Hold>
              <BarChart width={260} height={190} data={data}>
                {/* <CartesianGrid /> */}
                <XAxis dataKey="name" tick={{ fontSize: 12 }}/>
   
                <Bar dataKey="z" stackId="a" fill='#EED600' barSize={10}/>
                <Bar dataKey="y" stackId="a" fill='#88A9FF' barSize={10}/>
                <Bar dataKey="x" stackId="a" fill='#0030AD' barSize={10}/>
              </BarChart>
            </Hold>
            
            <Table>
              <Dotholder mt="">
                <Holder>
                  <Dot bg="#0030AD"></Dot>
                  <p>Transfer</p>
                </Holder>
                <h3>65.17%</h3>
              </Dotholder>
              
              <Line></Line>
              
              <Dotholder mt="7px">
                <Holder>
                  <Dot bg="#0030AD"></Dot>
                  <p>Crypto</p>
                </Holder>
                <h3>19.85%</h3>
              </Dotholder>
              
              <Line></Line>
              
              <Dotholder mt="7px">
                <Holder>
                  <Dot bg="#0030AD"></Dot>
                  <p>Debit Card</p>
                </Holder>
                <h3>26.21%</h3>
              </Dotholder>
              
              <Line></Line>
              
              <Dotholder mt="7px">
                <Holder>
                  <Dot bg="#88A9FF"></Dot>
                  <p>Credit Card</p>
                </Holder>
                <h3>10.97%</h3>
              </Dotholder>
              
              <Line></Line>
              
              <Dotholder mt="7px">
                <Holder>
                  <Dot bg="#EED600"></Dot>
                  <p>5-Crypto</p>
                </Holder>
                <h3>9.85%</h3>
              </Dotholder>
            </Table>
            
          </Chartholder>
        </First>
        
        <Second>
          <Paymentholder>
            <h3>My Stores</h3>
            <Icon><BsThreeDotsVertical /></Icon>
          </Paymentholder>
          
          <div className="relative h-max overflow-auto mt-[10px]">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6 text-[14px] text-[#000]">Name</th>
                            <th className="py-3 pr-6 text-[14px] text-[#000]">Items</th>
                            <th className="py-3 pr-6 text-[14px] text-[#000]">Amount</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="pr-6 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.name}</td>
                                    <td className="pr-6 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.items}</td>
                                    <td className="pr-6 py-2 whitespace-nowrap text-[#797979] text-[13px]">{item.amount}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Second>
    </Container>
  )
}

export default Tableholds
const Second = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  padding: 13px 13px;
  background-color: #fff;
  border-radius: 5px;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #D5DBDF;
  margin-top: 5px;
`
const Holder = styled.div`
  display: flex;
  align-items: center;
  p{
    color: #797979;
    font-size: 14px;
    margin-left: 10px;
  }
`
const Dot = styled.div<{bg: string}>`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${({bg}) => bg};
`
const Dotholder = styled.div<{mt: string}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({mt}) => mt};
  h3{
    font-size: 12px;
    color: #000;
    font-weight: 500;
  }
`
const Table = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-top: 10px;
`
const Hold = styled.div`
  
`
const Chartholder = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`
const Icon = styled.div`
  cursor: pointer;
`
const Paymentholder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    font-size: 17px;
    color: #000;
  }
`
const First = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  padding: 13px 13px;
  background-color: #fff;
  border-radius: 5px;
`
const Container = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
`