import axios from "axios";
import React, { Component } from "react";
import {AiOutlineEyeInvisible,AiOutlineEye} from "react-icons/ai"

export default class Login extends Component {
  state = { isOpen: false };

  handleOpenModal = () => {
    this.setState({ isOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
    };
    const data = {
      username: this.username,
      password: this.password,
    };

    axios
      .post("https://api.wedding.chicodefive.com/v1/Admin/login", data,headers)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        //localStorage.setItem("id",res.data.id);
        if (res.status === 200) {
          window.location = "/AdminDashboard";
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState(alert('Username atau Password salah.'))
      });
  };
  render() {
    return (
      <div className="items-center bg-gradient-to-l from-blue-500 to-black font-monserat">
        <div className="flex h-screen">
        <div className="w-1/3 m-auto">
          <form
            onSubmit={this.handleSubmit}
            className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
          >
            <h1 className="text-center m-8 font-medium text-2xl">Login</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-xl font-normal mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={(e) => (this.username = e.target.value)}
              />
            </div>
            <div className=" mb-6">
              <label
                className="block text-gray-700 text-xl font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex relative" >
              <input
                className="flex shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={this.state.isOpen===false?("password"):("text")}
                placeholder="Password"
                onChange={(e) => (this.password = e.target.value)}
              />
             {this.state.isOpen===false?( <button onClick={this.handleOpenModal}>
                <AiOutlineEyeInvisible className="absolute inset-y-1 right-3 text-2xl text-mata" />
              </button>):( <button onClick={this.handleCloseModal}>
                <AiOutlineEye className="absolute inset-y-1 right-3 text-2xl text-mata" />
              </button>)}
              </div>
              
              {/* <p className="hidden text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-lg focus:outline-none focus:shadow-outline">
              Masuk
            </button>
          </form>
          {/* <p className="text-center text-gray-500 text-xs">
                        &copy;2020 Acme Corp. All rights reserved.
                    </p> */}
        </div>
      </div>
      </div>
    );
  }
}
