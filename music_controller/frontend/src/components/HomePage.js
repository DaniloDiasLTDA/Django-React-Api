import React, { Component } from 'react';
import RoomJoinPage from "./RoomJoinPage";
import CreatRoomPage from "./CreatRoomPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<p>This is the HOME PAGE</p>} />
          <Route path='/join' element={<RoomJoinPage />} />
          <Route path='/create' element={<CreatRoomPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
