// // import React from "react"
// // function Main({children}){
// //     return(
// //         <main className="main">{children}</main>
// //     )
// // }
// // export default Main
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Mainpage({ dispatch }) {
//     // const [{ status }, dispatch] = useReducer(reducer, intitalState);

//     const [itemName, setItemName] = useState('');
//     const [itemQty, setItemQty] = useState(1);
//     const [itemPacked, setItemPacked] = useState(0);
//     const [itemRemaining, setItemRemaining] = useState(0);
//     const [sortType, setSortType] = useState(0);
//     const [itemCheckBoxArr, setItemCheckBoxArr] = useState([]);
//     const [listView, setListView] = useState(1);

//     let navigate = useNavigate()
//     let userPk = localStorage.getItem("userPk")
    
//     useEffect(function () {
//         let username = localStorage.getItem("username")
//         let userPk = localStorage.getItem("userPk")
//         console.log(username)
//         console.log(userPk)
//         if (username === null) {
//             navigate("/signin")
//             console.log("redirect to signin")
//         }
//         else {
//             console.log("username is not null")
//         }
//     }, [])

//     function onChangeQty(e) {
//         setItemQty(parseInt(e.target.value))
//     }

//     function onChangeItemName(e) {
//         setItemName(e.target.value)
//     }

//     function onAdd() {
//         if (itemName === '' || isNaN(itemQty) || itemQty === 0) {
//             return
//         }
//         let headers = new Headers();

//         headers.append('Content-Type', 'application/json');
//         headers.append('Accept', 'application/json');

//         // headers.append('Access-Control-Allow-Origin', '*');
//         // headers.append('Access-Control-Allow-Credentials', 'true');

//         // headers.append('GET', 'POST', 'OPTIONS');
//         let userPk = localStorage.getItem("userPk")
        
//         fetch(
//             "http://127.0.0.1:8000/mainwork/create/",
//             {
//                 headers: headers,
//                 method: 'POST',
//                 body: JSON.stringify({ itemName: itemName, itemQty: itemQty, isChecked: false ,userId:userPk })
//                 // crossorigin: true,   
//                 // mode: 'no-cors'
//             }
//         )
//             .then((res) => res.json())
//             .then((data) => {
//                 // console.log(data)
//                 setListView(1)
//             })
//             .catch((err) => console.log(err));

//         setItemName('')
//         setItemQty(1)

//     }

//     function sortMethod(e) {
//         if (e.target.value === "SORT BY QTY ASC ORDER") {
//             setSortType(1)
//         }
//         else if (e.target.value === "SORT BY QTY DEC ORDER") {
//             setSortType(2)
//         }
//         else if (e.target.value === "SORT BY NAME DEC ORDER") {
//             setSortType(3)
//         }
//         else if (e.target.value === "SORT BY NAME ASC ORDER") {
//             setSortType(4)
//         }
//         else if (e.target.value === "SORT BY ENTER DATA") {
//             setSortType(0)
//         }
//     }

//     function deleteAllCheckboxes() {
        
//         fetch(http://127.0.0.1:8000/mainwork/TruncateData/?userId=${userPk}, {
//             method: 'DELETE'
//         })
//             .then((data) => setListView(1))
//             .catch((err) => console.log("error: " + err))

//     }

//     function onCheckToggle(e) {
//         let id = e.target.id
//         let name = e.target.name
//         let qty = e.target.value
//         let checkedValue = e.target.checked

//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');
//         headers.append('Accept', 'application/json');

//         fetch(http://127.0.0.1:8000/mainwork/update/${id}/,
//             {
//                 method: "PUT",
//                 headers: headers,
//                 body: JSON.stringify({ itemName: name, itemQty: qty, isChecked: checkedValue })
//             }
//         )
//             .then((data) => data.json())
//             .then((data) => {
//                 // console.log(data)

//                 setListView(1)

//             })
//             .catch((err) => console.log("ERROR: " + err))

//     }


//     function onDelete(e) {
//         let id = e.target.id
//         fetch(http://127.0.0.1:8000/mainwork/delete/${id}, {
//             method: "DELETE"
//         }
//         )
//             .then((data) => {
//                 setListView(1)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
//     function logout(){
//         localStorage.removeItem("username")
//         localStorage.removeItem("userPk")
//         console.log('Signout')
//         navigate("/signin")
//     }

//     useEffect(function () {
//         let sortedArr;
//         let userPk = localStorage.getItem("userPk")
        
//         if (listView === 1 || (sortType === 0 || 1 || 2 || 3 || 4)) {
//             fetch(http://127.0.0.1:8000/mainwork/listView/?userId=${userPk})
//                 .then((res) => res.json())
//                 .then((data) => {
//                     sortedArr = data.slice()

//                     if (sortType === 1) {
//                         sortedArr.sort((a, b) => {
//                             return a.itemQty - b.itemQty;
//                         });
//                     } else if (sortType === 2) {

//                         sortedArr.sort((a, b) => {
//                             return b.itemQty - a.itemQty;
//                         });
//                     }
//                     else if (sortType === 3) {

//                         sortedArr.sort((a, b) => {
//                             let itemNameA = a.itemName.toLowerCase();
//                             let itemNameB = b.itemName.toLowerCase();
//                             if (itemNameA > itemNameB) {
//                                 return -1;
//                             }
//                             if (itemNameA < itemNameB) {
//                                 return 1;
//                             }
//                             return 0;
//                         });
//                     }
//                     else if (sortType === 4) {

//                         sortedArr.sort((a, b) => {
//                             let itemNameA = a.itemName.toLowerCase();
//                             let itemNameB = b.itemName.toLowerCase();

//                             if (itemNameA > itemNameB) {
//                                 return 1;
//                             }
//                             if (itemNameA < itemNameB) {
//                                 return -1;
//                             }
//                             return 0;
//                         });
//                     } else if (sortType === 0) {
//                         sortedArr = data.slice()
//                     }

//                     // checkbox create here

//                     setItemCheckBoxArr(
//                         sortedArr.map(content =>
//                             <div className='check'>
//                                 <input type="checkbox" id={content.id} name={content.itemName} value={content.itemQty} checked={content.isChecked} onClick={onCheckToggle} />
//                                 <label for={content.id}> {content.itemQty} {content.itemName} </label>
//                                 <button onClick={onDelete} id={content.id}>X</button>
//                             </div>
//                         ))

//                     const totalQty = data.reduce((sum, arr) =>
//                         sum += arr.itemQty, 0
//                     )
//                     const packedQty = data.reduce(
//                         function (sum, arr) {
//                             if (arr.isChecked === true) {
//                                 sum += arr.itemQty;
//                             }
//                             return sum;
//                         }, 0
//                     )
//                     setItemPacked(packedQty)
//                     setItemRemaining(totalQty - packedQty)
//                 })
//                 .catch((err) => console.log(err))
//         }

//         setListView(0)

//     }, [sortType, listView])

//     return (
//         <>
//             <h1 className='heading'>💼 FAR AWAY 🏖</h1>
//             <div className='subHeading'>
//                 <input type="button" value="Logout" onClick={logout} />

//                 <h2 className='title'>
//                     What do you need for your😍 trip?
//                 </h2>
//                 <div className='selectItem'>
//                     <input type="number" name="quantity" min="1" max="100" onChange={onChangeQty} className="quantity" value={itemQty} placeholder='Quantity' />
//                     <input type="text" name="itemName" onChange={onChangeItemName} className="itemName" value={itemName} placeholder='item...' />
//                     <button className='addBtn' onClick={onAdd}>ADD</button>

//                 </div>

//             </div>

//             <div className='checkBoxShow'>

//                 {itemCheckBoxArr}

//                 <div className='sortAndClearbtn'>

//                     <select className='sortSelection inputAndBtnDesign' onChange={sortMethod} id="filter">
//                         <option value="SORT BY ENTER DATA" selected>SORT BY ENTER DATA</option>
//                         <option value="SORT BY QTY ASC ORDER">SORT BY QTY ASC ORDER</option>
//                         <option value="SORT BY QTY DEC ORDER">SORT BY QTY DEC ORDER</option>
//                         <option value="SORT BY NAME ASC ORDER">SORT BY NAME ASC ORDER</option>
//                         <option value="SORT BY NAME DEC ORDER">SORT BY NAME DEC ORDER</option>

//                     </select>
//                     <button onClick={deleteAllCheckboxes} id="1" className='clearListBtn inputAndBtnDesign'>CLEAR LIST</button>

//                 </div>
//             </div>

//             <div className='packingStatus'>
//                 <h2> 🏠You have {itemRemaining} item on your list,and you already packed {itemPacked}
//                 </h2>
//             </div>
//         </>
//     )
// }

// export default Mainpage;