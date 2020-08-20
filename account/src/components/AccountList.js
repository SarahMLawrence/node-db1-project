import React, {useState, useEffect} from "react";
import { Axios } from "../utils/Axios";
import {useHistory} from "react-router-dom";

function AccountList(){
    const history = useHistory();
    const [account, setAccount] = useState([]);

    //GET LIST OF ACCOUNTS
    useEffect(() => {
        Axios()
        .get("/accounts")
        .then((res) => {
            console.log(res);
            setAccount(res.data);
        });
    }, []);

    return (
        <div className="main">
        {account ? (
          account.map((acc) => {
            return (
              <div className="row">
                <div className="column">
                  <div className="content" key={acc.id}>
                    <h3>{acc.name}</h3>
                    <h3 className="card-title">Budget: {acc.budget}</h3>
                    {/* <p className="card-text">{user.id}</p> */}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
<h1>Hello!</h1>
        )}
      </div>
    )
}

export default AccountList;