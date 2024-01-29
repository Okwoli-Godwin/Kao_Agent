import React, {useState} from 'react'
import styled from 'styled-components'
import { IoSearch } from "react-icons/io5";
import { LuPrinter, LuFolderOpenDot  } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineCalendarToday } from "react-icons/md";
import DatePicker from "react-datepicker"

const Dashboardhead = () => {
  const [date, setDate] = useState<Date | null>(null)
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <Container>
      <Wrapper>
        <First>
          <Inputhold>
          <Icon><IoSearch /></Icon>
          <input type="text" placeholder='Search'/>
        </Inputhold>

        <Calendar>
          <Icon2><MdOutlineCalendarToday /></Icon2>
          <div>
            <input 
                type="text"
                placeholder='Select a date'
                readOnly
                onClick={() => setShowDatePicker(true)}
              />
          </div>
        </Calendar>
        </First>
        <Second>
          <Downloadholder>
          <Left>
            <LuPrinter />
          </Left>
          <Right>
            <LuFolderOpenDot />
          </Right>
        </Downloadholder>
        <Setings>
          <IoSettingsOutline />
        </Setings>
        <Notificationholder>
          <IoIosNotificationsOutline />
          <Dot></Dot>
        </Notificationholder>
        <Profileholder>
          <Circle></Circle>
          <h3>Dan Casey</h3>
        </Profileholder>
        </Second>
      </Wrapper>
    </Container>
  )
}

export default Dashboardhead
const Icon2 = styled.div`
  color: #0030AD;
`
const Second = styled.div`
  display: flex;
  align-items: center;
`
const First = styled.div`
  display: flex;
  align-items: center;
`
const Circle = styled.div`
  width: 37px;
  height: 37px;
  background-color: #FF7600;
  border-radius: 100px;
`
const Profileholder = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  h3{
    font-size: 16px;
    margin-left: 10px;
  }
`
const Dot = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50px;
  background-color: #0030AD;
  position: absolute;
  top: 5px;
  right: 8px;
`
const Notificationholder = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #C7C7C7;
  cursor: pointer;
  font-size: 25px;
  margin-top: 2px;
  margin-left: 15px;
  position: relative;
`
const Setings = styled.div`
  color: #0030AD;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`
const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: #0030AD;
  cursor: pointer;
  align-items: center;
  background-color: #fff;
`
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: #fff;
  cursor: pointer;
  align-items: center;
  background-color: #0030AD;
`
const Downloadholder = styled.div`
  width: 80px;
  height: 35px;
  border: 1px solid #DEE3E9;
  border-radius: 5px;
  margin-left: 10px;
  overflow: hidden;
  display: flex;
`
const Calendar = styled.div`
  width: 250px;
  height: 35px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #DEE3E9;
  display: flex;
  align-items: center;
  margin-left: 13px;
  padding-left: 5px;
  padding-right: 5px;
`
const Icon = styled.div`
  color: #0030AD;
  font-size: 17px;
`
const Inputhold = styled.div`
  width: 250px;
  height: 35px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #DEE3E9;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 14px;
  overflow: hidden;
  input{
    flex: 1;
    margin-left: 10px;
    outline: none;
    height: 100%;
  }
`
const Wrapper = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`