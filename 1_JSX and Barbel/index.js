const container = (
    <div className="container" id="container">
        <section>
            <p>I love React Js</p>
            <p>I love React Js very much</p>
            <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D"
                style={{ width: '200px', backgroundColor: 'transparent', opacity: 0.5, borderRadius: '10px' }}/>
                {/* here two brckets are used because one for using javascript on react and for style properties takes object or is a object ....so, we use it. */}
        </section>
        <section>
            <form>
                <div className="input-div">
                    <label htmlFor="username">username</label>
                    <input id="username" placeholder="we love Radha" />
                </div>
                <div className="input-div">
                    <label htmlFor="pwd">password</label>
                    <input id="pwd" placeholder="we love Krishna" type="password" />
                </div>
            </form>
        </section>
        <p>I love you RadhaKrishna</p>
    </div>
);
console.log(container)
const user="Prajwol"

const h2=<h2>Hello {user}</h2>//instead of user if we do console.log it will be undefined and react doesnot show that ..nether null and other may be ...reason later will be known.

const root = document.querySelector('#root');
const Prajwol = ReactDOM.createRoot(root);

Prajwol.render(container);





// const root = document.querySelector('#root')
// const Prajwol = ReactDOM.createRoot(root)// it may be for knowing or telling ReactDOM the root name present in the Html.

// Prajwol.render(container);// in my opinion it is for appending element... in this case container.. and setting the innertext ,text content and other may be.
