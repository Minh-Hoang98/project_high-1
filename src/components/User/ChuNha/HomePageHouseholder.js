import React, { Component } from 'react'
import './HomePageHouseholder.css'
import baiDang from './baiDaDang.json'
import Person from './person.json'
import postMoiNguoi from './baiDangMoiNguoi.json'


export default class HomePageHouseholder extends Component {
  renderbaiDang = () =>{
    return baiDang.map((bPost,index) => {
      return (
        <div className='col-6 bg' key={index}>
            <h6>{bPost.tieuDe}</h6>
            <p>{bPost.noiDung.substr(0,190)}...</p>
            <row >
                <small style={{}}><i className='text-secondary'> Đăng lúc:{bPost.ngayDang}</i></small>
                <a href='' ><i class="fa fa-comment-alt btComment pl-3"> 5</i></a>
                <a href=''><i class="fa fa-times-circle px-3 btDelete"> Xóa</i></a>
                <a href=''><i class="fa fa-edit Btedit btEdit"> Chỉnh Sửa</i></a>
            </row>
        </div>  
      )
    }) 
  } 
  renderPerson = () =>{
    return Person.map((bPerson,index) => {
      return (
        <div className='col-3 px-2' key={index}>
        <article className="card person">
           <img src={bPerson.imageP} ></img>
           <h4 className='text-center'>{bPerson.nameP}</h4> 
           <div className='row StarUngVienBoss pb-1' style={{color:'#ffc800'}}>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star" ></i>
          </div>
           <a href='' className='btn rounded'>Xem Profile</a>
        </article>
      </div>
      )
    }) 
  } 
  renderPostMoiNguoi = () =>{
    return postMoiNguoi.map((pMn,index) => {
      return (
        <div className="media border p-1 mt-1 mb-1" key={index}>
            <div className="media-body">
              
            <h5  style={{color:'#203181',fontWeight:'bold'}}>{pMn.ten} | 
            {pMn.vaiTro === 1 ? <span class="badge badge-danger">Chủ nhà</span> : <span class="badge badge-warning">Người tìm việc</span> } 
            | {pMn.vaiTro === 1 ? <span class="badge badge-light">Mức lương muốn trả:<b>{pMn.luong}</b>  </span> : <span></span> } {pMn.vaiTro===1 ? <span class="badge badge-info" > Địa chỉ làm việc: <b className='text-warning'>{pMn.diaChi}</b></span> :<span class="badge badge-info" > Nơi mong muốn làm việc: <b className='text-warning'>{pMn.diaChi}</b></span> }  </h5>
            <h5 style={{fontWeight:'600'}}><b style={{fontSize:'18px'}}>Tiêu đề : </b>{pMn.tieuDe}</h5>  
              <p className='text-break' style={{fontSize:'15px'}}> <b>Nội dung:</b> {pMn.noiDung.length>181 ? <p>{pMn.noiDung.substr(0,181)} <a className='text-primary' style={{textDecoration:'none' ,cursor:'pointer'}}> Xem thêm...</a> </p> : <p>{pMn.noiDung} <a className='text-primary' style={{textDecoration:'none' ,cursor:'pointer'}}> Xem thêm...</a></p>} </p>
              {pMn.vaiTro===1 ? <span class="badge badge-light"> Thời gian thuê: <b>{pMn.thoiGianlam} </b></span> : <span></span>}
              <small style={{paddingRight:'60px'}}><i className='text-secondary pl-3'> Đăng lúc:{pMn.dangLuc}</i></small>
            </div>
            <img src='https://avatars.githubusercontent.com/u/46524?v=4' alt="John Doe" className="ml-2 mt-3 rounded-circle" style={{width:'70px',height:'80px'}} />
       </div>
      )
    }) 
  } 
  render() {
    return (

          <div className='container' style={{marginTop:'5%',paddingBottom:'5%' }}>
          <div className="row " style={{padding:'50px 0 50px 0',height:'700px'}}>
          <div className="col-3 border">
            {/* Tab navs */}
            <div className="nav flex-column nav-pills text-center buttonCategaryBoss " id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active bg-warning bg" id="v-pills-home-tab" data-mdb-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Đăng bài tìm người giúp việc</a>
              <a className="nav-link bg-warning  bg" id="v-pills-profile-tab" data-mdb-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Bài đăng cá nhân</a>
              <a className="nav-link bg-warning bg" id="v-pills-messages-tab" data-mdb-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Tìm kiếm người giúp việc</a>
              <a className="nav-link bg-warning bg" id="v-pills-post-tab" data-mdb-toggle="pill" href="#v-pills-post" role="tab" aria-controls="v-pills-post" aria-selected="false">Bài đăng của mọi người</a>
              <a className="nav-link bg-warning bg" id="v-pills-messages-tab" data-mdb-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Tìm kiếm người giúp việc</a>
              <a className="nav-link bg-warning bg" id="v-pills-messages-tab" data-mdb-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Tìm kiếm người giúp việc</a>
            </div>
            {/* Tab navs */}
          </div>
          <div className="col-9 border">
            {/* Tab content */}
            <div className="tab-content  " id="v-pills-tabContent">
              {/* tab đăng bài */}
              <div className="tab-pane fade show active  " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <form action="/action_page.php" >
                  <fieldset style={{border:'none',marginTop:'-2%'}}>
                    <div className="w3-panel w3-blue w3-card-4 text-center tieuDeBoss" >
                      <h2>ĐĂNG BÀI TÌM NGƯỜI GIÚP VIỆC</h2>
                    </div>
                    <div className='border p-2'>
                      <div className='row px-3'>
                        <div className='col-12'>
                          <label htmlFor="fname">Tiêu đề:</label>
                          <input type="text" id="fname" name="fname" required /><br /><br />
                        </div>
                        <div className='col-5 pr-2'>
                          <label htmlFor="fname">Thời hạn thuê:</label>
                          <input type="text" id="fname" placeholder='vd: 3 ngày' name="fname" required /><br /><br />
                        </div>
                        <div className='col-7'>
                          <label htmlFor="day">Ngày bắt đầu làm việc:</label>
                          <input type="date" id="day" name="day" style={{height:'41px',width:'100%'}} required /><br /><br />
                        </div>
                        <div className='col-12'>
                          <label htmlFor="fname">Địa chỉ làm việc:</label>
                          <input type="text" id="fname" name="fname" placeholder='vd: 147 Phan Tứ,Sơn Trà ,Đà Nẵng' required /><br /><br />
                        </div>
                        <div className='col-3 pr-2'>
                        <label htmlFor="day">Độ tuổi :</label>
                          <select class="w3-select w3-border" name="option" required>
                              <option value="" disabled selected>Chọn độ tuổi cần thuê</option>
                              <option value="1">Từ 18 đến 25</option>
                              <option value="2">Từ 25 đến 35</option>
                              <option value="3">Trên 35 tuổi</option>
                          </select>
                        </div>
                        <div className='col-3  pr-2'>
                        <label htmlFor="day">Giới tính cần tìm:</label>
                          <select class="w3-select w3-border" name="option" required>
                              <option value="" disabled selected>Nữ</option>
                              <option value="1">Nam</option>
                              <option value="2">Khác</option>
                          </select>
                        </div>
                        <div className='col-6'>
                          <label htmlFor="fname">Mức lương muốn trả :</label>
                          <input type="text" id="fname" placeholder='vd: 2 Triệu' name="fname" required/><br /><br />
                        </div>
                        <div className='col-12'>
                            <div class="form-group">
                               <label for="comment">Nội dung công việc:</label>
                               <textarea class="form-control" rows="4" id="comment" required></textarea>
                            </div>
                        </div>
                       
                        <input style={{width:'100%'}} type="submit" className='' value='Đăng Bài' />
                      </div>
                    </div>
                    
                  </fieldset>
          </form>
              </div>

              {/* tab bài đã đăng */}
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              <div className='px-2 myPostBoss' style={{marginTop:'0px'}}>
            <div className="w3-panel w3-blue w3-card-4 text-center tieuDeBoss" >
                <h2>BÀI ĐĂNG CÁ NHÂN</h2>
            </div>
            <div className='row px-3' style={{marginTop:'-15px'}}>
                <div className='col-6'>
                    <div className="input-group mb-3" >
                            <input type="text" className="form-control" placeholder="Tìm kiếm bài đăng cá nhân" autoFocus="none" style={{height:'40px'}}/>
                            <div className="input-group-append">
                                <button className="btn btn-success" style={{backgroundColor:'#015591'}} type="submit"><i class="fa fa-search"></i></button>
                            </div>
                    </div>
                </div>
            </div>
            <div className='row px-3 d-flex justify-content-between '>
                {this.renderbaiDang()}
            </div>
            <ul class="pagination justify-content-center pt-3 " >
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
        </div>
              </div>

              {/* Tìm kiếm ứng viên */}
              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <div className='row px-3' style={{marginTop:'5px'}}>
                <div className='col-6 m-auto'>
                    <div className="input-group mb-3 " >
                            <input type="text" className="form-control" placeholder="Tìm kiếm Người giúp việc" autoFocus="none" style={{height:'40px'}}/>
                            <div className="input-group-append">
                                <button className="btn btn-success" style={{backgroundColor:'#015591'}} type="submit"><i class="fa fa-search"></i></button>
                            </div>
                    </div>
                </div>
            </div>
                <div className='row px-3'>
                 {this.renderPerson()}
                </div>
                <ul class="pagination justify-content-center pt-5 " >
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
              </div>
              {/* bài đăng của mọi người  */}
              <div className="tab-pane fade" id="v-pills-post" role="tabpanel" aria-labelledby="v-pills-post-tab">
                
                  <div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Bài đăng mọi người</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Bài đăng của chủ nhà</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Bài đăng tìm việc làm</a>
                  </li>
              </ul>
                <div className="tab-content" id="myTabContent">
                  {/* Tab 1--------------------------- */}
                  <div className="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab"> 
                  <div className='row px-3' style={{marginTop:'3px'}}>
                <div className='col-6 m-auto'>
                    <div className="input-group  " >
                            <input type="text" className="form-control" placeholder="Tìm kiếm bài đăng" autoFocus="none" style={{height:'40px'}}/>
                            <div className="input-group-append">
                                <button className="btn btn-success" style={{backgroundColor:'#015591'}} type="submit"><i class="fa fa-search"></i></button>
                            </div>
                    </div>
                </div>
              </div> 
                  {this.renderPostMoiNguoi()} 
                  <ul class="pagination justify-content-center pt-2 " >
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                   </ul> 
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Food truck fixie
                    locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit,
                    blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee.
                    Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                    PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS
                    salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit,
                    sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester
                    stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</div>
                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Etsy mixtape
                    wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack
                    lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard
                    locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify
                    squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie
                    etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog
                    stumptown. Pitchfork sustainable tofu synth chambray yr.</div>
                </div>
              </div>


                
               
              </div>
            </div>
            {/* Tab content */}
          </div>
        </div>
          </div>
    )
  }
}
