
import './CheckOut.css';

const CheckOut = () => {
    return (
        <div className="container">

            <div className="cart ">
                <div className="col-md-12 col-lg-10 mx-auto ">
                    <h2 className='text-center text-primary mt-5'>Add to cart </h2>
                    <div className="cart-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col-md-7 center-item">

                                <h5>Learn Html</h5>
                            </div>

                            <div className="col-md-5 center-item">
                                <div className="input-group number-spinner">
                                    <button className="btn btn-default"><i className="fas fa-minus"></i></button>
                                    <input type="number" min="0" className="form-control text-center"
                                        value="1" />
                                    <button className="btn btn-default"><i className="fas fa-plus"></i></button>
                                </div>
                                <h5>$ <span >1219</span></h5>

                            </div>
                        </div>
                    </div>

                    <div className="cart-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col-md-7 center-item mx-auto">

                                <h5>Learn CSS</h5>
                            </div>
                            <div className="col-md-5 center-item">
                                <div className="input-group number-spinner">
                                    <button className="btn btn-default"><i className="fas fa-minus"></i></button>
                                    <input type="number" min="0" className="form-control text-center" value="1" />
                                    <button className="btn btn-default"><i className="fas fa-plus"></i>
                                    </button>

                                </div>
                                <h5>$ <span >1259</span>
                                </h5>

                            </div>
                        </div>
                    </div>
                    <div className="cart-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col-md-7 center-item">

                                <h5>Learn Bootstrap</h5>
                            </div>

                            <div className="col-md-5 center-item">
                                <div className="input-group number-spinner">
                                    <button className="btn btn-default"><i className="fas fa-minus"></i></button>
                                    <input type="number" min="0" className="form-control text-center"
                                        value="1" />
                                    <button className="btn btn-default"><i className="fas fa-plus"></i></button>
                                </div>
                                <h5>$ <span >1219</span></h5>

                            </div>
                        </div>
                    </div>
                    <div className="cart-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col-md-7 center-item">

                                <h5>Learn Javascript</h5>
                            </div>

                            <div className="col-md-5 center-item">
                                <div className="input-group number-spinner">
                                    <button className="btn btn-default"><i className="fas fa-minus"></i></button>
                                    <input type="number" min="0" className="form-control text-center"
                                        value="1" />
                                    <button className="btn btn-default"><i className="fas fa-plus"></i></button>
                                </div>
                                <h5>$ <span >1219</span></h5>

                            </div>
                        </div>
                    </div>
                    <div className="cart-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col-md-7 center-item">

                                <h5>Learn React</h5>
                            </div>

                            <div className="col-md-5 center-item">
                                <div className="input-group number-spinner">
                                    <button className="btn btn-default"><i className="fas fa-minus"></i></button>
                                    <input type="number" min="0" className="form-control text-center"
                                        value="1" />
                                    <button className="btn btn-default"><i className="fas fa-plus"></i></button>
                                </div>
                                <h5>$ <span>1219</span></h5>

                            </div>
                        </div>
                    </div>
                    <div className="cart-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col-md-7 center-item">

                                <h5>Learn Node.js</h5>
                            </div>

                            <div className="col-md-5 center-item">
                                <div className="input-group number-spinner">
                                    <button className="btn btn-default"><i className="fas fa-minus"></i></button>
                                    <input type="number" min="0" className="form-control text-center"
                                        value="1" />
                                    <button className="btn btn-default"><i className="fas fa-plus"></i></button>
                                </div>
                                <h5>$ <span>1219</span></h5>

                            </div>
                        </div>
                    </div>

                    <div className="cart-item shadow-lg p-3 mb-5 bg-body rounded">
                        <div className="row">

                            <div className="col-md-8">
                                <h5>Subtotal: </h5>
                                <h5>Tax:</h5>
                                <h5>Total:</h5>
                            </div>

                            <div className="col-md-4 status">
                                <h5>$<span>1,278</span></h5>
                                <h5>$<span>0</span></h5>
                                <h5>$<span>1,278</span></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 pt-4 pb-4">
                        <button type="button" className="btn btn-danger check-out">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;