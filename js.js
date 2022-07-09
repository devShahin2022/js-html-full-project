// remove all div dyamic info...

function remove_all_div_info(){
  document.getElementById("dynamicMcqDin").innerHTML = "";
  document.getElementById("dynamicCqDin").innerHTML = "";

  document.getElementById("dynamicMcqDha").innerHTML = "";
  document.getElementById("dynamicCqDha").innerHTML = "";

  document.getElementById("dynamicMcqRaj").innerHTML = "";
  document.getElementById("dynamicCqRaj").innerHTML = "";

  document.getElementById("dynamicMcqSyl").innerHTML = "";
  document.getElementById("dynamicCqSyl").innerHTML = "";

  document.getElementById("dynamicMcqBari").innerHTML = "";
  document.getElementById("dynamicCqBari").innerHTML = "";

  document.getElementById("dynamicMcqComi").innerHTML = "";
  document.getElementById("dynamicCqComi").innerHTML = "";

  document.getElementById("dynamicMcqChita").innerHTML = "";
  document.getElementById("dynamicCqChita").innerHTML = "";

  document.getElementById("dynamicMcqJess").innerHTML = "";
  document.getElementById("dynamicCqJess").innerHTML = "";


  // for modal..
  document.getElementById("madal_answer_view").innerHTML = "";
}

// load header template..
function header_load(mcq_h_id, cq_h_id , mcq_h_info, cq_h_info){
 // alert ("Amu dhukeci: "+mcq_h_id);
  document.getElementById(mcq_h_id).innerHTML = mcq_h_info; // update mcq header..
  document.getElementById(cq_h_id).innerHTML = cq_h_info; // update cq header..

}

// common mcq function..
function starcture_mcq_frame(push_id_mcq, i, mcq_ques, opt_arary, mcq_ans){
 // alert('ami mcq frame a dhukeci :'+opt_arary +"id :"+push_id_mcq );

  document.getElementById(push_id_mcq).innerHTML += " <div class='col-sm-6'>"+
  "<div class='eachQuesWrap'>"+
   " <div id='dynamicMcqBA_g'></div>"+
   " <p class='text-dark mt-3'>"+
      "<span class='p-1 bg-dark text-white m-1 rounded'>"+ (i+1) +".</span>" +mcq_ques+ ""+
   " </p>"+
   " <div class='row'>"+
    "  <div class='col-6'>"+
       " <p class='text-dark optionText'>"+
          "<span class='option'>ক</span>"+ opt_arary[0] +""+
       "</p>"+
     " </div>"+
     " <div class='col-6'>"+
       " <p class='text-dark optionText'>"+
        "<span class='option'>খ</span>"+ opt_arary[1] +""+
        "</p>"+
     " </div>"+
      "<div class='col-6'>"+
       " <p class='text-dark optionText'>"+
          "<span class='option'>গ</span>"+ opt_arary[2] +""+
       "</p>"+
      "</div>"+
      "<div class='col-6'>"+
       " <p class='text-dark optionText'>"+
         "<span class='option'>ঘ</span>"+ opt_arary[3] +""+
        "</p>"+
     "</div>"+
  " </div>"+
   " <p>"+
    " <a class='btn btn-primary' data-bs-toggle='collapse' href='#din_board_2017_mcq_"+ i +"' role='button' aria-expanded='false' aria-controls='collapseExample'> উত্তর </a>"+
   "</p>"+
   "<div id='din_board_2017_mcq_"+ i +"' class='collapse ' >"+
     "<div class='card card-body text-dark'> "+ mcq_ans +"</div>"+
    "</div>"+
 "</div>"+
"</div>";
}

// common cq frame..
function strac_cq_frame(push_id_cq, i, cq_ques_uddipak, cq_ques_arr, boad_name, cq_year,board_index,each_year_index,i){

  document.getElementById(push_id_cq).innerHTML += " <div class='col-sm-6'>"+
    "<div class='cq_question_wrap border border-1 p-1 mt-4'>"+
    " <div class='cq_hints text-dark bg-white'>"+
    " <span class='p-1 bg-dark text-info rounded m-1'>"+ (i+1) +"</span>"+ cq_ques_uddipak +""+
    "</div>"+
    "<div class='cq_ques text-dark mt-4'>"+
    "<p>ক. "+ cq_ques_arr[0] +"</p>"+
    "<p>খ."+ cq_ques_arr[1] +"</p>"+
    "<p>গ."+ cq_ques_arr[2] +"</p>"+
    "<p>ঘ. "+ cq_ques_arr[3] +"</p>"+
   " </div>"+
   "<div class='action_btn py-3 pl-2'> "+  
   "<button class='btn btn-success btn-sm' type='button' data-bs-toggle='modal' data-bs-target='.cq_video_modal'>ভিডিও</button> " +
   "<button class='btn btn-danger btn-sm'  type='button' data-bs-toggle='modal' data-bs-target='.cq_answer_modal' id='"+ board_index+ +each_year_index+i+"' onclick='modal_answer_dyna(this.id)'>উত্তর</button>"+   
   "</div>"+ 
   "</div>"+
   "</div> ";
      
}


// stracture cq answer..
function cq_ques_ans_frame(ques_no, cq_ques_uddipak, cq_ques_arr, ans_cq_arr){



  document.getElementById("madal_answer_view").innerHTML += "<div class='row'>"+
  " <div class='col-sm-6'>"+
  "<div class='cq_question_wrap border border-1 p-1 mt-4'>"+
  " <div class='cq_hints text-dark bg-white'>"+
  " <span class='p-1 bg-dark text-info rounded'>"+ (ques_no+1) +"</span>"+ cq_ques_uddipak +""+
  "</div>"+
  "<div class='cq_ques text-dark mt-4'>"+
  "<p>ক. "+ cq_ques_arr[0] +"</p>"+
  "<p>খ. "+ cq_ques_arr[1] +"</p>"+
  "<p>গ. "+ cq_ques_arr[2] +"</p>"+
  "<p>ঘ. "+ cq_ques_arr[3] +"</p>"+
 " </div>"+
 "</div>"+
 "</div> "+
 " <div class='col-sm-6 mt-5'>"+
 "<div class='cq_ans text-dark my-2'><span class='m-1 quesNum text-white p-1 rounded bg-dark'>ক. উত্তর  </span>"+ ans_cq_arr[0] +"</div>"+
 " <div class=cq_ans text-dark my-2'><span class='m-1 quesNum text-white p-1 rounded bg-dark'>খ. উত্তর </span>"+ ans_cq_arr[1] +"</div>"+
 " <div class='cq_ans text-dark my-2'><span class='m-1 quesNum text-white p-1 rounded bg-dark'>গ. উত্তর  </span>"+ ans_cq_arr[2] +"</div>"+
 " <div class='cq_ans text-dark my-2'><span class='m-1 quesNum text-white p-1 rounded bg-dark'>ঘ. উত্তর  </span>"+ ans_cq_arr[3] +"</div>"+
 "</div>"+
 "</div>";

}


// all data action id..
var act_id_arr = ["din_act_id_1","din_act_id_2","din_act_id_3","din_act_id_4","din_act_id_5",
              "dha_act_id_1","dha_act_id_2","dha_act_id_3","dha_act_id_4","dha_act_id_5",
              "raj_act_id_1","raj_act_id_2","raj_act_id_3","raj_act_id_4","raj_act_id_5",
              "syl_act_id_1","syl_act_id_2","syl_act_id_3","syl_act_id_4","syl_act_id_5",
              "bar_act_id_1","bar_act_id_2","bar_act_id_3","bar_act_id_4","bar_act_id_5",
              "com_act_id_1","com_act_id_2","com_act_id_3","com_act_id_4","com_act_id_5",
              "chit_act_id_1","chit_act_id_2","chit_act_id_3","chit_act_id_4","chit_act_id_5",
              "jess_act_id_1","jess_act_id_2","jess_act_id_3","jess_act_id_4","jess_act_id_5",
];



 // offcanvas remove function..
function offcanvasRemove(){
  document.getElementById('offcanvasExample').classList.remove("show");
  document.getElementsByClassName('offcanvas-backdrop')[0].classList.remove("show");
  document.getElementById("body").setAttribute("style","overflow: auto; padding-right: 0px;");
}

// page herosection remove..
function heroSecRemove(){
  document.getElementById("heroSec").classList.add("d-none");
}

// just for initial view..
function removeInitSec(){
  document.getElementById("dinajpurBQA").setAttribute("style","display:none;");
}

// display none all board question div..
function none_all_Display(){
  document.getElementById("dinajPurSec").setAttribute("style","display:none;");
  document.getElementById("dhakaSec").setAttribute("style","display:none;");
  document.getElementById("rajshSec").setAttribute("style","display:none;");
  document.getElementById("sylhetSec").setAttribute("style","display:none;");
  document.getElementById("barisalSec").setAttribute("style","display:none;");
  document.getElementById("comillaSec").setAttribute("style","display:none;");
  document.getElementById("chittaSec").setAttribute("style","display:none;");
  document.getElementById("jessoreSec").setAttribute("style","display:none;");
}

// active year ..
  //================active button year ==========
  function active_year_univer(id1, id2, id3, id4, id5){
    document.getElementById(id1).classList.remove('active');
    document.getElementById(id2).classList.remove('active');
    document.getElementById(id3).classList.remove('active');
    document.getElementById(id4).classList.remove('active');
    document.getElementById(id5).classList.remove('active');
  }

// just for loop ...
function remove_year_act_sta(n){
  document.getElementById(n).classList.remove('active');
}

//preloader for all body content..
function allBodySec(){
  none_all_Display();
  document.getElementById("dinajPurSec").setAttribute("style","display:block;");
  removeInitSec();
  document.getElementById("allContentId").classList.remove('d-none');
  document.getElementById("preloader").classList.add('d-none');
}

// none all board question section..
function none_all_board(){
  document.getElementById("dinajpurBQA").setAttribute("style","display:none;");
  document.getElementById("dhakaSec").setAttribute("style","display:none;");
  document.getElementById("jessoreSec").classList.add("d-none"); // it's missing..
}


 // /// /// /// /// // /// /// ///  dinajpur board click events // // /// // // / / / // // / 

 // dinajpur btn click evet..
function dinBQ(){
  each_clk_pl();
  heroSecRemove();
  offcanvasRemove();
  none_all_board();
  none_all_Display();

  document.getElementById("content").classList.remove("d-none"); // remove d-none..
  document.getElementById("eachChapExp").classList.add("d-none"); // remove all board question..
  document.getElementById("modelTest").classList.add("d-none"); // remove model test ..

  active_year_univer('din_act_id_1', 'din_act_id_2', 'din_act_id_3', 'din_act_id_4', 'din_act_id_5'); // this function work for active year..
  document.getElementById("din_act_id_1").classList.add('active'); // for active button...
  document.getElementById("dinajPurSec").setAttribute("style","display:block;");
  document.getElementById("dinajpurBQA").setAttribute("style","display:block;");
  document.getElementById("topHeaderID").innerHTML = "দিনাজপুর বোর্ড";


 let push_header_id_mcq = "mcqDin";
 let push_header_id_cq = "cqDin";
 let push_id_mcq = "dynamicMcqDin";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
 let push_id_cq = "dynamicCqDin";// amake push korar id ta agei set korte hobe.. from html template(cq)...
 let board_index = 0;
 let board_name = "dinajpur_board";

 let each_year_index = 0;
 let year_no = "2017";
  find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
}

 // /// /// /// /// // /// /// ///  Dhaka board click events // // /// // // / / / // // / 
  // Dhaka btn click evet..
function dhakaBQ(){
  each_clk_pl();
  heroSecRemove();
  offcanvasRemove();
  none_all_board();
  none_all_Display();

  document.getElementById("content").classList.remove("d-none"); // remove d-none..
  document.getElementById("eachChapExp").classList.add("d-none"); // remove all board question..
  document.getElementById("modelTest").classList.add("d-none"); // remove model test ..

  active_year_univer('dha_act_id_1', 'dha_act_id_2', 'dha_act_id_3', 'dha_act_id_4', 'dha_act_id_5'); // this function work for active year..
  document.getElementById("dha_act_id_1").classList.add('active'); // for active button...
  document.getElementById("dhakaSec").setAttribute("style","display:block;");
  document.getElementById("dinajPurSec").setAttribute("style","display:none;"); // its for missing dinajpursection..
  document.getElementById("dhakaBQA").setAttribute("style","display:block;"); // just this portion block..

  let push_header_id_mcq = "mcq_dhaka_header_id";
  let push_header_id_cq = "cq_dhaka";
  let push_id_mcq = "dynamicMcqDha";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
  let push_id_cq = "dynamicCqDha";// amake push korar id ta agei set korte hobe.. from html template(cq)...
  let board_index = 1;
  let board_name = "dhaka_board"; // board name will be use for make dynamic id ......
  
  let each_year_index = 0;
  let year_no = "2017";
  find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
 
}

// /// /// /// /// // /// /// ///  Rajshahi board click events // // /// // // / / / // // / 
  // Rajshahi btn click evet..
  function rajBQ(){
    each_clk_pl();
    heroSecRemove();
    offcanvasRemove();
    none_all_board();
    none_all_Display();
    document.getElementById("content").classList.remove("d-none"); // remove d-none..
    document.getElementById("eachChapExp").classList.add("d-none"); // remove all board question..
    document.getElementById("modelTest").classList.add("d-none"); // remove model test ..

    active_year_univer('raj_act_id_1', 'raj_act_id_2', 'raj_act_id_3', 'raj_act_id_4', 'raj_act_id_5'); // this function work for active year..
    document.getElementById("raj_act_id_1").classList.add('active'); // for active button...
   // document.getElementById("dhakaSec").setAttribute("style","display:block;");
    document.getElementById("dinajPurSec").setAttribute("style","display:none;"); // its for missing dinajpursection..
    document.getElementById("rajshSec").setAttribute("style","display:block;"); // just this portion block..

    let push_header_id_mcq = "mcq_raj_h";
    let push_header_id_cq = "cq_raj_h";
    let push_id_mcq = "dynamicMcqRaj";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    let push_id_cq = "dynamicCqRaj";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    let board_index = 2;
    let board_name = "rajshahi_board"; // board name will be use for make dynamic id ......
    let each_year_index = 0;
    let year_no = "2017";
    find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
 
  }

  // /// /// /// /// // /// /// ///  Sylhet board click events // // /// // // / / / // // / 
  // Sylhet btn click evet..
  function sylhBQ(){
    each_clk_pl();
    heroSecRemove();
    offcanvasRemove();
    none_all_board();
    none_all_Display();

    document.getElementById("content").classList.remove("d-none"); // remove d-none..
    document.getElementById("eachChapExp").classList.add("d-none"); // remove all board question..
    document.getElementById("modelTest").classList.add("d-none"); // remove model test ..

    active_year_univer('syl_act_id_1', 'syl_act_id_2', 'syl_act_id_3', 'syl_act_id_4', 'syl_act_id_5'); // this function work for active year..
    document.getElementById("syl_act_id_1").classList.add('active'); // for active button...
   // document.getElementById("dhakaSec").setAttribute("style","display:block;");
    document.getElementById("dinajPurSec").setAttribute("style","display:none;"); // its for missing dinajpursection..
    document.getElementById("sylhetSec").setAttribute("style","display:block;"); // just this portion block..
  
    let push_header_id_mcq = "mcq_syl_h";
    let push_header_id_cq = "cq_syl_h";
    let push_id_mcq = "dynamicMcqSyl";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    let push_id_cq = "dynamicCqSyl";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    let board_index = 3;
    let board_name = "sylhet_board"; // board name will be use for make dynamic id ......

    let each_year_index = 0;
    let year_no = "2017";
    find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
 
  
  }

  // /// /// /// /// // /// /// ///  Barisal board click events // // /// // // / / / // // / 
  // Barisal btn click evet..
  function barisalBQ(){
    each_clk_pl();
    heroSecRemove();
    offcanvasRemove();
    none_all_board();
    none_all_Display();

    document.getElementById("content").classList.remove("d-none"); // remove d-none..
    document.getElementById("eachChapExp").classList.add("d-none"); // remove all board question..
    document.getElementById("modelTest").classList.add("d-none"); // remove model test ..

    active_year_univer('bar_act_id_1', 'bar_act_id_2', 'bar_act_id_3', 'bar_act_id_4', 'bar_act_id_5'); // this function work for active year..
    document.getElementById("bar_act_id_1").classList.add('active'); // for active button...
   // document.getElementById("dhakaSec").setAttribute("style","display:block;");
    document.getElementById("dinajPurSec").setAttribute("style","display:none;"); // its for missing dinajpursection..
    document.getElementById("barisalSec").setAttribute("style","display:block;"); // just this portion block..

    push_header_id_mcq = "mcq_bari_h";
    push_header_id_cq = "cq_bari_h";
    push_id_mcq = "dynamicMcqBari";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqBari";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 4;
    board_name = "barisal_board"; // board name will be use for make dynamic id ......
    each_year_index = 0;
    year_no = "2017";
    find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
 
  }

  // /// /// /// /// // /// /// ///  Comilla board click events // // /// // // / / / // // / 
  // Comilla btn click evet..
  function comilBQ(){
    each_clk_pl();
    heroSecRemove();
    offcanvasRemove();
    none_all_board();
    none_all_Display();
    document.getElementById("content").classList.remove("d-none"); // remove d-none..
    document.getElementById("eachChapExp").classList.add("d-none"); // remove all board question..
    document.getElementById("modelTest").classList.add("d-none"); // remove model test ..

    active_year_univer('com_act_id_1', 'com_act_id_2', 'com_act_id_3', 'com_act_id_4', 'com_act_id_5'); // this function work for active year..
    document.getElementById("com_act_id_1").classList.add('active'); // for active button...
   // document.getElementById("dhakaSec").setAttribute("style","display:block;");
    document.getElementById("dinajPurSec").setAttribute("style","display:none;"); // its for missing dinajpursection..
    document.getElementById("comillaSec").setAttribute("style","display:block;"); // just this portion block..

    push_header_id_mcq = "mcq_comi_h";
    push_header_id_cq = "cq_comi_h";
    push_id_mcq = "dynamicMcqComi";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqComi";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 5;
    board_name = "comilla_board"; // board name will be use for make dynamic id ......
    each_year_index = 0;
    year_no = "2017";
    find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
 
  }

  // /// /// /// /// // /// /// ///  Chittagong board click events // // /// // // / / / // // / 
  // Chittagong btn click evet..
  function chattBQ(){
    each_clk_pl();
    heroSecRemove();
    offcanvasRemove();
    none_all_board();
    // none chittagong board... 
    document.getElementById("content").classList.remove("d-none"); // remove d-none..
    document.getElementById("eachChapExp").classList.add("d-none"); // remove all board question..
    document.getElementById("modelTest").classList.add("d-none"); // remove model test ..none_all_Display();


    active_year_univer('chit_act_id_1', 'chit_act_id_2', 'chit_act_id_3', 'chit_act_id_4', 'chit_act_id_5'); // this function work for active year..
    document.getElementById("chit_act_id_1").classList.add('active'); // for active button...
   // document.getElementById("dhakaSec").setAttribute("style","display:block;");
    document.getElementById("dinajPurSec").setAttribute("style","display:none;"); // its for missing dinajpursection..
    document.getElementById("chittaSec").setAttribute("style","display:block;"); // just this portion block..

    push_header_id_mcq = "mcq_chit_h";
    push_header_id_cq = "cq_chit_h";
    push_id_mcq = "dynamicMcqChita";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqChita";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 6;
    board_name = "chittagong_board"; // board name will be use for make dynamic id ......

    each_year_index = 0;
    year_no = "2017";
    find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
 
  }
  
  // /// /// /// /// // /// /// ///  Jessore board click events // // /// // // / / / // // / 
  // Jessore btn click evet..
  function jessoBQ(){
    each_clk_pl();
    heroSecRemove();
    offcanvasRemove();
    none_all_board();
    none_all_Display();

    document.getElementById("content").classList.remove("d-none"); // remove d-none..
    document.getElementById("eachChapExp").classList.add("d-none"); // remove all board question..
    document.getElementById("modelTest").classList.add("d-none"); // remove model test ..

    active_year_univer('jess_act_id_1', 'jess_act_id_2', 'jess_act_id_3', 'jess_act_id_4', 'jess_act_id_5'); // this function work for active year..
    document.getElementById("jess_act_id_1").classList.add('active'); // for active button...
   // document.getElementById("dhakaSec").setAttribute("style","display:block;");
    document.getElementById("dinajPurSec").setAttribute("style","display:none;"); // its for missing dinajpursection..
    document.getElementById("jessoreSec").setAttribute("style","display:block;"); // just this portion block..
    document.getElementById("jessoreSec").classList.remove("d-none");

    push_header_id_mcq = "mcq_jes_h";
    push_header_id_cq = "cq_jes_h";
    push_id_mcq = "dynamicMcqJess";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqJess";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 7;
    board_name = "jessore_board"; // board name will be use for make dynamic id ......
    each_year_index = 0;
    year_no = "2017";
    find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
  
  }
  
  // Data retrive action buttons..
  function data_act_btn(id){
    each_clk_pl();
    remove_all_div_info(); // remove all div info...

    act_id_len = act_id_arr.length;
    for(let i=0;i<act_id_len;i++){
      if(act_id_arr[i] == id){
        //alert("Wow: "+ id);

        for(let j=0;j<act_id_len;j++){
          remove_year_act_sta(act_id_arr[j]);
        }

        // send id another function..
        document.getElementById(id).classList.add('active');
        data_procces(id);
        break;

        
      }
    }
  }



// function will be find data from array..
function find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no){
// remove data which loaded before..
document.getElementById(push_header_id_mcq).innerHTML = "";
document.getElementById(push_header_id_cq).innerHTML = "";

document.getElementById(push_id_mcq).innerHTML = "";
document.getElementById(push_id_cq).innerHTML = "";

  // call 1 function  ========> update header
  let mcq_hea = bundle_board_info[board_index].board_name[each_year_index].year_name[0].mcq[0].mcq_header;
  let cq_hea = bundle_board_info[board_index].board_name[each_year_index].year_name[0].mcq[0].cq_header;
 
  header_load(push_header_id_mcq, push_header_id_cq , mcq_hea, cq_hea);



  let mcq_len = bundle_board_info[board_index].board_name[each_year_index].year_name[0].mcq[1].all_mcq.length;

  for(let i=0;i<mcq_len;i++){
    let opt_arary = [];
    let mcq_opt_len =  bundle_board_info[board_index].board_name[each_year_index].year_name[0].mcq[1].all_mcq[i].mcq_opt.length;
    for(let j=0;j<mcq_opt_len;j++){
      let each_opt = bundle_board_info[board_index].board_name[each_year_index].year_name[0].mcq[1].all_mcq[i].mcq_opt[j];
      opt_arary.push(each_opt);
    }
    // data sequence for sending html frame..
    let mcq_ques =  bundle_board_info[board_index].board_name[each_year_index].year_name[0].mcq[1].all_mcq[i].mcq_ques;
    opt_arary;
    let mcq_ans =  bundle_board_info[board_index].board_name[each_year_index].year_name[0].mcq[1].all_mcq[i].mcq_answer;
    // alert("mcq_ques "+mcq_ques);
    // alert("option array "+opt_arary);
    //alert("mcq_answer "+opt_arary);
    // some more info send...
    // i pathate hobe dynamic id creation korar jonne and index korar jonne..
    // sathe div id pathate hobe ..jekhane info import korbo..

   // call 2 function  ========> loaded all mcq
   starcture_mcq_frame(push_id_mcq, i, mcq_ques, opt_arary, mcq_ans);
  }


  // cq loading loop..

  let cq_len =  bundle_board_info[board_index].board_name[each_year_index].year_name[0].cq.length;


  for(let i=0;i<cq_len;i++){
    let cq_ques_arr = [];
    let cq_each_ques_len =  bundle_board_info[board_index].board_name[each_year_index].year_name[0].cq[i].cq_ques[1].cq_each_ques.length;
    let cq_ques_uddipak =  bundle_board_info[board_index].board_name[each_year_index].year_name[0].cq[i].cq_ques[0].cq_uddipak;
    for(let j=0;j<cq_each_ques_len;j++){
      let cq_each_ques = bundle_board_info[board_index].board_name[each_year_index].year_name[0].cq[i].cq_ques[1].cq_each_ques[j];
      cq_ques_arr.push(cq_each_ques);
    }

    // call 3 function  ========> load all cq question..
    // ja ja pathate hobe..
    // question uddipak
    // each question array
    // push id html template
    //index number 
    let cq_boardName = board_name;
    let cq_year = year_no;
    strac_cq_frame(push_id_cq, i, cq_ques_uddipak, cq_ques_arr, cq_boardName, cq_year,board_index,each_year_index,i);
  }

}


// request sending..
function data_procces(y_id){  

  let push_header_id_mcq = "";
  let push_header_id_cq = "";
  let push_id_mcq="";
  let push_id_cq="";
  let board_index="";// board index [ 0 - 7]
  let each_year_index ="";
  let board_name = ""; // for unique confurm..
  let year_no = ""; // for unique cq btn id confurm..

  // parent dinajpur board
  if(y_id == "din_act_id_1" || y_id == "din_act_id_2" || y_id == "din_act_id_3" || y_id == "din_act_id_4" || y_id == "din_act_id_5"){
    push_header_id_mcq = "mcqDin";
    push_header_id_cq = "cqDin";
    push_id_mcq = "dynamicMcqDin";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqDin";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 0;
    board_name = "dinajpur_board";
    

    // aikhane theke amake agei board, year,  confurm kore dite ...id theke
    if(y_id == "din_act_id_1"){
      each_year_index = 0;
      year_no = "2017";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "din_act_id_2"){
      each_year_index = 1;
      year_no = "2018";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "din_act_id_3"){
      each_year_index = 2;
      year_no = "2019";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "din_act_id_4"){
      each_year_index = 3;
      year_no = "2020";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "din_act_id_5"){
      each_year_index = 4;
      year_no = "2021";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }
  }
  
  // parent dhaka board
  else if(y_id == "dha_act_id_1" || y_id == "dha_act_id_2" || y_id == "dha_act_id_3" || y_id == "dha_act_id_4" || y_id == "dha_act_id_5"){
    push_header_id_mcq = "mcq_dhaka_header_id";
    push_header_id_cq = "cq_dhaka";
    push_id_mcq = "dynamicMcqDha";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqDha";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 1;
    board_name = "dhaka_board"; // board name will be use for make dynamic id ......

    // aikhane theke amake agei board, year,  confurm kore dite ...id theke
    if(y_id == "dha_act_id_1"){
      each_year_index = 0;
      year_no = "2017";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "dha_act_id_2"){
      each_year_index = 1;
      year_no = "2018";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "dha_act_id_3"){
      each_year_index = 2;
      year_no = "2019";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "dha_act_id_4"){
      each_year_index = 3;
      year_no = "2020";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "dha_act_id_5"){
      each_year_index = 4;
      year_no = "2021";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }
  }

  // parent rajshahi board
  else if(y_id == "raj_act_id_1" || y_id == "raj_act_id_2" || y_id == "raj_act_id_3" || y_id == "raj_act_id_4" || y_id == "raj_act_id_5"){
    push_header_id_mcq = "mcq_raj_h";
    push_header_id_cq = "cq_raj_h";
    push_id_mcq = "dynamicMcqRaj";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqRaj";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 2;
    board_name = "rajshahi_board"; // board name will be use for make dynamic id ......

    // aikhane theke amake agei board, year,  confurm kore dite ...id theke
    if(y_id == "raj_act_id_1"){
      each_year_index = 0;
      year_no = "2017";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "raj_act_id_2"){
      each_year_index = 1;
      year_no = "2018";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "raj_act_id_3"){
      each_year_index = 2;
      year_no = "2019";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "raj_act_id_4"){
      each_year_index = 3;
      year_no = "2020";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "raj_act_id_5"){
      each_year_index = 4;
      year_no = "2021";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }
  }

  // parent sylhet board
  else if(y_id == "syl_act_id_1" || y_id == "syl_act_id_2" || y_id == "syl_act_id_3" || y_id == "syl_act_id_4" || y_id == "syl_act_id_5"){
      push_header_id_mcq = "mcq_syl_h";
      push_header_id_cq = "cq_syl_h";
      push_id_mcq = "dynamicMcqSyl";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
      push_id_cq = "dynamicCqSyl";// amake push korar id ta agei set korte hobe.. from html template(cq)...
      board_index = 3;
      board_name = "sylhet_board"; // board name will be use for make dynamic id ......
  
      // aikhane theke amake agei board, year,  confurm kore dite ...id theke
      if(y_id == "syl_act_id_1"){
        each_year_index = 0;
        year_no = "2017";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }else if(y_id == "syl_act_id_2"){
        each_year_index = 1;
        year_no = "2018";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }else if(y_id == "syl_act_id_3"){
        each_year_index = 2;
        year_no = "2019";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }else if(y_id == "syl_act_id_4"){
        each_year_index = 3;
        year_no = "2020";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }else if(y_id == "syl_act_id_5"){
        each_year_index = 4;
        year_no = "2021";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }
  }

  // parent Barisal board
  else if(y_id == "bar_act_id_1" || y_id == "bar_act_id_2" || y_id == "bar_act_id_3" || y_id == "bar_act_id_4" || y_id == "bar_act_id_5"){
    push_header_id_mcq = "mcq_bari_h";
    push_header_id_cq = "cq_bari_h";
    push_id_mcq = "dynamicMcqBari";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqBari";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 4;
    board_name = "barisal_board"; // board name will be use for make dynamic id ......

    // aikhane theke amake agei board, year,  confurm kore dite ...id theke
    if(y_id == "bar_act_id_1"){
      each_year_index = 0;
      year_no = "2017";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "bar_act_id_2"){
      each_year_index = 1;
      year_no = "2018";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "bar_act_id_3"){
      each_year_index = 2;
      year_no = "2019";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "bar_act_id_4"){
      each_year_index = 3;
      year_no = "2020";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "bar_act_id_5"){
      each_year_index = 4;
      year_no = "2021";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }
  }

  // parent Comilla board
  else if(y_id == "com_act_id_1" || y_id == "com_act_id_2" || y_id == "com_act_id_3" || y_id == "com_act_id_4" || y_id == "com_act_id_5"){
      push_header_id_mcq = "mcq_comi_h";
      push_header_id_cq = "cq_comi_h";
      push_id_mcq = "dynamicMcqComi";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
      push_id_cq = "dynamicCqComi";// amake push korar id ta agei set korte hobe.. from html template(cq)...
      board_index = 5;
      board_name = "comilla_board"; // board name will be use for make dynamic id ......
  
      // aikhane theke amake agei board, year,  confurm kore dite ...id theke
      if(y_id == "com_act_id_1"){
        each_year_index = 0;
        year_no = "2017";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }else if(y_id == "com_act_id_2"){
        each_year_index = 1;
        year_no = "2018";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }else if(y_id == "com_act_id_3"){
        each_year_index = 2;
        year_no = "2019";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }else if(y_id == "com_act_id_4"){
        each_year_index = 3;
        year_no = "2020";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }else if(y_id == "com_act_id_5"){
        each_year_index = 4;
        year_no = "2021";
        find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
      }
  }
  // parent Chittagong board
  else if(y_id == "chit_act_id_1" || y_id == "chit_act_id_2" || y_id == "chit_act_id_3" || y_id == "chit_act_id_4" || y_id == "chit_act_id_5"){
    push_header_id_mcq = "mcq_chit_h";
    push_header_id_cq = "cq_chit_h";
    push_id_mcq = "dynamicMcqChita";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqChita";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 6;
    board_name = "chittagong_board"; // board name will be use for make dynamic id ......

    // aikhane theke amake agei board, year,  confurm kore dite ...id theke
    if(y_id == "chit_act_id_1"){
      each_year_index = 0;
      year_no = "2017";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "chit_act_id_2"){
      each_year_index = 1;
      year_no = "2018";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "chit_act_id_3"){
      each_year_index = 2;
      year_no = "2019";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "chit_act_id_4"){
      each_year_index = 3;
      year_no = "2020";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "chit_act_id_5"){
      each_year_index = 4;
      year_no = "2021";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }
  }

  // parent jessore board
  else if(y_id == "jess_act_id_1" || y_id == "jess_act_id_2" || y_id == "jess_act_id_3" || y_id == "jess_act_id_4" || y_id == "jess_act_id_5"){
    push_header_id_mcq = "mcq_jes_h";
    push_header_id_cq = "cq_jes_h";
    push_id_mcq = "dynamicMcqJess";// amake push korar id ta agei set korte hobe.. from html template (mcq)...
    push_id_cq = "dynamicCqJess";// amake push korar id ta agei set korte hobe.. from html template(cq)...
    board_index = 7;
    board_name = "jessore_board"; // board name will be use for make dynamic id ......

    // aikhane theke amake agei board, year,  confurm kore dite ...id theke
    if(y_id == "jess_act_id_1"){
      each_year_index = 0;
      year_no = "2017";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "jess_act_id_2"){
      each_year_index = 1;
      year_no = "2018";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "jess_act_id_3"){
      each_year_index = 2;
      year_no = "2019";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "jess_act_id_4"){
      each_year_index = 3;
      year_no = "2020";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }else if(y_id == "jess_act_id_5"){
      each_year_index = 4;
      year_no = "2021";
      find_data_mcq(push_header_id_mcq, push_header_id_cq, push_id_mcq, push_id_cq, board_index, each_year_index, board_name, year_no);
    }
  }

}


// modal cq answer find out proccessing
function cq_ans_find( board_ind, year_ind, cq_set ){
  each_clk_pl();
  // for cq question..
    let cq_ques_arr = [];
    let cq_ques_uddipak =  bundle_board_info[board_ind].board_name[year_ind].year_name[0].cq[cq_set].cq_ques[0].cq_uddipak;
    let cq_each_ques_len = bundle_board_info[board_ind].board_name[year_ind].year_name[0].cq[cq_set].cq_ques[1].cq_each_ques.length;

    for(let j=0;j<cq_each_ques_len;j++){
      let cq_each_ques =  bundle_board_info[board_ind].board_name[year_ind].year_name[0].cq[cq_set].cq_ques[1].cq_each_ques[j];
      cq_ques_arr.push(cq_each_ques);
    }
  // for cq answer..
  let ans_cq_arr = [];
  let answer_len = bundle_board_info[board_ind].board_name[year_ind].year_name[0].ans[cq_set].cq_each_ans.length;
  for(let i=0; i<answer_len; i++){
    let each_cq_ans = bundle_board_info[board_ind].board_name[year_ind].year_name[0].ans[cq_set].cq_each_ans[i];
    ans_cq_arr.push(each_cq_ans);
  }

  let q_i = cq_set;
  // send data to answer modal...
  cq_ques_ans_frame(q_i, cq_ques_uddipak, cq_ques_arr, ans_cq_arr);



}



  // modal answer shows... request send..
  function modal_answer_dyna(id){
   // let board_name = "";
   // let choose_y = "";
   // let ques_no = "";

    document.getElementById("madal_answer_view").innerHTML = "";// remove delete all info which loaded before...
    let board_ind =parseInt(id.slice(0,1)) ;
    let year_ind = parseInt(id.slice(1,2));
    let cq_set = parseInt(id.slice(2,3));

    cq_ans_find( board_ind, year_ind, cq_set );
  }


  /////////////////===============  Each chapter explanation  =================//////////////////
// by default delete all data after click and then load

function rem_exist_data_load(){

  document.getElementById("eachChapTopi").innerHTML = "";
  document.getElementById("eachChapTopiExp").innerHTML = "";
  document.getElementById("prob_expla_id").innerHTML = "";
  document.getElementById("eachChapBoardQuesMcq").innerHTML = "";
  document.getElementById("eachChapBoardQuesCq").innerHTML = "";

  document.getElementById("eachChapSchMcq").innerHTML = "";
  document.getElementById("eachChapSchCq").innerHTML = "";
  document.getElementById("impTopEachChap").innerHTML = "";

  // for erase all model data..
  document.getElementById("modelMcq").innerHTML = "";
  document.getElementById("modelCq").innerHTML = "";
}



  // send request..
function eachChapExp(id){
  each_clk_pl();
  // remove offcanvas ....
  offcanvasRemove();
  // remove all data ...which loaded before

  rem_exist_data_load();

  // display none all board question..
  document.getElementById("content").classList.add("d-none"); // remove all board question..
  document.getElementById("eachChapExp").classList.remove("d-none"); // remove all board question..
  document.getElementById("modelTest").classList.add("d-none"); // remove model test ..


  // set data by cliked each index..
  let chap_no = "";

  // logic each chapter..
  if(id=="chap_1"){
    document.getElementById("eachChapHeader").innerHTML = "ভৌত রাশি ও পরিমাপ";
    chap_no = 0;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_2"){
    document.getElementById("eachChapHeader").innerHTML = "গতি";

    chap_no = 1;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_3"){
    document.getElementById("eachChapHeader").innerHTML = "বল";

    chap_no = 2;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_4"){
    document.getElementById("eachChapHeader").innerHTML = " কাজ , ক্ষমতা ও শক্তি";

    chap_no = 3;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_5"){
    document.getElementById("eachChapHeader").innerHTML = " পদার্থের অবস্থা ও চাপ";

    chap_no = 4;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_6"){
    document.getElementById("eachChapHeader").innerHTML = "বস্তুর ওপর তাপের প্রভাব";

    chap_no = 5;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_7"){
    document.getElementById("eachChapHeader").innerHTML = "তরউঙ্গ ও শব্দ";

    chap_no = 6;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_8"){
    document.getElementById("eachChapHeader").innerHTML = "আলোর প্রতিফলন";

    chap_no = 7;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_9"){
    document.getElementById("eachChapHeader").innerHTML = "আলোর প্রতিসরন";

    chap_no = 8;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_10"){
    document.getElementById("eachChapHeader").innerHTML = "স্থির বিদ্যুৎ";

    chap_no = 9;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_11"){
    document.getElementById("eachChapHeader").innerHTML = "চল বিদ্যুৎ";

    chap_no = 10;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_12"){
    document.getElementById("eachChapHeader").innerHTML = " বিদ্যুতর চৌম্বক ক্রিয়া ";

    chap_no = 11;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_13"){
    document.getElementById("eachChapHeader").innerHTML = "আধুনিক পদার্থবিজ্ঞান ও ইলেক্ট্রনিক্স";

    chap_no = 12;
    data_find_each_chap(chap_no);
  }
  else if(id=="chap_14"){
    document.getElementById("eachChapHeader").innerHTML = "জীবন বাচাতে  পদার্থবিজ্ঞান";

    chap_no = 13;
    data_find_each_chap(chap_no);
  }

}


// ================== each chapter data processing ======================

// data find from data object..
function data_find_each_chap(chap_no){

  // popular school questions paper.. cq
  let sch_cq_len = each_chap_data[chap_no].school_que_exp[1].school_cq.length;
  for(let i=0; i<sch_cq_len; i++){
    let sch_cq_uddi = each_chap_data[chap_no].school_que_exp[1].school_cq[i].cq_uddipak;
    let sch_cq_ques_len = each_chap_data[chap_no].school_que_exp[1].school_cq[i].cq_ques.length;
    let sch_cq_ques_arr = [];
    for(let j=0; j<sch_cq_ques_len; j++){
      sch_cq_ques_arr.push(each_chap_data[chap_no].school_que_exp[1].school_cq[i].cq_ques[j]);
    }
    // call function for load cq into school model...
    let data_cq_ques_id_sch = "eachChapSchCq";
    each_chapter_sch_cq(data_cq_ques_id_sch, i, sch_cq_uddi, sch_cq_ques_arr, chap_no);
  }

  // popular school questions paper.. mcq

  let e_cha_pop_mcq_len = each_chap_data[chap_no].school_que_exp[0].school_mcq.length;
  for(let i=0; i<e_cha_pop_mcq_len; i++){
    let e_cha_pop_opt = [];
    let e_cha_pop_mcq_ques = each_chap_data[chap_no].school_que_exp[0].school_mcq[i].ques_name;
    let e_cha_pop_opt_len =  each_chap_data[chap_no].school_que_exp[0].school_mcq[0].ques_opt.length;
    for(let j=0; j<e_cha_pop_opt_len; j++){
      e_cha_pop_opt.push( each_chap_data[chap_no].school_que_exp[0].school_mcq[i].ques_opt[j]);
    }
    let popula_mcq_ans = each_chap_data[chap_no].school_que_exp[0].school_mcq[i].ques_ans;

    // function call for mcq load into popular school.
    let push_id_mcq_pop = "eachChapSchMcq";
    starcture_mcq_frame_popular(push_id_mcq_pop, i, e_cha_pop_mcq_ques, e_cha_pop_opt, popula_mcq_ans);

  }

  // data for each chapter board question..
  let each_cha_b_mcq_len = each_chap_data[chap_no].board_que_exp[0].board_mcq.length;
 // alert("len "+each_cha_b_mcq_len);
  for(let i=0; i<each_cha_b_mcq_len; i++){
    let mcq_opt_arr_e_c = [];
    let mcq_ques_e_c_b = each_chap_data[chap_no].board_que_exp[0].board_mcq[i].ques_name;
    let mcq_opt_e_c_len = each_chap_data[chap_no].board_que_exp[0].board_mcq[i].ques_opt.length;
    for(let j=0; j<mcq_opt_e_c_len; j++){
      mcq_opt_arr_e_c.push(each_chap_data[chap_no].board_que_exp[0].board_mcq[i].ques_opt[j]);
    }
    let mcq_ans_e_c = each_chap_data[chap_no].board_que_exp[0].board_mcq[i].ques_ans;
    // aikhane related hints deyar jaiga ace...
    // alert(mcq_opt_arr_e_c);
    // alert(mcq_ans_e_c);

   let  push_id_mcq = "eachChapBoardQuesMcq";
    // call function for mcq loaded (board)
    starcture_mcq_frame(push_id_mcq, i, mcq_ques_e_c_b, mcq_opt_arr_e_c, mcq_ans_e_c);
  }

  // kothay jor deya proyojon...
  for(let i=0; i< each_chap_data[chap_no].focus.length; i++){
    document.getElementById("impTopEachChap").innerHTML += "<li> "+ each_chap_data[chap_no].focus[i] +" </li>"
  }


  let all_topics_len = each_chap_data[chap_no].topics.length;
  let topics_exp_len = each_chap_data[chap_no].topics_exp.length;
  let math_exp_len = each_chap_data[chap_no].math_exp.length;

  for(let i=0; i<all_topics_len; i++){
    let topi_data = each_chap_data[chap_no].topics[i];
    let topics_exp = each_chap_data[chap_no].topics_exp[i];
    each_chap_data_load(topi_data, topics_exp);
  }

  

  // for loop for math explain section..

  for(let i=0; i<math_exp_len; i++){
    let math_prob =[];

    let cat_name = each_chap_data[chap_no].math_exp[i].cat_type_name;
    let cat_que_examp = each_chap_data[chap_no].math_exp[i].cat_que_examp;
    let cat_que_ans = each_chap_data[chap_no].math_exp[i].cat_que_ans;
    let math_prob_len = each_chap_data[chap_no].math_exp[i].math_prob.length;

    for(let j=0; j<math_prob_len; j++){
      let each_math_prob = each_chap_data[chap_no].math_exp[i].math_prob[j];
      math_prob.push(each_math_prob);
    }
    math_cat_expla(i, cat_name, cat_que_examp, cat_que_ans, math_prob);
  }
  // board each chapter cq question find out... from data object




  let board_each_c_cq_len = each_chap_data[chap_no].board_que_exp[1].board_cq.length;
  // data insert id name ..
  let data_cq_ques_id = "eachChapBoardQuesCq";
 

  for (let i=0; i<board_each_c_cq_len; i++){
    let cq_b_e_c = [];
    let b_each_c_ques_len = each_chap_data[chap_no].board_que_exp[1].board_cq[i].cq_ques.length;
    for(let j=0; j<b_each_c_ques_len; j++){
      cq_b_e_c.push(each_chap_data[chap_no].board_que_exp[1].board_cq[i].cq_ques[j]);
    }
    let b_each_c_ques_udd = each_chap_data[chap_no].board_que_exp[1].board_cq[i].cq_uddipak;

   // alert("cq question uddipak=====>>>"+ b_each_c_ques_udd);
    // alert("cq questions =====>>>"+ cq_b_e_c);

    // call cq question cq function..
    each_chapter_borad_cq(data_cq_ques_id, i, b_each_c_ques_udd, cq_b_e_c, chap_no);
  }

  // each chapter board cq answer find out..
  let e_cha_cq_a_len = each_chap_data[chap_no].board_que_exp[1].board_cq[0].cq_ques_ans.length;

  for(let i=0; i<e_cha_cq_a_len; i++){
    let cq_ans_e_cha_arr = [];
    let e_cha_b_ans_len = each_chap_data[chap_no].board_que_exp[1].board_cq[i].cq_ques_ans.length;
    for(let j=0; j<e_cha_b_ans_len; j++){
      cq_ans_e_cha_arr.push(each_chap_data[chap_no].board_que_exp[1].board_cq[i].cq_ques_ans[j]);
    }
   // alert("answer will be here =====>" + cq_ans_e_cha_arr);
  }

}


//------------>>>>>>>>>  data load into each chapter html template..
// data loaded for popular school...
function starcture_mcq_frame_popular(push_id_mcq, i, mcq_ques, opt_arary, mcq_ans){
  // alert('ami mcq frame a dhukeci :'+opt_arary +"id :"+push_id_mcq );
 
   document.getElementById(push_id_mcq).innerHTML += " <div class='col-sm-6'>"+
   "<div class='eachQuesWrap'>"+
    " <div id='dynamicMcqBA_g'></div>"+
    " <p class='text-dark mt-3'>"+
       "<span class='p-1 bg-dark text-white m-1 rounded'>"+ (i+1) +".</span>" +mcq_ques+ ""+
    " </p>"+
    " <div class='row'>"+
     "  <div class='col-6'>"+
        " <p class='text-dark optionText'>"+
           "<span class='option'>ক</span>"+ opt_arary[0] +""+
        "</p>"+
      " </div>"+
      " <div class='col-6'>"+
        " <p class='text-dark optionText'>"+
         "<span class='option'>খ</span>"+ opt_arary[1] +""+
         "</p>"+
      " </div>"+
       "<div class='col-6'>"+
        " <p class='text-dark optionText'>"+
           "<span class='option'>গ</span>"+ opt_arary[2] +""+
        "</p>"+
       "</div>"+
       "<div class='col-6'>"+
        " <p class='text-dark optionText'>"+
          "<span class='option'>ঘ</span>"+ opt_arary[3] +""+
         "</p>"+
      "</div>"+
   " </div>"+
    " <p>"+
     " <a class='btn btn-primary' data-bs-toggle='collapse' href='#popula_mcq_"+ i +"' role='button' aria-expanded='false' aria-controls='collapseExample'> উত্তর </a>"+
    "</p>"+
    "<div id='popula_mcq_"+ i +"' class='collapse ' >"+
      "<div class='card card-body text-dark'> "+ mcq_ans +"</div>"+
     "</div>"+
  "</div>"+
 "</div>";
 }
// data loaded for popular school cq temp..
function each_chapter_sch_cq(data_cq_ques_id, i, b_each_c_ques_udd, cq_b_e_c, chap_no){
  // make sure data y/n >9..
  let chap_n_tk = "";
  let ques_n_tk = "";
  if(chap_no>9){
    chap_n_tk = 1;
    if(i<=9){
      ques_n_tk = 0;
    }else{
      ques_n_tk = 1;
    }
  }
  else if(i>9){
    ques_n_tk = 1;
    if(chap_no<=9){
      chap_n_tk = 0;
    }else{
      chap_n_tk = 1;
    }
  }
  else{
    chap_n_tk = 0;
    ques_n_tk = 0;
  }

  document.getElementById(data_cq_ques_id).innerHTML += " <div class='col-sm-6'>"+
    "<div class='cq_question_wrap border border-1 p-1 mt-4'>"+
    " <div class='cq_hints text-dark bg-white'>"+
    " <span class='p-1 bg-dark text-info rounded m-1'>"+ (i+1) +"</span>"+ b_each_c_ques_udd +""+
    "</div>"+
    "<div class='cq_ques text-dark mt-4'>"+
    "<p>ক. "+ cq_b_e_c[0] +"</p>"+
    "<p>খ."+ cq_b_e_c[1] +"</p>"+
    "<p>গ."+ cq_b_e_c[2] +"</p>"+
    "<p>ঘ. "+ cq_b_e_c[3] +"</p>"+
   " </div>"+
   "<div class='action_btn py-3 pl-2'> "+  
   "<button class='btn btn-success btn-sm' type='button' data-bs-toggle='modal' data-bs-target='.cq_video_modal'>ভিডিও</button> " +
   "<button class='btn btn-danger btn-sm'  type='button' data-bs-toggle='modal' data-bs-target='.cq_answer_modal' id='"+chap_no+i+chap_n_tk+ques_n_tk+"' onclick='school_cq_a_pro(this.id)'>উত্তর</button>"+   
   "</div>"+ 
   "</div>"+
   "</div> ";
      
}


 function each_chap_data_load(topi_data, topics_exp){

  document.getElementById("eachChapTopi").innerHTML += "<li class='text-dark list-unstyled'><a class='text-dark lead' href='#'># "+ topi_data +"</a></li>";
  document.getElementById("eachChapTopiExp").innerHTML +="<h4 class='h4 text-dark mt-3'># "+ topi_data +"</h4>"+
  " <p class='lead'>"+ topics_exp +" </p>";
 }
// 
 function math_cat_expla(i, cat_name, cat_que_examp, cat_que_ans, math_prob){

  document.getElementById("prob_expla_id").innerHTML +="  <h5 class='p-3 bg-light mt-3'>Type "+ (i+1) +": "+ cat_name +"</h5>"+
  

  "<p class='lead'>Problem : "+ cat_que_examp +" ?</p>"+
  "<p class ='lead'> solution: "+ cat_que_ans +" </p>"+
  
  "<i>some problems :</i><br>"+
  "<div class='problem_cls'>"+
  "</div>";
  for(let j=0; j<math_prob.length; j++){
    document.getElementsByClassName("problem_cls")[i].innerHTML +="<i>"+ (j+1) +". "+ math_prob[j] +"</i><br>";
  } 

 }

 // board each chapter question ...
 function each_chapter_borad_cq(data_cq_ques_id, i, b_each_c_ques_udd, cq_b_e_c, chap_no){
  // make sure data y/n >9..
  let chap_n_tk = "";
  let ques_n_tk = "";
  if(chap_no>9){
    chap_n_tk = 1;
    if(i<=9){
      ques_n_tk = 0;
    }else{
      ques_n_tk = 1;
    }
  }
  else if(i>9){
    ques_n_tk = 1;
    if(chap_no<=9){
      chap_n_tk = 0;
    }else{
      chap_n_tk = 1;
    }
  }
  else{
    chap_n_tk = 0;
    ques_n_tk = 0;
  }

  document.getElementById(data_cq_ques_id).innerHTML += " <div class='col-sm-6'>"+
    "<div class='cq_question_wrap border border-1 p-1 mt-4'>"+
    " <div class='cq_hints text-dark bg-white'>"+
    " <span class='p-1 bg-dark text-info rounded m-1'>"+ (i+1) +"</span>"+ b_each_c_ques_udd +""+
    "</div>"+
    "<div class='cq_ques text-dark mt-4'>"+
    "<p>ক. "+ cq_b_e_c[0] +"</p>"+
    "<p>খ."+ cq_b_e_c[1] +"</p>"+
    "<p>গ."+ cq_b_e_c[2] +"</p>"+
    "<p>ঘ. "+ cq_b_e_c[3] +"</p>"+
   " </div>"+
   "<div class='action_btn py-3 pl-2'> "+  
   "<button class='btn btn-success btn-sm' type='button' data-bs-toggle='modal' data-bs-target='.cq_video_modal'>ভিডিও</button> " +
   "<button class='btn btn-danger btn-sm'  type='button' data-bs-toggle='modal' data-bs-target='.cq_answer_modal' id='"+chap_no+i+chap_n_tk+ques_n_tk+"' onclick='each_bord_cq_ans_p(this.id)'>উত্তর</button>"+   
   "</div>"+ 
   "</div>"+
   "</div> ";
      
}
// each chapter board answer ..
function each_bord_cq_ans_p(id){
  each_clk_pl();
  let chap_ov_9_tk = id.slice(-2, -1);
  let ques_ov_9_tk = id.slice(-1);
  // variable diclare..
  let chap_n = "";
  let ques_n = "";
  if(chap_ov_9_tk == 1){
    chap_n = id.slice(0, 2);
    if(ques_ov_9_tk == 1){
      ques_n = id.slice(2, 4);
    }else{
      ques_n = id.slice(2, 3);
    }
  }
  else if(ques_ov_9_tk == 1){
    ques_n = id.slice(2, 4);
    if(chap_ov_9_tk == 1){
      chap_n = id.slice(0, 2);
    }else{
      chap_n = id.slice(0, 1);
    }
  }
  else{
    chap_n = id.slice(0, 1);
    ques_n = id.slice(1, 2);
  }

  // school question answer find out..
  // 1st question find..
  let ea_b_q_uddi = each_chap_data[chap_n].board_que_exp[1].board_cq[ques_n].cq_uddipak;
  let ea_b_q_l =  each_chap_data[chap_n].board_que_exp[1].board_cq[ques_n].cq_ques.length;
  let ea_b_q_arr = [];
  for(let i=0; i<ea_b_q_l; i++){
    ea_b_q_arr.push(each_chap_data[chap_n].board_que_exp[1].board_cq[ques_n].cq_ques[i]);
  }
  // question answer find out..
  let ea_b_ans_arr = [];
  let ea_ans_l = each_chap_data[chap_n].board_que_exp[1].board_cq[ques_n].cq_ques_ans.length;
  for(let i=0; i<ea_ans_l; i++){
    ea_b_ans_arr.push(each_chap_data[chap_n].board_que_exp[1].board_cq[ques_n].cq_ques_ans[i]);
  }
  // call function school data load..
  mo_test_ans_dy(ques_n, ea_b_q_uddi, ea_b_q_arr, ea_b_ans_arr); // it's child function..
}
// school data process show answer..
function school_cq_a_pro(id){
  each_clk_pl();
  let chap_ov_9_tk = id.slice(-2, -1);
  let ques_ov_9_tk = id.slice(-1);
  // variable diclare..
  let chap_n = "";
  let ques_n = "";
  if(chap_ov_9_tk == 1){
    chap_n = id.slice(0, 2);
    if(ques_ov_9_tk == 1){
      ques_n = id.slice(2, 4);
    }else{
      ques_n = id.slice(2, 3);
    }
  }
  else if(ques_ov_9_tk == 1){
    ques_n = id.slice(2, 4);
    if(chap_ov_9_tk == 1){
      chap_n = id.slice(0, 2);
    }else{
      chap_n = id.slice(0, 1);
    }
  }
  else{
    chap_n = id.slice(0, 1);
    ques_n = id.slice(1, 2);
  }
  // school question answer find out..
  // 1st question find..
  let sc_q_uddi = each_chap_data[chap_n].school_que_exp[1].school_cq[ques_n].cq_uddipak;
  let sc_q_l =  each_chap_data[chap_n].school_que_exp[1].school_cq[ques_n].cq_ques.length;
  let sc_q_arr = [];
  for(let i=0; i<sc_q_l; i++){
    sc_q_arr.push(each_chap_data[chap_n].school_que_exp[1].school_cq[ques_n].cq_ques[i]);
  }
  // question answer find out..
  let sc_ans_arr = [];
  let sc_ans_l = each_chap_data[chap_n].school_que_exp[1].school_cq[ques_n].cq_ques_ans.length;
  for(let i=0; i<sc_ans_l; i++){
    sc_ans_arr.push(each_chap_data[chap_n].school_que_exp[1].school_cq[ques_n].cq_ques_ans[i]);
  }
  // call function school data load..
  mo_test_ans_dy(ques_n, sc_q_uddi, sc_q_arr, sc_ans_arr); // it's child function..
}
  /////////////////===============  Model test  =================//////////////////

  // data processing from js object..
  function model_test_proc(model_q_set){

    // find mcq from data array..
    let model_mcq_len = model_data[model_q_set].model_mcq.length;
    for(let i=0; i<model_mcq_len; i++){
      let model_mcq_opt_arra = [];
      let m_mcq_op_arr =  model_data[model_q_set].model_mcq[i].mcq_opt.length;
      for(let j=0; j<m_mcq_op_arr; j++){
        model_mcq_opt_arra.push(model_data[model_q_set].model_mcq[i].mcq_opt[j]);
      }
      let m_mcq_ques = model_data[model_q_set].model_mcq[i].mcq_ques;
      let m_mcq_a =  model_data[model_q_set].model_mcq[i].mcq_ans;

      // mcq load..
      let push_id_mcq = "modelMcq";
      starcture_mcq_frame_model(push_id_mcq, i, m_mcq_ques, model_mcq_opt_arra, m_mcq_a);
    }

    // cq question find out
    let model_cq_len =  model_data[model_q_set].model_cq.length;

    for(let i=0; i<model_cq_len; i++){
      let m_cq_q_arr = [];
      let m_cq_q_l = model_data[model_q_set].model_cq[i].cq_ques.length;
      for(let j=0; j<m_cq_q_l; j++){
        m_cq_q_arr.push(model_data[model_q_set].model_cq[i].cq_ques[j]);
      }
      let m_cq_uddi = model_data[model_q_set].model_cq[i].cq_uddi;

      // cq ques load..
      let data_cq_ques_id = "modelCq";
      model_cq(data_cq_ques_id, i, m_cq_uddi, m_cq_q_arr,model_q_set);

    }
  }





  // send request..
  function modelTest(id){
    each_clk_pl();
    // remove offcanvas ....
    offcanvasRemove();

    rem_exist_data_load(); // from each chapter.. 
    // display none all board question..
    document.getElementById("content").classList.add("d-none"); // remove all board question..
    document.getElementById("eachChapExp").classList.add("d-none"); // remove all board question..
    document.getElementById("modelTest").classList.add("d-none"); // remove model test ..
    // display block ...
    document.getElementById("modelTest").classList.remove("d-none");

    // set index for clicked each btn..
    let model_q_set = "";

    if(id=="model_1"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১";
      model_q_set = 0;
      model_test_proc(model_q_set);
    }
    else if(id=="model_2"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ২";

      model_q_set = 1;
      model_test_proc(model_q_set);
    }
    else if(id=="model_3"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ৩";

      model_q_set = 2;
      model_test_proc(model_q_set);
    }
    else if(id=="model_4"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ৪";

      model_q_set = 3;
      model_test_proc(model_q_set);
    }
    else if(id=="model_5"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ৫";

      model_q_set = 4;
      model_test_proc(model_q_set);
    }
    else if(id=="model_6"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ৬";

      model_q_set = 5;
      model_test_proc(model_q_set);
    }
    else if(id=="model_7"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ৭";

      model_q_set = 6;
      model_test_proc(model_q_set);
    }
    else if(id=="model_8"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ৮";

      model_q_set = 7;
      model_test_proc(model_q_set);
    }
    else if(id=="model_9"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ৯";

      model_q_set = 8;
      model_test_proc(model_q_set);
    }
    else if(id=="model_10"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১০";

      model_q_set = 9;
      model_test_proc(model_q_set);
    }
    else if(id=="model_11"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১১";

      model_q_set = 10;
      model_test_proc(model_q_set);
    }
    else if(id=="model_12"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১২";

      model_q_set = 11;
      model_test_proc(model_q_set);
    }
    else if(id=="model_13"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১৩";

      model_q_set = 12;
      model_test_proc(model_q_set);
    }
    else if(id=="model_14"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১৪";

      model_q_set = 13;
      model_test_proc(model_q_set);
    }
    else if(id=="model_15"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১৫";

      model_q_set = 14;
      model_test_proc(model_q_set);
    }
    else if(id=="model_16"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১৬";

      model_q_set = 15;
      model_test_proc(model_q_set);
    }
    else if(id=="model_17"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১৭";

      model_q_set = 16;
      model_test_proc(model_q_set);
    }
    else if(id=="model_18"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১৮";

      model_q_set = 17;
      model_test_proc(model_q_set);
    }
    else if(id=="model_19"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ১৯";

      model_q_set = 18;
      model_test_proc(model_q_set);
    }
    else if(id=="model_20"){
      document.getElementById("eachModelHeader").innerHTML = "মডেল টেস্ট ২০";

      model_q_set = 19;
      model_test_proc(model_q_set);
    }
  }
  // show answer processing..
  function model_ans_p(id){
    each_clk_pl();
    let chap_ov_9_tk = id.slice(-2, -1);
    let ques_ov_9_tk = id.slice(-1);
    // variable diclare..
    let chap_n = "";
    let ques_n = "";
    if(chap_ov_9_tk == 1){
      chap_n = id.slice(0, 2);
      if(ques_ov_9_tk == 1){
        ques_n = id.slice(2, 4);
      }else{
        ques_n = id.slice(2, 3);
      }
    }
    else if(ques_ov_9_tk == 1){
      ques_n = id.slice(2, 4);
      if(chap_ov_9_tk == 1){
        chap_n = id.slice(0, 2);
      }else{
        chap_n = id.slice(0, 1);
      }
    }
    else{
      chap_n = id.slice(0, 1);
      ques_n = id.slice(1, 2);
    }


        // cq question find out
        let m_cq_uddi = model_data[chap_n].model_cq[ques_n].cq_uddi;
        let m_cq_q_l = model_data[chap_n].model_cq[ques_n].cq_ques.length;
        
          let m_cq_q_arr = [];
          for(let j=0; j<m_cq_q_l; j++){
            m_cq_q_arr.push(model_data[chap_n].model_cq[ques_n].cq_ques[j]);
          }
          // answer find out..
          let m_ans_arr = [];
          let m_ans_l = model_data[chap_n].model_cq[ques_n].cq_ans.length;
          for(let i=0; i<m_ans_l; i++){
            m_ans_arr.push( model_data[chap_n].model_cq[ques_n].cq_ans[i]);
          }
          mo_test_ans_dy(ques_n, m_cq_uddi, m_cq_q_arr, m_ans_arr); // child function..

  }
// show answer in modal..
function mo_test_ans_dy(model_ques_i, m_cq_uddi, m_cq_q_arr, m_ans_arr){ // it's parent function..
    document.getElementById("madal_answer_view").innerHTML = "";
    document.getElementById("madal_answer_view").innerHTML += "<div class='row'>"+
    " <div class='col-sm-6'>"+
    "<div class='cq_question_wrap border border-1 p-1 mt-4'>"+
    " <div class='cq_hints text-dark bg-white'>"+
    " <span class='p-1 bg-dark text-info rounded'>"+ (parseInt(model_ques_i)+1) +"</span>"+ m_cq_uddi +""+
    "</div>"+
    "<div class='cq_ques text-dark mt-4'>"+
    "<p>ক. "+ m_cq_q_arr[0] +"</p>"+
    "<p>খ. "+ m_cq_q_arr[1] +"</p>"+
    "<p>গ. "+ m_cq_q_arr[2] +"</p>"+
    "<p>ঘ. "+ m_cq_q_arr[3] +"</p>"+
  " </div>"+
  "</div>"+
  "</div> "+
  " <div class='col-sm-6 mt-5'>"+
  "<div class='cq_ans text-dark my-2'><span class='m-1 quesNum text-white p-1 rounded bg-darkC'>ক. উত্তর  </span>"+ m_ans_arr[0] +"</div>"+
  " <div class=cq_ans text-dark my-2'><span class='m-1 quesNum text-white p-1 rounded bg-darkC'>খ. উত্তর </span>"+ m_ans_arr[1] +"</div>"+
  " <div class='cq_ans text-dark my-2'><span class='m-1 quesNum text-white p-1 rounded bg-darkC'>গ. উত্তর  </span>"+ m_ans_arr[2] +"</div>"+
  " <div class='cq_ans text-dark my-2'><span class='m-1 quesNum text-white p-1 rounded bg-darkC'>ঘ. উত্তর  </span>"+ m_ans_arr[3] +"</div>"+
  "</div>"+
  "</div>";

}


  // data indexing into html template..

  // mcq ...
  function starcture_mcq_frame_model(push_id_mcq, i, mcq_ques, opt_arary, mcq_ans){
    // alert('ami mcq frame a dhukeci :'+opt_arary +"id :"+push_id_mcq );
   
     document.getElementById(push_id_mcq).innerHTML += " <div class='col-sm-6'>"+
     "<div class='eachQuesWrap'>"+
      " <div id='dynamicMcqBA_g'></div>"+
      " <p class='text-dark mt-3'>"+
         "<span class='p-1 bg-dark text-white m-1 rounded'>"+ (i+1) +".</span>" +mcq_ques+ ""+
      " </p>"+
      " <div class='row'>"+
       "  <div class='col-6'>"+
          " <p class='text-dark optionText'>"+
             "<span class='option'>ক</span>"+ opt_arary[0] +""+
          "</p>"+
        " </div>"+
        " <div class='col-6'>"+
          " <p class='text-dark optionText'>"+
           "<span class='option'>খ</span>"+ opt_arary[1] +""+
           "</p>"+
        " </div>"+
         "<div class='col-6'>"+
          " <p class='text-dark optionText'>"+
             "<span class='option'>গ</span>"+ opt_arary[2] +""+
          "</p>"+
         "</div>"+
         "<div class='col-6'>"+
          " <p class='text-dark optionText'>"+
            "<span class='option'>ঘ</span>"+ opt_arary[3] +""+
           "</p>"+
        "</div>"+
     " </div>"+
      " <p>"+
       " <a class='btn btn-primary' data-bs-toggle='collapse' href='#popula_mcq_"+ i +"' role='button' aria-expanded='false' aria-controls='collapseExample'> উত্তর </a>"+
      "</p>"+
      "<div id='popula_mcq_"+ i +"' class='collapse ' >"+
        "<div class='card card-body text-dark'> "+ mcq_ans +"</div>"+
       "</div>"+
    "</div>"+
   "</div>";
   }
  // cq ques..
  function model_cq(data_cq_ques_id, i, b_each_c_ques_udd, cq_b_e_c,model_q_set){

      // make sure data y/n >9..
    let chap_n_tk = "";
    let ques_n_tk = "";
    if(model_q_set>9){
      chap_n_tk = 1;
      if(i<=9){
        ques_n_tk = 0;
      }else{
        ques_n_tk = 1;
      }
    }
    else if(i>9){
      ques_n_tk = 1;
      if(model_q_set<=9){
        chap_n_tk = 0;
      }else{
        chap_n_tk = 1;
      }
    }
    else{
      chap_n_tk = 0;
      ques_n_tk = 0;
    }

    document.getElementById(data_cq_ques_id).innerHTML += " <div class='col-sm-6'>"+
      "<div class='cq_question_wrap border border-1 p-1 mt-4'>"+
      " <div class='cq_hints text-dark bg-white'>"+
      " <span class='p-1 bg-dark text-info rounded m-1'>"+ (i+1) +"</span>"+ b_each_c_ques_udd +""+
      "</div>"+
      "<div class='cq_ques text-dark mt-4'>"+
      "<p>ক. "+ cq_b_e_c[0] +"</p>"+
      "<p>খ."+ cq_b_e_c[1] +"</p>"+
      "<p>গ."+ cq_b_e_c[2] +"</p>"+
      "<p>ঘ. "+ cq_b_e_c[3] +"</p>"+
     " </div>"+
     "<div class='action_btn py-3 pl-2'> "+  
     "<button class='btn btn-success btn-sm' type='button' data-bs-toggle='modal' data-bs-target='.cq_video_modal'>ভিডিও</button> " +
     "<button class='btn btn-danger btn-sm'  type='button' data-bs-toggle='modal' data-bs-target='.cq_answer_modal' id='"+model_q_set+i+chap_n_tk+ques_n_tk+"' onclick='model_ans_p(this.id)'>উত্তর</button>"+   
     "</div>"+ 
     "</div>"+
     "</div> ";
        
  }


  // each section preloader...
  function each_clk_pl(){
    document.getElementById("btcClkLoader").classList.remove("d-none");
    document.getElementById("body").classList.add("overflow-hidden");

    const myTimeout = setTimeout(myGreeting, 1200);
    function myGreeting() {

      document.getElementById("btcClkLoader").classList.add("d-none");
      document.getElementById("body").classList.remove("overflow-hidden");
      clearTimeout(myTimeout);
    }
  }