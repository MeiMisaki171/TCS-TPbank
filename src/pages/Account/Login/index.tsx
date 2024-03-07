import React from 'react'
import loginImg  from '~/assets/image/login-img.png'

const Login = () => {
  return (
    <div className="row">
		<div className="col-12 col-lg-7 mx-auto">
			<div className="card">
				<div className="row g-0">
                    <div className="col-lg-6 border-end">
                          <img src={loginImg} className="card-img login-img " alt="..." style={{ padding: '5%', marginTop: '20%'}} />
					</div>
					<div className="col-lg-6">
						<div className="card-body">
                            <div className="mb-4 text-center">
                                <img src="assets/images/logo-img1.png" width="120" alt="" />
                            </div>
							<div className=" p-4 rounded">
								<div className="text-center">
									<h3 className="">Đăng nhập</h3>
								</div>
								<div className="form-body">
									<form className="row g-3" action="home">
									    <div className="col-12">
											<label className="form-label">Email Address</label>
											<input type="email" className="form-control" id="inputEmailAddress" placeholder="Email Address" />
										</div>
										<div className="col-12">
											<label className="form-label">Mật khẩu</label>
											<div className="input-group" id="show_hide_password">
                                                <input type="password" className="form-control border-end-0" id="inputChoosePassword" value="12345678" placeholder="Mật khẩu" />
                                                <a href="/" className="input-group-text bg-transparent"><i className="bx bx-hide"></i></a>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-check form-switch">
												<input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
												<label className="form-check-label">Lưu mật khẩu</label>
											</div>
										</div>
                                        <div className="col-md-6 text-end">
                                            <a href="authentication-forgot-password.html">Quên mật khẩu ?</a>
										</div>
										<div className="col-12">
											<div className="d-grid">
												<button type="submit" className="btn btn-secondary"><i className="bx bxs-lock-open"></i>Đăng nhập</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		</div>
	</div>
  )
}

export default Login