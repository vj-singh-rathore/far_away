function Header() {
    return (
      <header className='app-header'>
        {/* <img src='logo512.png' alt='React logo' /> */}
        {/* <h1>The React Quiz </h1> */}
        <h1 className='heading'>💼 FAR AWAY 🏖</h1>
            <div className='subHeading'>
                <h2 className='title'>
                    What do you need for your😍 trip?
                </h2>
                <div className='selectItem'>
                    <input type="number" name="quantity" min="1" max="100" onChange={onChangeQty} className="quantity" value={itemQty} placeholder='Quantity' />
                    <input type="text" name="itemName" onChange={onChangeItemName} className="itemName" value={itemName} placeholder='item...' />
                    <button className='addBtn' onClick={onAdd}>ADD</button>

                </div>
            </div>

      </header>
    );
  }
  
  export default Header;
  