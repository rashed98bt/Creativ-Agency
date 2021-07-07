
//creat array of colors and save in array color
const array_color= document.querySelectorAll('.setting-box .setting-container .stttig-colors li');
//using the foeeach to get the elemint and to the functin loop all item
array_color.forEach(
    //loop for the click item 
    li=>{
            li.addEventListener('click',(e)=>
            {
              //e.target.classList.toggle('.cc'); 
              console.log( e.target.dataset.color); 
              //set color to the root
              document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
                //to add class to one li we need to remove the first class and then add it
                //use the parent to ul to remove 
                e.target.parentElement.querySelectorAll('.colors li').forEach
                (
                    elmint=>{
                        elmint.classList.remove('active-opcity');//we dont put . operetor in remove becouse we use classList
                    }
                )
                        e.target.classList.add('active-opcity');
            })
    }
)

/// nackgroud stop or start

const back_img = document.querySelectorAll('.setting-box .setting-background button');
change_background('yes');
back_img.forEach(
    
    but=>{
        but.addEventListener('click',(x)=>{
            console.log( x.target.dataset.anser);
            change_background(x.target.dataset.anser);

            x.target.parentElement.querySelectorAll('.setting-box .setting-background button').forEach(
                elmint=>{
                    elmint.classList.remove('active');
                }
            )
            x.target.classList.add('active');
        })
    }
)




// this function to opine the setting bar and close it
//start fun
let test=true;
function open(){
    if(test){
        document.querySelector('.setting-box').style.left='0px';
        return  test=false;
    }
    else{
        document.querySelector('.setting-box').style.left='-250px';
        return test= true;
    }
}
//end fun

// start setting box 
document.querySelector('.setting-box .toogle i').onclick=function(){
         
    this.classList.toggle('fa-spin');//add class for fownt awsem
    open();//call function open
    }
//setting box end

// start background 

var background =document.querySelector(".landing-page");
var interv;
function change_background( answer){

        if(answer=='yes'){

               interv= setInterval(function()
                {
                    var rand = Math.floor(Math.random()*4+1);
                    background.style.backgroundImage="url('imgs/p"+rand+".jpg')"; 
                    //start();
                    console.log(rand);
                    
                }
         , 6000);
         return answer='yes';
        }

         else{
            clearInterval(interv);
            return answer='no';
         }
}

//end bacground


    // var divs =document.querySelector('.t');
    //     function start(){
    //         console.log('helllow')
    //     for(var i=0; i< divs.length; i++)
    //     {

    //         divs.style.width='100%';
    //     }}
    


//start skills 
const skill_rate=document.querySelectorAll('.container-skills .skills-box .skills-rate span');
$(window).scroll
(function()
{
   
    var windo_size=$(this).scrollTop();
    //console.log(windo_size);
    if(windo_size>950 && windo_size<2000)
    {
       skill_rate.forEach(elemint=>{

            elemint.style.width=elemint.dataset.rate;
       })
        
    }
    else
    {
       skill_rate.forEach(elemint=>{

            elemint.style.width=0;
       })
        
    }
}
);



//poupup menu creation

const galary_array= document.querySelectorAll('.galary .galary-box img');

galary_array.forEach(
    img=>{
        img.addEventListener('click',(e)=>{
            
            //first setp

            // creat eliment for poup up menu
            let overlay_box = document.createElement('div');
            // creat class for eliment
            overlay_box.className = 'overlay-box';
            // append div for body 
            document.body.appendChild(overlay_box);

            //secound  setp
            // creat poup up dive have the img 
            let popup_box  = document.createElement('div');
            // creat class 
            popup_box.className = 'popup-div';
            // append div for overaly
            overlay_box.appendChild(popup_box);

            // therd step 
            //creat eliment img 
            let img_popup = document.createElement('img');
            img_popup.src=e.target.src;
            //add img to div
            popup_box.appendChild(img_popup);


            // creat close 
            let close_but = document.createElement('img');
            close_but.src='./imgs/close.jpg';
            close_but.className = 'colse-but';
            popup_box.appendChild(close_but);

            

        })
        }
);
// we use document. event becouse the eliment is create on run time and he is not in the html tag 

document.addEventListener('click',function(e){
    if(e.target.className == 'colse-but')
    {
        console.log('asda');
        document.querySelector('.overlay-box').remove();
    }
});

//toogle animation
let toogle_items = document.querySelectorAll('.toogle-box .toogle');

toogle_items.forEach(item=>{
    item.addEventListener('click',(e)=>{
        console.log('asdasd');
    })
})